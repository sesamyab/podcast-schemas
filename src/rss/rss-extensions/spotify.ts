import { z } from 'zod';

export const spotifyChannelExtension = z.object({
  'spotify:access': z
    .object({
      partner: z.object({
        '@_id': z.string(),
      }),
      sandbox: z
        .object({
          '@_enabled': z.string(),
        })
        .optional(),
    })
    .optional(),
});

export const spotifyItemExtension = z.object({
  'spotify:access': z
    .object({
      entitlement: z.array(
        z.object({
          '@_name': z.string(),
        }),
      ),
    })
    .optional(),
});
