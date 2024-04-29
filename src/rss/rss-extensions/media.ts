import { z } from 'zod';

export const mediaItemExtensionSchema = z.object({
  'media:content': z
    .object({
      'media:title': z
        .object({
          '#text': z.string(),
          '@_type': z.string(),
        })
        .optional(),
      'media:description': z
        .object({
          '#text': z.string(),
          '@_type': z.string(),
        })
        .optional(),
      'media:keywords': z.string().optional(),
      'media:thumbnail': z
        .object({
          '@_url': z.string(),
          '@_width': z.string(),
          '@_height': z.string(),
        })
        .optional(),
      'media:rating': z
        .array(
          z.object({
            '#text': z.string(),
            '@_scheme': z.string(),
          }),
        )
        .optional(),
      'media:category': z
        .object({
          '#text': z.string(),
          '@_scheme': z.string(),
          '@_label': z.string(),
        })
        .optional(),
      'media:credit': z
        .array(
          z.object({
            '#text': z.string(),
            '@_role': z.string(),
          }),
        )
        .optional(),
      '@_url': z.string(),
      '@_fileSize': z.string(),
      '@_type': z.string(),
      '@_medium': z.string(),
    })
    .optional(),
});
