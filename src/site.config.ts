/**
 * Central configuration: personal information, links, contact details and
 * temporary/editable copy. Edit this file to update anything that appears
 * sitewide. See README.md § "Editing personal information" for a guided tour.
 */

export const person = {
  name: "Pablo Álvarez de Toledo",
  monogram: "PAT",
  // TODO(pablo): confirm final professional email to publish.
  email: "pablo@example.com",
  // TODO(pablo): replace with real profile URLs once available.
  linkedin: "https://www.linkedin.com/in/PLACEHOLDER-linkedin/",
  github: "https://github.com/PLACEHOLDER-github",
  // Path to the CV file. Drop the real PDF at public/files/cv/ and update this.
  cvPath: "/files/cv/pablo-alvarez-de-toledo-cv.pdf",
  location: "Madrid, Spain",
};

/**
 * Homepage headline and supporting statement, in both languages.
 * EXPLICITLY TEMPORARY: Pablo has not yet supplied a final version.
 * Replace both entries together so EN/ES stay in sync.
 */
export const heroCopy = {
  en: {
    headline: "Economics, International Finance and Applied Research",
    statement:
      "I study how monetary institutions, financial markets and corporate decisions shape asset valuation, combining economic theory, financial analysis and quantitative methods.",
    isDraft: true,
  },
  es: {
    headline: "Economía, Finanzas Internacionales e Investigación Aplicada",
    statement:
      "Estudio cómo las instituciones monetarias, los mercados financieros y las decisiones corporativas determinan la valoración de activos, combinando teoría económica, análisis financiero y métodos cuantitativos.",
    isDraft: true,
  },
};

/**
 * About-page biographical placeholders. All marked as editable drafts.
 */
export const bio = {
  en: {
    education: [
      {
        title: "Economics and International Business",
        detail:
          "TODO(pablo): add institution name, years attended and any distinctions you would like listed.",
      },
      {
        title: "Financial training, IEB (Instituto de Estudios Bursátiles)",
        detail:
          "TODO(pablo): add programme name, years attended and principal subjects covered.",
      },
    ],
    experience: [
      {
        title: "BBVA",
        detail:
          "TODO(pablo): add role, team, dates and a brief, non-confidential description of your responsibilities.",
      },
    ],
  },
  es: {
    education: [
      {
        title: "Economía y Negocios Internacionales",
        detail:
          "TODO(pablo): añade la institución, los años cursados y las menciones que quieras incluir.",
      },
      {
        title: "Formación financiera, IEB (Instituto de Estudios Bursátiles)",
        detail:
          "TODO(pablo): añade el nombre del programa, los años cursados y las materias principales.",
      },
    ],
    experience: [
      {
        title: "BBVA",
        detail:
          "TODO(pablo): añade el puesto, el equipo, las fechas y una descripción breve y no confidencial de tus responsabilidades.",
      },
    ],
  },
};

/**
 * Category accent themes shared across Research and Essays. Defined once
 * here so colours and labels are never duplicated across components.
 */
export type CategoryKey =
  | "monetary-economics"
  | "asset-pricing"
  | "corporate-finance"
  | "quantitative-finance"
  | "econometrics"
  | "political-economy"
  | "legal-philosophy"
  | "economics"
  | "finance-valuation"
  | "philosophy";

export const categoryThemes: Record<
  CategoryKey,
  {
    en: string;
    es: string;
    accent: string;
    accentSoft: string;
    motif: string;
  }
> = {
  economics: {
    en: "Economics",
    es: "Economía",
    accent: "#7A2E33",
    accentSoft: "#F1E4E1",
    motif: "markets, cities and economic institutions",
  },
  econometrics: {
    en: "Econometrics",
    es: "Econometría",
    accent: "#37546B",
    accentSoft: "#E4EBEF",
    motif: "grids, time series and restrained data visualisation",
  },
  "finance-valuation": {
    en: "Finance and Valuation",
    es: "Finanzas y Valoración",
    accent: "#1F3D2E",
    accentSoft: "#E2E9E2",
    motif: "financial statements and corporate architectural detail",
  },
  "monetary-economics": {
    en: "Monetary Economics",
    es: "Economía Monetaria",
    accent: "#2E2A54",
    accentSoft: "#E5E3EF",
    motif: "central banks, currency and yield-curve motifs",
  },
  "political-economy": {
    en: "Political Economy",
    es: "Economía Política",
    accent: "#5C5A2E",
    accentSoft: "#EDECDF",
    motif: "maps, public institutions and historical documents",
  },
  philosophy: {
    en: "Philosophy",
    es: "Filosofía",
    accent: "#5A4632",
    accentSoft: "#EDE6DA",
    motif: "books, archives and classical architectural detail",
  },
  "legal-philosophy": {
    en: "Legal Philosophy",
    es: "Filosofía del Derecho",
    accent: "#7A3B2E",
    accentSoft: "#F1E5E0",
    motif: "manuscripts, legal texts and institutional architecture",
  },
  "asset-pricing": {
    en: "Asset Pricing",
    es: "Valoración de Activos",
    accent: "#2E2A54",
    accentSoft: "#E5E3EF",
    motif: "yield curves and discounted cash flows",
  },
  "corporate-finance": {
    en: "Corporate Finance",
    es: "Finanzas Corporativas",
    accent: "#1F3D2E",
    accentSoft: "#E2E9E2",
    motif: "capital structure and corporate strategy",
  },
  "quantitative-finance": {
    en: "Quantitative Finance",
    es: "Finanzas Cuantitativas",
    accent: "#37546B",
    accentSoft: "#E4EBEF",
    motif: "models, matrices and statistical inference",
  },
};

export const siteDefaults = {
  titleSuffix: "Pablo Álvarez de Toledo",
  // TODO(pablo): replace with a real 1200x630 PNG/JPG portrait or editorial
  // image for richer social-share previews; SVG has inconsistent support on
  // some social platforms. See README.md "Social sharing images".
  defaultOgImage: "/og/default.svg",
};
