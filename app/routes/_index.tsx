// Purpose: Home page with the core story, offerings, and contact call-to-action.
import type { MetaFunction } from "@remix-run/node";
import { CtaButton } from "../components/CtaButton";
import { Card } from "../components/Card";
import { TypeformEmbed } from "../components/TypeformEmbed";
import { SITE_DESCRIPTION, SITE_TITLE } from "../utils/site";

export const meta: MetaFunction = () => {
  const title = `${SITE_TITLE} | AI governance and workflow enablement`;
  return [
    { title },
    { name: "description", content: SITE_DESCRIPTION },
    { property: "og:title", content: title },
    { property: "og:description", content: SITE_DESCRIPTION }
  ];
};

// Home page with the main story, offerings, and contact CTA.
export default function Index() {
  return (
    <div className="page">
      {/* Hero section: clear headline + primary actions. */}
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">AI governance + workflow enablement</p>
            <h1>Make AI usable, safe, and governable.</h1>
            <p className="lede">
              AI Governance + Workflow AI Enablement for government and regulated teams.
            </p>
            <div className="cta-row">
              <CtaButton href="#contact">Request a consult</CtaButton>
              <CtaButton href="#offerings" variant="secondary">
                See offerings
              </CtaButton>
            </div>
          </div>
          <div className="hero-panel">
            <p className="panel-title">Hutchinson Change</p>
            <p>
              Practical guidance for teams that need AI to be transparent, accountable,
              and ready for oversight.
            </p>
            <p>
              Specialty: AI governance, AI best practices, AI workflow enablement,
              and AI risk and policy consulting.
            </p>
            <ul>
              <li>Policy-aligned AI governance</li>
              <li>Low-risk pilots that scale</li>
              <li>Vendor-neutral best practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Offerings: four-card overview to scan quickly. */}
      <section id="offerings" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Offerings</h2>
            <p>Clarity, guardrails, and momentum for AI programs.</p>
          </div>
          <div className="grid cards">
            <Card title="AI Governance & Policy">
              <p>Policy frameworks tailored to public sector realities.</p>
            </Card>
            <Card title="AI Risk / Security Review">
              <p>Risk assessment aligned to compliance, privacy, and safety goals.</p>
            </Card>
            <Card title="Workflow AI Enablement">
              <p>Hands-on implementation for internal copilots and automation.</p>
            </Card>
            <Card title="Vendor & Model Evaluation">
              <p>Independent due diligence for tools, models, and procurement.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use cases: simple list for easy reading by busy stakeholders. */}
      <section className="section muted">
        <div className="container">
          <div className="section-header">
            <h2>Use cases</h2>
            <p>Focused, government-ready workflows that stay accountable.</p>
          </div>
          <ul className="list-grid">
            <li>Document summarization with guardrails</li>
            <li>Case and claim triage assistance</li>
            <li>Knowledge base search (RAG) for policy manuals</li>
            <li>Meeting notes with action extraction</li>
            <li>Intake forms automation</li>
            <li>Redaction support and review workflows</li>
          </ul>
        </div>
      </section>

      {/* Engagement model: step-by-step path from assessment to rollout. */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Engagement model</h2>
            <p>A steady path from assessment to operational rollout.</p>
          </div>
          <div className="timeline">
            <div>
              <h3>Assess</h3>
              <p>Current-state review, constraints, and readiness.</p>
            </div>
            <div>
              <h3>Roadmap</h3>
              <p>Prioritized plan with governance and workflow milestones.</p>
            </div>
            <div>
              <h3>Pilot</h3>
              <p>Low-risk pilot with clear success criteria.</p>
            </div>
            <div>
              <h3>Rollout</h3>
              <p>Operational enablement with training and handoff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals: short statements to reduce procurement friction. */}
      <section className="section muted">
        <div className="container">
          <div className="section-header">
            <h2>Trust signals</h2>
            <p>Designed for oversight, compliance, and long-term stewardship.</p>
          </div>
          <div className="trust-grid">
            <div>Privacy-first</div>
            <div>Procurement-friendly</div>
            <div>Documentation</div>
            <div>Audit-ready</div>
          </div>
        </div>
      </section>

      {/* Contact: Typeform embed + email fallback. */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Contact / Request a consult</h2>
            <p>
              Share your goals and constraints. We will respond with a short next-step
              plan.
            </p>
          </div>
          <div className="contact-grid">
            <TypeformEmbed />
            <div className="contact-card">
              <h3>Email fallback</h3>
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
