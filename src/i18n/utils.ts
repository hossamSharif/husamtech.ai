import en, { type Dict } from './en';
import ar from './ar';

export const locales = ['en', 'ar'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'en';

const dicts: Record<Lang, Dict> = { en, ar };

export function isLang(value: string | undefined): value is Lang {
  return (locales as readonly string[]).includes(value ?? '');
}

/** Dictionary for a locale. */
export function t(lang: Lang): Dict {
  return dicts[lang];
}

export function dir(lang: Lang): 'rtl' | 'ltr' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

/** Localised path: lp('ar', '/saas') -> '/ar/saas/' */
export function lp(lang: Lang, path = '/'): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

/** Path of the current page without its locale prefix: '/ar/saas/' -> '/saas' */
export function stripLang(pathname: string): string {
  const rest = pathname.replace(/^\/(en|ar)(?=\/|$)/, '').replace(/\/+$/, '');
  return rest || '/';
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'ar' : 'en';
}

/** Used by every page under src/pages/[lang]/ */
export function langPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
