# podcast-schemas

A TypeScript library providing Zod schemas and type definitions for podcast feeds, supporting various formats and extensions.

## Overview

This library helps you work with podcast feeds by providing:

1. **Validation** - Zod schemas for validating podcast feed structures
2. **Type Safety** - TypeScript types generated from the schemas
3. **Format Support** - Schemas for both XML RSS feeds and JSON formats
4. **Extension Support** - Support for common podcast feed extensions

## Features

### RSS Feed Schemas

The library includes comprehensive schemas for RSS podcast feeds with support for:

- Core RSS 2.0 podcast feed elements
- XML namespaces and attributes
- Feed channels and items with proper validation

### Extensions Support

Built-in support for major podcast feed extensions:

- iTunes (`itunes`) - Apple Podcasts metadata
- Google Play (`googleplay`) - Google Podcasts metadata
- Content (`content`) - Enhanced content descriptions
- Atom (`atom`) - Web feed standard elements
- Sesamy (`sesamy`) - Sesamy-specific podcast elements
- Acast (`acast`) - Acast-specific extensions
- Spotify (`spotify`) - Spotify-specific podcast metadata
- PodAccess (`podaccess`) - Podcast access control extensions
- Media (`media`) - Media RSS specification
- Creative Commons (`creativeCommons`) - Licensing information
- Syndication (`sy`) - Syndication information
- RawVoice (`rawvoice`) - BluBrry PowerPress extensions
- Podcast Index (`podcast`) - Podcast Namespace extensions
- Omny (`omny`) - Omny Studio extensions

### JSON Feed Formats

The library also provides schemas for JSON-based podcast feeds:

- **xml-to-json** - Direct mapping of XML RSS feeds to JSON format
- **jsonfeed** - Support for the JSON Feed format specification
- **sesamy** - Sesamy-specific JSON feed format with support for products, pricing, and subscription models

## Usage

Import and use the schemas and types in your TypeScript projects:

```typescript
import { rssFeedSchema, itemSchema, sesamyFeedSchema, type RssFeed, type Item } from '@sesamy/podcast-schemas';

// Validate an RSS feed
const isValidFeed = rssFeedSchema.safeParse(myFeedData);

// Type-safe access to podcast feed data
const typedFeed: RssFeed = rssFeedSchema.parse(myFeedData);
```

## Installation

```bash
npm install @sesamy/podcast-schemas
# or
yarn add @sesamy/podcast-schemas
```
