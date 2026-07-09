# AGENTS.md — Personal Site

## Project overview

Single-page scroll portfolio: Hero, About, Interests, Contact, Footer.

Stack: React + TypeScript + Vite + Tailwind CSS.

## Source of truth

- Copy and field values: [CONTENT.md](CONTENT.md) and [文案.md](文案.md)
- Runtime data file (created in S1): `src/data/profile.ts`
- Raw photos: `photos/`; production assets: `public/` (copy in S1, compress large files)

## Build order (execute in order; self-check after each step)

1. Scaffold (Vite + React + TS + Tailwind)
2. Hero
3. About
4. Interests
5. Contact + Footer
6. Responsive polish
7. `npm run build`

## Coding rules

- Functional components with TypeScript types
- Tailwind only (no hand-written CSS unless Tailwind cannot do it)
- Comments in English, only for non-obvious logic
- All text and image paths in `src/data/profile.ts`; components read from there
- Do not change `profile.ts` field shape after S1; only edit values

## Global acceptance (check after each component)

- [ ] `npm run dev`: browser console has no errors
- [ ] 375px width: no horizontal scroll; readable text; cards stack correctly
- [ ] Every image has `alt`
- [ ] External links use `target="_blank"` and `rel="noopener noreferrer"`
- [ ] `npm run build` succeeds; `dist/` is generated

## Per-component done criteria

| Component | Done when |
|-----------|-----------|
| Hero | Avatar, name, title visible; scroll-to-About control works |
| About | Full bio text; optional tags visible |
| Interests | Three cards; images load; click expands detail or shows feedback |
| Contact | Instagram opens correctly; mailto works |
| Footer | Copyright year and last-updated date shown |

## Forbidden

- No database, API, or CMS
- No React Router
- No iframe embeds
- No Google Fonts (use `font-sans` system stack)

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Workflow

1. Implement one step from build order
2. Check per-component table
3. When all steps done, run global acceptance
4. Fix failures and re-check before handoff
