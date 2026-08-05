import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    description: z.string(),
    lang: z.enum(['en', 'fa']).optional().default('en'),
    altLink: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
