import type { Locale } from "./config";

export const dictionary = {
  en: {
    nav: {
      research: "Research",
      portfolio: "Portfolio",
      essays: "Essays",
      classes: "Classes",
      about: "About",
      cv: "CV",
      contact: "Contact",
      skipToContent: "Skip to main content",
      menu: "Menu",
      closeMenu: "Close menu",
    },
    lang: {
      switch: "Switch language",
      current: "Current language: English",
      notTranslated: "This page is not yet available in Spanish. Showing the English version.",
    },
    home: {
      heroCvLabel: "View CV",
      heroContactLabel: "Get in touch",
      featuredResearch: "Featured Research",
      selectedProjects: "Selected Projects",
      latest: "Latest Essay & Class",
      connectionTitle: "Economics, finance and quantitative research",
      connectionBody:
        "The work on this site follows a single line of inquiry: how monetary institutions and financial markets set the terms on which capital is priced, and how that pricing works its way into corporate decisions and portfolio construction. Research establishes the theory and evidence, the portfolio applies it to concrete valuation problems, and the essays and classes set out the reasoning in full.",
      viewAll: "View all",
      readAbstract: "Read abstract",
      viewCaseStudy: "View case study",
    },
    section: {
      research: {
        title: "Research",
        intro:
          "Papers, working papers and longer studies on monetary economics, asset pricing, corporate finance, econometrics and related fields.",
      },
      portfolio: {
        title: "Portfolio",
        intro:
          "Applied financial, economic and quantitative work, presented as concise case studies: the problem, the approach, the result.",
      },
      essays: {
        title: "Essays",
        intro:
          "Longer-form writing organised by theme, from applied economics to political economy and philosophy.",
        archive: "Archive",
      },
      classes: {
        title: "Classes",
        intro:
          "Structured courses in economics, finance and econometrics, built around recorded lessons, written notes and exercises.",
      },
    },
    card: {
      featured: "Featured",
      draft: "Draft",
      workingPaper: "Working Paper",
      forthcoming: "Forthcoming",
      published: "Published",
      readMore: "Read more",
      originalLanguage: "Original language",
      updated: "Updated",
    },
    filters: {
      allCategories: "All categories",
      allTags: "All tags",
      allLanguages: "All languages",
      filterByTag: "Filter by tag",
      filterByLanguage: "Filter by language",
      clear: "Clear filters",
    },
    doc: {
      downloadPdf: "Download PDF",
      viewCode: "View code",
      viewData: "View data",
      citeThis: "Cite this",
      copyCitation: "Copy citation",
      copied: "Copied",
      abstract: "Abstract",
      researchQuestion: "Research question",
      methodology: "Methodology",
      findings: "Principal findings",
      relatedContent: "Related content",
      category: "Category",
      tags: "Tags",
      status: "Status",
      language: "Document language",
      date: "Date",
      dataSource: "Data source",
      problem: "The problem",
      approach: "The approach",
      result: "The result",
      toolsAndMethods: "Tools and methods",
      skillsDemonstrated: "Skills demonstrated",
    },
    empty: {
      noEntries: "No entries have been published in this section yet.",
      checkBack: "Check back soon — new material is prepared carefully rather than quickly.",
    },
    about: {
      title: "About",
    },
    cv: {
      title: "Curriculum Vitae",
      download: "Download CV (PDF)",
      note: "TODO(pablo): upload the current CV PDF to public/files/cv/ and confirm this page's summary reflects it.",
    },
    contact: {
      title: "Contact",
      invite:
        "For academic enquiries, collaboration or professional opportunities, the best way to reach me is by email.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Astro.",
    },
    notFound: {
      title: "Page not found",
      body: "The page you are looking for does not exist or has moved.",
      cta: "Return to the homepage",
    },
    course: {
      modules: "Modules",
      lessons: "Lessons",
      duration: "Estimated duration",
      subject: "Subject",
      difficulty: "Difficulty",
      bibliography: "Bibliography",
      exercises: "Exercises",
      slides: "Slides",
      videoPending: "Video recording not yet available.",
      notesPending: "Written notes not yet available.",
    },
  },
  es: {
    nav: {
      research: "Investigación",
      portfolio: "Portfolio",
      essays: "Ensayos",
      classes: "Clases",
      about: "Sobre mí",
      cv: "CV",
      contact: "Contacto",
      skipToContent: "Ir al contenido principal",
      menu: "Menú",
      closeMenu: "Cerrar menú",
    },
    lang: {
      switch: "Cambiar idioma",
      current: "Idioma actual: Español",
      notTranslated: "Esta página aún no está disponible en español. Se muestra la versión en inglés.",
    },
    home: {
      heroCvLabel: "Ver CV",
      heroContactLabel: "Contactar",
      featuredResearch: "Investigación Destacada",
      selectedProjects: "Proyectos Seleccionados",
      latest: "Último Ensayo y Clase",
      connectionTitle: "Economía, finanzas e investigación cuantitativa",
      connectionBody:
        "El trabajo de este sitio sigue una única línea de investigación: cómo las instituciones monetarias y los mercados financieros determinan las condiciones en que se valora el capital, y cómo esa valoración se traslada a las decisiones corporativas y a la construcción de carteras. La investigación establece la teoría y la evidencia, el portfolio la aplica a problemas concretos de valoración, y los ensayos y clases exponen el razonamiento completo.",
      viewAll: "Ver todo",
      readAbstract: "Leer resumen",
      viewCaseStudy: "Ver caso de estudio",
    },
    section: {
      research: {
        title: "Investigación",
        intro:
          "Artículos, documentos de trabajo y estudios extensos sobre economía monetaria, valoración de activos, finanzas corporativas, econometría y disciplinas afines.",
      },
      portfolio: {
        title: "Portfolio",
        intro:
          "Trabajo financiero, económico y cuantitativo aplicado, presentado como casos de estudio concisos: el problema, el enfoque, el resultado.",
      },
      essays: {
        title: "Ensayos",
        intro:
          "Textos extensos organizados por temática, desde economía aplicada hasta economía política y filosofía.",
        archive: "Archivo",
      },
      classes: {
        title: "Clases",
        intro:
          "Cursos estructurados de economía, finanzas y econometría, construidos a partir de lecciones grabadas, apuntes escritos y ejercicios.",
      },
    },
    card: {
      featured: "Destacado",
      draft: "Borrador",
      workingPaper: "Documento de Trabajo",
      forthcoming: "Próximamente",
      published: "Publicado",
      readMore: "Leer más",
      originalLanguage: "Idioma original",
      updated: "Actualizado",
    },
    filters: {
      allCategories: "Todas las categorías",
      allTags: "Todas las etiquetas",
      allLanguages: "Todos los idiomas",
      filterByTag: "Filtrar por etiqueta",
      filterByLanguage: "Filtrar por idioma",
      clear: "Quitar filtros",
    },
    doc: {
      downloadPdf: "Descargar PDF",
      viewCode: "Ver código",
      viewData: "Ver datos",
      citeThis: "Citar",
      copyCitation: "Copiar cita",
      copied: "Copiado",
      abstract: "Resumen",
      researchQuestion: "Pregunta de investigación",
      methodology: "Metodología",
      findings: "Resultados principales",
      relatedContent: "Contenido relacionado",
      category: "Categoría",
      tags: "Etiquetas",
      status: "Estado",
      language: "Idioma del documento",
      date: "Fecha",
      dataSource: "Fuente de datos",
      problem: "El problema",
      approach: "El enfoque",
      result: "El resultado",
      toolsAndMethods: "Herramientas y métodos",
      skillsDemonstrated: "Competencias demostradas",
    },
    empty: {
      noEntries: "Todavía no se ha publicado ningún contenido en esta sección.",
      checkBack: "Vuelve pronto: el material nuevo se prepara con cuidado, no con prisa.",
    },
    about: {
      title: "Sobre mí",
    },
    cv: {
      title: "Curriculum Vitae",
      download: "Descargar CV (PDF)",
      note: "TODO(pablo): sube el PDF del CV actual a public/files/cv/ y confirma que el resumen de esta página lo refleja.",
    },
    contact: {
      title: "Contacto",
      invite:
        "Para consultas académicas, colaboraciones u oportunidades profesionales, la mejor forma de contactar conmigo es por correo electrónico.",
      email: "Correo electrónico",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      builtWith: "Construido con Astro.",
    },
    notFound: {
      title: "Página no encontrada",
      body: "La página que buscas no existe o ha cambiado de ubicación.",
      cta: "Volver al inicio",
    },
    course: {
      modules: "Módulos",
      lessons: "Lecciones",
      duration: "Duración estimada",
      subject: "Materia",
      difficulty: "Nivel",
      bibliography: "Bibliografía",
      exercises: "Ejercicios",
      slides: "Diapositivas",
      videoPending: "Grabación en vídeo aún no disponible.",
      notesPending: "Apuntes escritos aún no disponibles.",
    },
  },
} as const;

export function t(locale: Locale) {
  return dictionary[locale];
}
