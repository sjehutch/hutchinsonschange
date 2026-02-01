// Purpose: Vite configuration for Remix with Netlify adapter support.
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vitePlugin as remix } from "@remix-run/dev";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

// Install Web APIs for the Remix dev server.
installGlobals();

export default defineConfig({
  plugins: [
    remix(),
    // Netlify adapter plugin creates the Functions output for deployment.
    netlifyPlugin(),
    tsconfigPaths()
  ]
});
