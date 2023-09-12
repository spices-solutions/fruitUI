import { z, defineCollection } from 'astro:content';


const docs =  defineCollection({
    schema: z.object({
      // draft: z.boolean().default(true),
      title: z.string(),
      // date: z.date().transform((str) => new Date(str)),
      // seo: z.object({
      //   img: z.string(),
      //   desc: z.string().max(160, "description must be under 160 characters for better SEO performance"),
      // })
    }).strict()
  })

export const collections = { docs };