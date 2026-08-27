/** Join the configured base path with an app-relative path, avoiding duplicate slashes. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const trimmedPath = path.startsWith("/") ? path : `/${path}`;
  return `${trimmedBase}${trimmedPath}`;
}

/** Build an absolute URL for the given app-relative path, using the configured site origin. */
export function absoluteUrl(site: URL | undefined, path: string): string {
  const origin = site ? site.origin : "";
  return `${origin}${withBase(path)}`;
}
