import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";
import type { SchemaContext } from "astro:content";

const collectionSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    status: z.string(),
    hero: image().optional(),
    order: z.number().default(0),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
  });

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: collectionSchema,
});

const roll20Mods = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/roll20-mods" }),
  schema: collectionSchema,
});

const podcasts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/podcasts" }),
  schema: collectionSchema,
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }: SchemaContext) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.date(),
      category: z.string(),
      hero: image().optional(),
      heroAlt: z.string().optional(),
      heroForeground: image().optional(),
      heroForegroundAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { projects, posts, roll20Mods, podcasts };
