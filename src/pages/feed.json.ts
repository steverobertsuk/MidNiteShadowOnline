import type { APIRoute } from 'astro';

import {
  FALLBACK_SITE,
  FEED_AUTHOR,
  FEED_DESCRIPTION,
  FEED_TITLE,
  getFeedPosts,
  postPath,
} from '../lib/feeds';

// JSON Feed 1.1 (https://www.jsonfeed.org/version/1.1/) over the posts collection.
export const GET: APIRoute = async (context) => {
  const site = context.site ?? new URL(FALLBACK_SITE);
  const posts = await getFeedPosts();

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: FEED_TITLE,
    home_page_url: site.href,
    feed_url: new URL('/feed.json', site).href,
    description: FEED_DESCRIPTION,
    icon: new URL('/assets/icons/favicon-512x512.png', site).href,
    favicon: new URL('/assets/icons/favicon-64x64.png', site).href,
    language: 'en-GB',
    authors: [{ name: FEED_AUTHOR, url: site.href }],
    items: posts.map((post) => {
      const url = new URL(postPath(post.id), site).href;
      return {
        id: url,
        url,
        title: post.data.title,
        summary: post.data.summary,
        content_text: post.data.summary,
        date_published: post.data.date.toISOString(),
        tags: [post.data.category, ...post.data.tags],
      };
    }),
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: { 'Content-Type': 'application/feed+json; charset=utf-8' },
  });
};
