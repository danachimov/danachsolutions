import Image from "next/image";
import Link from "next/link";
import ServiceCard from "./components/ServiceCard";
import RecentWork from "./components/RecentWork";
import { HOME_SERVICES, RECENT_WORK, CONTACT } from "./data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">
                Innovation &amp; Project Management Consulting
              </p>
              <h1>
                Transforming innovation into{" "}
                <span className="accent">measurable results</span>
              </h1>
              <p className="hero-lead">
                DANACH Solutions partners with leaders to drive innovation,
                optimize project delivery, and implement AI-powered
                transformation &mdash; across infant nutrition, food, beverage,
                and wellness.
              </p>
              <div className="hero-buttons">
                <Link href="/services" className="btn-primary">
                  Explore Services
                </Link>
                <a
                  href={CONTACT.calendly}
                  target="_blank"
                  rel="noopener"
                  className="btn-secondary"
                >
                  Schedule a Call
                </a>
              </div>
              <div className="highlights">
                <div>
                  <div className="highlight-num">35+</div>
                  <div className="highlight-label">Years Experience</div>
                </div>
                <div>
                  <div className="highlight-num">PMP</div>
                  <div className="highlight-label">Certified</div>
                </div>
                <div>
                  <div className="highlight-num">DASM</div>
                  <div className="highlight-label">Agile Certified</div>
                </div>
              </div>
            </div>
            <div>
              <div className="hero-image-wrap">
                <Image
                  src="/assets/hero-home.jpg"
                  alt="Corporate innovation team"
                  width={1400}
                  height={868}
                  priority
                />
              </div>
              <div className="hero-tagline">
                <p>Your Partner in Innovation and Project Management</p>
                <div className="hero-tagline-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <h2>Services</h2>
            <p>
              End-to-end consulting for companies seeking speed, structure, and
              innovation.
            </p>
          </div>
          <div className="services-grid">
            {HOME_SERVICES.map((s) => (
              <ServiceCard key={s.title} d={s.d} title={s.title} desc={s.desc} />
            ))}
          </div>
          <div className="services-cta">
            <Link href="/services" className="link-arrow">
              View all services <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="about-teaser-grid">
            <div>
              <Image
                src="/assets/headshot.png"
                alt="Dan Achimov"
                className="about-image"
                width={896}
                height={1344}
              />
            </div>
            <div className="about-teaser">
              <h2>35 Years of Turning Ideas into Results</h2>
              <p>
                For more than three decades, I&rsquo;ve led innovation and project
                management programs across the consumer packaged goods
                industry&mdash;from global product launches to complex business
                transformations.
              </p>
              <p>
                Today, DANACH Solutions helps organizations accelerate
                innovation, navigate complexity, and deliver strategic initiatives
                with confidence and precision.
              </p>
              <p>
                <strong>PMP&reg; and DASM&reg; Certified</strong>
              </p>
              <Link href="/about" className="btn-dark">
                Read the full story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RecentWork projects={RECENT_WORK} />

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
