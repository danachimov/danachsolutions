# DANACH Solutions, LLC — Website

The marketing site for **DANACH Solutions, LLC** — _Innovation & Project Management
Consulting. Delivering results since 1989._

This is a faithful port of the original hand-built static site to **Next.js** (App
Router) + **TypeScript** + **React 19**. The design, copy, and behavior are identical
to the original; only the stack changed. It builds to fully static files and deploys
to Hostinger automatically from GitHub on every push to `main`.

## Tech stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Poppins** via `next/font/google` (self-hosted, weights 300–800)
- **`next/image`** for all images (`unoptimized` for static export)
- Original `assets/styles.css` ported verbatim to `app/globals.css` — same class
  names and CSS custom properties (`--brand-red #D12D36`, `--brand-black #1A1A1A`,
  the light/dark variable blocks). No CSS framework.
- **Static export** (`output: 'export'`) → self-contained `./out` folder
- No dependencies beyond Next.js itself.

## Routes

| Route        | Page           |
| ------------ | -------------- |
| `/`          | Home           |
| `/services/` | Services       |
| `/about/`    | About          |
| `/contact/`  | Contact        |
| `/blog/`     | Blog           |
| `/privacy/`  | Privacy Policy |

`trailingSlash: true` means each route is emitted as `folder/index.html`, so links
like `/services/` and `/about/` resolve directly on static hosting.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. The site auto-follows your OS light/dark theme.

## Build (static export)

```bash
npm run build
```

This produces a self-contained `./out` folder (all pages + `/assets`) ready to upload
to any static host. There is no separate `export` step — `output: 'export'` runs it
as part of `build`.

## Project structure

```
app/
  layout.tsx            Root layout: Poppins font, metadata, pre-paint theme
                        script, <Header> + <main> + <Footer>
  globals.css           The original design system, ported verbatim
  data.tsx              All site copy/content (nav, services, credentials, …)
  page.tsx              Home
  services/page.tsx     Services (10 services, 3 section groupings)
  about/page.tsx        About (bio, credentials, experience)
  contact/page.tsx      Contact (info cards + Calendly iframe)
  blog/page.tsx         Blog
  privacy/page.tsx      Privacy Policy
  components/
    Header.tsx          Sticky header, active-nav (usePathname), mobile menu (useState)
    Footer.tsx          3-column footer, copyright year via new Date().getFullYear()
    icons.tsx           LinkedIn + hamburger SVGs
    ServiceCard.tsx, ServiceDetail.tsx, BlogCard.tsx,
    ContactItem.tsx, CredentialPill.tsx, ExperienceCard.tsx
public/
  assets/               logo.jpg, logo-dark.png, headshot.png, hero-home.jpg,
                        office-building.png, favicon.png
.github/workflows/
  deploy.yml            CI: build + FTP deploy to Hostinger on push to main
```

## Dark mode

The site auto-follows the OS theme (`prefers-color-scheme`) by toggling a `.dark`
class on `<html>`. A tiny inline script in `app/layout.tsx` runs synchronously before
first paint (no flash), and live-updates on OS theme change, `pageshow`, and
`visibilitychange`. There is no manual toggle — OS-driven auto mode is intended.

## Deployment

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for the one-time setup (GitHub repo, Hostinger
FTP credentials, repository secrets) and how to verify / roll back a deploy.
