export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const languageFlags = {
  es: '🇲🇽',
  en: '🇺🇸',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const routes = {
  es: {
    home: '/',
    product: '/producto',
    howItWorks: '/como-funciona',
    pricing: '/precios',
    agencies: '/para-agencias',
    operators: '/para-operadores',
    blog: '/blog',
    contact: '/contacto',
  },
  en: {
    home: '/en',
    product: '/en/product',
    howItWorks: '/en/how-it-works',
    pricing: '/en/pricing',
    agencies: '/en/for-agencies',
    operators: '/en/for-operators',
    blog: '/en/blog',
    contact: '/en/contact',
  },
} as const;

export const ui = {
  es: {
    'meta.locale': 'es_MX',
    'brand.lema': 'Pon tu negocio en rumbo.',
    'nav.product': 'Producto',
    'nav.howItWorks': 'Cómo funciona',
    'nav.pricing': 'Precios',
    'nav.agencies': 'Agencias',
    'nav.operators': 'Operadores',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.login': 'Iniciar sesión',
    'nav.cta': 'Probar gratis',
    'footer.tagline': 'El portal donde tus reservas se ordenan solas.',
    'footer.product': 'Producto',
    'footer.company': 'Empresa',
    'footer.legal': 'Legales',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.copy': '© 2026 RumboDesk. Hecho en México para LATAM.',
  },
  en: {
    'meta.locale': 'en_US',
    'brand.lema': 'Put your business on course.',
    'nav.product': 'Product',
    'nav.howItWorks': 'How it works',
    'nav.pricing': 'Pricing',
    'nav.agencies': 'Agencies',
    'nav.operators': 'Operators',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.login': 'Log in',
    'nav.cta': 'Try free',
    'footer.tagline': 'The portal where your bookings organize themselves.',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.copy': '© 2026 RumboDesk. Built in Mexico for LATAM.',
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)['es']): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}
