// Purpose: Site-wide footer with short reassurance and copyright line.
import { RiskReductionCallout } from "./RiskReductionCallout";
import { SITE_TITLE } from "../utils/site";

// Simple footer with a short line of reassurance.
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          {SITE_TITLE} · AI governance and workflow enablement for public interest teams.
        </p>
        <RiskReductionCallout compact bullets={[]} />
        <p>Copyright {year} {SITE_TITLE}. All rights reserved.</p>
      </div>
    </footer>
  );
}
