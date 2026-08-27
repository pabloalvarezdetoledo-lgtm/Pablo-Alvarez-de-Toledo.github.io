import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const locale = z.enum(["en", "es"]);

/** Shared cover-image fields, reused across every collection. */
const coverFields = (image: () => z.ZodType<ImageMetadata>) => ({
  cover: image().optional(),
  coverAlt: z.string().optional(),
  coverCaption: z.string().optional(),
  coverCredit: z.string().optional(),
  coverSource: z.string().url().optional(),
  coverLicence: z.string().optional(),
  focalPoint: z.string().optional(),
});

const research = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/research" }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        subtitle: z.string().optional(),
        description: z.string(),
        author: z.string().default("Pablo Álvarez de Toledo"),
        date: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        locale,
        translationKey: z.string(),
        abstract: z.string().optional(),
        researchQuestion: z.string().optional(),
        methodology: z.string().optional(),
        findings: z.string().optional(),
        category: z.enum([
          "monetary-economics",
          "asset-pricing",
          "corporate-finance",
          "quantitative-finance",
          "econometrics",
          "political-economy",
          "legal-philosophy",
        ]),
        tags: z.array(z.string()).default([]),
        documentLanguage: locale,
        status: z.enum(["draft", "working-paper", "forthcoming", "published"]).default("draft"),
        featured: z.boolean().default(false),
        pdf: z.string().optional(),
        code: z.string().url().optional(),
        data: z.string().optional(),
        citation: z.string().optional(),
        relatedResearch: z.array(z.string()).default([]),
        relatedPortfolio: z.array(z.string()).default([]),
        relatedEssays: z.array(z.string()).default([]),
        ...coverFields(image),
      })
      .refine((entry) => !entry.cover || !!entry.coverAlt, {
        message: "coverAlt is required whenever a cover image is set",
        path: ["coverAlt"],
      }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        subtitle: z.string().optional(),
        description: z.string(),
        author: z.string().default("Pablo Álvarez de Toledo"),
        date: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        locale,
        translationKey: z.string(),
        problem: z.string(),
        approach: z.string(),
        result: z.string(),
        tools: z.array(z.string()).default([]),
        skills: z.array(z.string()).default([]),
        tags: z.array(z.string()).default([]),
        documentLanguage: locale,
        status: z.enum(["draft", "in-progress", "completed"]).default("draft"),
        featured: z.boolean().default(false),
        pdf: z.string().optional(),
        code: z.string().url().optional(),
        data: z.string().optional(),
        citation: z.string().optional(),
        relatedResearch: z.array(z.string()).default([]),
        relatedEssays: z.array(z.string()).default([]),
        ...coverFields(image),
      })
      .refine((entry) => !entry.cover || !!entry.coverAlt, {
        message: "coverAlt is required whenever a cover image is set",
        path: ["coverAlt"],
      }),
});

const essays = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/essays" }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        subtitle: z.string().optional(),
        description: z.string(),
        author: z.string().default("Pablo Álvarez de Toledo"),
        date: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        locale,
        translationKey: z.string(),
        category: z.enum([
          "economics",
          "econometrics",
          "finance-valuation",
          "monetary-economics",
          "political-economy",
          "philosophy",
          "legal-philosophy",
        ]),
        tags: z.array(z.string()).default([]),
        documentLanguage: locale,
        status: z.enum(["draft", "published"]).default("draft"),
        featured: z.boolean().default(false),
        citation: z.string().optional(),
        relatedResearch: z.array(z.string()).default([]),
        relatedPortfolio: z.array(z.string()).default([]),
        ...coverFields(image),
      })
      .refine((entry) => !entry.cover || !!entry.coverAlt, {
        message: "coverAlt is required whenever a cover image is set",
        path: ["coverAlt"],
      }),
});

const courses = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/courses" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      description: z.string(),
      locale,
      translationKey: z.string(),
      subject: z.string(),
      difficulty: z.enum(["introductory", "intermediate", "advanced"]),
      estimatedDuration: z.string(),
      status: z.enum(["planned", "in-production", "published"]).default("planned"),
      modules: z.array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          lessons: z.array(z.string()).default([]),
        })
      ),
      relatedResearch: z.array(z.string()).default([]),
      ...coverFields(image),
    }),
});

const lessons = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/lessons" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale,
    translationKey: z.string(),
    course: z.string(),
    module: z.string(),
    order: z.number(),
    estimatedDuration: z.string().optional(),
    youtubeId: z.string().optional(),
    slides: z.string().optional(),
    bibliography: z.array(z.string()).default([]),
    exercises: z.array(z.string()).default([]),
    code: z.string().url().optional(),
    data: z.string().optional(),
    relatedResearch: z.array(z.string()).default([]),
    status: z.enum(["planned", "in-production", "published"]).default("planned"),
  }),
});

export const collections = { research, portfolio, essays, courses, lessons };
