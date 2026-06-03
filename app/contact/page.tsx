import type { Metadata } from "next";
import Image from "next/image";
import ContactItem from "../components/ContactItem";
import ContactForm from "../components/ContactForm";
import { CONTACT } from "../data";

export const metadata: Metadata = {
  title: "Contact — DANACH Solutions, LLC",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero-dark">
        <div className="container">
          <h1>Contact</h1>
          <p>
            Let&apos;s discuss your innovation, project management, or AI
            transformation needs.
          </p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div>
                <h2>Get in Touch</h2>
                <div className="contact-office-image">
                  <Image
                    src="/assets/office-building.png"
                    alt="DANACH Solutions Office - Indianapolis"
                    width={800}
                    height={402}
                  />
                </div>
                <div className="contact-items">
                  <ContactItem
                    title="Email"
                    icon={
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                  >
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </ContactItem>

                  <ContactItem
                    title="Phone"
                    icon={
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    }
                  >
                    <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                  </ContactItem>

                  <ContactItem
                    title="Address"
                    icon={
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    }
                  >
                    <p>
                      {CONTACT.addressLine1}
                      <br />
                      {CONTACT.addressLine2}
                    </p>
                  </ContactItem>

                  <ContactItem
                    title="Schedule a Meeting"
                    icon={
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                  >
                    <a
                      href={CONTACT.calendly}
                      target="_blank"
                      rel="noopener"
                      style={{ color: "var(--brand-red)", fontWeight: 600 }}
                    >
                      Book time on Calendly &rarr;
                    </a>
                  </ContactItem>
                </div>
              </div>

              <div className="contact-red-card">
                <h3>Prefer to schedule directly?</h3>
                <p>
                  Click the button below to book a free 30-minute consultation at
                  a time that works for you.
                </p>
                <a
                  href={CONTACT.calendly}
                  target="_blank"
                  rel="noopener"
                  className="btn-on-red"
                >
                  Book on Calendly
                </a>
              </div>
            </div>

            <div>
              <div className="calendly-frame">
                <iframe
                  src={CONTACT.calendlyEmbed}
                  title="Schedule a meeting with Dan Achimov"
                ></iframe>
              </div>
              <p className="calendly-note">
                Powered by Calendly &mdash; select your preferred time and receive
                confirmation instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container" style={{ maxWidth: "44rem" }}>
          <div className="section-header">
            <h2>Send a Message</h2>
            <p>
              Have a question or a project in mind? Send a note and I&apos;ll get
              back to you.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
