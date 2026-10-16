/**
 * Central configuration: personal information, links, contact details and
 * temporary/editable copy. Edit this file to update anything that appears
 * sitewide. See README.md § "Editing personal information" for a guided tour.
 */

export const person = {
  name: "Pablo Álvarez de Toledo",
  monogram: "PAT",
  email: "pabloalvarezdetoledo@gmail.com",
  linkedin: "https://www.linkedin.com/in/pablo-alvarez-de-toledo",
  github: "https://github.com/pabloalvarezdetoledo-lgtm",
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
    headline: "Finance, Economics and Philosophy",
    statement:
      "I work on how monetary institutions, financial markets and corporate decisions shape asset valuation, and I am writing a book that sets out a system of thought on the person, knowledge and the limits of political power.",
    isDraft: true,
  },
  es: {
    headline: "Finanzas, Economía y Filosofía",
    statement:
      "Trabajo sobre cómo las instituciones monetarias, los mercados financieros y las decisiones corporativas determinan la valoración de activos, y escribo un libro que formaliza un sistema de pensamiento sobre la persona, el conocimiento y los límites del poder político.",
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
        title: "Master in International Finance: Investment Banking & Global Markets — IEB (Instituto de Estudios Bursátiles), Madrid",
        detail:
          "Sept 2026 – Jul 2027. International modules at The Wharton School and Bayes Business School.",
      },
      {
        title: "B.A. in Economics and International Business — Universidad Antonio de Nebrija, Madrid",
        detail:
          "Sept 2022 – Jun 2026. Dissertation: \"Eurosystem Liquidity, Financial Duration and Relative Asset Valuation\" (9.5/10). Honours (Matrícula de Honor) in Globalisation and International Trade, and in Strategic Management. GPA: 7.87/10.",
      },
    ],
    experience: [
      {
        title: "Strategy & Performance Intern, Business Banking & Institutions (BEI) — BBVA",
        detail:
          "Aug 2025 – Feb 2026. Developed AI-driven tools to automate KPI reporting, sector/peer benchmarking and new-segment analysis, including an internal AI assistant for senior leaders. Authored peer-benchmarking and competitive-positioning analysis presented to senior management and incorporated into the 2026–2030 strategic planning cycle, and supported the planning cycle through client segmentation and market sizing.",
      },
      {
        title: "Co-Founder & Vice President, BRICS+/Global South Observatory — Universidad Antonio de Nebrija",
        detail:
          "Mar 2026 – Present. Co-founded the Observatory with a professor and a former UNCTAD official; coordinated outreach with embassies, academics and private-sector participants, and supported an international partnership and research initiatives on BRICS+ and emerging markets.",
      },
      {
        title: "Intern, IT & Product Departments — Made for Spain & Portugal",
        detail:
          "Apr 2023 – Oct 2023. Redesigned internal customer and product databases in Excel and the company's internal software, improving data consistency and information retrieval across the Product and IT teams.",
      },
      {
        title: "Cultural Guide — Freelance",
        detail:
          "2022 – Present. Led guided tours for a primarily English-speaking international clientele, presenting historical and cultural material clearly and persuasively to high-end clients in a client-facing setting.",
      },
    ],
  },
  es: {
    education: [
      {
        title: "Máster en Finanzas Internacionales: Investment Banking & Global Markets — IEB (Instituto de Estudios Bursátiles), Madrid",
        detail:
          "Sept 2026 – jul 2027. Módulos internacionales en The Wharton School y Bayes Business School.",
      },
      {
        title: "Grado en Economía y Negocios Internacionales — Universidad Antonio de Nebrija, Madrid",
        detail:
          "Sept 2022 – jun 2026. Trabajo de Fin de Grado: «Liquidez del Eurosistema, Duración Financiera y Valoración Relativa de Activos» (9,5/10). Matrícula de Honor en Globalización y Comercio Internacional, y en Dirección Estratégica. Nota media: 7,87/10.",
      },
    ],
    experience: [
      {
        title: "Becario de Estrategia y Performance, Business Banking & Institutions (BEI) — BBVA",
        detail:
          "Ago 2025 – feb 2026. Desarrollo de herramientas basadas en IA para automatizar el reporting de KPIs, el benchmarking sectorial y de competidores, y el análisis de nuevos segmentos, incluyendo un asistente de IA interno para directivos. Elaboración de análisis de benchmarking y posicionamiento competitivo presentados a la dirección e incorporados al ciclo de planificación estratégica 2026–2030, además de apoyo al ciclo de planificación mediante segmentación de clientes y dimensionamiento de mercado.",
      },
      {
        title: "Cofundador y Vicepresidente, BRICS+/Global South Observatory — Universidad Antonio de Nebrija",
        detail:
          "Mar 2026 – presente. Cofundación del Observatorio junto a un profesor y un antiguo funcionario de la UNCTAD; coordinación de la relación con embajadas, académicos y participantes del sector privado, y apoyo a una colaboración internacional e iniciativas de investigación sobre BRICS+ y mercados emergentes.",
      },
      {
        title: "Becario, Departamentos de IT y Producto — Made for Spain & Portugal",
        detail:
          "Abr 2023 – oct 2023. Rediseño de las bases de datos internas de clientes y producto en Excel y en el software interno de la compañía, mejorando la consistencia de los datos y su recuperación entre los equipos de Producto e IT.",
      },
      {
        title: "Guía Cultural — Freelance",
        detail:
          "2022 – presente. Visitas guiadas para una clientela internacional, principalmente angloparlante, presentando contenido histórico y cultural complejo de forma clara y persuasiva a clientes de alto nivel en un entorno de trato directo.",
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
