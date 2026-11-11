import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(), // one line: what it is
    outcome: z.string(), // one line: what it achieved
    kind: z.enum(['Production', 'Research', 'Independent']),
    where: z.string(),
    period: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    order: z.number(),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { work };
