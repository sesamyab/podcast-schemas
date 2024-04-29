import { z } from 'zod';

export const creativeCommonsChannelExtensionSchema = z.object({
  'creativeCommons:license': z.string().optional(),
});
