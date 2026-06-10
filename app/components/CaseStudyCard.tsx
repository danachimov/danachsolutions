"use client";

import { useState } from "react";
import type { CaseBlock, CaseStudy } from "../data";

function DetailBlock({
  label,
  block,
  marker: defaultMarker,
}: {
  label: string;
  block: CaseBlock;
  marker: "check" | "dot";
}) {
  const marker = block.marker ?? defaultMarker;
  return (
    <div className="cs-block">
      <div className="cs-block-label">{label}</div>
      {block.intro && <p>{block.intro}</p>}
      {block.bullets && block.bullets.length > 0 && (
        <ul>
          {block.bullets.map((b) => (
            <li key={b}>
              {marker === "check" ? (
                <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                </svg>
              ) : (
                <span className="cs-dot" aria-hidden="true" />
              )}
              {b}
            </li>
          ))}
        </ul>
      )}
      {block.note && <p className="cs-block-note">{block.note}</p>}
    </div>
  );
}

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`cs-card${open ? " is-open" : ""}`}>
      <span className="cs-num">{study.num}</span>
      <div className="cs-head">
        <div className="cs-icon">
          <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={study.d} />
          </svg>
        </div>
        <div className="cs-head-body">
          <span className="cs-tag">{study.catLabel}</span>
          <h2>{study.title}</h2>
          <p className="cs-summary">{study.summary}</p>

          <div className="cs-outcomes">
            {study.outcomes.map((o) => (
              <span className="cs-outcome" key={o}>
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                {o}
              </span>
            ))}
          </div>

          <button
            className="cs-toggle"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="label-closed">Read the full case study</span>
            <span className="label-open">Hide details</span>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="cs-detail">
        <div className="cs-detail-inner">
          <div className="cs-detail-grid">
            <DetailBlock label="Challenge" block={study.challenge} marker="dot" />
            <DetailBlock label="Approach" block={study.approach} marker="check" />
            <DetailBlock label="Results" block={study.results} marker="check" />
          </div>
        </div>
      </div>
    </article>
  );
}
