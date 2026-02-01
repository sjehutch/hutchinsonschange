# Hutchinson Change - Product Specs (Source of Truth)

## Product vision
Build a calm, trustworthy, government-friendly marketing site that explains Hutchinson Change's AI governance and workflow enablement services, helps regulated teams understand offerings quickly, and provides a safe path to request a consult.

## Audience
- Government agencies
- Regulated enterprises (public sector adjacent, compliance-heavy teams)

## Brand + tone
- Company name: Hutchinson Change
- Tagline: Change the world
- Specialty: AI governance, AI best practices, AI workflow enablement, AI risk and policy consulting
- Tone: calm, trustworthy, procurement-friendly, not hype-driven

## Information architecture (routes)
- `/` Home
- `/offerings` Offerings deep dive
- `/use-cases` Government-relevant use cases
- `/about` About (technology, governance, delivery)
- `/contact` Contact page with Typeform embed
- `/health` Plain text health check (OK)

## Global elements
- Header: minimal, enterprise-grade, Blackstone-inspired (no slogan, no logo image)
  - Brand text: "Hutchinson Change" (left-aligned, links to `/`)
  - Brand framing: subtle white 2px border around brand text with light padding (10px vertical, 18px horizontal)
  - Navigation labels: "Approach", "Use Cases", "About", "Contact"
  - Interaction: simple hover underline or subtle color shift
  - Layout: plenty of whitespace, sticky on scroll, subtle bottom border
  - Mobile: clean hamburger menu
- Footer:
  - Line 1: "Hutchinson Change · AI governance and workflow enablement for public interest teams."
  - Line 2: "Copyright {year} Hutchinson Change. All rights reserved."
- Typeform embed: uses a single config constant; shows placeholder if missing
- Analytics: minimal vendor-neutral hook placeholder that calls `window.__analytics?.page(path)`

## Page copy (must match exactly)

### Home (`/`)
- Hero headline: "Make AI usable, safe, and governable."
- Hero subtext: "AI Governance + Workflow AI Enablement for government and regulated teams."
- Eyebrow: "AI governance + workflow enablement"
- Primary CTA: "Request a consult" (scroll to contact)
- Secondary CTA: "See offerings" (scroll to offerings)
- Hero side panel:
  - Title: "Hutchinson Change"
  - Body: "Practical guidance for teams that need AI to be transparent, accountable, and ready for oversight."
  - Specialty line: "Specialty: AI governance, AI best practices, AI workflow enablement, and AI risk and policy consulting."
  - Bullets:
    - "Policy-aligned AI governance"
    - "Low-risk pilots that scale"
    - "Vendor-neutral best practices"
- Offerings section:
  - Heading: "Offerings"
  - Subtext: "Clarity, guardrails, and momentum for AI programs."
  - Cards:
    - "AI Governance & Policy" - "Policy frameworks tailored to public sector realities."
    - "AI Risk / Security Review" - "Risk assessment aligned to compliance, privacy, and safety goals."
    - "Workflow AI Enablement" - "Hands-on implementation for internal copilots and automation."
    - "Vendor & Model Evaluation" - "Independent due diligence for tools, models, and procurement."
- Use cases section:
  - Heading: "Use cases"
  - Subtext: "Focused, government-ready workflows that stay accountable."
  - Bullets:
    - "Document summarization with guardrails"
    - "Case and claim triage assistance"
    - "Knowledge base search (RAG) for policy manuals"
    - "Meeting notes with action extraction"
    - "Intake forms automation"
    - "Redaction support and review workflows"
- Engagement model section:
  - Heading: "Engagement model"
  - Subtext: "A steady path from assessment to operational rollout."
  - Steps:
    - "Assess" - "Current-state review, constraints, and readiness."
    - "Roadmap" - "Prioritized plan with governance and workflow milestones."
    - "Pilot" - "Low-risk pilot with clear success criteria."
    - "Rollout" - "Operational enablement with training and handoff."
- Trust signals section:
  - Heading: "Trust signals"
  - Subtext: "Designed for oversight, compliance, and long-term stewardship."
  - Items:
    - "Privacy-first"
    - "Procurement-friendly"
    - "Documentation"
    - "Audit-ready"
- Contact section:
  - Heading: "Contact / Request a consult"
  - Body: "Share your goals and constraints. We will respond with a short next-step plan."
  - Email fallback heading: "Email fallback"
  - Email fallback text: "Prefer email? Reach us at hello@hutchinsonchange.com."
  - Follow-up text: "We aim to respond within 2 business days."

### Offerings (`/offerings`)
- Heading: "Offerings"
- Subtext: "Clear, actionable support for public sector AI programs."
- Section: "AI Governance & Policy"
  - Outcomes:
    - "Policy-aligned AI operating model"
    - "Defined decision rights and oversight"
    - "Repeatable governance workflows"
  - Deliverables:
    - "AI governance charter and principles"
    - "Policy templates and review checklists"
    - "Stakeholder roles and escalation paths"
  - Timeline: "2 to 4 weeks, depending on scope."
- Section: "AI Risk / Security Review"
  - Outcomes:
    - "Risk profile for proposed AI workflows"
    - "Privacy and security guardrails"
    - "Go/no-go decision support"
  - Deliverables:
    - "Risk assessment summary"
    - "Mitigation plan with owners"
    - "Compliance alignment checklist"
  - Timeline: "1 to 3 weeks, lightweight and focused."
- Section: "Workflow AI Enablement"
  - Outcomes:
    - "Working pilot inside real workflows"
    - "Measurable time savings and quality gains"
    - "Staff-ready enablement plan"
  - Deliverables:
    - "Workflow design and data mapping"
    - "Prototype or pilot configuration"
    - "Training, change, and rollout plan"
  - Timeline: "4 to 8 weeks depending on integration depth."
- Section: "Vendor & Model Evaluation"
  - Outcomes:
    - "Vendor comparison grounded in requirements"
    - "Clear procurement guidance"
    - "Risk-reduced selection decisions"
  - Deliverables:
    - "RFP support and scoring rubric"
    - "Due diligence and model evaluation report"
    - "Recommendation and negotiation guidance"
  - Timeline: "2 to 6 weeks depending on vendor count."

### Use cases (`/use-cases`)
- Heading: "Use cases"
- Subtext: "Practical workflows that respect policy, privacy, and accountability."
- How we deliver:
  - Heading: "How we deliver"
  - Subtext: "Agile, transparent delivery that keeps stakeholders in the loop."
  - Bullets:
    - "Agile/Scrum sprints with clear scope"
    - "Backlog creation and prioritization"
    - "Weekly demos and stakeholder feedback"
    - "Iterative releases with measurable progress"
    - "Quality checks and documentation"
- Delivered products / use cases:
  - Heading: "Delivered products / use cases"
  - Subtext: "Selected work that demonstrates real-world execution."
  - Entries:
    - Name: "AIScrub"
      Type: "Web App / Website"
      Summary: "A streamlined AI workflow experience that makes it easy for teams to deliver user-friendly, trustworthy outcomes without hype."
      URL: "https://aiscrub.net"
      Link label: "View AIScrub website"
    - Name: "WellMind Daily"
      Type: "Mobile App (iOS)"
      Summary: "A privacy-first wellness check-in experience with reminders and trend insights to help users build consistent, healthy routines."
      URL: ""
      Badge: "Available on the App Store"
    - Name: "Douglas Products FumiGuide"
      Type: "Mobile App (iOS)"
      Summary: "A field reference app that helps users access product guidance quickly and confidently while supporting on-the-job workflows."
      URL: "https://apps.apple.com/us/app/douglas-products-fumiguide/id1314501836"
      Link label: "View Douglas Products FumiGuide on the App Store"
    - Name: "Datascan RFID"
      Type: "Mobile RFID Solutions"
      Summary: "Mobile-first RFID solutions that streamline inventory visibility and asset tracking workflows across retail and enterprise environments."
      URL: "https://datascan.com/rfid/"
      Link label: "View Datascan RFID"
- Use cases list: same six bullets as Home
- Disclaimer: "Disclaimer: Hutchinson Change does not provide legal or medical advice. All AI-enabled workflows remain human-in-the-loop with final decision authority held by your team."

### About (`/about`)
- Hero:
  - Title: "Technology, governance, and delivery that make AI usable."
  - Subtitle: "We help organizations adopt AI responsibly, securely, and in a way teams actually use. Our focus is practical governance, measurable delivery, and workflows that stand up to oversight."
  - Pill highlights:
    - "AI Governance & Policy"
    - "Workflow Automation"
    - "Secure AI Enablement"
    - "Delivery with Agile/Scrum"
- What we do:
  - Heading: "What we do"
  - Subtext: "Focused services that balance innovation with governance."
  - Cards:
    - "AI Strategy & Readiness"
      - "Assess current workflows and readiness"
      - "Identify high-value, low-risk opportunities"
      - "Align goals to policy and oversight"
    - "AI Governance & Risk Controls"
      - "Define guardrails and decision rights"
      - "Establish review and audit pathways"
      - "Guide vendor and model evaluation"
    - "Practical Implementation (Workflows + Tooling)"
      - "Pilot real workflows with measurable outcomes"
      - "Enable staff with usable tools and training"
      - "Iterate with feedback and documentation"
- How we work:
  - Heading: "How we work"
  - Subtext: "Agile/Scrum delivery with clear milestones and shared accountability."
  - Steps:
    - "Discover" — "Map current workflows, constraints, and priorities."
    - "Design" — "Define governance, target workflows, and success criteria."
    - "Build" — "Deliver a pilot with measurable outcomes and risk controls."
    - "Rollout" — "Enable teams, add guardrails, and iterate safely."
- Responsible AI panel:
  - Heading: "We take this seriously"
  - Bullets:
    - "Privacy-first patterns"
    - "Human-in-the-loop for high-risk decisions"
    - "Auditability and logging"
    - "Vendor and model evaluation guidance"
    - "Clear data boundaries (what goes to cloud, what stays internal)"
- Delivered work / proof:
  - Heading: "Delivered work / proof"
  - Subtext: "Selected outcomes that show how we execute."
  - Tiles:
    - "AIScrub.net" — "Production web tool focused on automated workflows and quality."
      - Tags: "Web", "AI", "Workflow"
      - URL: "https://aiscrub.net"
      - Link label: "View AIScrub website"
    - "WellMind Daily" — "Mobile wellness app with calm check-ins and trends."
      - Tags: "Mobile", "Wellness", "Privacy"
      - URL: ""
      - Badge: "Available on the App Store"
    - "Douglas Products Fumiguide" — "Mobile product guide app with field usability."
      - Tags: "Mobile", "Field", "Reference"
      - URL: "https://apps.apple.com/us/app/douglas-products-fumiguide/id1314501836"
      - Link label: "View Douglas Products Fumiguide on the App Store"
    - "Datascan RFID" — "Mobile RFID solutions supporting enterprise inventory workflows."
      - Tags: "RFID", "Mobile", "Inventory"
      - URL: "https://datascan.com/rfid/"
      - Link label: "View Datascan RFID"
- Who we help:
  - Heading: "Who we help"
  - Subtext: "Reducing risk and increasing adoption across complex environments."
  - List:
    - "Government & Public Sector"
    - "Healthcare"
    - "Retail / Supply Chain"
    - "Enterprise IT & Operations"
- CTA:
  - Title: "Let’s make AI safe and useful in the real world."
  - Copy: "Reach out for a discovery call or governance review. We will respond with a clear next step."
  - Button: "Start a conversation" (routes to `/contact`)

### Contact (`/contact`)
- Heading: "Contact"
- Subtext: "Tell us about your goals and constraints, and we will follow up."
- Email heading: "Email fallback"
- Email copy: "Prefer email? Reach us at hello@hutchinsonchange.com."
- Follow-up text: "We aim to respond within 2 business days."
- Include Typeform embed (same as Home contact section)

### Health (`/health`)
- Returns plain text: "OK"

## Typeform embed configuration
- Single constant: `TYPEFORM_EMBED_URL` in `app/utils/site.ts`
- Current Typeform URL: `https://sjehutch.typeform.com/to/CAjoDaWb`

## SEO + metadata
- Unique title and description per route
- Base OpenGraph tags (title + description) on the root layout
- One H1 per page

## Deployment notes
- Netlify:
  - Build command: `npm run build`
  - Publish directory: `build/client`
  - Adapter: Netlify Remix adapter configured in `vite.config.ts`
  - Build settings are mirrored in `netlify.toml`
  - Local preview command: `npm run start` (uses Netlify CLI)
  - Environment: `NPM_CONFIG_PRODUCTION=false` to install devDependencies for the build
- Azure Static Web Apps:
  - Build command: `npm run build`
  - Deploy as a Node app (Remix server output), or add a compatible adapter later

## Styling goals
- Calm, modern, government-friendly
- Mobile-first layout with responsive grids on tablet/desktop
- Dark theme only: dark background, white or near-white text, high-contrast surfaces
- Expressive headings with readable body type
- Fonts:
  - Brand text: Playfair Display
  - Navigation + UI: Inter
- Header palette: neutral black/white/gray with very subtle border

## Non-goals
- No database
- No authentication
- No backend APIs beyond Remix rendering
- No vendor-specific analytics SDK

## Constraints
- Plain CSS only (no Tailwind or CSS frameworks)
- Minimal file count; keep structure clean and SOLID
- Copy must match this document exactly
- Build system: Remix with Vite + Netlify adapter

## Future ideas (not implemented)
- Case studies and procurement artifacts
- Downloadable governance templates
- Agent-based policy review helpers
