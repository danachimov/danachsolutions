// Blog content — reads Markdown files from /content/blog at build time.
// To add a post: drop a new .md file in content/blog/ (use the Blog Post Builder
// in tools/blog-post-builder.html to generate it) and a cover image in
// public/assets/blog/. Everything else is automatic.

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO YYYY-MM-DD
  dateDisplay: string;
  category: string;
  author: string;
  readingTime: string;
  excerpt: string;
  cover: { src: string; width: number; height: number; alt: string };
  html: string; // rendered post body
};

function dateDisplay(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

function parseFile(filename: string): BlogPost {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const slug = String(data.slug || filename.replace(/\.md$/, ""));
  const iso = String(data.date || "");
  return {
    slug,
    title: String(data.title || "Untitled"),
    date: iso,
    dateDisplay: String(data.dateDisplay || (iso ? dateDisplay(iso) : "")),
    category: String(data.category || ""),
    author: String(data.author || "Dan Achimov"),
    readingTime: String(data.readingTime || ""),
    excerpt: String(data.excerpt || ""),
    cover: {
      src: String(data.cover || ""),
      width: Number(data.coverWidth) || 1200,
      height: Number(data.coverHeight) || 675,
      alt: String(data.coverAlt || data.title || ""),
    },
    html: marked.parse(content) as string,
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  // Newest first — the blog always opens to the latest posts.
  return files.map(parseFile).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

// ---- Archive helpers (Year > Month) for the blog sidebar ----

export type MonthGroup = { id: string; label: string; posts: BlogPost[] };
export type ArchiveMonth = { id: string; label: string; count: number };
export type ArchiveYear = { year: string; months: ArchiveMonth[] };

function monthMeta(iso: string) {
  const [y, m] = iso.split("-");
  return {
    year: y,
    monthName: MONTHS[Number(m) - 1],
    id: `m-${y}-${m}`,
    label: `${MONTHS[Number(m) - 1]} ${y}`,
  };
}

// Posts grouped into month sections.
// Month sections are newest-first (the page opens to the latest), but WITHIN
// each month posts run chronologically — the earliest post of the month leads.
export function getMonthGroups(): MonthGroup[] {
  const groups: MonthGroup[] = [];
  for (const post of getAllPosts()) {
    const { id, label } = monthMeta(post.date);
    let group = groups.find((g) => g.id === id);
    if (!group) {
      group = { id, label, posts: [] };
      groups.push(group);
    }
    group.posts.push(post);
  }
  // Newest month first (id is "m-YYYY-MM", so lexical compare works).
  groups.sort((a, b) => (a.id < b.id ? 1 : -1));
  // Within each month: earliest post first (chronological).
  for (const group of groups) {
    group.posts.sort((a, b) => (a.date > b.date ? 1 : -1));
  }
  return groups;
}

// The N most recent month sections (default 3) — used to keep the main
// blog page tight. Because month sections are already "newest first" and
// only contain months that have posts, this is exactly "the current month
// plus the previous months that have posts," falling back gracefully when
// the current calendar month has none.
export function getRecentMonthGroups(limit = 3): MonthGroup[] {
  return getMonthGroups().slice(0, limit);
}

// Total number of months that have posts (to decide whether to show the
// "View full archive" link).
export function getMonthCount(): number {
  return getMonthGroups().length;
}

// Year > Month tree (newest first) built from a set of month groups.
function buildArchive(groups: MonthGroup[]): ArchiveYear[] {
  const years: ArchiveYear[] = [];
  for (const group of groups) {
    const { year, monthName, id } = monthMeta(group.posts[0].date);
    let y = years.find((yr) => yr.year === year);
    if (!y) {
      y = { year, months: [] };
      years.push(y);
    }
    y.months.push({ id, label: monthName, count: group.posts.length });
  }
  return years;
}

// Full archive tree (all months).
export function getArchive(): ArchiveYear[] {
  return buildArchive(getMonthGroups());
}

// Archive tree limited to the recent months shown on the main blog page.
export function getRecentArchive(limit = 3): ArchiveYear[] {
  return buildArchive(getMonthGroups().slice(0, limit));
}
