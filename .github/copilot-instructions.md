<!-- Copilot instructions for working with this repo -->
# Project guidance for AI coding agents

Purpose: concise, actionable notes to help an AI contributor be productive in this repo.

- **Big picture**: This workspace contains a Sanity Content Studio (studio/studio-astro-demo-cms) and an Astro frontend (web/). Content schemas and CMS tooling live under `studio/`; the site code and components live under `web/src/` and static assets under `web/public/`.

- **Where to look first**:
  - Sanity config: [studio/sanity.config.ts](studio/studio-astro-demo-cms/sanity.config.ts#L1)
  - Sanity client used by site: [web/src/libs/sanity.ts](web/src/libs/sanity.ts#L1)
  - Sanity schemas: [studio/schemas/postType.ts](studio/studio-astro-demo-cms/schemas/postType.ts#L1) and `studio/schemaTypes/**`
  - Frontend entry & config: [web/astro.config.mjs](web/astro.config.mjs#L1) and [web/package.json](web/package.json#L1)

- **Key integration points**:
  - Project ID and dataset are hard-coded and should be considered canonical: `projectId: av8jlb2b`, `dataset: production` (see `sanity.config.ts` and `web/src/libs/sanity.ts`).
  - Frontend fetches content via the Sanity client in `web/src/libs/sanity.ts` using GROQ queries.

- **Dev / build workflows** (run in the indicated subfolder):
  - Studio (Sanity)
    - cd studio/studio-astro-demo-cms
    - `npm install`
    - `npm run dev` (runs `sanity dev`) — local Studio at its default port
    - `npm run build` / `npm run deploy` for production steps
  - Frontend (Astro)
    - cd web
    - `npm install`
    - `npm run dev` (runs `astro dev`)
    - `npm run build` and `npm run preview` for production artifacts

- **Schema and content conventions**:
  - Sanity schemas are split between `studio/schemas/` (uses `defineType`/`defineField`) and `studio/schemaTypes/` (local groupings). Add new document types in `studio/schemas/` and then export them from `studio/schemaTypes/index.ts` so `sanity.config.ts` picks them up.
  - Example schema pattern: `postType` uses `defineType({...})` with `fields: [defineField({...})...]` (see `studio/schemas/postType.ts`).
  - Portable text bodies use arrays of `{type: 'block'}`; images use `type: 'image'`.

- **Frontend patterns**:
  - Pages live under `web/src/pages/` and components under `web/src/components/` (e.g. `web/src/components/home-page/Hero.astro`).
  - Static assets under `web/public/` (images, icons) are referenced by paths like `/images/home/...`.
  - Tailwind/Vite integration via `@tailwindcss/vite` plugin in `astro.config.mjs`.

- **Conventions & practical notes for PRs**:
  - Codebase uses TypeScript in the Studio and ESM in the frontend (`"type": "module"` in `web/package.json`).
  - Prettier settings present in `studio/package.json` (non-default settings: `semi: false`, `singleQuote: true`, `printWidth: 100`). Respect these when formatting edits.
  - Sanity API version is pinned in `web/src/libs/sanity.ts` (`apiVersion: "2026-01-01"`) — keep it fixed.

- **Common tasks an AI may be asked to do** and where to implement them:
  - Add a new document type: create file in `studio/schemas/`, then add to `studio/schemaTypes/index.ts`.
  - Change content model fields: edit corresponding `defineField` entries in `studio/schemas/*` and ensure validation closures match existing style.
  - Surface content in site: add or edit data fetching in `web/src/libs/sanity.ts` and render in `web/src/pages/*` or `web/src/components/*`.

- **Known issues & gotchas observed** (check before running builds):
  - `studio/schemaTypes/objects/hero.ts` appears to be incomplete / malformed and will cause TypeScript or Sanity build errors. Fix its export/object shape before running `sanity build` or `sanity start`.
  - Some schema files use two different idioms: `defineType`/`defineField` (recommended) and plain object exports under `schemaTypes/` (legacy). Prefer `defineType` for new code.

- **Where to run tests / checks**:
  - There are no automated test suites present. Validation is primarily via `sanity build` / `astro check` / running the dev servers.

- **If you need to add credentials or secrets**:
  - Use environment variables for `SANITY_SECRET_TOKEN` (referenced in comments in `web/src/libs/sanity.ts`). Do NOT commit tokens to repo.

If any section is unclear or you want me to expand examples (e.g., how to add a specific field type and surface it in the site), tell me which area to expand and I will iterate.
