import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const SHARED_DESCRIPTION =
  "DANACH Solutions, LLC — Innovation & Project Management Consulting for Consumer Packaged Goods. PMP & DASM certified. 35 years experience.";

export const metadata: Metadata = {
  title: "DANACH Solutions, LLC — Innovation & Project Management Consulting",
  description: SHARED_DESCRIPTION,
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
