import { z } from 'zod';

export const omnyItemExtensionSchema = z.object({
  'omny:clipId': z.string().optional(),
  'omny:clipCustomField': z
    .array(
      z.object({
        '@_key': z.string(),
        '@_value': z.string(),
      }),
    )
    .optional(),
});

export const omnyChannelExtensionSchema = z.object({
  'omny:organizationId': z.string().optional(),
  'omny:networkId': z.string().optional(),
  'omny:programId': z.string().optional(),
  'omny:playlistId': z.string().optional(),
  'omny:programCustomField': z
    .array(
      z.object({
        '@_key': z.string(),
        '@_value': z.string(),
      }),
    )
    .optional(),
});
