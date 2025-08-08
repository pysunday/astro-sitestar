import { defineCollection, reference, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const themes = defineCollection({
  loader: glob({ pattern: '**/*.json', base: "./src/data/themes" }),
  schema: z.object({
    url: z.string().url(),
    name: z.string(),
    title: z.string(),
    desc: z.string(),
    typeUrl: z.string(),
    liveUrl: z.string(),
    type: z.enum(["free", "buy"]),
    github: z.object({
      html_url: z.string().url(),
      name: z.string(),
      full_name: z.string(),
      description: z.string().nullable(),
      stargazers_count: z.number(),
      created_at: z.string(),
      updated_at: z.string(),
      pushed_at: z.string(),
      git_url: z.string(),
      ssh_url: z.string(),
      clone_url: z.string(),
      homepage: z.string().or(z.literal("").or(z.null())).optional(),
    }).optional(),
    imgs: z.array(z.string().url()),
    update_time: z.coerce.date().optional(),
    article: z.string(),
  }),
});

// Export all collections
export const collections = { themes };
