"use client";

import { useState } from "react";

// Web3Forms access key — get a free one at https://web3forms.com (enter
// dan@danachsolutions.com). It is safe to expose in client-side code.
const WEB3FORMS_ACCESS_KEY = "dfaf5d3e-1ccd-4e60-9ff7-761a7bb382f5";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "New message from danachsolutions.com");
    data.append("from_name", "DANACH Solutions Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-form-status success" role="status">
        Thanks for reaching out — your message has been sent. I&apos;ll get back
        to you shortly.
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* Honeypot field for spam bots (hidden from people) */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden-field"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <input type="tel" name="phone" placeholder="Phone Number (optional)" />
      <textarea name="message" placeholder="Message…" required rows={6} />

      {status === "error" && (
        <div className="contact-form-status error" role="alert">
          Something went wrong. Please try again, or email{" "}
          <a href="mailto:dan@danachsolutions.com">dan@danachsolutions.com</a>.
        </div>
      )}

      <button
        type="submit"
        className="btn-primary"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
