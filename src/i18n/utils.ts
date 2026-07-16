import { defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'en') return 'en';
  return defaultLang;
}

/** Map of `/precios` ↔ `/en/pricing` for hreflang and lang switcher. */
export const alternatePaths: Record<string, { es: string; en: string }> = {
  home:     { es: '/',                en: '/en' },
  product:  { es: '/producto',        en: '/en/product' },
  howItWorks: { es: '/como-funciona', en: '/en/how-it-works' },
  pricing:  { es: '/precios',         en: '/en/pricing' },
  agencies: { es: '/para-agencias',   en: '/en/for-agencies' },
  operators:{ es: '/para-operadores', en: '/en/for-operators' },
  blog:     { es: '/blog',            en: '/en/blog' },
  contact:  { es: '/contacto',        en: '/en/contact' },
  privacy:  { es: '/privacidad',      en: '/en/privacy' },
  terms:    { es: '/terminos',        en: '/en/terms' },
};

export type PageKey = keyof typeof alternatePaths;
