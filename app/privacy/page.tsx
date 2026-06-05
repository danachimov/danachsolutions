import PolicyEmbed from "../components/PolicyEmbed";
import { pageMetadata } from "../lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy — DANACH Solutions, LLC",
  description:
    "How DANACH Solutions, LLC collects, uses, and safeguards your information.",
  path: "/privacy/",
});

const PRIVACY_EMBED_KEY = "YjNoV2RIVkZNa2Q0ZEdKYVdtYzlQUT09";

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero-dark">
        <div className="container">
          <h1>Privacy Policy</h1>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container" style={{ maxWidth: "64rem" }}>
          <div className="policy-card">
            <PolicyEmbed embedKey={PRIVACY_EMBED_KEY} />
          </div>
        </div>
      </section>
    </>
  );
}
