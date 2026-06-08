export function getOgImageUrl(
  site: URL | string,
  slug: string,
  title: string,
  description?: string,
): string {
  const base = typeof site === 'string' ? site : site.href;
  const url = new URL(`/og/${slug}.png`, base);
  url.searchParams.set('title', title);
  if (description) url.searchParams.set('description', description);
  return url.toString();
}
