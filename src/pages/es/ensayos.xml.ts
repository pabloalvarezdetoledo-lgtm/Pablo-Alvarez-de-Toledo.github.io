import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { byLocale, byDateDesc, entrySlug } from "@/lib/content";
import { essayCategoryPath, sectionPath, type EssayCategoryKey } from "@/i18n/config";
import { withBase, absoluteUrl } from "@/lib/url";

export async function GET(context: APIContext) {
  const entries = byDateDesc(byLocale(await getCollection("essays"), "es"));
  return rss({
    title: "Ensayos — Pablo Álvarez de Toledo",
    description: "Textos extensos sobre economía, finanzas, economía política y filosofía.",
    site: absoluteUrl(context.site, sectionPath("essays", "es")),
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: withBase(essayCategoryPath(entry.data.category as EssayCategoryKey, "es") + entrySlug(entry) + "/"),
    })),
    customData: `<language>es</language>`,
  });
}
