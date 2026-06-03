import type { RecentProject } from "../data";

export default function RecentWork({ projects }: { projects: RecentProject[] }) {
  return (
    <section className="section section-work">
      <div className="container">
        <div className="section-header">
          <h2>Recent Work</h2>
          <p>
            A look at recent engagements &mdash; described in broad strokes to
            respect client confidentiality.
          </p>
        </div>

        <div className="recent-grid">
          {projects.map((p) => (
            <div className="recent-work-card" key={p.title}>
              <span className="recent-work-num">{p.num}</span>
              <div className="service-icon">
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d={p.d}
                  />
                </svg>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
