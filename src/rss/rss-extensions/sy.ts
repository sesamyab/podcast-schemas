import { z } from 'zod';

export const syChannelExtensionSchema = z.object({
  'sy:updatePeriod': z.string().optional(),
  'sy:updateFrequency': z.number().optional(),
});
