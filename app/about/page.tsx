import Image from "next/image";
import CredentialPill from "../components/CredentialPill";
import ExperienceCard from "../components/ExperienceCard";
import { CREDENTIALS, EXPERIENCE, CONTACT } from "../data";
import { pageMetadata } from "../lib/metadata";

export const metadata = pageMetadata({
  title: "About — DANACH Solutions, LLC",
  description:
    "Dan Achimov, Founder & Principal Consultant — 35 years leading CPG innovation, new and existing product development, and project management. PMP & DASM certified.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <section className="page-hero-dark">
        <div className="container">
          <h1>About</h1>
          <p>
            Built on 35 years at the intersection of CPG innovation, project
            management, and operational excellence.
          </p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="about-grid">
            <div>
              <Image
                src="/assets/headshot.png"
                alt="Dan Achimov"
                className="about-image-large"
                width={896}
                height={1344}
              />
              <div className="contact-card">
                <h3>Contact</h3>
                <div className="contact-card-body">
                  <p>
                    {CONTACT.addressLine1}
                    <br />
                    {CONTACT.addressLine2}
                  </p>
                  <p>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </p>
                  <p>
                    <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="about-content">
              <h2>Dan Achimov</h2>
              <p className="about-role">
                Founder &amp; Principal Consultant, DANACH Solutions, LLC
              </p>
              <div className="about-bio">
                <p>
                  I have spent my career at the center of Consumer Packaged Goods
                  innovation &mdash; leading new product development, managing
                  complex cross-functional programs, and transforming how teams
                  deliver results. My expertise spans infant formula and
                  children&apos;s nutrition, where precision, regulatory rigor,
                  and speed to market are non-negotiable.
                </p>
                <p>
                  After decades inside the industry, I founded DANACH Solutions to
                  bring that operational discipline and strategic clarity to
                  companies navigating their own innovation challenges. Whether
                  it&apos;s building an innovation roadmap, standing up a PMO, or
                  integrating AI into project workflows, I operate as a senior
                  operator &mdash; not just an advisor.
                </p>
                <p>
                  I am PMP and DASM certified, and I believe the best consulting
                  is the kind that leaves your team stronger than it was before I
                  arrived.
                </p>
              </div>

              <div className="about-section">
                <h3>Credentials</h3>
                <div className="credentials-row">
                  {CREDENTIALS.map((c) => (
                    <CredentialPill key={c} label={c} />
                  ))}
                </div>
              </div>

              <div className="about-section">
                <h3>Experience</h3>
                <div className="experience-list">
                  {EXPERIENCE.map((e) => (
                    <ExperienceCard key={e.org} {...e} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
