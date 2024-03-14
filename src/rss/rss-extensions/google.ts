import { z } from 'zod';

export const googleChannelExtensionSchema = z.object({
  'googleplay:block': z.string().optional(),
});
