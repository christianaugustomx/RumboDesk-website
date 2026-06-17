# RumboDesk — Sitio web

Sitio de marketing público de [RumboDesk](https://rumbodesk.com): portal SaaS para operadores y agencias de viaje en LATAM.

**App (producto):** https://rumbodesk.app
**Marketing (este repo):** https://rumbodesk.com

## Stack

- [Astro 5](https://astro.build) — generación estática, SEO-first
- [Tailwind CSS 4](https://tailwindcss.com) — vía plugin de Vite
- i18n nativo de Astro — `es` (default, LATAM) + `en`
- Deploy en [Cloudflare Pages](https://pages.cloudflare.com) (CI desde `main`)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:4321

## Build de producción

```bash
npm run build
npm run preview
```

El output queda en `dist/`.

## Estructura

```
src/
├── components/       # Header, Footer, etc.
├── i18n/             # diccionarios ES/EN + helpers
├── layouts/          # BaseLayout con SEO y hreflang
├── pages/            # páginas en español (default)
│   └── en/           # páginas en inglés (prefijo /en/)
└── styles/           # global.css (Tailwind v4)
```

## Convenciones

- Toda página nueva tiene su pareja en `/en/`.
- URLs en español usan español (`/precios`, no `/pricing`). Mejor SEO local.
- Todo lo público es contenido SEO; nada que requiera login va aquí (eso vive en la app).
- Commits chicos, una página o cambio a la vez.

## Deploy

`git push origin main` → Cloudflare Pages hace build y publica en `rumbodesk.com`.
