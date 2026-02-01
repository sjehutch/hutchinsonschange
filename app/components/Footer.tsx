// Purpose: Site-wide footer with short reassurance and copyright line.
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
        <p>Copyright {year} {SITE_TITLE}. All rights reserved.</p>
      </div>
    </footer>
  );
}
