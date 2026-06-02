import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";
import type { SchemaContext } from "astro:content";

const isAllowedOptionalLink = (value: string) =>
  /^https?:\/\/.+/i.test(value) || value.startsWith("/") || value.startsWith("#");

const optionalUrlSchema = z.preprocess(
  (value) => {
    if (typeof value === "string") {
      const trimmed = value.trim();

      if (trimmed === "") {
        return undefined;
      }

      return trimmed;
    }

    if (value == null) {
      return undefined;
    }

    return value;
  },
  z
    .string()
    .refine(isAllowedOptionalLink, {
      message:
        "Expected a URL/path starting with https://, http://, /, or #",
    })
    .optional(),
);

const versionEntrySchema = z.object({
  label: z.string().optional(),
  // Accept the misspelling for compatibility with existing/frontmatter drafts.
  lablel: z.string().optional(),
  version: z.string(),
  url: optionalUrlSchema,
});

const contributorSchema = z.object({ name: z.string(), url: z.string() });
const linkedItemSchema = z.object({ label: z.string(), url: optionalUrlSchema });

const collectionSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    postCategory: z.string().optional(),
    status: z.string().optional(),
    version: z.string().optional(),
    versions: z.array(versionEntrySchema).default([]),
    lastUpdated: z.preprocess((v) => (v == null ? undefined : v), z.date().optional()),
    credits: z.array(contributorSchema).default([]),
    developers: z.array(contributorSchema).default([]),
    // Backward compatibility while migrating older content frontmatter.
    maintainer: z.array(contributorSchema).optional(),
    compatibility: z.array(linkedItemSchema).default([]),
    requirements: z.array(linkedItemSchema).default([]),
    video: z.boolean().optional(),
    videoSrc: z.string().optional(),
    videoPoster: z.string().optional(),
    hero: image().optional(),
    heroForeground: image().optional(),
    heroForegroundAlt: z.string().optional(),
    heroAlt: z.string().optional(),
    indexMedia: image().optional(),
    indexMediaAlt: z.string().optional(),
    indexVideo: z.boolean().optional(),
    indexVideoSrc: z.string().optional(),
    order: z.number().default(0),
    featuredLinks: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
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

const gaming = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/gaming" }),
  schema: ({ image }: SchemaContext) =>
    collectionSchema({ image }).extend({
      tags: z.array(z.string()).default([]),
    }),
});

const dnd = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/dnd" }),
  schema: ({ image }: SchemaContext) =>
    collectionSchema({ image }).extend({
      tags: z.array(z.string()).default([]),
      gallery: z
        .array(z.object({ src: image(), alt: z.string() }))
        .optional(),
    }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }: SchemaContext) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.date(),
      category: z.string(),
      video: z.boolean().optional(),
      videoSrc: z.string().optional(),
      videoPoster: z.string().optional(),
      hero: image().optional(),
      heroAlt: z.string().optional(),
      heroForeground: image().optional(),
      heroForegroundAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = {
  projects,
  posts,
  roll20Mods,
  podcasts,
  gaming,
  dnd,
};
