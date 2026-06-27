import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/metadata";
import { getAllPosts } from "./blog/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "/",
    "/services/",
    "/case-studies/",
    "/blog/",
    "/blog/archive/",
    "/about/",
    "/faq/",
    "/contact/",
    "/privacy/",
    "/terms/",
    "/disclaimer/",
  ];

  const pages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => {
    const when = post.date ? new Date(post.date) : null;
    return {
      url: `${SITE_URL}/blog/${post.slug}/`,
      lastModified: when && !Number.isNaN(when.getTime()) ? when : now,
    };
  });

  return [...pages, ...posts];
}
