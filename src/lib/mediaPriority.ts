export type ImagePriorityTier = "hero" | "card" | "brand";
export type VideoPriorityTier = "hero" | "decorative";
export type IframePriorityTier = "hero" | "embed";

export function getImageLoadingPolicy(tier: ImagePriorityTier) {
  if (tier === "hero") {
    return {
      loading: "eager" as const,
      fetchpriority: "high" as const,
      decoding: "async" as const,
    };
  }

  if (tier === "brand") {
    return {
      loading: "eager" as const,
      fetchpriority: "high" as const,
      decoding: "async" as const,
    };
  }

  return {
    loading: "lazy" as const,
    fetchpriority: "low" as const,
    decoding: "async" as const,
  };
}

export function getVideoLoadingPolicy(tier: VideoPriorityTier) {
  if (tier === "hero") {
    return {
      preload: "metadata" as const,
    };
  }

  return {
    preload: "none" as const,
  };
}

export function getIframeLoadingPolicy(tier: IframePriorityTier) {
  if (tier === "hero") {
    return {
      loading: "eager" as const,
      fetchpriority: "high" as const,
    };
  }

  return {
    loading: "lazy" as const,
    fetchpriority: "low" as const,
  };
}

export type ResponsivePreload = {
  href: string;
  media: string;
  type?: string;
};

// Use this when mobile and desktop can have different likely LCP assets.
export function getResponsiveImagePreloads(
  mobileHref: string,
  desktopHref: string,
  type = "image/webp",
): ResponsivePreload[] {
  return [
    {
      href: mobileHref,
      media: "(max-width: 767px)",
      type,
    },
    {
      href: desktopHref,
      media: "(min-width: 768px)",
      type,
    },
  ];
}
