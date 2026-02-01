// Purpose: Simple content card used for offerings and detail blocks.
import type { ReactNode } from "react";

// Simple card to group related content like offerings and deliverables.
export function Card({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
    </div>
  );
}
