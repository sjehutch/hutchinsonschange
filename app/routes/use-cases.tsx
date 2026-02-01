// Purpose: Use-cases page focused on government-ready AI workflows.
import type { MetaFunction } from "@remix-run/node";
import { SITE_TITLE } from "~/utils/site";

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
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h1>Use cases</h1>
            <p>Practical workflows that respect policy, privacy, and accountability.</p>
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
