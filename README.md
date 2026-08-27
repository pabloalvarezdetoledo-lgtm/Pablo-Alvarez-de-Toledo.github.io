# Pablo Álvarez de Toledo — personal academic & professional site

An academic repository, professional portfolio and structured-classes site for Pablo Álvarez de Toledo, covering economics, international finance, corporate finance, econometrics, quantitative finance and related essays (political economy, philosophy, legal philosophy).

Built with [Astro](https://astro.build), Content Collections, Markdown/MDX, and plain CSS. No React, no CMS, no database — content is edited as files in this repository.

## 1. Purpose

The site serves four connected purposes: an academic archive (**Research**), a recruiter-facing profile (home, **Portfolio**, **CV**), a structured teaching resource (**Classes**), and an editorial essay collection (**Essays**), organised so financial/economic/quantitative work leads and broader intellectual interests (political economy, philosophy, legal philosophy) sit in their own clearly labelled section.

## 2. Technology

- **Astro 5** with strict TypeScript and the Content Layer API (`src/content.config.ts`, `glob()` loaders — no deprecated APIs).
- **Content Collections**: `research`, `portfolio`, `essays`, `courses`, `lessons`, each a folder of Markdown/MDX files under `src/content/<collection>/<locale>/`.
- **Plain CSS** with design tokens (`src/styles/tokens.css`) — no Tailwind, no component library.
- **`@astrojs/mdx`**, **`@astrojs/sitemap`**, **`@astrojs/rss`** integrations.
- **GitHub Actions** (`.github/workflows/deploy.yml`) building and deploying to **GitHub Pages**.
- Manual English/Spanish i18n (no i18n framework dependency) via `src/i18n/`.

## 3. Installation

Requires the current Node.js LTS (Node 20 or 22) and npm.

```bash
npm install
```

If `node`/`npm` are not recognised in PowerShell, install Node.js LTS from [nodejs.org](https://nodejs.org) or via `winget install OpenJS.NodeJS.LTS`, then open a new terminal.

## 4. Local development

```bash
npm run dev
```

Opens a dev server (default `http://localhost:4321`). The homepage redirects `/` to `/en/`.

## 5. Production build

```bash
npm run build
```

This runs `astro check` (TypeScript + content schema validation) and then `astro build`, producing static output in `dist/`. Preview it locally with:

```bash
npm run preview
```

## 6. Project structure

```
src/
  site.config.ts        Central personal info, links, hero copy, category themes (EDIT HERE)
  i18n/                  Locale config, UI-string dictionaries, essay-category intros
  content.config.ts      Content collection schemas (research, portfolio, essays, courses, lessons)
  content/               All content files, one folder per collection, one subfolder per locale
    research/en|es/*.md
    portfolio/en|es/*.md
    essays/en|es/*.md
    courses/en|es/*.md
    lessons/en|es/*.md
  components/            Reusable Astro components (cards, filters, SEO, structured data, etc.)
  layouts/BaseLayout.astro
  lib/                    Small helpers: url/base-path, content lookups, related-content resolution, structured data
  pages/
    en/ ...               English routes
    es/ ...               Spanish routes
    404.astro
public/
  files/cv, files/research, files/portfolio   Downloadable PDFs (add your own)
  og/default.svg          Placeholder social-share image
  robots.txt
.github/workflows/deploy.yml
```

## 7. Editing personal information

Everything editable and reusable sitewide lives in **[`src/site.config.ts`](src/site.config.ts)**:

- `person` — name, email, LinkedIn, GitHub, CV file path. Replace the `PLACEHOLDER-*` URLs and the placeholder email.
- `heroCopy` — the homepage headline and supporting statement, in English and Spanish, both explicitly marked as **temporary draft copy** (`isDraft: true`). Replace both languages together.
- `bio` — About-page education/experience bullet points, each with a `TODO(pablo)` placeholder detail.
- `categoryThemes` — the single source of truth for every Research/Essay category's name (EN/ES), accent colour and soft background. Change a colour here and it updates everywhere.

UI strings (navigation labels, button text, empty-state messages, etc.) live in **[`src/i18n/dictionary.ts`](src/i18n/dictionary.ts)** — one object per locale.

## 8. How to replace the homepage portrait

The homepage and About page currently show a typographic placeholder (the PAT monogram in a dashed box) with a `TODO(pablo)` note, because no photograph has been supplied.

To add a real portrait:

1. Save the photo (already cropped, natural, editorial style — see § 14 of the original brief) into `src/assets/` — e.g. `src/assets/portrait-home.jpg`.
2. In `src/pages/en/index.astro` (and `es/index.astro`), import it: `import portrait from "@/assets/portrait-home.jpg";`
3. Replace the `<div class="hero__portrait">` placeholder block with a `<ResponsiveImage src={portrait} alt="..." loading="eager" />` (see `src/components/ResponsiveImage.astro`).
4. Write real, specific alt text — not "photo of Pablo".

## 9. How to add a research paper

1. Create a Markdown file at `src/content/research/en/<slug>.md` (and, when translated, `src/content/research/es/<slug>.md`).
2. Give both language versions **the same `translationKey`** so the language selector and hreflang tags link them together.
3. Fill in the frontmatter fields defined in `src/content.config.ts` (title, description, date, category, tags, status, etc.). Use `status: "draft"`, `"working-paper"`, `"forthcoming"` or `"published"` honestly.
4. Write the abstract/research question/methodology/findings only once you actually have them — leave a `TODO(pablo): ...` string rather than inventing content.
5. The Markdown body below the frontmatter is supplementary text (e.g. "About this entry" notes); it is not required to duplicate the structured fields above it.

The page is generated automatically at `/en/research/<slug>/` — no page template to touch.

## 10. How to add a PDF

1. Put the file in `public/files/research/` (or `public/files/portfolio/` for a portfolio project).
2. Reference it from the frontmatter as `pdf: "/files/research/your-file.pdf"` (a root-relative path — the site's base path is added automatically).
3. The "Download PDF" button appears automatically once `pdf` is set.

## 11. How to add an essay

Same mechanism as research, in `src/content/essays/en|es/<slug>.md`, but with a required `category` field (one of the seven essay categories — see § 12) instead of a research category, and `problem`/`approach`/`result` fields are not used (essays don't have them; research/portfolio do).

## 12. How to add an Essay category

The seven categories (Economics, Econometrics, Finance & Valuation, Monetary Economics, Political Economy, Philosophy, Legal Philosophy) are centrally defined:

1. Add the category key, EN/ES names and accent colours to `categoryThemes` in `src/site.config.ts`.
2. Add its URL slugs (EN/ES) to `essayCategorySlugs` in `src/i18n/config.ts`.
3. Add its editorial introduction (EN/ES) to `src/i18n/essayCategoryIntros.ts`.
4. Add the new key to the `category` enum in the `essays` collection schema in `src/content.config.ts`.

The category landing pages (`/en/essays/<category>/`, `/es/ensayos/<category>/`) are generated automatically for every key.

## 13. How to add a portfolio project

Create `src/content/portfolio/en|es/<slug>.md` with `problem`, `approach`, `result`, `tools`, `skills`. Never write a price target, an investment recommendation, or a result that wasn't actually produced — mark unfinished sections with `TODO(pablo): ...` instead, as the BBVA/Repsol drafts do.

## 14. How to create a course and lesson

1. Create `src/content/courses/en|es/<slug>.md` with `modules: [{ title, description, lessons: [<lesson translationKey>, ...] }, ...]`.
2. For each lesson, create `src/content/lessons/en|es/<slug>.md` with `course` set to the **course's `translationKey`** (not its slug), `module` set to the module title text, and `order` for its position.
3. Leave `youtubeId` unset until a lesson is actually recorded — the page will show "Video recording not yet available" instead of a broken embed.
4. Video embeds use `youtube-nocookie.com` automatically (see `src/components/YouTubeEmbed.astro`) — just set `youtubeId` to the video ID once it exists.

## 15. How to add a cover image and credits

Every collection schema supports `cover`, `coverAlt` (required if `cover` is set), `coverCaption`, `coverCredit`, `coverSource`, `coverLicence`, `focalPoint`. Put the source image anywhere under `src/content/<collection>/<locale>/` (or `src/assets/`) and reference it with a relative path in frontmatter, e.g. `cover: ./cover.jpg`. Only use photos Pablo owns, original graphics, or properly licensed/public-domain material — never anything copied from a Google Images search — and preserve `coverSource`/`coverLicence`. If `cover` is omitted, an elegant typographic cover (title + category + PAT monogram) is generated automatically — never a broken image.

## 16. How to add a translation

1. Give the English and Spanish files of the same piece **identical `translationKey` values**. This is what lets the language selector, hreflang tags and "related content" links jump to the correct equivalent page.
2. If only one language exists (as with "El derecho a equivocarse", Spanish only), the language selector falls back to that section's index page in the other language rather than a broken link, and `documentLanguage` shows the reader which language the piece was actually written in.
3. New UI strings go in both locale blocks of `src/i18n/dictionary.ts`.

## 17. How to update the CV

Replace `public/files/cv/pablo-alvarez-de-toledo-cv.pdf` with the current PDF (same filename), or update `person.cvPath` in `src/site.config.ts` if you use a different filename. The "Download CV" button on the homepage, About and CV pages all read from this one config value.

## 18. How to deploy through GitHub Pages

This repository (`Pablo-Alvarez-de-Toledo.github.io`) does not match its GitHub account name (`pabloalvarezdetoledo-lgtm`), so GitHub Pages serves it as a **project site**, not a root user site. `astro.config.mjs` is set accordingly:

```js
site: "https://pabloalvarezdetoledo-lgtm.github.io",
base: "/Pablo-Alvarez-de-Toledo.github.io/",
```

To deploy:

1. In the repository's GitHub Settings → Pages, set **Source** to **GitHub Actions**.
2. Push to `main`. `.github/workflows/deploy.yml` installs dependencies, runs `npm run build` (which includes `astro check`), and deploys `dist/` via the official `actions/upload-pages-artifact` + `actions/deploy-pages` actions.
3. The site will be live at `https://pabloalvarezdetoledo-lgtm.github.io/Pablo-Alvarez-de-Toledo.github.io/`.

If you later rename the repository to `pabloalvarezdetoledo-lgtm.github.io` (or rename the GitHub account to match this repo), GitHub Pages becomes a root user site instead. In that case, update `astro.config.mjs` to `base: "/"` and update the hardcoded canonical `site` value, then re-run a build and check all internal links still resolve (they all go through `withBase()`, so this is a one-line change).

## 19. How to connect a custom domain

When ready to move to a custom domain (e.g. `pabloalvarezdetoledo.com`):

1. Add a `public/CNAME` file containing just the domain name.
2. In `astro.config.mjs`, set `site: "https://pabloalvarezdetoledo.com"` and `base: "/"`.
3. At your DNS provider, add the records GitHub documents for [custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) (an `ALIAS`/`ANAME`/`A` record set, or a `CNAME` record for a subdomain).
4. In the repository's GitHub Settings → Pages, enter the custom domain and enable "Enforce HTTPS" once DNS has propagated.
5. Re-run `npm run build` and redeploy; check the sitemap, canonical URLs and hreflang tags all reflect the new domain (they're derived from `astro.config.mjs`, so this should need no further edits).

This repository does **not** currently include a `CNAME` file or purchased domain — that step is left to Pablo.

## Validation performed

- `astro check` (TypeScript + content schema validation): **0 errors**.
- `astro build`: **51 pages built successfully**, including both locales, all essay category pages (with correct empty states where no essay yet exists), all research/portfolio/course/lesson detail pages, RSS feeds and the sitemap.
- Smoke-tested via `astro preview`: homepage, a translated research page, a lesson page, and an unknown path (correctly returns HTTP 404) all resolve under the configured base path.
- Scanned the full `dist/` output for `undefined`, `[object Object]` and `NaN` leaks: none found.

## What's still a placeholder

Search the codebase for `TODO(pablo)` to find every explicitly-marked placeholder: the hero headline/statement, the About/CV biography bullets, the BBVA/Repsol equity research write-ups (problem/approach/result), the thesis abstract/findings, the forthcoming legal-personality paper, "El derecho a equivocarse" (structural draft only), the demo course's four lessons (no recordings), the CV PDF, and the LinkedIn/GitHub/email contact details. None of these contain fabricated results, recommendations or credentials — they are honestly marked as pending.
