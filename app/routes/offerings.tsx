// Purpose: Offerings page with outcomes, deliverables, and timelines.
import type { MetaFunction } from "@remix-run/node";
import { Card } from "../components/Card";
import { SITE_TITLE } from "../utils/site";

export const meta: MetaFunction = () => {
  const title = `${SITE_TITLE} | Offerings`;
  return [
    { title },
    { name: "description", content: "AI governance, risk review, and workflow enablement offerings." }
  ];
};

// Deeper breakdown of services with outcomes and deliverables.
export default function Offerings() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1>Offerings</h1>
            <p>Clear, actionable support for public sector AI programs.</p>
          </div>

          {/* Each card follows the same pattern: outcomes, deliverables, timeline. */}
          <div className="stack">
            <Card title="AI Governance & Policy">
              <p className="label">Outcomes</p>
              <ul>
                <li>Policy-aligned AI operating model</li>
                <li>Defined decision rights and oversight</li>
                <li>Repeatable governance workflows</li>
              </ul>
              <p className="label">Deliverables</p>
              <ul>
                <li>AI governance charter and principles</li>
                <li>Policy templates and review checklists</li>
                <li>Stakeholder roles and escalation paths</li>
              </ul>
              <p className="label">Timeline</p>
              <p>2 to 4 weeks, depending on scope.</p>
            </Card>

            <Card title="AI Risk / Security Review">
              <p className="label">Outcomes</p>
              <ul>
                <li>Risk profile for proposed AI workflows</li>
                <li>Privacy and security guardrails</li>
                <li>Go/no-go decision support</li>
              </ul>
              <p className="label">Deliverables</p>
              <ul>
                <li>Risk assessment summary</li>
                <li>Mitigation plan with owners</li>
                <li>Compliance alignment checklist</li>
              </ul>
              <p className="label">Timeline</p>
              <p>1 to 3 weeks, lightweight and focused.</p>
            </Card>

            <Card title="Workflow AI Enablement">
              <p className="label">Outcomes</p>
              <ul>
                <li>Working pilot inside real workflows</li>
                <li>Measurable time savings and quality gains</li>
                <li>Staff-ready enablement plan</li>
              </ul>
              <p className="label">Deliverables</p>
              <ul>
                <li>Workflow design and data mapping</li>
                <li>Prototype or pilot configuration</li>
                <li>Training, change, and rollout plan</li>
              </ul>
              <p className="label">Timeline</p>
              <p>4 to 8 weeks depending on integration depth.</p>
            </Card>

            <Card title="Vendor & Model Evaluation">
              <p className="label">Outcomes</p>
              <ul>
                <li>Vendor comparison grounded in requirements</li>
                <li>Clear procurement guidance</li>
                <li>Risk-reduced selection decisions</li>
              </ul>
              <p className="label">Deliverables</p>
              <ul>
                <li>RFP support and scoring rubric</li>
                <li>Due diligence and model evaluation report</li>
                <li>Recommendation and negotiation guidance</li>
              </ul>
              <p className="label">Timeline</p>
              <p>2 to 6 weeks depending on vendor count.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
