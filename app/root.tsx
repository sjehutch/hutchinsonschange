// Purpose: Root layout and shared metadata for every route.
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { useEffect } from "react";
import { Layout } from "~/components/Layout";
import {
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  SITE_TITLE
} from "~/utils/site";
import globalStyles from "~/styles/global.css";

// Load the global stylesheet for every route.
export const links: LinksFunction = () => [{ rel: "stylesheet", href: globalStyles }];

// Base meta tags used on every page.
export const meta: MetaFunction = () => {
  const title = `${SITE_TITLE} | ${SITE_TAGLINE}`;
  return [
    { title },
    { name: "description", content: SITE_DESCRIPTION },
    { property: "og:title", content: title },
    { property: "og:description", content: SITE_DESCRIPTION },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" }
  ];
};

export default function App() {
  useEffect(() => {
    // Analytics hook placeholder. Replace with your analytics of choice later.
    // Keep it minimal and vendor-neutral to avoid lock-in.
    if (typeof window !== "undefined") {
      (window as { __analytics?: { page: (path: string) => void } }).__analytics?.page(
        window.location.pathname
      );
    }
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Required HTML metadata for correct rendering on every device. */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Layout keeps the header/footer consistent across routes. */}
        <Layout>
          {/* Outlet renders the active route's content. */}
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
