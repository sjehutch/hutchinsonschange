// Purpose: Consistent page wrapper (header + main + footer).
import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

// Simple page wrapper to keep the layout consistent on every route.
export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  );
}
