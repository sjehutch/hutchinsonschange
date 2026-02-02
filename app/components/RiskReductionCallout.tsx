// Purpose: Small, reusable risk-reduction callout panel.

const defaultBullets = [
  "Privacy-first patterns",
  "Auditability and logging",
  "Human-in-the-loop for high-risk decisions",
  "Clear data boundaries (what stays internal vs. what can go to cloud)",
  "Vendor and model evaluation guidance"
];

type RiskReductionCalloutProps = {
  title?: string;
  description?: string;
  bullets?: string[];
  compact?: boolean;
};

export function RiskReductionCallout({
  title = "Risk-first delivery",
  description =
    "We help teams move forward without increasing regulatory, security, or reputational risk.",
  bullets = defaultBullets,
  compact = false
}: RiskReductionCalloutProps) {
  return (
    <section className={`risk-callout${compact ? " compact" : ""}`}>
      <h3 className="risk-callout-title">{title}</h3>
      <p className="risk-callout-description">{description}</p>
      {!compact && bullets.length > 0 ? (
        <ul className="risk-callout-list">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
