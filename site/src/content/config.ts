import { z, defineCollection } from 'astro:content';

const docs =  defineCollection({
    schema: z.object({
      title: z.string(),
      category: z.string(),
      path: z.string(),
      order: z.union([z.string(),z.number()]).default("abc"),
    }).strict()
  })

export const collections = { docs };