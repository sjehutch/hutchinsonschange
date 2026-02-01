// Purpose: Reusable call-to-action link styled like a button.
import type { ReactNode } from "react";

// Reusable call-to-action button. Keep it simple: just a styled link.
export function CtaButton({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a className={`cta-button ${variant}`} href={href}>
      {children}
    </a>
  );
}
