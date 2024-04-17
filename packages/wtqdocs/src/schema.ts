import { z, reference } from "astro:content";

export const docSchema = z
  .object({
    title: z.string().max(60, "it can't be more than 60 characters").min(3),
    description: z
      .string()
      .max(160, "it can't be more than 160 characters")
      .min(10),
    href: z.string().optional(),
    OGImage: z.string().default("/og.png"),
    OGImageAlt: z
      .string()
      .default(
        "fruit UI text with white background design with pinky gradient"
      ),
    keywords: z.union([z.string(), z.array(z.string())]).optional(),
    category: z.string(),
    position: z.number().optional(),
    authors: reference("authors").optional(),
    draft: z.boolean().default(false),
  })
  .strict();

export const blogSchema = z
  .object({
    title: z.string().max(60, "it can't be more than 60 characters").min(3),
    description: z
      .string()
      .max(160, "it can't be more than 160 characters")
      .min(10),
    href: z.string().optional(),
    OGImage: z.string().default("/og.png"),
    OGImageAlt: z
      .string()
      .default(
        "fruit UI text with white background design with pinky gradient"
      ),
    keywords: z.union([z.string(), z.array(z.string())]).optional(),
    position: z.number().optional(),
    authors: reference("authors").optional(),
    pubDate: z.date().transform((str: Date) => new Date(str)),
    draft: z.boolean().default(false),
  })
  .strict();

export const authorSchema = ({ image }: { image: any }) => {
  z.object({
    name: z.string(),
    bio: z.string().optional(),
    email: z.string().email().optional(),
    role: z.string().optional(),
    profile: z.union([image(), z.string().url()]),
  }).strict();
};
