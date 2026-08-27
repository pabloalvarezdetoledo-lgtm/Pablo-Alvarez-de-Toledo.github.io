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
  integrations: [mdx(), sitemap()],
  prefetch: false,
  build: {
    format: "directory",
  },
});
