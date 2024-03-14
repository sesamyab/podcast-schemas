import { z } from 'zod';
import { itunesChannelExtensionSchema, itunesItemExtensionSchema } from './rss-extensions/itunes';
import { sesamyChannelExtensionSchema, sesamyItemExtension } from './rss-extensions/sesamy';
import { spotifyChannelExtension, spotifyItemExtension } from './rss-extensions/spotify';
import { atomChannelExtensionSchema } from './rss-extensions/atom';
import { contentChannelExtensionSchema, contentItemExtensionSchema } from './rss-extensions/content';
import { googleChannelExtensionSchema } from './rss-extensions/google';
import { acastChannelExtensionSchema, acastItemExtensionSchema } from './rss-extensions/acast';
import { podaccessChannelSchema } from './rss-extensions/podacess';
import { baseItemSchema } from './item';

export const RssBooleanSchema = z.enum(['yes', 'no']);
export type RssBoolean = z.infer<typeof RssBooleanSchema>;

export const itemSchema = baseItemSchema
  .extend(itunesItemExtensionSchema.shape)
  .extend(contentItemExtensionSchema.shape)
  .extend(sesamyItemExtension.shape)
  .extend(spotifyItemExtension.shape)
  .extend(acastItemExtensionSchema.shape);

export type Item = z.infer<typeof itemSchema>;

export const channelSchema = z
  .object({
    title: z.string(),
    link: z.string().url(),
    generator: z.string().optional(),
    copyright: z.string().optional(),
    pubDate: z.string().optional(),
    ttl: z.number().optional(),
    image: z.object({
      url: z.string().url(),
      title: z.string(),
      link: z.string().url(),
    }),
    description: z.string().optional(),
    language: z.string().optional(),
    lastBuildDate: z.string().optional(),
    item: z.array(itemSchema),
  })
  .extend(atomChannelExtensionSchema.shape)
  .extend(contentChannelExtensionSchema.shape)
  .extend(sesamyChannelExtensionSchema.shape)
  .extend(spotifyChannelExtension.shape)
  .extend(itunesChannelExtensionSchema.shape)
  .extend(googleChannelExtensionSchema.shape)
  .extend(podaccessChannelSchema.shape)
  .extend(acastChannelExtensionSchema.shape);
export type Channel = z.infer<typeof channelSchema>;

export const rssSchema = z.object({
  channel: channelSchema,
  '@_version': z.literal('2.0'),
  '@_xmlns:sesamy': z.string().optional(),
  '@_xmlns:spotify': z.string().optional(),
  '@_xmlns:atom': z.literal('http://www.w3.org/2005/Atom').optional(),
  '@_xmlns:itunes': z.literal('http://www.itunes.com/dtds/podcast-1.0.dtd').optional(),
  '@_xmlns:googleplay': z.literal('http://www.google.com/schemas/play-podcasts/1.0').optional(),
  '@_xmlns:content': z.string().optional(),
  '@_xmlns:acast': z.literal('https://schema.acast.com/1.0/').optional(),
  '@_xmlns:media': z.literal('http://search.yahoo.com/mrss/').optional(),
  '@_xmlns:podaccess': z.literal('https://access.acast.com/schema/1.0/').optional(),
});
export type Rss = z.infer<typeof rssSchema>;

export const RssFeedSchena = z.object({
  rss: rssSchema,
  '?xml': z
    .object({
      '@_version': z.string(),
      '@_encoding': z.string().optional(),
    })
    .optional(),
  '?xml-stylesheet': z
    .object({
      '@_href': z.string(),
      '@_type': z.string(),
      '@_media': z.string(),
    })
    .optional(),
});
export type RssFeed = z.infer<typeof RssFeedSchena>;
