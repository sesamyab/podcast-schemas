import { z } from 'zod';

export const contentItemExtensionSchema = z.object({
  'content:encoded': z.string().optional(),
});

export const contentChannelExtensionSchema = z.object({
  'content:encoded': z.string().optional(),
});
