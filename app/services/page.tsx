import { Fragment } from "react";
import ServiceDetail from "../components/ServiceDetail";
import { SERVICE_SECTIONS, CONTACT } from "../data";
import { pageMetadata } from "../lib/metadata";

export const metadata = pageMetadata({
  title: "Services — DANACH Solutions, LLC",
  description:
    "Innovation strategy & roadmapping, project & program management (PMO), AI transformation, process improvement, and more — consulting tailored to CPG companies.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero-dark">
        <div className="container">
          <h1>Services</h1>
          <p>
            Every engagement is tailored to your organization&apos;s needs,
            maturity, and growth ambitions.
          </p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="services-list">
          {SERVICE_SECTIONS.map((section) => (
            <Fragment key={section.label}>
              <div className="section-separator">
                <div className="section-separator-bar"></div>
                <p className="section-separator-label">{section.label}</p>
                <p>{section.blurb}</p>
              </div>
              {section.services.map((s) => (
                <ServiceDetail key={s.num} {...s} />
              ))}
            </Fragment>
          ))}
        </div>

        <div className="services-cta" style={{ marginTop: "4rem" }}>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
            Not sure which service fits your current challenge?
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
    </>
  );
}
