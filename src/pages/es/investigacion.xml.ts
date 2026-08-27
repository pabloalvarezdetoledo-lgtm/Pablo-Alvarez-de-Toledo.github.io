import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { byLocale, byDateDesc, entrySlug } from "@/lib/content";
import { sectionPath } from "@/i18n/config";
import { withBase, absoluteUrl } from "@/lib/url";

export async function GET(context: APIContext) {
  const entries = byDateDesc(byLocale(await getCollection("research"), "es"));
  return rss({
    title: "Investigación — Pablo Álvarez de Toledo",
    description: "Artículos, documentos de trabajo y estudios extensos en economía, finanzas y econometría.",
    site: absoluteUrl(context.site, sectionPath("research", "es")),
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: withBase(`${sectionPath("research", "es")}${entrySlug(entry)}/`),
    })),
    customData: `<language>es</language>`,
  });
}
