"use client";

import { useState } from "react";
import {
  CASE_STUDIES,
  CASE_STUDY_FILTERS,
  type CaseStudyCategory,
} from "../data";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudiesBrowser() {
  const [filter, setFilter] = useState<"all" | CaseStudyCategory>("all");

  const visible =
    filter === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.cat === filter);

  // Only show chips for categories that actually have a case study.
  const chips = CASE_STUDY_FILTERS.filter(
    (f) => f.key === "all" || CASE_STUDIES.some((cs) => cs.cat === f.key)
  );

  return (
    <>
      <div
        className="cs-filter"
        role="group"
        aria-label="Filter case studies by focus"
      >
        {chips.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`blog-chip${filter === f.key ? " active" : ""}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <p className="cs-count">
        Showing <strong>{visible.length}</strong>{" "}
        {visible.length === 1 ? "case study" : "case studies"}
      </p>

      <div className="cs-list">
        {visible.map((cs) => (
          <CaseStudyCard key={cs.num} study={cs} />
        ))}
      </div>

      {visible.length === 0 && (
        <div className="cs-empty">No case studies match this filter yet.</div>
      )}
    </>
  );
}
