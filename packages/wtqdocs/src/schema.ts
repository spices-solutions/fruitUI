import { z, reference } from "astro:content";

export const docSchema = z
	.object({
		title: z.string().max(60, "it can't be more than 60 charcters").min(3),
		description: z
			.string()
			.max(160, "it can't be more than 160 charcters")
			.min(10),
		href: z.string(),
		OGImage: z.string()
			.default("/og.png")
			.optional(),
		category: z.string(),
		position: z.number().optional(),
		authors: reference("authors").optional().default("felfel"),
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
		OGImage: z.string()
			.default("/og.png")
			.optional(),
		tags: z.string(),
		position: z.number().optional(),
		authors: reference("authors").default("felfel").optional(),
		pubDate: z.date().transform((str) => new Date(str)),
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
