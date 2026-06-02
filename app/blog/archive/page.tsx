import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "../../components/BlogCard";
import { getMonthGroups, getArchive } from "../posts";

export const metadata: Metadata = {
  title: "Blog Archive — DANACH Solutions, LLC",
  description:
    "Browse the full archive of DANACH Solutions posts on innovation, project management, and AI.",
};

export default function BlogArchivePage() {
  const groups = getMonthGroups(); // all months, newest first
  const archive = getArchive(); // full Year > Month tree

  return (
    <section className="section section-gray">
      <div className="container">
        <div className="section-header">
          <h1>Blog Archive</h1>
          <p className="lead">Every post, organized by month.</p>
        </div>

        <div className="blog-layout">
          <div className="blog-main">
            <Link href="/blog" className="blog-back" style={{ display: "inline-flex", marginBottom: "2rem" }}>
              &larr; Back to latest posts
            </Link>
            {groups.map((group) => (
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
          </div>

          <aside className="blog-sidebar" aria-label="Browse posts by date">
            <div className="blog-archive">
              <h2 className="blog-archive-title">Archive</h2>
              {archive.map((year, i) => (
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
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
