import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Content Layer (Astro 5): carga los .mdx desde src/content/blog.
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(75),
    seoTitle: z.string().max(60).optional(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Equipo RumboDesk'),
    category: z.enum(['Operación', 'IA', 'Guías', 'Producto', 'Operations', 'AI', 'Guides', 'Product']),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    canonicalURL: z.string().url().optional(),
    draft: z.boolean().default(false),
    lang: z.enum(['es', 'en']).default('es'),
    // id (filename sin extensión) del post equivalente en el otro idioma, si existe.
    translationSlug: z.string().optional(),
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        }),
      )
      .default([]),
  }),
});

export const collections = { blog };
