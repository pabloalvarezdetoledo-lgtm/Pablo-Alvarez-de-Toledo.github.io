export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

/**
 * Section slugs per locale. `key` is the stable internal identifier used in
 * content frontmatter and internal links; `en`/`es` are the URL segments.
 */
export const sectionSlugs = {
  research: { en: "research", es: "investigacion" },
  portfolio: { en: "portfolio", es: "portfolio" },
  essays: { en: "essays", es: "ensayos" },
  classes: { en: "classes", es: "clases" },
  about: { en: "about", es: "sobre-mi" },
  cv: { en: "cv", es: "cv" },
  contact: { en: "contact", es: "contacto" },
} as const;

export type SectionKey = keyof typeof sectionSlugs;

export const essayCategorySlugs = {
  economics: { en: "economics", es: "economia" },
  econometrics: { en: "econometrics", es: "econometria" },
  "finance-valuation": { en: "finance-valuation", es: "finanzas-y-valoracion" },
  "monetary-economics": { en: "monetary-economics", es: "economia-monetaria" },
  "political-economy": { en: "political-economy", es: "economia-politica" },
  philosophy: { en: "philosophy", es: "filosofia" },
  "legal-philosophy": { en: "legal-philosophy", es: "filosofia-del-derecho" },
} as const;

export type EssayCategoryKey = keyof typeof essayCategorySlugs;

/** Build a localised path for a top-level section, e.g. path("research", "es") -> "/es/investigacion/" */
export function sectionPath(section: SectionKey, locale: Locale): string {
  return `/${locale}/${sectionSlugs[section][locale]}/`;
}

export function essayCategoryPath(category: EssayCategoryKey, locale: Locale): string {
  return `/${locale}/${sectionSlugs.essays[locale]}/${essayCategorySlugs[category][locale]}/`;
}

/** Swap the locale segment of a path while preserving the rest, when a mapped equivalent exists. */
export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}
