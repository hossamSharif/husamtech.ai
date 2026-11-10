// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL can be set in Vercel (e.g. https://husamtech.ai). Otherwise the
// Vercel production domain is used, and finally a sensible default.
const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://husamtech.ai');

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', ar: 'ar' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
