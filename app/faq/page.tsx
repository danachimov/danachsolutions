import { CONTACT, FAQ } from "../data";
import { pageMetadata } from "../lib/metadata";

export const metadata = pageMetadata({
  title: "FAQ — DANACH Solutions, LLC",
  description:
    "Answers to common questions about working with DANACH Solutions — services, engagement models, AI transformation, pricing, confidentiality, and getting started.",
  path: "/faq/",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="page-hero-dark">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>
            Answers to the questions I hear most about working with DANACH
            Solutions. Don&apos;t see yours? Get in touch — I&apos;m happy to
            help.
          </p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="faq-list">
            {FAQ.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>
                  <span>{item.q}</span>
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="services-cta" style={{ marginTop: "3.5rem" }}>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              Still have questions?
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
            <a href="/contact/" className="btn-outline-white">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
