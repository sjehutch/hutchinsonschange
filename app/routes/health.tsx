// Purpose: Health check endpoint for uptime monitoring.
import type { LoaderFunctionArgs } from "@remix-run/node";

// Simple uptime endpoint for monitors.
export function loader(_args: LoaderFunctionArgs) {
  return new Response("OK", {
    status: 200,
    headers: { "Content-Type": "text/plain" }
  });
}

// No UI for the health route.
export default function Health() {
  return null;
}
