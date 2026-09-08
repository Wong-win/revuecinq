import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum(["fashion", "beauty", "lifestyle", "technology"]),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    keywords: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { articles };
