// src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    link: z.url(),
    github: z.url(),
    image: z.string(),
    tags: z.array(z.string()),
    dateRange: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
