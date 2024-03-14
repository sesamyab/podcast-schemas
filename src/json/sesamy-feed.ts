import { z } from 'zod';

const podcastTypeSchema = z.enum(['episodic', 'serial']);
const podcastBuyOptionTypeSchema = z.enum(['Recurring', 'Single Purchase', 'single']);
const sesamyFeedEpisodeTypeSchema = z.enum(['full', 'trailer']);
const sesamyFeedContentTypeSchema = z.enum(['audio/mpeg']);

const sesamyFeedOwnerSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
});

const sesamyPriceOverrideSchema = z.object({
  price: z.number(),
  currency: z.string(),
  market: z.string(),
});

const sesamyFeedEpisodeSchema = z.object({
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
  permissions: z.array(z.string()),
});

const sesamyFeedProductSchema = z.object({
  id: z.string(),
  description: z.string().optional(),
  title: z.string(),
  type: podcastBuyOptionTypeSchema,
  currency: z.string(),
  price: z.number(),
  priceOverrides: z.array(sesamyPriceOverrideSchema).optional(),
  image: z.string().optional(),
});

const sesamyFeedSchema = z.object({
  externalIds: z.record(z.string().optional()),
  title: z.string(),
  titleWithUsername: z.string(),
  link: z.string(),
  username: z.string().optional(),
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
