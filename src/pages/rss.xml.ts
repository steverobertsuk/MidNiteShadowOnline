import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';

import { FALLBACK_SITE, FEED_DESCRIPTION, FEED_TITLE, getFeedPosts, postPath } from '../lib/feeds';

export const GET: APIRoute = async (context) => {
  const posts = await getFeedPosts();

  return rss({
    title: FEED_TITLE,
    description: FEED_DESCRIPTION,
    site: context.site ?? FALLBACK_SITE,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      link: postPath(post.id),
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: '<language>en-gb</language>',
  });
};
