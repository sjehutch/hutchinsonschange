// Purpose: Server entry point to render HTML on the server.
import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";

// Standard Remix server entry: render the app to HTML for fast first paint.
export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  // Render the app to a HTML string on the server for fast first paint.
  const markup = renderToString(<RemixServer context={remixContext} url={request.url} />);
  // Ensure the browser knows this is HTML content.
  responseHeaders.set("Content-Type", "text/html");

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
