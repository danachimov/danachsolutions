import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "./lib/metadata";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const HOME_TITLE =
  "DANACH Solutions, LLC — Innovation & Project Management Consulting";
const SHARED_DESCRIPTION =
  "DANACH Solutions, LLC — Innovation & Project Management Consulting for Consumer Packaged Goods. PMP & DASM certified. 35 years experience.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: HOME_TITLE,
  description: SHARED_DESCRIPTION,
  alternates: { canonical: "/" },
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/",
    title: HOME_TITLE,
    description: SHARED_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: SHARED_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

// Organization + founder structured data (JSON-LD) for richer search results.
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.jpg`,
  image: `${SITE_URL}${OG_IMAGE}`,
  description: SHARED_DESCRIPTION,
  telephone: "+1-812-612-8172",
  email: "dan@danachsolutions.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8520 Allison Pointe Blvd., Suite 220",
    addressLocality: "Indianapolis",
    addressRegion: "IN",
    postalCode: "46250",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Dan Achimov",
    jobTitle: "Founder & Principal Consultant",
    sameAs: ["https://linkedin.com/in/dan-achimov"],
  },
  sameAs: ["https://linkedin.com/in/dan-achimov"],
};

// Auto dark mode: follow the OS preference and live-update on changes.
// Runs synchronously as the first node in <body> so the .dark class is set
// before the page paints — no flash of the wrong theme.
const THEME_SCRIPT = `(function(){
  function setTheme(){
    var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', isDark);
  }
  setTheme();
  try { window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setTheme); } catch(e){}
  window.addEventListener('pageshow', setTheme);
  document.addEventListener('visibilitychange', function(){ if(!document.hidden) setTheme(); });
})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      {/* suppressHydrationWarning on <body>: browser extensions (e.g. ClickUp,
          Grammarly) inject classes/attributes onto <body> before React
          hydrates, which would otherwise log a hydration-mismatch warning.
          This only suppresses warnings for <body>'s own attributes. */}
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        {/* Plausible — privacy-friendly analytics (cookieless, no consent
            banner needed). Auto-tracks pageviews (incl. SPA navigation),
            outbound links, file downloads, and form submissions. */}
        <Script
          src="https://plausible.io/js/pa-YB0Kcz2B75bk6dVn4DSjI.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)};plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
