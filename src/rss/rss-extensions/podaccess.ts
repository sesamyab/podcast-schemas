import { z } from 'zod';
import { baseItemSchema } from '../item';

export const podaccessItemSchemaExtensions = z.object({
  '@_locked': z.string(),
  '@_ads': z.string().optional(),
  '@_spons': z.string().optional(),
  '@_premium': z.string().optional(),
  '@_tier': z.string().optional(),
});

export const podaccessItemSchema = baseItemSchema.extend(podaccessItemSchemaExtensions.shape);
export type PodaccessItem = z.infer<typeof podaccessItemSchema>;

export const podaccessChannelSchema = z.object({
  'podaccess:item': z.array(podaccessItemSchema).optional(),
});
