import type { EssayCategoryKey } from "./config";

/** Distinctive editorial introduction for each essay category, in both languages. */
export const essayCategoryIntros: Record<EssayCategoryKey, { en: string; es: string }> = {
  economics: {
    en: "Essays on how markets, cities and institutions actually behave — economic reasoning applied to concrete, observable arrangements rather than to abstract models alone.",
    es: "Ensayos sobre cómo se comportan realmente los mercados, las ciudades y las instituciones: razonamiento económico aplicado a arreglos concretos y observables, no solo a modelos abstractos.",
  },
  econometrics: {
    en: "Notes on measurement: how time series, panels and restrained statistical method let economic claims be tested rather than merely asserted.",
    es: "Notas sobre la medición: cómo las series temporales, los paneles de datos y un método estadístico contenido permiten someter a prueba las afirmaciones económicas en lugar de limitarse a enunciarlas.",
  },
  "finance-valuation": {
    en: "Writing on financial statements, corporate decisions and the discipline of valuation — the practical machinery that connects theory to price.",
    es: "Textos sobre estados financieros, decisiones corporativas y la disciplina de la valoración: la maquinaria práctica que conecta la teoría con el precio.",
  },
  "monetary-economics": {
    en: "On central banks, currency and the yield curve — how monetary institutions set the terms on which the rest of the financial system prices risk and time.",
    es: "Sobre bancos centrales, moneda y la curva de tipos: cómo las instituciones monetarias fijan las condiciones en que el resto del sistema financiero valora el riesgo y el tiempo.",
  },
  "political-economy": {
    en: "Essays situated at the border of economics and politics — public institutions, historical episodes, and the incentives that shape collective decisions.",
    es: "Ensayos situados en la frontera entre la economía y la política: instituciones públicas, episodios históricos y los incentivos que determinan las decisiones colectivas.",
  },
  philosophy: {
    en: "Longer, slower essays on autonomy, fallibility and the character of a well-lived intellectual life, informed by the history of ideas.",
    es: "Ensayos más extensos y pausados sobre la autonomía, la falibilidad y el carácter de una vida intelectual bien vivida, con la historia de las ideas como trasfondo.",
  },
  "legal-philosophy": {
    en: "On the foundations of law: personality, rights and the presuppositions that legal systems rely on but rarely make explicit.",
    es: "Sobre los fundamentos del derecho: la personalidad, los derechos y los presupuestos en los que se apoyan los sistemas jurídicos sin hacerlos explícitos casi nunca.",
  },
};
