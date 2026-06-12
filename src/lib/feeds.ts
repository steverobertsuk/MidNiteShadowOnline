import { getCollection } from 'astro:content';

import { postIdToSlug } from './postCategory';

export {
  FALLBACK_SITE,
  SITE_AUTHOR as FEED_AUTHOR,
  SITE_DESCRIPTION as FEED_DESCRIPTION,
  SITE_NAME as FEED_TITLE,
} from './site';

export async function getFeedPosts() {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function postPath(postId: string): string {
  return `/posts/${postIdToSlug(postId)}/`;
}
