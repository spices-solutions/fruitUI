import { slugify } from 'astro-toolkit/utils';
import { reference, z } from 'astro:content'

export const docSchema = ({image}) => z
  .object({
    title: z.string().max(60, 'it can\'t be more than 60 characters').min(3),
    description: z
      .string()
      .max(160, 'it can\'t be more than 160 characters')
      .min(10),
    href: z.string().optional(),
    image: z.object({ src: z.union([image(), z.string().url()]), alt: z.string()}).optional(),
    keywords: z.union([z.string(), z.array(z.string())]).optional(),
    category: z.string(),
    position: z.number().optional(),
    authors: reference('authors').optional(),
    draft: z.boolean().default(false),
  })
  .strict()
  .transform((data) => ({
    ...data,
    link: `${data.href ?? `${data.category}/${slugify(data.title)}`}`,
  }));

export const blogSchema = ({image}) => z
  .object({
    title: z.string().max(60, 'it can\'t be more than 60 characters').min(3),
    description: z
      .string()
      .max(160, 'it can\'t be more than 160 characters')
      .min(10),
    href: z.string().optional(),
    image: z.object({ src: z.union([image(), z.string().url()]), alt: z.string()}).optional(),
    keywords: z.union([z.string(), z.array(z.string())]).optional(),
    position: z.number().optional(),
    authors: reference('authors').optional(),
    pubDate: z.date().transform((str: Date) => new Date(str)),
    draft: z.boolean().default(false),
  })
  .strict()
  .transform((data) => ({
    ...data,
    link: data.href ?? `/${slugify(data.title)}`,
  }));

export function authorSchema({ image }: { image: any }) {
  z.object({
    name: z.string(),
    bio: z.string().optional(),
    email: z.string().email().optional(),
    role: z.string().optional(),
    profile: z.union([image(), z.string().url()]),
  }).strict()
}
