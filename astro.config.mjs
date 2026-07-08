import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rumbodesk.com',
  trailingSlash: 'never',
  // Flat .html files → Cloudflare Pages sirve URLs sin barra final
  // (evita el redirect 308 /producto → /producto/ y alinea el canonical).
  build: {
    format: 'file',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-MX',
          en: 'en-US',
        },
      },
      serialize(item) {
        // Home con prioridad máxima; legales más bajas.
        if (item.url === 'https://rumbodesk.com/' || item.url === 'https://rumbodesk.com/en') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (/\/(privacidad|terminos|privacy|terms)$/.test(item.url)) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        } else {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
