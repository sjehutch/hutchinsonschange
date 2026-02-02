// Purpose: Approach page with a structured, enterprise-grade delivery story.
import type { MetaFunction } from "@remix-run/node";
import { CtaButton } from "../components/CtaButton";
import { Card } from "../components/Card";
import { HeroVideo } from "../components/HeroVideo";
import { RiskReductionCallout } from "../components/RiskReductionCallout";
import { SITE_TITLE } from "../utils/site";

export const meta: MetaFunction = () => {
  const title = `${SITE_TITLE} | Approach`;
  return [
    { title },
    {
      name: "description",
      content: "A practical, governance-first approach to AI delivery that ships."
    }
  ];
};

// Approach page content, kept calm and clear for enterprise audiences.
export default function Approach() {
  const outcomes = [
    {
      title: "Safer AI adoption",
      bullets: [
        "Governance and guardrails from day one",
        "Risk tiers and decision rights",
        "Audit-ready documentation"
      ]
    },
    {
      title: "Faster execution",
      bullets: [
        "Pilot to rollout in focused sprints",
        "Clear acceptance criteria",
        "Weekly stakeholder demos"
      ]
    },
    {
      title: "Real workflow value",
      bullets: [
        "Operational use cases, not demos",
        "Measured time and quality impact",
        "Adoption-focused delivery"
      ]
    },
    {
      title: "Team enablement",
      bullets: [
        "Training and playbooks",
        "Change management support",
        "Internal capability building"
      ]
    }
  ];

  const steps = [
    {
      title: "Assess",
      detail: "Current workflows, risks, constraints, and data boundaries."
    },
    {
      title: "Govern",
      detail: "Policies, risk tiers, review gates, and audit logging."
    },
    {
      title: "Pilot",
      detail: "2–6 week pilot with acceptance criteria and KPIs."
    },
    {
      title: "Integrate",
      detail: "Production integration into daily tools and reporting."
    },
    {
      title: "Scale",
      detail: "Iterate safely and build internal capability."
    }
  ];

  const governanceBullets = [
    "Decision rights and escalation paths",
    "Model usage policies with review gates",
    "Prompt/agent standards and change control",
    "Third-party risk review and approvals"
  ];

  const fitAreas = [
    "Knowledge retrieval and search (RAG)",
    "Support automation (triage, summaries, routing)",
    "Document workflows (intake, extraction, classification)",
    "QA/testing assistance and internal copilots"
  ];

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          {/* Hero section uses the ambient background video. */}
          <HeroVideo
            videoSrc="/images/AI_VI_2_Hero_Graphic_Widescreen_2.mp4"
            headline="A practical approach to AI that ships."
            subheadline="Governance-first. Measurable. Human-led."
            primaryCta={{ label: "Our Approach", href: "#approach-details" }}
            secondaryCta={{ label: "View Use Cases", href: "/use-cases" }}
          />
          <RiskReductionCallout />

          {/* Outcome cards: quick summary of value. */}
          <div className="section-header">
            <span id="approach-details" />
            <h2>What we help you achieve</h2>
            <p>Clear outcomes that keep risk low and adoption high.</p>
          </div>
          <div className="grid cards">
            {outcomes.map((item) => (
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

      <section className="section muted">
        <div className="container">
          {/* Step-by-step delivery for transparency. */}
          <div className="section-header">
            <h2>Our delivery approach</h2>
            <p>Structured steps that align governance with execution.</p>
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

      <section className="section">
        <div className="container">
          {/* Governance callout keeps accountability front and center. */}
          <div className="responsible-panel">
            <h2>Governance built-in (not bolted-on)</h2>
            <ul>
              {governanceBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          {/* Where AI fits best: aligned to measurable outcomes. */}
          <div className="section-header">
            <h2>Where AI fits best</h2>
            <p>
              We do not promise magic. We focus on measurable business outcomes that
              teams can trust.
            </p>
          </div>
          <ul className="list-grid">
            {fitAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Proof section: send people to concrete examples. */}
          <div className="section-header">
            <h2>Proof and examples</h2>
            <p>Explore delivered work and practical outcomes.</p>
          </div>
          <CtaButton href="/use-cases">View use cases</CtaButton>
        </div>
      </section>
    </div>
  );
}
