import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().optional().default("Michael Johnsey"),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/talks" }),
  schema: z.object({
    title: z.string(),
    talkGivenDate: z.date(),
    description: z.string(),
    url: z.string().url().optional(),
    meetupGroup: z.string().optional().default("DevMemphis"),
  }),
});

export const collections = {
  posts,
  talks,
};
