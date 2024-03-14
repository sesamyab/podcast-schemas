import { z } from 'zod';

export const atomLinkSchema = z.object({
  '@_rel': z.string(),
  '@_type': z.string().optional(),
  '@_href': z.string(),
  '@_title': z.string().optional(),
});

export const atomChannelExtensionSchema = z.object({
  'atom:link': z.array(atomLinkSchema).optional(),
});
