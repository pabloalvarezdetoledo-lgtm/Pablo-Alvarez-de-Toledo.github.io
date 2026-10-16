/**
 * The book: parts, chapters and synopses, in both languages.
 *
 * Chapter bodies are generated from the LaTeX sources (Desktop/Libro/capitulos)
 * with pandoc and live in src/book/chapters/<slug>.html. PDFs live in
 * public/files/book/. See README.md § "The book" for how to regenerate both.
 *
 * The book is written in Spanish and that text is never translated. Both
 * locales get their own chapter URL and UI chrome (title, breadcrumbs,
 * buttons, part/chapter labels); the chapter body and PDFs are the same file
 * either way.
 */
import type { Locale } from "@/i18n/config";

export const book = {
  // TODO(pablo): replace with the final title once decided.
  title: { es: "Libro (en preparación)", en: "Book (in progress)" },
  status: {
    es: "Versión de trabajo. Los capítulos se publican a medida que se revisan y pueden cambiar.",
    en: "Working draft. Chapters are published as they are revised and may change.",
  },
  intro: {
    es: "Un libro que intenta formalizar un sistema de pensamiento: empieza por lo que existe y por la persona que actúa, pasa por el conocimiento, la racionalidad y el método de la economía, y termina en el derecho, la comunidad, la verdad pública y los límites del poder político. Cada capítulo nace de la pregunta que deja abierta el anterior.",
    en: "A book that attempts to set out a system of thought: it begins with what exists and with the acting person, moves through knowledge, rationality and the method of economics, and ends with law, community, public truth and the limits of political power. Each chapter grows out of the question the previous one leaves open. The book is written in Spanish.",
  },
  fullPdf: "/files/book/libro-completo.pdf",
};

export interface BookPart {
  number: number;
  roman: string;
  title: Record<Locale, string>;
}

export const parts: BookPart[] = [
  { number: 1, roman: "I", title: { es: "La persona y el conocimiento", en: "The person and knowledge" } },
  { number: 2, roman: "II", title: { es: "Economía y método", en: "Economics and method" } },
  { number: 3, roman: "III", title: { es: "Derecho, persona y comunidad", en: "Law, person and community" } },
  { number: 4, roman: "IV", title: { es: "Verdad, juicio y esfera pública", en: "Truth, judgement and the public sphere" } },
  { number: 5, roman: "V", title: { es: "Orden político y sus límites", en: "Political order and its limits" } },
];

export interface BookChapter {
  slug: string;
  number: number;
  part: number;
  title: string;
  subtitle?: string;
  titleEn: string;
  description: Record<Locale, string>;
}

export const chapters: BookChapter[] = [
  {
    slug: "lo-que-resiste",
    number: 1,
    part: 1,
    title: "Lo que resiste",
    titleEn: "What resists",
    description: {
      es: "Una ontología mínima para todo el libro: qué distingue a una sustancia de un montón, qué estatuto tienen las realidades emergentes y los hechos institucionales, y por qué ningún colectivo, tampoco el Estado, alcanza el rango de sujeto que solo tiene la persona.",
      en: "A minimal ontology for the whole book: what separates a substance from a heap, what kind of reality emergent and institutional facts have, and why no collective, the State included, reaches the rank of subject that only the person holds.",
    },
  },
  {
    slug: "persona-que-actua",
    number: 2,
    part: 1,
    title: "Persona que actúa",
    titleEn: "The acting person",
    description: {
      es: "La antropología de la que parte la obra: una persona corporal, biográfica, intencional y libre dentro de circunstancias que no elige; irreductible como sujeto de acción, pero no autosuficiente. Individualismo metodológico sin atomismo antropológico.",
      en: "The anthropology the book starts from: an embodied, biographical, intentional person, free within circumstances it did not choose; irreducible as the subject of action but not self-sufficient. Methodological individualism without anthropological atomism.",
    },
  },
  {
    slug: "conocer-desde-alguna-parte",
    number: 3,
    part: 1,
    title: "Conocer desde alguna parte",
    titleEn: "Knowing from somewhere",
    description: {
      es: "Contra el realismo ingenuo y contra el relativismo: de Descartes a Husserl, Merleau-Ponty, Ortega y Zubiri, una defensa de que el conocimiento procede siempre de un cuerpo situado y de que esa situación es el modo en que lo real se hace presente, no un velo que lo oculte.",
      en: "Against naive realism and against relativism: from Descartes to Husserl, Merleau-Ponty, Ortega and Zubiri, a defence of the claim that knowledge always comes from a situated body, and that this situation is how reality becomes present rather than a veil that hides it.",
    },
  },
  {
    slug: "un-mundo-que-nadie-ha-inventado",
    number: 4,
    part: 1,
    title: "Un mundo que nadie ha inventado",
    titleEn: "A world nobody invented",
    description: {
      es: "El saber que cada uno recibe de otros: intersubjetividad, lenguaje, tradición y conocimiento tácito. Frente a la objeción de Foucault, el capítulo cierra la teoría del conocimiento con un realismo situado en el que una comunidad entera puede equivocarse y una sola persona tener razón.",
      en: "The knowledge each of us receives from others: intersubjectivity, language, tradition and tacit knowledge. Against Foucault's objection, the chapter completes the theory of knowledge with a situated realism in which a whole community can be wrong and one person right.",
    },
  },
  {
    slug: "racionalidad-y-orden-social",
    number: 5,
    part: 1,
    title: "Racionalidad y orden social",
    titleEn: "Rationality and social order",
    description: {
      es: "Qué significa actuar razonablemente cuando nadie sabe todo lo que necesitaría saber. Racionalidad situada, conocimiento disperso y descubrimiento empresarial; por qué ninguna máquina, ni siquiera una que pensara, podría planificar una sociedad, y qué enseña Gödel sobre ello.",
      en: "What it means to act reasonably when nobody knows everything they would need to know. Situated rationality, dispersed knowledge and entrepreneurial discovery; why no machine, not even one that could think, could plan a society, and what Gödel teaches about it.",
    },
  },
  {
    slug: "conocer-un-mundo-que-actua",
    number: 6,
    part: 2,
    title: "Conocer un mundo que actúa",
    titleEn: "Knowing a world that acts",
    description: {
      es: "El estatuto científico de la economía. Qué se sigue de la estructura de la acción y qué exige premisas históricas; qué presupone la idealización matemática; por qué un conocimiento que su objeto puede leer transforma ese objeto; y cómo distinguir demostrar, estimar y decidir.",
      en: "The scientific status of economics. What follows from the structure of action and what requires historical premises; what mathematical idealisation presupposes; why knowledge that its object can read transforms that object; and how to tell proving, estimating and deciding apart.",
    },
  },
  {
    slug: "el-sujeto-que-el-derecho-no-crea",
    number: 7,
    part: 3,
    title: "El sujeto que el derecho no crea",
    titleEn: "The subject the law does not create",
    description: {
      es: "Qué convierte a alguien en sujeto de derechos. Frente a Kelsen y a la teoría de los hechos institucionales, el capítulo sostiene que el derecho reconoce a la persona pero no la constituye, y reconstruye la dignidad como un estatuto y no como una puntuación.",
      en: "What makes someone a subject of rights. Against Kelsen and the theory of institutional facts, the chapter argues that law recognises the person but does not constitute it, and rebuilds dignity as a status rather than a score.",
    },
  },
  {
    slug: "comunidades-intermedias",
    number: 8,
    part: 3,
    title: "Comunidades intermedias",
    subtitle: "la sociedad entre la persona y el soberano",
    titleEn: "Intermediate communities",
    description: {
      es: "Entre el individuo y el Estado hay familias, parroquias, gremios, universidades y asociaciones. Del clan a la asociación, de Henrich a Ostrom y la Escuela de Salamanca: por qué comunidad y soberanía son cosas distintas, y qué está vaciando hoy a los cuerpos intermedios.",
      en: "Between the individual and the State stand families, parishes, guilds, universities and associations. From clan to association, from Henrich to Ostrom and the School of Salamanca: why community and sovereignty are different things, and what is hollowing out intermediate bodies today.",
    },
  },
  {
    slug: "la-norma-fuera-la-norma-dentro",
    number: 9,
    part: 3,
    title: "Autocontención interior y coerción exterior",
    subtitle: "la norma fuera, la norma dentro",
    titleEn: "Inner restraint and outer coercion",
    description: {
      es: "Quien devuelve un billetero sin que nadie mire obedece a un tribunal que lleva dentro. Culpa y vergüenza, autocoacción y coacción: el problema de la libertad incluye quién participa en formar ese juez interior y con qué autoridad.",
      en: "Whoever returns a lost wallet when nobody is watching obeys a court they carry within. Guilt and shame, self-restraint and coercion: the problem of freedom includes who takes part in forming that inner judge, and with what authority.",
    },
  },
  {
    slug: "el-latigo-en-la-propia-mano",
    number: 10,
    part: 3,
    title: "El látigo en la propia mano",
    subtitle: "rendimiento, cansancio y libertad",
    titleEn: "The whip in one's own hand",
    description: {
      es: "Una lectura apropiadora de Byung-Chul Han. El tribunal interior ya no prohíbe: encarga. Lo que Han acierta y lo que confunde sobre el sujeto del rendimiento, las fábricas del cansancio y por qué solo quien sabe descansar puede atreverse a juzgar.",
      en: "An appropriating reading of Byung-Chul Han. The inner court no longer forbids: it assigns. What Han gets right and what he conflates about the achievement-subject, the factories of fatigue, and why only someone who can rest dares to judge.",
    },
  },
  {
    slug: "la-libertad-de-equivocarse",
    number: 11,
    part: 4,
    title: "La libertad de equivocarse",
    subtitle: "censura, verdad y domesticación del juicio",
    titleEn: "The freedom to be wrong",
    description: {
      es: "Contra la tentación de entregar a una autoridad la tarea de distinguir lo verdadero de lo falso. La censura, incluso bienintencionada, sustituye la madurez del juicio por una obediencia cómoda; una sociedad libre es aquella en la que se conserva el derecho y el deber de pensar por uno mismo.",
      en: "Against the temptation to hand an authority the task of telling true from false. Censorship, even well-meant, replaces mature judgement with comfortable obedience; a free society is one that keeps the right and the duty to think for oneself.",
    },
  },
  {
    slug: "el-fantasma-en-la-urna",
    number: 12,
    part: 4,
    title: "El fantasma en la urna",
    titleEn: "The ghost in the ballot box",
    description: {
      es: "Cuando el rey dejó de gobernar, su voluntad se transfirió a un sujeto que no existe: el pueblo. De la elección social a la representación, el capítulo muestra que la voluntad popular no espera dentro de la urna, sino que alguien tiene que construirla y hablar por ella.",
      en: "When the king stopped ruling, his will was transferred to a subject that does not exist: the people. From social choice to representation, the chapter shows that the popular will does not wait inside the ballot box; someone has to build it and speak for it.",
    },
  },
  {
    slug: "populismo",
    number: 13,
    part: 4,
    title: "Populismo",
    titleEn: "Populism",
    description: {
      es: "El populismo no es una amenaza externa que infecta a democracias sanas, sino la sombra que la propia democracia proyecta cuando promete que el pueblo gobernará. Por qué regresa, por qué adopta ideologías distintas y por qué no hay democracia inmunizada contra él.",
      en: "Populism is not an external threat infecting healthy democracies but the shadow democracy itself casts when it promises that the people will rule. Why it returns, why it takes on different ideologies, and why no democracy is immune to it.",
    },
  },
  {
    slug: "la-crisis-migratoria",
    number: 14,
    part: 5,
    title: "La crisis migratoria y el derecho a tener derechos",
    titleEn: "The migration crisis and the right to have rights",
    description: {
      es: "Con Arendt: el apátrida es más vulnerable justo cuando solo le queda su humanidad desnuda. Nación, Estado, propiedad y migración, y la pregunta de cómo hacer efectivos unos derechos cuyo fundamento no es político sin convertir la pertenencia a un Estado en condición de humanidad jurídica.",
      en: "With Arendt: the stateless person is most vulnerable precisely when only bare humanity remains. Nation, State, property and migration, and the question of how to make effective rights whose foundation is not political without making membership of a State a condition of legal humanity.",
    },
  },
  {
    slug: "acracia",
    number: 15,
    part: 5,
    title: "Acracia",
    titleEn: "Acracy",
    description: {
      es: "La ausencia de Estado no es el caos. Qué reclama el Estado y con qué título, de Hobbes a Nozick; cómo podría organizarse una sociedad sin soberano, con bienes colectivos y justicia policéntrica; y si el soberano puede volver. La alternativa al Estado no es el caos: es la sociedad.",
      en: "The absence of the State is not chaos. What the State claims and by what title, from Hobbes to Nozick; how a society without a sovereign could be organised, with collective goods and polycentric justice; and whether the sovereign can return. The alternative to the State is not chaos: it is society.",
    },
  },
];

export function chapterPdf(slug: string): string {
  return `/files/book/${slug}.pdf`;
}

export function chaptersInPart(part: number): BookChapter[] {
  return chapters.filter((c) => c.part === part).sort((a, b) => a.number - b.number);
}

export function fullTitle(c: BookChapter): string {
  return c.subtitle ? `${c.title}: ${c.subtitle}` : c.title;
}
