// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    link: z.string().url(),
    github: z.string().url(),
    image: z.string(),
    tags: z.array(z.string()),
    dateRange: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
