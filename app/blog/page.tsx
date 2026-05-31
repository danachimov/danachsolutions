import type { Metadata } from "next";
import BlogCard from "../components/BlogCard";
import { getMonthGroups, getArchive } from "./posts";

export const metadata: Metadata = {
  title: "Blog — DANACH Solutions, LLC",
  description:
    "Practical insights on innovation, project management, and AI-powered transformation from DANACH Solutions.",
};

export default function BlogPage() {
  const groups = getMonthGroups(); // newest month first
  const archive = getArchive(); // years (newest first) > months

  return (
    <section className="section section-gray">
      <div className="container">
        <div className="section-header">
          <h1>Blog</h1>
          <p className="lead">
            Insights on innovation, project management, and AI in the
            enterprise.
          </p>
        </div>

        <div className="blog-layout">
          <div className="blog-main">
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

          <aside className="blog-archive" aria-label="Browse posts by date">
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
          </aside>
        </div>
      </div>
    </section>
  );
}
