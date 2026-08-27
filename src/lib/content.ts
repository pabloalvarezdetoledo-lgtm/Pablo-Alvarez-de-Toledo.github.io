import type { Locale } from "@/i18n/config";

/**
 * Every content file lives at `<collection>/<locale>/<slug>.md(x)`, so the
 * loader-generated `id` is always `<locale>/<slug>`. This parses it back out.
 *
 * Note: these helpers use plain structural generics (`T extends {...}`)
 * rather than `CollectionEntry<C>` — binding a type parameter through
 * Astro's `CollectionEntry<C>` conditional type defeats inference and
 * widens `entry.data` to a union of every collection's schema.
 */
export function parseId(id: string): { locale: Locale; slug: string } {
  const [locale, ...rest] = id.split("/");
  return { locale: locale as Locale, slug: rest.join("/") };
}

export function entrySlug<T extends { id: string }>(entry: T): string {
  return parseId(entry.id).slug;
}

export function entryLocale<T extends { id: string }>(entry: T): Locale {
  return parseId(entry.id).locale;
}

export function byLocale<T extends { id: string }>(entries: T[], locale: Locale): T[] {
  return entries.filter((entry) => entryLocale(entry) === locale);
}

export function byDateDesc<T extends { data: { date?: Date } }>(entries: T[]): T[] {
  return [...entries].sort((a, b) => {
    const dateA = a.data.date;
    const dateB = b.data.date;
    if (!dateA || !dateB) return 0;
    return dateB.getTime() - dateA.getTime();
  });
}

export function findTranslation<T extends { id: string; data: { translationKey?: string } }>(
  entries: T[],
  translationKey: string,
  locale: Locale
): T | undefined {
  return entries.find(
    (entry) => entry.data.translationKey === translationKey && entryLocale(entry) === locale
  );
}

/** Given a status value used across collections, is this entry publicly presentable as "live" content? */
export function isPublished(status: string): boolean {
  return status === "published" || status === "completed";
}
