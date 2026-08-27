import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

/** Checks, at build time, whether a root-relative path (e.g. "/files/cv/x.pdf") exists under `public/`. */
export function publicFileExists(rootRelativePath: string): boolean {
  const publicDir = fileURLToPath(new URL("../../public", import.meta.url));
  const cleaned = rootRelativePath.startsWith("/") ? rootRelativePath.slice(1) : rootRelativePath;
  return existsSync(`${publicDir}/${cleaned}`);
}
