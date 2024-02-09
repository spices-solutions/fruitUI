import { z, reference } from "astro:content";

export const docSchema = z
	.object({
		title: z.string().max(60, "it can't be more than 60 charcters").min(3),
		description: z
			.string()
			.max(160, "it can't be more than 160 charcters")
			.min(10),
		href: z.string(),
		image: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.default({ src: "./", alt: "this an image" })
			.optional(),
		category: z.string(),
		position: z.number().optional(),
		authors: reference("authors").optional().default("felfel"),
		date: z.date().transform((str) => new Date(str)).optional(),
		draft: z.boolean().optional().default(false),
	})
	.strict();


  export const blogSchema = z
	.object({
		title: z.string().max(60, "it can't be more than 60 charcters").min(3),
		description: z
			.string()
			.max(160, "it can't be more than 160 charcters")
			.min(10),
		href: z.string(),
		image: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.default({ src: "./", alt: "this an image" })
			.optional(),
		tags: z.string(),
		position: z.number().optional(),
		authors: reference("authors").default("felfel").optional(),
		date: z.date().transform((str) => new Date(str)),
		draft: z.boolean().optional().default(false),
	})
	.strict();

export const userSchema = ({ image }) => {
	z.object({
		name: z.string(),
		bio: z.string().optional(),
		email: z.string().email().optional(),
		role: z.string().optional(),
		profile: z.union([image(), z.string().url()]),
	}).strict();
};
