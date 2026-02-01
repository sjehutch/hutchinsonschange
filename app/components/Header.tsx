// Purpose: Site-wide header with brand + primary navigation links.
import { NavLink } from "@remix-run/react";
import { SITE_TAGLINE, SITE_TITLE } from "~/utils/site";

// Top navigation that stays small and readable.
export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <span className="brand-name">{SITE_TITLE}</span>
          <span className="brand-tagline">{SITE_TAGLINE}</span>
        </div>
        {/* Simple primary navigation for the four main pages. */}
        <nav className="nav" aria-label="Primary">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            Home
          </NavLink>
          <NavLink to="/offerings" className={({ isActive }) => (isActive ? "active" : "")}
          >
            Offerings
          </NavLink>
          <NavLink to="/use-cases" className={({ isActive }) => (isActive ? "active" : "")}
          >
            Use cases
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
