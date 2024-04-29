import { z } from 'zod';

export const podcastChannelExtensionSchema = z.object({
  'podcast:funding': z
    .object({
      '#text': z.string(),
      '@_url': z.string(),
    })
    .optional(),
});

export const podcastItemExtensionSchema = z.object({
  'podcast:episode': z.number().optional(),
  'podcast:transcript': z
    .object({
      '@_url': z.string(),
      '@_type': z.enum(['text/html']).optional(),
    })
    .optional(),
  'podcast:person': z
    .array(
      z.object({
        '#text': z.string(),
        '@_role': z.string(),
        '@_href': z.string(),
        '@_img': z.string(),
      }),
    )
    .optional(),
});
