import { ogImageUrl, SITE_AUTHOR, SITE_NAME, SOCIAL_PROFILES } from './site';

type JsonLd = Record<string, unknown>;

function personRef(site: URL): string {
  return new URL('/#person', site).href;
}

// WebSite + Person graph for the homepage.
export function websiteGraph(siteBase: URL | string, description: string): JsonLd {
  const site = new URL('/', siteBase);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': new URL('/#website', site).href,
        url: site.href,
        name: SITE_NAME,
        description,
        inLanguage: 'en-GB',
        publisher: { '@id': personRef(site) },
      },
      {
        '@type': 'Person',
        '@id': personRef(site),
        name: SITE_AUTHOR,
        url: site.href,
        sameAs: SOCIAL_PROFILES,
      },
    ],
  };
}

export interface BlogPostingInput {
  /** Absolute URL of the post page. */
  url: string;
  title: string;
  summary: string;
  datePublished: Date;
  category: string;
  tags: string[];
}

// BlogPosting + BreadcrumbList graph for an individual post page.
export function blogPostingGraph(siteBase: URL | string, post: BlogPostingInput): JsonLd {
  const site = new URL('/', siteBase);
  const author = { '@type': 'Person', name: SITE_AUTHOR, url: site.href };
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${post.url}#article`,
        mainEntityOfPage: post.url,
        url: post.url,
        headline: post.title,
        description: post.summary,
        datePublished: post.datePublished.toISOString(),
        image: ogImageUrl(new URL(post.url).pathname, site),
        articleSection: post.category,
        keywords: post.tags.join(', '),
        inLanguage: 'en-GB',
        author,
        publisher: author,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.href },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Posts',
            item: new URL('/posts/', site).href,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: post.url,
          },
        ],
      },
    ],
  };
}
