"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

function normalize(path: string): string {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

// A Next.js Link that scrolls to the top of the page when you click a link to
// the page you're already on (e.g. "Home" or the logo while on the home page).
// Navigating to a different page behaves like a normal Link.
export default function ScrollTopLink({
  href,
  onClick,
  ...rest
}: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      {...rest}
      onClick={(e) => {
        if (
          typeof href === "string" &&
          normalize(pathname) === normalize(href)
        ) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        onClick?.(e);
      }}
    />
  );
}
