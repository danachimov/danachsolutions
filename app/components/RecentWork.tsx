"use client";

import { useRef, useState } from "react";
import type { RecentProject } from "../data";

export default function RecentWork({ projects }: { projects: RecentProject[] }) {
  const [index, setIndex] = useState(0);
  const n = projects.length;
  const touchStartX = useRef<number | null>(null);

  const go = (to: number) => setIndex(((to % n) + n) % n);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) go(index - 1);
    else if (dx < -40) go(index + 1);
    touchStartX.current = null;
  };
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") go(index - 1);
    else if (e.key === "ArrowRight") go(index + 1);
  };

  return (
    <section className="section section-white">
      <div className="container">
        <div className="section-header">
          <h2>Recent Work</h2>
          <p>
            A look at recent engagements &mdash; described in broad strokes to
            respect client confidentiality.
          </p>
        </div>

        <div
          className="carousel"
          role="group"
          aria-roledescription="carousel"
          aria-label="Recent projects"
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          <button
            type="button"
            className="carousel-arrow"
            onClick={() => go(index - 1)}
            aria-label="Previous project"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            className="carousel-viewport"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {projects.map((p, i) => (
                <div
                  className="carousel-slide"
                  key={p.title}
                  aria-hidden={i !== index}
                >
                  <div className="recent-card">
                    <div className="recent-card-head">
                      <div className="service-icon">
                        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={p.d} />
                        </svg>
                      </div>
                      <span className="recent-num">{p.num}</span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="carousel-arrow"
            onClick={() => go(index + 1)}
            aria-label="Next project"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="carousel-dots" role="tablist" aria-label="Select project">
          {projects.map((p, i) => (
            <button
              key={p.title}
              type="button"
              className={`carousel-dot${i === index ? " active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Show project ${i + 1}: ${p.title}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
