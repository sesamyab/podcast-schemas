import { z } from 'zod';

export const baseItemSchema = z.object({
  description: z.string().optional(),
  guid: z.object({
    '@_isPermaLink': z.boolean(),
    '#text': z.string(),
  }),
  'content:encoded': z.string().optional(),
  link: z.string().optional(),
  comments: z.string().optional(),
  category: z.array(z.string()).optional(),
  pubDate: z.string(),
  title: z.string().optional(),
  enclosure: z
    .array(
      z.object({
        '@_url': z.string(),
        '@_length': z.string(),
        '@_type': z.string(),
      }),
    )
    .optional(),
});
