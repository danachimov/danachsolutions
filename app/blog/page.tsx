import type { Metadata } from "next";
import BlogBrowser from "../components/BlogBrowser";
import type { BlogCardData } from "../components/BlogCard";
import {
  getRecentMonthGroups,
  getRecentArchive,
  getMonthCount,
  getAllPosts,
  type BlogPost,
} from "./posts";

const RECENT_MONTHS = 3;

export const metadata: Metadata = {
  title: "Blog — DANACH Solutions, LLC",
  description:
    "Practical insights on innovation, project management, and AI-powered transformation from DANACH Solutions.",
};

const toCard = (p: BlogPost): BlogCardData => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  dateDisplay: p.dateDisplay,
  category: p.category,
  cover: p.cover,
});

export default function BlogPage() {
  const recentGroups = getRecentMonthGroups(RECENT_MONTHS).map((g) => ({
    id: g.id,
    label: g.label,
    posts: g.posts.map(toCard),
  }));
  const allPosts = getAllPosts().map(toCard);
  const categories = Array.from(
    new Set(getAllPosts().map((p) => p.category)),
  )
    .filter(Boolean)
    .sort();
  const recentArchive = getRecentArchive(RECENT_MONTHS);
  const hasMore = getMonthCount() > RECENT_MONTHS;

  return (
    <>
      <section className="page-hero-dark">
        <div className="container">
          <h1>Blog</h1>
          <p>
            Insights on innovation, project management, and AI in the
            enterprise.
          </p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <BlogBrowser
            recentGroups={recentGroups}
            allPosts={allPosts}
            categories={categories}
            recentArchive={recentArchive}
            hasMore={hasMore}
            recentMonths={RECENT_MONTHS}
          />
        </div>
      </section>
    </>
  );
}
