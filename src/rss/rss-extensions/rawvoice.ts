import { z } from 'zod';

export const rawvoiceChannelExtensionSchema = z.object({
  'rawvoice:frequency': z.string().optional(),
  'rawvoice:location': z.string().optional(),
  'rawvoice:rating': z
    .object({
      '#text': z.string(),
      '@_tv': z.string(),
    })
    .optional(),
  'rawvoice:subscribe': z
    .object({
      '@_feed': z.string().optional(),
      '@_itunes': z.string().optional(),
      '@_html': z.string().optional(),
    })
    .optional(),
});

export const rawvoiceItemExtensionSchema = z.object({
  'rawvoice:isHd': z.enum(['yes', 'no']).optional(),
});
