"use client";

import { useState } from "react";
import Link from "next/link";
import BlogCard, { type BlogCardData } from "./BlogCard";

type Group = { id: string; label: string; posts: BlogCardData[] };
type ArchiveMonth = { id: string; label: string; count: number };
type ArchiveYear = { year: string; months: ArchiveMonth[] };

type Props = {
  recentGroups: Group[];
  allPosts: BlogCardData[];
  categories: string[];
  recentArchive: ArchiveYear[];
  hasMore: boolean;
  recentMonths: number;
};

export default function BlogBrowser({
  recentGroups,
  allPosts,
  categories,
  recentArchive,
  hasMore,
  recentMonths,
}: Props) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const filtering = q.length > 0;
  // If the query exactly names a category (a chip click, or the full category
  // typed), match that category exactly — otherwise "Project Management" would
  // also pull in "AI in Project Management". Partial text (e.g. "AI") also
  // matches title and excerpt so a post stays findable by its own name even
  // when no category shares the wording (e.g. "Scope Creep").
  const exactCategory = categories.some((c) => c.toLowerCase() === q);
  const results = filtering
    ? allPosts.filter((p) =>
        exactCategory
          ? p.category.toLowerCase() === q
          : p.category.toLowerCase().includes(q) ||
            p.title.toLowerCase().includes(q) ||
            p.excerpt.toLowerCase().includes(q),
      )
    : [];

  return (
    <div className="blog-layout">
      <div className="blog-main">
        {filtering ? (
          <>
            <p className="blog-results-count">
              {`${results.length} ${
                results.length === 1 ? "post" : "posts"
              } in “${query.trim()}”`}
            </p>
            {results.length > 0 ? (
              <div className="blog-grid">
                {results.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <p className="blog-empty">
                No posts found for that topic. Try one of the categories above.
              </p>
            )}
          </>
        ) : (
          <>
            {recentGroups.map((group) => (
              <section
                key={group.id}
                id={group.id}
                className="blog-month-group"
              >
                <h2 className="blog-month-heading">{group.label}</h2>
                <div className="blog-grid">
                  {group.posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            ))}
            {hasMore && (
              <p className="blog-more">
                Showing the latest {recentMonths} months.{" "}
                <Link href="/blog/archive" className="blog-archive-link">
                  View full archive &rarr;
                </Link>
              </p>
            )}
          </>
        )}
      </div>

      <aside className="blog-sidebar" aria-label="Search and browse posts">
        <div className="blog-search">
          <label className="blog-search-label" htmlFor="blog-search-input">
            Search by topic
          </label>
          <input
            id="blog-search-input"
            type="search"
            placeholder="e.g. AI, Project Management…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {categories.length > 0 && (
            <div className="blog-cat-chips">
              {categories.map((cat) => {
                const active = q === cat.toLowerCase();
                return (
                  <button
                    key={cat}
                    type="button"
                    className={`blog-chip${active ? " active" : ""}`}
                    onClick={() => setQuery(active ? "" : cat)}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          )}
          {filtering && (
            <button
              type="button"
              className="blog-clear"
              onClick={() => setQuery("")}
            >
              Clear filter &times;
            </button>
          )}
        </div>

        {!filtering && (
          <div className="blog-archive">
            <h2 className="blog-archive-title">Recent</h2>
            {recentArchive.map((year, i) => (
              <details key={year.year} open={i === 0}>
                <summary>{year.year}</summary>
                <ul>
                  {year.months.map((m) => (
                    <li key={m.id}>
                      <a href={`#${m.id}`}>
                        {m.label} <span>({m.count})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
            <Link href="/blog/archive" className="blog-archive-link">
              View full archive &rarr;
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
