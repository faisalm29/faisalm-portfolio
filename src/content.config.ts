import { defineCollection, type ImageFunction } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const article = defineCollection({
  loader: glob({
    pattern: "**/index.{md,mdx}",
    base: "./src/data/article",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedDate: z.coerce.date(),
      categories: z.array(z.string()),
      source: z.string(),
      thumbnail: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const fundraisingCampaign = defineCollection({
  loader: glob({
    pattern: "**/index.{md,mdx}",
    base: "./src/data/fundraising-campaign",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedDate: z.coerce.date(),
      categories: z.array(z.string()),
      source: z.string(),
      thumbnail: image().optional(),
      totalDonation: z.string(),
      draft: z.boolean().default(false),
    }),
});

const pressRelease = defineCollection({
  loader: glob({
    pattern: "**/index.{md,mdx}",
    base: "./src/data/press-release",
  }),
  schema: ({ image }: { image: ImageFunction }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedDate: z.coerce.date(),
      categories: z.array(z.string()),
      publishedIn: z.array(
        z.object({
          name: z.string(),
          url: z.string(),
        }),
      ),
      thumbnail: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const socialMediaContent = defineCollection({
  loader: file("./src/data/social-media-contents/index.json"),
  schema: z.object({
    id: z.string(),
    url: z.string(),
    draft: z.boolean().default(false),
  }),
});

const workExperience = defineCollection({
  loader: file("./src/data/work-experience/index.json"),
  schema: z.object({
    draft: z.boolean().default(false),
    id: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    role: z.string(),
    company: z.string(),
    description: z.string(),
    skills: z.array(z.string()),
    url: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: file("./src/data/projects/index.json"),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().default(false),
      id: z.string(),
      name: z.string(),
      description: z.string(),
      thumbnail: image().optional(),
      skills: z.array(z.string()).optional(),
      url: z.string(),
    }),
});

const education = defineCollection({
  loader: file("./src/data/education/index.json"),
  schema: z.object({
    draft: z.boolean().default(false),
    id: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    institution: z.string(),
    major: z.string(),
    additionalInfo: z.string().optional(),
    url: z.string(),
  }),
});

const certifications = defineCollection({
  loader: file("./src/data/certifications/index.json"),
  schema: z.object({
    draft: z.boolean().default(false),
    id: z.string(),
    mayExpire: z.boolean(),
    acquiredDate: z.string().optional(),
    expirationDate: z.string().optional(),
    institution: z.string(),
    name: z.string(),
    credential: z.string(),
  }),
});

const skills = defineCollection({
  loader: file("./src/data/skills/index.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

export const collections = {
  article,
  fundraisingCampaign,
  pressRelease,
  socialMediaContent,
  workExperience,
  projects,
  education,
  certifications,
  skills,
};
