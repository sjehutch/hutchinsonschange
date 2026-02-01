// Purpose: Site-wide header with brand + primary navigation links.
import { NavLink } from "@remix-run/react";

// Top navigation that stays small and readable.
export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          {/* Brand image is clickable and returns to the home page. */}
          <NavLink to="/" className="brand-link" aria-label="Hutchinson Change home">
            <img
              className="brand-image"
              src="/images/brandlogo2.png"
              alt="Hutchinson Change"
            />
          </NavLink>
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
