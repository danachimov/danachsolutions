import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../posts";
import { pageMetadata } from "../../lib/metadata";

// Pre-render one static page per post (required for `output: export`).
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found — DANACH Solutions, LLC" };
  return pageMetadata({
    title: `${post.title} — DANACH Solutions, LLC`,
    description: post.excerpt,
    path: `/blog/${post.slug}/`,
    article: {
      ...(post.date ? { publishedTime: post.date } : {}),
      author: post.author,
    },
    ...(post.cover.src
      ? {
          image: {
            url: post.cover.src,
            width: post.cover.width,
            height: post.cover.height,
            alt: post.cover.alt,
          },
        }
      : {}),
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="section section-gray">
      <div className="container">
        <div className="blog-post">
          <Link href="/blog" className="blog-back">
            &larr; Back to all posts
          </Link>

          <p className="blog-post-eyebrow">{post.category}</p>
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <time>{post.dateDisplay}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readingTime}</span>
            <span aria-hidden="true">&middot;</span>
            <span>By {post.author}</span>
          </div>

          <div className="blog-cover">
            <Image
              src={post.cover.src}
              alt={post.cover.alt}
              width={post.cover.width}
              height={post.cover.height}
              priority
            />
          </div>

          <div
            className="blog-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="blog-post-footer">
            <Link href="/blog" className="blog-back">
              &larr; Back to all posts
            </Link>
            <a
              href="https://calendly.com/dan-danachsolutions"
              target="_blank"
              rel="noopener"
              className="btn-cta"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
