import { person } from "@/site.config";
import { absoluteUrl } from "@/lib/url";

export function personSchema(site: URL | undefined) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    url: absoluteUrl(site, "/en/"),
    sameAs: [person.linkedin, person.github].filter((url) => !url.includes("PLACEHOLDER")),
  };
}

export function profilePageSchema(site: URL | undefined, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: personSchema(site),
    url: absoluteUrl(site, path),
  };
}

export function breadcrumbSchema(
  site: URL | undefined,
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(site, item.path),
    })),
  };
}

export function scholarlyArticleSchema(
  site: URL | undefined,
  entry: {
    title: string;
    description: string;
    date: Date;
    updatedDate?: Date;
    path: string;
    tags: string[];
  }
) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: entry.title,
    description: entry.description,
    author: { "@type": "Person", name: person.name },
    datePublished: entry.date.toISOString(),
    dateModified: (entry.updatedDate ?? entry.date).toISOString(),
    url: absoluteUrl(site, entry.path),
    keywords: entry.tags.join(", "),
  };
}

export function articleSchema(
  site: URL | undefined,
  entry: { title: string; description: string; date: Date; updatedDate?: Date; path: string }
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.description,
    author: { "@type": "Person", name: person.name },
    datePublished: entry.date.toISOString(),
    dateModified: (entry.updatedDate ?? entry.date).toISOString(),
    url: absoluteUrl(site, entry.path),
  };
}

export function courseSchema(
  site: URL | undefined,
  entry: { title: string; description: string; path: string }
) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: entry.title,
    description: entry.description,
    url: absoluteUrl(site, entry.path),
    provider: { "@type": "Person", name: person.name },
  };
}
