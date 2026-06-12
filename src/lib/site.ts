export const SITE_NAME = 'MidNite Shadow Online';
export const SITE_DESCRIPTION =
  'Gaming, tabletop worlds, Roll20 mods, STO Info and podcasting projects.';
export const SITE_AUTHOR = 'Steve Roberts';
export const FALLBACK_SITE = 'https://midniteshadow.online';

// Fediverse identity (used by the fediverse:creator meta tag for Mastodon
// link-preview attribution).
export const MASTODON_HANDLE = '@MidNiteShadow7@mastodon.social';
export const MASTODON_PROFILE = 'https://mastodon.social/@MidNiteShadow7';

// Public profiles for the same identity (schema.org sameAs). Community links
// such as the Discord invite are deliberately excluded.
export const SOCIAL_PROFILES = [
  'https://www.youtube.com/@SteveRobertsUK',
  'https://github.com/steverobertsuk',
  'https://www.facebook.com/steverobertsuk',
  'https://www.instagram.com/midniteshadow7/',
  'https://www.tiktok.com/@midniteshadowsteve',
  'https://bsky.app/profile/midniteshadow.online',
  MASTODON_PROFILE,
  'https://twitter.com/midniteshadow7',
  'https://www.threads.com/@midniteshadow7',
];

// Slug mirrors the derivation in scripts/generate-og-images.mjs
export function ogImageUrl(pathname: string, siteBase: URL | string): string {
  const pageSlug = pathname.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'default';
  return new URL(`/assets/og/${pageSlug}.png`, siteBase).href;
}
