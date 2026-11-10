# HusamTech website

Company website for HusamTech: SaaS software, mobile apps and about pages, in
English and Arabic (RTL), with light and dark themes.

- **Stack:** [Astro](https://astro.build) (static output) + Tailwind CSS 4. No UI framework,
  no animation library — pages are plain HTML and CSS with one small script.
- **Pages:** `/en/` and `/ar/` → home, `saas/`, `mobile-apps/`, `about/`.

## Run locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the production build
npm run check     # type-check
```

## Deploy to Vercel (automatic on every push)

One-time setup:

1. Go to <https://vercel.com/new> and sign in with GitHub.
2. Import the `husamtech.ai` repository. Vercel detects Astro; keep the default settings.
3. Click **Deploy**.

From then on:

- Every push to the **production branch** updates the live site.
- Every push to any other branch (or a pull request) gets its own preview URL.

The production branch is the repository's default branch. To change it, open the
Vercel project → **Settings → Git → Production Branch**.

Optional: when you attach a custom domain, add an environment variable
`SITE_URL` (e.g. `https://husamtech.ai`) in Vercel → Settings → Environment
Variables, so canonical links and the sitemap use it.

## Editing content

All text lives in two files with the same structure:

- `src/i18n/en.ts` — English
- `src/i18n/ar.ts` — Arabic

Company name, contact e-mail, services, projects and statistics are all there.
**The projects, numbers and e-mail address are sample content — replace them
with your real ones.**

## Project structure

```
src/
  i18n/          translations and language helpers
  layouts/       Base.astro — <head>, SEO tags, theme script, header and footer
  components/    Header, Footer, Hero visuals, cards, sections
  pages/[lang]/  index, saas, mobile-apps, about (built once per language)
  styles/        global.css — colour tokens (light/dark), components, animation
public/          favicon, social image, robots.txt
vercel.json      language redirect for "/", cache headers
.claude/skills/modern-design/   design-system rules used when extending the site
```

## Design system

Colours, spacing, motion, RTL and performance rules are documented in
`.claude/skills/modern-design/SKILL.md`. Follow it when adding pages or
components so they match in both themes and both languages.
