import { z } from 'zod';
import { baseItemSchema } from '../item';
import { itunesItemExtensionSchema } from './itunes';
import { contentItemExtensionSchema } from './content';

export const sesamyItemExtension = z.object({
  '@_locked': z.boolean().optional(),
  '@_sample': z.boolean().optional(),
  '@_permissions': z.string().optional(),
});

export const sesamyItemSchema = baseItemSchema
  .extend(sesamyItemExtension.shape)
  .extend(itunesItemExtensionSchema.shape)
  .extend(contentItemExtensionSchema.shape);

export const sesamyProductSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  image: z.string().optional(),
  link: z.string().optional(),
  type: z.string(),
  period: z.enum(['day', 'week', 'month', 'year']).optional(),
  price: z.number(),
  purchase_type: z.enum(['own', 'lease', 'recurring']).optional(),
  time: z.number().optional(),
  currency: z.string(),
  'price-overrides': z
    .array(
      z.object({
        price: z.number(),
        currency: z.string(),
        market: z.string(),
      }),
    )
    .optional(),
});
export type SesamyProduct = z.infer<typeof sesamyProductSchema>;

export const sesamyChannelExtensionSchema = z.object({
  'sesamy:sesamy-item': z.array(sesamyItemSchema).optional(),
  'sesamy:feed-id': z.string().optional(),
  'sesamy:brand-id': z.string().optional(),
  'sesamy:vendor-id': z.string().optional(),
  'sesamy:product': z.array(sesamyProductSchema).optional(),
  'sesamy:private': z.string().optional(),
  'sesamy:user': z.string().optional(),
  'sesamy:title': z.string().optional(),
});
