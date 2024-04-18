import { blogSchema, docSchema, authorSchema } from "wtqdocs/schema";
import { defineCollection } from "astro:content";

const docs = defineCollection({
  type: "content",
  schema: docSchema,
});

const blog = defineCollection({
  type: "content",
  schema: blogSchema,
});

const authors = defineCollection({
  type: "data",
  schema: authorSchema,
});

export const collections = { docs, blog, authors };
