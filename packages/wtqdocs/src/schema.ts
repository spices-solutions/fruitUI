import { z, reference } from "astro:content";

export const docSchema = z
	.object({
		title: z.string().max(60, "it can't be more than 60 characters").min(3),
		description: z
			.string()
			.max(160, "it can't be more than 160 characters")
			.min(10),
		href: z.string(),
		OGImage: z.string().default("/og.png"),
		category: z.string(),
		position: z.number().optional(),
		authors: reference("authors").optional(),
		draft: z.boolean().optional().default(false),
	})
	.strict();

export const blogSchema = z
	.object({
		title: z.string().max(60, "it can't be more than 60 characters").min(3),
		description: z
			.string()
			.max(160, "it can't be more than 160 characters")
			.min(10),
		href: z.string(),
		OGImage: z.string().default("/og.png"),
		tags: z.string(),
		position: z.number().optional(),
		authors: reference("authors").optional(),
		pubDate: z.date().transform((str:string) => new Date(str)),
		draft: z.boolean().optional().default(false),
	})
	.strict();

export const authorSchema = ({ image }) => {
	z.object({
		name: z.string(),
		bio: z.string().optional(),
		email: z.string().email().optional(),
		role: z.string().optional(),
		profile: z.union([image(), z.string().url()]),
	}).strict();
};
