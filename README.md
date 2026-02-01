# Hutchinson Change

Calm, production-grade marketing site for Hutchinson Change, focused on AI governance and workflow enablement for government and regulated enterprise teams.

## Who this is for
- Government agencies
- Regulated enterprise teams that need trustworthy AI governance and implementation support

## Tech stack
- Remix (React + TypeScript)
- Plain CSS (no frameworks)

## Run locally
```bash
npm install
npm run dev
```

## Deploy (high level)
### Netlify
- Build command: `npm run build`
- Deploy as a Node app (Remix server output), or add a Netlify adapter later.

### Azure Static Web Apps
- Build command: `npm run build`
- Deploy as a Node app (Remix server output), or add an adapter later.

## Specs
- Source of truth: `.github/PRODUCT_SPECS.md`

## Agents (future)
- Location: `agents/`
- Purpose and safety expectations are documented in `agents/README.md`
