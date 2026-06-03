import type { Metadata } from "next";
import { CONTACT } from "../data";

export const metadata: Metadata = {
  title: "Privacy Policy — DANACH Solutions, LLC",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero-dark">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: June 2, 2026</p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container" style={{ maxWidth: "64rem" }}>
          <div className="privacy-card">
            <div className="privacy-section">
              <p>
                DANACH Solutions, LLC (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;) respects your privacy and is committed to
                protecting the personal information you share with us. This
                Privacy Policy explains how we collect, use, and safeguard
                information when you visit danachsolutions.com or engage our
                consulting services.
              </p>
            </div>

            <div className="privacy-section">
              <h2>Information We Collect</h2>
              <p>We collect information you voluntarily provide to us, including:</p>
              <ul>
                <li>
                  Contact details (name, email, phone, company) when you reach out
                  via email, the contact form, or schedule a meeting through
                  Calendly.
                </li>
                <li>
                  Business information shared during consulting engagements,
                  including documents, project data, and communications.
                </li>
                <li>
                  Automatically collected usage data such as IP address, browser
                  type, and pages viewed, gathered through standard web analytics.
                </li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>How We Use Your Information</h2>
              <p>We use information to:</p>
              <ul>
                <li>Respond to inquiries and deliver requested consulting services.</li>
                <li>Schedule and conduct meetings, calls, and engagements.</li>
                <li>Improve the website experience and our service offerings.</li>
                <li>
                  Comply with legal obligations and protect our legitimate
                  business interests.
                </li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>Confidentiality of Client Information</h2>
              <p>
                As a consulting practice, we treat all client information as
                strictly confidential. We do not share, sell, or disclose client
                business information, project details, or proprietary materials to
                third parties without explicit written authorization, except where
                required by law.
              </p>
            </div>

            <div className="privacy-section">
              <h2>Third-Party Services</h2>
              <p>
                We use trusted third-party services, including Calendly for
                scheduling, a form-handling service (Web3Forms) that transmits
                contact-form submissions to us by email, and email providers for
                correspondence. These services have their own privacy policies
                governing how they handle data. We do not control and are not
                responsible for the privacy practices of third-party sites.
              </p>
            </div>

            <div className="privacy-section">
              <h2>Cookies</h2>
              <p>
                Our website may use cookies and similar technologies to improve
                functionality and analyze traffic. You can disable cookies through
                your browser settings, though some site features may not work
                properly without them.
              </p>
            </div>

            <div className="privacy-section">
              <h2>Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of personal
                information we hold about you by contacting us at the email address
                below. We will respond to legitimate requests within a reasonable
                timeframe.
              </p>
            </div>

            <div className="privacy-section">
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Material
                changes will be reflected by updating the &quot;Last updated&quot;
                date at the top of this page.
              </p>
            </div>

            <div className="privacy-section">
              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle
                your information, please contact:
              </p>
              <p style={{ marginTop: "1rem" }}>
                <strong>DANACH Solutions, LLC</strong>
                <br />
                {CONTACT.addressLine1}
                <br />
                {CONTACT.addressLine2}
                <br />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                <br />
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
