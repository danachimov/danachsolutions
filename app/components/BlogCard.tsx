import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../blog/posts";

export default function BlogCard({ post }: { post: BlogPost }) {
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
