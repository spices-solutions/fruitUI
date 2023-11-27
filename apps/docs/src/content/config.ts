import { z, defineCollection, reference } from "astro:content";

const docs = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string().max(60, "it can't be more than 60 charcters").min(3),
      description: z
        .string()
        .max(160, "it can't be more than 160 charcters")
        .min(10),
      // image: z.array(
      //   src: z.string(),
      //   alt: z.string(),
      // ),
      category: z.string(),
      // slug: z.string().url(),
      authors: reference("authors"), 
      date: z.date(),
      draft: z.boolean().optional().default(false),
      order: z.union([z.string(), z.number()]).default("abc"),
    })
    .strict(),
});

const authors = defineCollection({
  type: "data",

  schema: ({ image }) =>
    z
      .object({
        name: z.string(),
        bio: z.string(),
        // email: z.string().email(),
        role: z.string(),
        profile: z.string(),
      })
      .strict(),
});

export const collections = { docs,authors };
