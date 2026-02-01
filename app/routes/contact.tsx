// Purpose: Contact page with Typeform embed and email fallback.
import type { MetaFunction } from "@remix-run/node";
import { TypeformEmbed } from "../components/TypeformEmbed";
import { SITE_TITLE } from "../utils/site";

export const meta: MetaFunction = () => {
  const title = `${SITE_TITLE} | Contact`;
  return [
    { title },
    { name: "description", content: "Request a consult with Hutchinson Change." }
  ];
};

// Dedicated contact page with the same Typeform embed.
export default function Contact() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1>Contact</h1>
            <p>Tell us about your goals and constraints, and we will follow up.</p>
          </div>
          {/* The embed stays consistent with the Home contact section. */}
          <div className="contact-grid">
            <TypeformEmbed />
            <div className="contact-card">
              <h2>Email fallback</h2>
              <p>
                Prefer email? Reach us at
                {" "}
                <a href="mailto:hello@hutchinsonchange.com">
                  hello@hutchinsonchange.com
                </a>.
              </p>
              <p>We aim to respond within 2 business days.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
