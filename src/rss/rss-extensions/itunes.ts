import { z } from 'zod';

export const itunesItemExtensionSchema = z.object({
  'itunes:author': z.string().optional(),
  'itunes:duration': z.union([z.number(), z.string()]).optional(),
  'itunes:episodeType': z.string().optional(),
  'itunes:explicit':
    // I this this shouldn't really be a boolean but some feeds use that
    z.union([z.enum(['yes', 'no', 'clean']), z.boolean()]).optional(),
  'itunes:image': z
    .object({
      '@_href': z.string(),
    })
    .optional(),
  'itunes:keywords': z.string().optional(),
  'itunes:episode': z.number().optional(),
  'itunes:season': z.number().optional(),
  'itunes:subtitle': z.string().optional(),
  'itunes:summary': z.string().optional(),
  'itunes:title': z.string().optional(),
});

const itunesCategorySchema = z.object({
  '@_text': z.string(),
  'itunes:category': z
    .array(
      z.object({
        '@_text': z.string(),
      }),
    )
    .optional(),
});

export type ItunesCategory = z.infer<typeof itunesCategorySchema>;

export const itunesChannelExtensionSchema = z.object({
  'itunes:author': z.string().optional(),
  'itunes:block': z.string().optional(),
  'itunes:category': itunesCategorySchema.array().optional(),
  'itunes:explicit': z.string().optional(),
  'itunes:new-feed-url': z.string().optional(),
  'itunes:complete': z.enum(['yes', 'no']).optional(),
  'itunes:image': z
    .object({
      '@_href': z.string(),
    })
    .optional(),
  'itunes:keywords': z.string().optional(),
  'itunes:owner': z
    .object({
      'itunes:email': z.string(),
      'itunes:name': z.string(),
    })
    .optional(),
  'itunes:subtitle': z.string().optional(),
  'itunes:summary': z.string().optional(),
  'itunes:type': z.string().optional(),
});
