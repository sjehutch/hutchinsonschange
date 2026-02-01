// Purpose: About page with enterprise consulting tone and clear structure.
import type { MetaFunction } from "@remix-run/node";
import { Card } from "../components/Card";
import { CtaButton } from "../components/CtaButton";
import { SITE_TITLE, TYPEFORM_EMBED_URL } from "../utils/site";

export const meta: MetaFunction = () => {
  const title = `${SITE_TITLE} | About`;
  return [
    { title },
    {
      name: "description",
      content: "Technology, governance, and delivery that make AI usable for real teams."
    }
  ];
};

// About page with structured, enterprise-friendly content.
export default function About() {
  const highlights = [
    "AI Governance & Policy",
    "Workflow Automation",
    "Secure AI Enablement",
    "Delivery with Agile/Scrum"
  ];

  const whatWeDo = [
    {
      title: "AI Strategy & Readiness",
      bullets: [
        "Assess current workflows and readiness",
        "Identify high-value, low-risk opportunities",
        "Align goals to policy and oversight"
      ]
    },
    {
      title: "AI Governance & Risk Controls",
      bullets: [
        "Define guardrails and decision rights",
        "Establish review and audit pathways",
        "Guide vendor and model evaluation"
      ]
    },
    {
      title: "Practical Implementation (Workflows + Tooling)",
      bullets: [
        "Pilot real workflows with measurable outcomes",
        "Enable staff with usable tools and training",
        "Iterate with feedback and documentation"
      ]
    }
  ];

  const steps = [
    {
      title: "Discover",
      detail: "Map current workflows, constraints, and priorities."
    },
    {
      title: "Design",
      detail: "Define governance, target workflows, and success criteria."
    },
    {
      title: "Build",
      detail: "Deliver a pilot with measurable outcomes and risk controls."
    },
    {
      title: "Rollout",
      detail: "Enable teams, add guardrails, and iterate safely."
    }
  ];

  const deliveredWork = [
    {
      title: "AIScrub.net",
      summary: "Production web tool focused on automated workflows and quality.",
      tags: ["Web", "AI", "Workflow"],
      url: "https://aiscrub.net",
      linkLabel: "View AIScrub website"
    },
    {
      title: "WellMind Daily",
      summary: "Mobile wellness app with calm check-ins and trends.",
      tags: ["Mobile", "Wellness", "Privacy"],
      url: "",
      linkLabel: ""
    },
    {
      title: "Douglas Products Fumiguide",
      summary: "Mobile product guide app with field usability.",
      tags: ["Mobile", "Field", "Reference"],
      url: "https://apps.apple.com/us/app/douglas-products-fumiguide/id1314501836",
      linkLabel: "View Douglas Products Fumiguide on the App Store"
    },
    {
      title: "Datascan RFID",
      summary: "Mobile RFID solutions supporting enterprise inventory workflows.",
      tags: ["RFID", "Mobile", "Inventory"],
      url: "https://datascan.com/rfid/",
      linkLabel: "View Datascan RFID"
    }
  ];

  const industries = [
    "Government & Public Sector",
    "Healthcare",
    "Retail / Supply Chain",
    "Enterprise IT & Operations"
  ];

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          {/* Hero section sets the tone and credibility. */}
          <div className="section-header">
            <h1>Technology, governance, and delivery that make AI usable.</h1>
            <p>
              We help organizations adopt AI responsibly, securely, and in a way teams
              actually use. Our focus is practical governance, measurable delivery, and
              workflows that stand up to oversight.
            </p>
          </div>
          <div className="pill-row">
            {highlights.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          {/* What we do: clear, three-column summary. */}
          <div className="section-header">
            <h2>What we do</h2>
            <p>Focused services that balance innovation with governance.</p>
          </div>
          <div className="grid cards">
            {whatWeDo.map((item) => (
              <Card key={item.title} title={item.title}>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* How we work: simple, readable steps. */}
          <div className="section-header">
            <h2>How we work</h2>
            <p>Agile/Scrum delivery with clear milestones and shared accountability.</p>
          </div>
          <div className="timeline">
            {steps.map((step) => (
              <div key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          {/* Responsible AI: a focused credibility panel. */}
          <div className="responsible-panel">
            <h2>We take this seriously</h2>
            <ul>
              <li>Privacy-first patterns</li>
              <li>Human-in-the-loop for high-risk decisions</li>
              <li>Auditability and logging</li>
              <li>Vendor and model evaluation guidance</li>
              <li>Clear data boundaries (what goes to cloud, what stays internal)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Delivered work: real proof with clear links. */}
          <div className="section-header">
            <h2>Delivered work / proof</h2>
            <p>Selected outcomes that show how we execute.</p>
          </div>
          <div className="grid cards">
            {deliveredWork.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {item.url ? (
                  <a
                    className="cta-button secondary"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {item.linkLabel}
                  </a>
                ) : (
                  <span className="badge">Available on the App Store</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          {/* Who we help: quick industry scan. */}
          <div className="section-header">
            <h2>Who we help</h2>
            <p>Reducing risk and increasing adoption across complex environments.</p>
          </div>
          <ul className="list-grid">
            {industries.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* CTA: clear next step into contact. */}
          <div className="cta-panel">
            <div>
              <h2>Let’s make AI safe and useful in the real world.</h2>
              <p>
                Reach out for a discovery call or governance review. We will respond with
                a clear next step.
              </p>
            </div>
            <CtaButton href={TYPEFORM_EMBED_URL ? "/contact" : "/contact"}>
              Start a conversation
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
