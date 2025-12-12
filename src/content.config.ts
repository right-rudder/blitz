import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/[^_]*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    // Additional SEO and schema fields
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    author: z.string().optional(),
    featured: z.boolean().optional(),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    relatedPosts: z.array(z.string()).optional(),
    // Schema.org specific fields
    keywords: z.array(z.string()).optional(),
    audience: z.string().optional(),
    difficulty: z.enum(["beginner", "intermediate", "advanced"]).optional(),
    // Social media fields
    socialImage: z.string().optional(),
    twitterTitle: z.string().optional(),
    twitterDescription: z.string().optional(),
  }),
});

const locations = defineCollection({
  loader: glob({
    base: "./src/content/pilot-training",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    city: z.string(),
    region: z.string(),
    landmark: z.string(),
  }),
});

export const collections = { blog, "pilot-training": locations };
