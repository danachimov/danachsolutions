import type { Metadata } from "next";
import PolicyEmbed from "../components/PolicyEmbed";

export const metadata: Metadata = {
  title: "Terms of Service — DANACH Solutions, LLC",
  description: "The terms governing use of the DANACH Solutions, LLC website.",
};

const TERMS_EMBED_KEY = "Umt3M01XWk5NSFJUUjJzMVNYYzlQUT09";

export default function TermsPage() {
  return (
    <>
      <section className="page-hero-dark">
        <div className="container">
          <h1>Terms of Service</h1>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container" style={{ maxWidth: "64rem" }}>
          <div className="policy-card">
            <PolicyEmbed embedKey={TERMS_EMBED_KEY} />
          </div>
        </div>
      </section>
    </>
  );
}
