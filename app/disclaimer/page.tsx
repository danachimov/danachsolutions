import type { Metadata } from "next";
import PolicyEmbed from "../components/PolicyEmbed";

export const metadata: Metadata = {
  title: "Disclaimer — DANACH Solutions, LLC",
  description: "Disclaimer for the DANACH Solutions, LLC website.",
};

const DISCLAIMER_EMBED_KEY = "Y2psYVExbENPRWswUkhGaE5FRTlQUT09";

export default function DisclaimerPage() {
  return (
    <>
      <section className="page-hero-dark">
        <div className="container">
          <h1>Disclaimer</h1>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container" style={{ maxWidth: "64rem" }}>
          <div className="policy-card">
            <PolicyEmbed embedKey={DISCLAIMER_EMBED_KEY} />
          </div>
        </div>
      </section>
    </>
  );
}
