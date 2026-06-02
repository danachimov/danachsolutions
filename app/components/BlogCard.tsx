import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../blog/posts";

// Only the fields a card needs — lets the card render from lightweight,
// serializable data passed to client components (no post body/html required).
export type BlogCardData = Pick<
  BlogPost,
  "slug" | "title" | "excerpt" | "dateDisplay" | "category" | "cover"
>;

export default function BlogCard({ post }: { post: BlogCardData }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card-image">
        <Image
          src={post.cover.src}
          alt={post.cover.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="blog-card-body">
        <div className="blog-meta-row">
          <span className="blog-category">{post.category}</span>
          <time className="blog-date">{post.dateDisplay}</time>
        </div>
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
        <span className="blog-readmore">Read more &rarr;</span>
      </div>
    </Link>
  );
}
