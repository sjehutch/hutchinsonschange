// Purpose: Use-cases page focused on government-ready AI workflows.
import type { MetaFunction } from "@remix-run/node";
import { SITE_TITLE } from "../utils/site";

export const meta: MetaFunction = () => {
  const title = `${SITE_TITLE} | Use cases`;
  return [
    { title },
    {
      name: "description",
      content: "Government-ready AI use cases with guardrails and human oversight."
    }
  ];
};

// Use cases for regulated and government teams.
export default function UseCases() {
  // Delivered products help visitors see real outcomes and formats.
  const deliveredProducts = [
    {
      name: "AIScrub",
      type: "Web App / Website",
      summary:
        "A streamlined AI workflow experience that makes it easy for teams to deliver user-friendly, trustworthy outcomes without hype.",
      url: "https://aiscrub.net",
      linkLabel: "View AIScrub website"
    },
    {
      name: "WellMind Daily",
      type: "Mobile App (iOS)",
      summary:
        "A privacy-first wellness check-in experience with reminders and trend insights to help users build consistent, healthy routines.",
      url: "",
      linkLabel: ""
    },
    {
      name: "Douglas Products FumiGuide",
      type: "Mobile App (iOS)",
      summary:
        "A field reference app that helps users access product guidance quickly and confidently while supporting on-the-job workflows.",
      url: "https://apps.apple.com/us/app/douglas-products-fumiguide/id1314501836",
      linkLabel: "View Douglas Products FumiGuide on the App Store"
    },
    {
      name: "Datascan RFID",
      type: "Mobile RFID Solutions",
      summary:
        "Mobile-first RFID solutions that streamline inventory visibility and asset tracking workflows across retail and enterprise environments.",
      url: "https://datascan.com/rfid/",
      linkLabel: "View Datascan RFID"
    }
  ];

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1>Use cases</h1>
            <p>Practical workflows that respect policy, privacy, and accountability.</p>
          </div>
          {/* Delivery approach keeps expectations clear and grounded. */}
          <div className="section-header">
            <h2>How we deliver</h2>
            <p>Agile, transparent delivery that keeps stakeholders in the loop.</p>
          </div>
          <ul className="list-grid">
            <li>Agile/Scrum sprints with clear scope</li>
            <li>Backlog creation and prioritization</li>
            <li>Weekly demos and stakeholder feedback</li>
            <li>Iterative releases with measurable progress</li>
            <li>Quality checks and documentation</li>
          </ul>

          <div className="section-header">
            <h2>Delivered products / use cases</h2>
            <p>Selected work that demonstrates real-world execution.</p>
          </div>
          <div className="grid cards">
            {deliveredProducts.map((product) => (
              <div key={product.name} className="card">
                <h3>{product.name}</h3>
                <p className="label">Type</p>
                <p>{product.type}</p>
                <p>{product.summary}</p>
                {product.url ? (
                  <a
                    className="cta-button secondary"
                    href={product.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {product.linkLabel}
                  </a>
                ) : (
                  <span className="badge">Available on the App Store</span>
                )}
              </div>
            ))}
          </div>

          {/* Simple list for quick scanning. */}
          <ul className="list-grid">
            <li>Document summarization with guardrails</li>
            <li>Case and claim triage assistance</li>
            <li>Knowledge base search (RAG) for policy manuals</li>
            <li>Meeting notes with action extraction</li>
            <li>Intake forms automation</li>
            <li>Redaction support and review workflows</li>
          </ul>
          {/* Disclaimer keeps expectations clear. */}
          <p className="disclaimer">
            Disclaimer: Hutchinson Change does not provide legal or medical advice. All
            AI-enabled workflows remain human-in-the-loop with final decision authority
            held by your team.
          </p>
        </div>
      </section>
    </div>
  );
}
