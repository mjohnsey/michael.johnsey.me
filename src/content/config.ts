import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().optional().default("Michael Johnsey"),
  }),
});

const talks = defineCollection({
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
