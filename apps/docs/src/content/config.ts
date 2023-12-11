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
      image: z
        .object({
          src: z.string(),
          alt: z.string(),
        })
        .default({ src: "./", alt: "this an image" })
        .optional(),
      category: z.string(),
      position: z.number(),
      // slug: z.string().url(),
      authors: reference("authors").optional().default("felfel"),
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
        bio: z.string().optional(),
        email: z.string().email().optional(),
        role: z.string().optional(),
        profile: z.union([image(), z.string().url()]),
      })
      .strict(),
});

export const collections = { docs, authors };
