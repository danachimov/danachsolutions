import type { Metadata } from "next";

export const SITE_URL = "https://danachsolutions.com";
export const SITE_NAME = "DANACH Solutions, LLC";
export const OG_IMAGE = "/assets/og-image.jpg";

// Builds full per-page metadata: title, description, canonical URL, and
// matching Open Graph + Twitter card data. metadataBase (set in the root
// layout) turns the relative paths/images into absolute URLs.
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string; // e.g. "/services/"
  // Optional per-page social image (e.g. a blog post's cover). Relative URLs
  // are resolved against metadataBase. Defaults to the site OG image.
  image?: { url: string; width: number; height: number; alt?: string };
}): Metadata {
  const og = image ?? { url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [
        { url: og.url, width: og.width, height: og.height, alt: og.alt ?? SITE_NAME },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [og.url],
    },
  };
}
