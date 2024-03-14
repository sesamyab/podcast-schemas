import { z } from 'zod';

export const acastItemExtensionSchema = z.object({
  'acast:episodeId': z.string().optional(),
  'acast:showId': z.string().optional(),
  'acast:episodeUrl': z.string().optional(),
  'acast:settings': z.string().optional(),
});

export const acastChannelExtensionSchema = z.object({
  'acast:showId': z.string().optional(),
  'acast:showUrl': z.string().optional(),
  'acast:network': z
    .object({
      '@_id': z.string(),
      '#text': z.string(),
      '@_slug': z.string(),
    })
    .optional(),
  'acast:importedFeed': z.string().optional(),
  'acast:episodeUrl': z.string().optional(),
  'acast:settings': z.string().optional(),
  'acast:signature': z
    .object({
      '@_key': z.string(),
      '#text': z.string(),
      '@_algorithm': z.string(),
    })
    .optional(),
});
