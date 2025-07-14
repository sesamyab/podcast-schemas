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

// TODO: All the nodes should be namespaced with 'sesamy:'. Remove the fallbacks once all systems are updated
export const sesamyProductSchema = z.object({
  id: z.string().optional(),
  'sesamy:id': z.string().optional(),
  title: z.string().optional(),
  'sesamy:title': z.string().optional(),
  description: z.string().optional(),
  'sesamy:description': z.string().optional(),
  image: z.string().optional(),
  'sesamy:image': z.string().optional(),
  link: z.string().optional(),
  'sesamy:link': z.string().optional(),
  'sesamy:sku': z.string().optional(),
  'sesamy:period': z
    .enum(['DAY', 'WEEK', 'MONTH', 'YEAR'])
    .transform(value => value.toUpperCase())
    .optional(),
  price: z.number().optional(),
  'sesamy:price': z.number().optional(),
  'sesamy:package-type': z
    .enum(['SINGLE', 'COLLECTION', 'MULTIPRODUCT'])
    .transform(value => value.toUpperCase())
    .optional(),
  'sesamy:purchase-type': z
    .enum(['OWN', 'LEASE', 'RECURRING'])
    .transform(value => value.toUpperCase())
    .optional(),
  'sesamy:purchase-url': z.string().optional(),
  time: z.number().optional(),
  'sesamy:time': z.number().optional(),
  'sesamy:selling-point': z.array(z.string()).optional(),
  // One of these two should be present
  currency: z.string().optional(),
  'sesamy:currency': z.string().optional(),
  'sesamy:sellable': z.boolean().optional(),
  'sesamy:hidden': z.boolean().optional(),
  'sesamy:price-override': z
    .array(
      z.object({
        'sesamy:price': z.number(),
        'sesamy:currency': z.string(),
        'sesamy:market': z.string(),
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
  'sesamy:user': z
    .object({
      'sesamy:id': z.string(),
      'sesamy:email': z.string(),
      'sesamy:name': z.string(),
    })
    .optional(),
  'sesamy:title': z.string().optional(),
  'sesamy:external-id': z
    .array(
      z.object({
        '@_id': z.string(),
        '@_value': z.string(),
      }),
    )
    .optional(),
});
