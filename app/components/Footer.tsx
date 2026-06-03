import Image from "next/image";
import { NAV_LINKS, CONTACT } from "../data";
import { LinkedInIcon } from "./icons";
import ScrollTopLink from "./ScrollTopLink";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <Image
                src="/assets/logo.jpg"
                alt="DANACH Solutions"
                className="footer-logo-light"
                width={1587}
                height={610}
              />
              <Image
                src="/assets/logo-dark.png"
                alt="DANACH Solutions"
                className="footer-logo-dark"
                width={1587}
                height={610}
              />
              <p className="footer-tagline">
                Innovation &amp; Project Management Consulting. Delivering results
                since 1989.
              </p>
            </div>

            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <div className="footer-links">
                {NAV_LINKS.map((item) => (
                  <ScrollTopLink key={item.href} href={item.href}>
                    {item.label}
                  </ScrollTopLink>
                ))}
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="footer-linkedin"
                >
                  <LinkedInIcon size={16} /> Connect on LinkedIn
                </a>
              </div>
            </div>

            <div>
              <h4 className="footer-heading">Contact</h4>
              <Image
                src="/assets/office-building.png"
                alt="DANACH Solutions Office - Indianapolis"
                className="footer-office-img"
                width={800}
                height={402}
              />
              <div className="footer-contact">
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

          <div className="footer-bottom">
            <p className="footer-copy">
              &copy; {year} DANACH Solutions, LLC. All rights reserved.
            </p>
            <ScrollTopLink href="/privacy" className="footer-privacy">
              Privacy Policy
            </ScrollTopLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
