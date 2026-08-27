import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { byLocale, byDateDesc, entrySlug } from "@/lib/content";
import { sectionPath } from "@/i18n/config";
import { withBase, absoluteUrl } from "@/lib/url";

export async function GET(context: APIContext) {
  const entries = byDateDesc(byLocale(await getCollection("research"), "en"));
  return rss({
    title: "Research — Pablo Álvarez de Toledo",
    description: "Papers, working papers and longer studies in economics, finance and econometrics.",
    site: absoluteUrl(context.site, sectionPath("research", "en")),
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: withBase(`${sectionPath("research", "en")}${entrySlug(entry)}/`),
    })),
    customData: `<language>en</language>`,
  });
}
