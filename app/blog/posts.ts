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

// Parse a frontmatter date robustly. Accepts YYYY-MM-DD and tolerates
// single-digit month/day and "/" separators (but not mixed ones). Returns a
// zero-padded ISO (so lexical sorting/grouping is correct) plus a display
// string — or valid:false so callers degrade gracefully instead of crashing
// the build.
function parseDate(input: string): {
  iso: string;
  display: string;
  valid: boolean;
} {
  const m = input.trim().match(/^(\d{4})([-/])(\d{1,2})\2(\d{1,2})$/);
  if (!m) return { iso: "", display: "", valid: false };
  const y = Number(m[1]);
  const mo = Number(m[3]);
  const d = Number(m[4]);
  // Round-trip through Date.UTC so impossible calendar dates (2026-02-31)
  // are rejected instead of rendering as "February 31, 2026".
  const dt = new Date(Date.UTC(y, mo - 1, d));
  if (
    dt.getUTCFullYear() !== y ||
    dt.getUTCMonth() !== mo - 1 ||
    dt.getUTCDate() !== d
  ) {
    return { iso: "", display: "", valid: false };
  }
  const iso = `${y}-${String(mo).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  return { iso, display: `${MONTHS[mo - 1]} ${d}, ${y}`, valid: true };
}

function parseFile(filename: string): BlogPost {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const slug = String(data.slug || filename.replace(/\.md$/, ""));
  const rawDate = String(data.date || "");
  const parsed = parseDate(rawDate);
  if (rawDate && !parsed.valid) {
    console.warn(
      `[blog] ${filename}: unparseable date "${rawDate}" — expected YYYY-MM-DD; treating as undated.`,
    );
  }
  return {
    slug,
    title: String(data.title || "Untitled"),
    date: parsed.iso, // normalized zero-padded ISO ("" if missing/invalid)
    dateDisplay: String(data.dateDisplay || parsed.display),
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
  // Newest first — the blog always opens to the latest posts. Tie-break on
  // slug so same-day posts keep a stable order across builds.
  return files
    .map(parseFile)
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

// ---- Archive helpers (Year > Month) for the blog sidebar ----

export type MonthGroup = { id: string; label: string; posts: BlogPost[] };
export type ArchiveMonth = { id: string; label: string; count: number };
export type ArchiveYear = { year: string; months: ArchiveMonth[] };

function monthMeta(iso: string) {
  const m = iso.match(/^(\d{4})-(\d{2})/);
  if (!m) {
    // "m-0000-00" sorts after every real "m-YYYY-MM" under the descending
    // compare below, so an undated post lands at the bottom of /blog instead
    // of displacing the newest month at the top.
    return { year: "—", monthName: "Undated", id: "m-0000-00", label: "Undated" };
  }
  const [, y, mm] = m;
  const monthName = MONTHS[Number(mm) - 1] ?? "Undated";
  return { year: y, monthName, id: `m-${y}-${mm}`, label: `${monthName} ${y}` };
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
  // Newest month first (id is "m-YYYY-MM", so lexical compare works; ids are
  // unique per group so no tie-break is needed).
  groups.sort((a, b) => b.id.localeCompare(a.id));
  // Within each month: earliest post first (chronological), slug tie-break
  // for a stable order when posts share a date.
  for (const group of groups) {
    group.posts.sort(
      (a, b) => a.date.localeCompare(b.date) || a.slug.localeCompare(b.slug),
    );
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
