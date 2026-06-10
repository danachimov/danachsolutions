import Link from "next/link";
import CaseStudiesBrowser from "../components/CaseStudiesBrowser";
import { CASE_STUDIES, CONTACT } from "../data";
import { pageMetadata } from "../lib/metadata";

export const metadata = pageMetadata({
  title: "Case Studies — DANACH Solutions, LLC",
  description:
    "Selected innovation and project management engagements across infant nutrition, food, beverage, and wellness — described in broad strokes to respect client confidentiality.",
  path: "/case-studies/",
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="page-hero-dark">
        <div className="container">
          <h1>Case Studies</h1>
          <p>
            Selected engagements from 35 years of leading innovation and project
            management.
          </p>
          <div className="hero-meta">
            <div>
              <div className="highlight-num">{CASE_STUDIES.length}</div>
              <div className="highlight-label">
                {CASE_STUDIES.length === 1
                  ? "Featured engagement"
                  : "Featured engagements"}
              </div>
            </div>
            <div>
              <div className="highlight-num">Global</div>
              <div className="highlight-label">Americas · Europe · ASEAN</div>
            </div>
            <div>
              <div className="highlight-num">CPG</div>
              <div className="highlight-label">Infant nutrition &amp; wellness</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <CaseStudiesBrowser />

          <div className="services-cta" style={{ marginTop: "3.5rem" }}>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              Curious whether a similar engagement could work for your
              organization?
            </p>
            <a
              href={CONTACT.calendly}
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="cs-stats-band">
        <div className="container">
          <div className="cs-stats-grid">
            <div className="cs-stat">
              <div className="num">35+</div>
              <div className="label">Years of results</div>
            </div>
            <div className="cs-stat">
              <div className="num">NPD/EPD</div>
              <div className="label">Full lifecycle led</div>
            </div>
            <div className="cs-stat">
              <div className="num">Stage-Gate</div>
              <div className="label">Decision governance</div>
            </div>
            <div className="cs-stat">
              <div className="num">PMP &amp; DASM</div>
              <div className="label">Certified delivery</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to accelerate your innovation?</h2>
          <p>
            Whether you need strategic guidance, project leadership, or
            AI-powered transformation, let&apos;s discuss how DANACH Solutions
            can deliver results.
          </p>
          <div className="cta-buttons">
            <a
              href={CONTACT.calendly}
              target="_blank"
              rel="noopener"
              className="btn-white"
            >
              Book a Free Consultation
            </a>
            <Link href="/contact" className="btn-outline-white">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
