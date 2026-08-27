import { getCollection } from "astro:content";
import { entryLocale, entrySlug } from "./content";
import { sectionPath, essayCategoryPath, type Locale, type EssayCategoryKey } from "@/i18n/config";
import type { RelatedItem } from "@/components/RelatedContent.astro";

async function resolveByTranslationKeys<
  T extends { data: { translationKey: string; title: string }; id: string },
>(entries: T[], keys: string[], locale: Locale): Promise<{ entry: T; locale: Locale }[]> {
  const results: { entry: T; locale: Locale }[] = [];
  for (const key of keys) {
    const preferred = entries.find(
      (e) => e.data.translationKey === key && entryLocale(e as never) === locale
    );
    const fallback = entries.find((e) => e.data.translationKey === key);
    const match = preferred ?? fallback;
    if (match) results.push({ entry: match, locale: entryLocale(match as never) });
  }
  return results;
}

export async function resolveResearchRelated(
  keys: string[],
  locale: Locale,
  kindLabel: string
): Promise<RelatedItem[]> {
  if (keys.length === 0) return [];
  const entries = await getCollection("research");
  const matches = await resolveByTranslationKeys(entries, keys, locale);
  return matches.map(({ entry, locale: entryLoc }) => ({
    title: entry.data.title,
    href: `${sectionPath("research", entryLoc)}${entrySlug(entry as never)}/`,
    kind: kindLabel,
  }));
}

export async function resolvePortfolioRelated(
  keys: string[],
  locale: Locale,
  kindLabel: string
): Promise<RelatedItem[]> {
  if (keys.length === 0) return [];
  const entries = await getCollection("portfolio");
  const matches = await resolveByTranslationKeys(entries, keys, locale);
  return matches.map(({ entry, locale: entryLoc }) => ({
    title: entry.data.title,
    href: `${sectionPath("portfolio", entryLoc)}${entrySlug(entry as never)}/`,
    kind: kindLabel,
  }));
}

export async function resolveEssaysRelated(
  keys: string[],
  locale: Locale,
  kindLabel: string
): Promise<RelatedItem[]> {
  if (keys.length === 0) return [];
  const entries = await getCollection("essays");
  const matches = await resolveByTranslationKeys(entries, keys, locale);
  return matches.map(({ entry, locale: entryLoc }) => ({
    title: entry.data.title,
    href: essayCategoryPath(entry.data.category as EssayCategoryKey, entryLoc) + entrySlug(entry as never) + "/",
    kind: kindLabel,
  }));
}
