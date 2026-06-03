"use client";

import { useEffect, useState } from "react";

// Renders a Termageddon policy. Termageddon's own embed script only runs on the
// window "load" event, which doesn't fire on in-site (SPA) navigation — so
// instead we fetch the same render endpoint their script uses and inject the
// returned HTML (which includes its own scoped styles). Works on every visit,
// full-load or client navigation. CORS on the endpoint reflects our origin.
export default function PolicyEmbed({ embedKey }: { embedKey: string }) {
  const [html, setHtml] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setHtml(null);
    setError(false);
    const url = `https://embed.termageddon.com/api/render/${embedKey}?origin=${encodeURIComponent(
      window.location.href,
    )}`;
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`status ${r.status}`);
        return r.text();
      })
      .then((text) => {
        if (!cancelled) setHtml(text);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [embedKey]);

  if (error) {
    return (
      <div className="policy_embed_div" role="alert">
        <p className="policy-loading">
          We couldn&apos;t load this policy. Please{" "}
          <a
            href={`https://embed.termageddon.com/api/policy/${embedKey}`}
            target="_blank"
            rel="noopener nofollow"
          >
            view it here
          </a>
          .
        </p>
      </div>
    );
  }

  if (html === null) {
    return (
      <div className="policy_embed_div" aria-live="polite" aria-busy="true">
        <p className="policy-loading">Loading policy…</p>
      </div>
    );
  }

  return (
    <div
      id={embedKey}
      className="policy_embed_div"
      // Trusted first-party policy content from the user's Termageddon account.
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
