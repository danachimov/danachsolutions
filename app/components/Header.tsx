"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, CONTACT } from "../data";
import { LinkedInIcon, MenuIcon } from "./icons";

function normalize(path: string): string {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export default function Header() {
  const pathname = usePathname();
  const current = normalize(pathname);
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => current === href;

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="logo-link" aria-label="DANACH Solutions home">
            <Image
              src="/assets/logo.jpg"
              alt="DANACH Solutions"
              className="logo-light"
              width={1587}
              height={610}
              priority
            />
            <Image
              src="/assets/logo-dark.png"
              alt="DANACH Solutions"
              className="logo-dark"
              width={1587}
              height={610}
              priority
            />
          </Link>

          <nav className="nav-desktop">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${isActive(item.href) ? " active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener"
              className="linkedin-header"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href={CONTACT.calendly}
              target="_blank"
              rel="noopener"
              className="btn-cta"
            >
              Schedule a Call
            </a>
          </nav>

          <button
            id="menu-toggle"
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`}>
        {NAV_LINKS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? "active" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
        >
          <LinkedInIcon size={16} /> Connect on LinkedIn
        </a>
        <a
          href={CONTACT.calendly}
          target="_blank"
          rel="noopener"
          className="btn-cta"
          style={{ marginTop: "0.5rem", textAlign: "center" }}
        >
          Schedule a Call
        </a>
      </div>
    </header>
  );
}
