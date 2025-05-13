import { z } from 'zod';

export const podcastTypeSchema = z.enum(['EPISODIC', 'SERIAL']).transform(value => value.toUpperCase());
export const podcastBuyOptionTypeSchema = z.enum(['Recurring', 'Single Purchase', 'single']);
export const sesamyFeedEpisodeTypeSchema = z
  .enum(['full', 'trailer', 'bonus'])
  .transform(value => value.toLocaleLowerCase());
export const sesamyFeedContentTypeSchema = z.enum(['audio/mpeg']).transform(value => value.toLowerCase());

export const sesamyFeedOwnerSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
});

export const sesamyPriceOverrideSchema = z.object({
  price: z.number(),
  currency: z.string(),
  market: z.string(),
});

export const sesamyFeedEpisodeSchema = z.object({
  guid: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  descriptionWithHtml: z.string().optional(),
  summary: z.string().optional(),
  url: z.string().optional(),
  link: z.string().optional(),
  image: z.string().optional(),
  duration: z.number().optional(),
  isExplicit: z.boolean(),
  publishDate: z.string().optional(),
  episodeType: sesamyFeedEpisodeTypeSchema.optional(),
  contentType: sesamyFeedContentTypeSchema.optional(),
  contentLength: z.number().optional(),
  season: z.number().optional(),
  episode: z.number().optional(),
  isLocked: z.boolean(),
  isSample: z.boolean(),
  isSesamy: z.boolean(),
  permissions: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
});

export const sesamyFeedProductSchema = z.object({
  id: z.string(),
  description: z.string().default(''),
  title: z.string(),
  sellingPoints: z.array(z.string()).default([]),
  // @deprecated
  type: podcastBuyOptionTypeSchema.optional(),
  packageType: z.enum(['SINGLE', 'COLLECTION', 'MULTIPRODUCT']).transform(value => value.toUpperCase()),
  purchaseType: z.enum(['OWN', 'LEASE', 'RECURRING']).transform(value => value.toUpperCase()),
  period: z
    .enum(['DAY', 'WEEK', 'MONTH', 'YEAR'])
    .transform(value => value.toUpperCase())
    .optional(),
  time: z.number().optional(),
  currency: z.string(),
  price: z.number(),
  priceOverrides: z.array(sesamyPriceOverrideSchema).optional(),
  image: z.string().optional(),
});

export const sesamyFeedSchema = z.object({
  externalIds: z.record(z.string().optional()),
  title: z.string(),
  titleWithUsername: z.string(),
  link: z.string(),
  // @deprecated
  username: z.string().optional(),
  user: z
    .object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
    })
    .optional(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  descriptionWithHtml: z.string().optional(),
  summary: z.string().optional(),
  image: z.string().optional(),
  author: z.string().optional(),
  owner: sesamyFeedOwnerSchema.optional(),
  publishDate: z.string().optional(),
  language: z.string().optional(),
  rssUrl: z.string().optional(),
  copyright: z.string().optional(),
  isHidden: z.boolean(),
  isExplicit: z.boolean(),
  isComplete: z.boolean(),
  podcastType: podcastTypeSchema,
  totalSeasons: z.number(),
  episodes: z.array(sesamyFeedEpisodeSchema),
  totalEpisodes: z.number(),
  products: z.array(sesamyFeedProductSchema),
  categories: z.array(z.string()),
  sesamy: z.object({
    feedId: z.string().optional(),
    brandId: z.string().optional(),
    vendorId: z.string().optional(),
    isPrivate: z.boolean(),
  }),
});

export type PodcastType = z.infer<typeof podcastTypeSchema>;
export type PodcastBuyOptionType = z.infer<typeof podcastBuyOptionTypeSchema>;
export type SesamyFeedEpisodeType = z.infer<typeof sesamyFeedEpisodeTypeSchema>;
export type SesamyFeedContentType = z.infer<typeof sesamyFeedContentTypeSchema>;
export type SesamyFeedOwner = z.infer<typeof sesamyFeedOwnerSchema>;
export type SesamyPriceOverride = z.infer<typeof sesamyPriceOverrideSchema>;
export type SesamyFeedEpisode = z.infer<typeof sesamyFeedEpisodeSchema>;
export type SesamyFeedProduct = z.infer<typeof sesamyFeedProductSchema>;
export type SesamyFeed = z.infer<typeof sesamyFeedSchema>;
