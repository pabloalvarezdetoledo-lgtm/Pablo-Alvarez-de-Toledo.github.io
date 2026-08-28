import type { Locale } from "@/i18n/config";

/**
 * Portfolio entries don't have a `category` enum (unlike research/essays),
 * so their cover art is derived from `tags` instead: a small sector
 * taxonomy picks an accent colour and a minimal line-icon, and every cover
 * gets a deterministic "price chart" sparkline generated from the entry's
 * own title, so each one is visually distinct without needing a photo.
 */
export type SectorKey = "banking" | "energy" | "aerospace-defense" | "consumer" | "technology" | "general";

export const sectorThemes: Record<SectorKey, { en: string; es: string; accent: string; accentSoft: string }> = {
  banking: { en: "Banking", es: "Banca", accent: "#2E2A54", accentSoft: "#E5E3EF" },
  energy: { en: "Energy", es: "Energía", accent: "#1F3D2E", accentSoft: "#E2E9E2" },
  "aerospace-defense": { en: "Aerospace & Defense", es: "Aeroespacial y Defensa", accent: "#37546B", accentSoft: "#E4EBEF" },
  consumer: { en: "Consumer", es: "Consumo", accent: "#7A2E33", accentSoft: "#F1E4E1" },
  technology: { en: "Technology", es: "Tecnología", accent: "#5A3B6B", accentSoft: "#EAE3EF" },
  general: { en: "Equity Research", es: "Análisis de Renta Variable", accent: "#142033", accentSoft: "#efe9db" },
};

const sectorByTag: Array<[RegExp, SectorKey]> = [
  [/bank/i, "banking"],
  [/energy|commodit/i, "energy"],
  [/aerospace|defense|defensa/i, "aerospace-defense"],
  [/consumer|restaurant/i, "consumer"],
  [/tech|semiconductor|software|social media/i, "technology"],
];

export function sectorForTags(tags: string[]): SectorKey {
  for (const [pattern, sector] of sectorByTag) {
    if (tags.some((tag) => pattern.test(tag))) return sector;
  }
  return "general";
}

export function sectorLabel(sector: SectorKey, locale: Locale): string {
  return sectorThemes[sector][locale];
}

/** Small deterministic PRNG (mulberry32) seeded from a string hash, so the same title always produces the same chart. */
function seededRandom(seed: string): () => number {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  let a = h >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Generates a deterministic "price chart" polyline (points string) for the given seed, normalised to width x height. */
export function sparklinePoints(seed: string, width: number, height: number, steps = 22): string {
  const rand = seededRandom(seed);
  const values: number[] = [0.5];
  for (let i = 1; i < steps; i++) {
    const drift = (rand() - 0.46) * 0.22;
    const next = Math.min(0.95, Math.max(0.08, values[i - 1] + drift));
    values.push(next);
  }
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  return values
    .map((v, i) => {
      const x = (i / (steps - 1)) * width;
      const y = height - ((v - min) / range) * height * 0.82 - height * 0.09;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}
