import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Deployment target: GitHub Pages project site.
// Repo (Pablo-Alvarez-de-Toledo.github.io) does not match the account name
// (pabloalvarezdetoledo-lgtm), so GitHub serves this as a project site under
// a sub-path rather than as a root user site. See README.md "Deployment" and
// "Custom domain" sections for how to change this later.
export default defineConfig({
  site: "https://pabloalvarezdetoledo-lgtm.github.io",
  base: "/Pablo-Alvarez-de-Toledo.github.io/",
  trailingSlash: "always",
  // Essays that became book chapters keep working at their old addresses.
  redirects: {
    "/es/ensayos/filosofia/el-derecho-a-equivocarse/": "/Pablo-Alvarez-de-Toledo.github.io/es/libro/la-libertad-de-equivocarse/",
    "/en/essays/philosophy/el-derecho-a-equivocarse/": "/Pablo-Alvarez-de-Toledo.github.io/es/libro/la-libertad-de-equivocarse/",
    "/es/ensayos/economia-politica/democracia-y-populismo/": "/Pablo-Alvarez-de-Toledo.github.io/es/libro/populismo/",
    "/en/essays/political-economy/democracy-and-populism/": "/Pablo-Alvarez-de-Toledo.github.io/es/libro/populismo/",
    "/es/ensayos/filosofia-del-derecho/crisis-migratoria-derecho-a-tener-derechos/": "/Pablo-Alvarez-de-Toledo.github.io/es/libro/la-crisis-migratoria/",
    "/en/essays/legal-philosophy/migration-crisis-right-to-have-rights/": "/Pablo-Alvarez-de-Toledo.github.io/es/libro/la-crisis-migratoria/",
    "/es/investigacion/fundamentos-filosoficos-personalidad-juridica/": "/Pablo-Alvarez-de-Toledo.github.io/es/libro/el-sujeto-que-el-derecho-no-crea/",
    "/en/research/philosophical-foundations-legal-personality/": "/Pablo-Alvarez-de-Toledo.github.io/es/libro/el-sujeto-que-el-derecho-no-crea/",
    "/es/ensayos/filosofia/": "/Pablo-Alvarez-de-Toledo.github.io/es/libro/",
    "/es/ensayos/filosofia-del-derecho/": "/Pablo-Alvarez-de-Toledo.github.io/es/libro/",
    "/en/essays/philosophy/": "/Pablo-Alvarez-de-Toledo.github.io/en/book/",
    "/en/essays/legal-philosophy/": "/Pablo-Alvarez-de-Toledo.github.io/en/book/",
  },
  integrations: [mdx(), sitemap()],
  prefetch: false,
  build: {
    format: "directory",
  },
});
