// Purpose: Site-wide header with brand + primary navigation links.
import { NavLink } from "@remix-run/react";
import { useState } from "react";

// Top navigation that stays small and readable.
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand-text" aria-label="Hutchinson Change home">
          Hutchinson Change
        </NavLink>
        {/* Mobile menu button toggles the nav list. */}
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
        {/* Simple primary navigation for the four main pages. */}
        <nav
          className={`nav ${menuOpen ? "open" : ""}`}
          aria-label="Primary"
          onClick={() => setMenuOpen(false)}
        >
          <NavLink to="/approach" className={({ isActive }) => (isActive ? "active" : "")}>
            Approach
          </NavLink>
          <NavLink to="/use-cases" className={({ isActive }) => (isActive ? "active" : "")}>
            Use Cases
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
