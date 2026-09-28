<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Vibe Board — workshop sample app

A small Next.js (App Router, TypeScript, Tailwind v4) app used in the "Add auth with Clerk by prompting Devin" workshop. It starts with **no authentication**; attendees ask an agent to add Clerk.

## Commands

- Install: `npm install`
- Dev server: `npm run dev` (http://localhost:3000)
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Build: `npm run build`

Run lint, typecheck and build before opening a PR.

## Layout

- `app.config.ts` — app name, tagline, emoji, accent color. Change branding here, not in components.
- `app/page.tsx` — public landing page. Must stay public.
- `app/dashboard/page.tsx` — the board. Meant to be private.
- `app/api/notes/route.ts` — mock notes API (reads `data/notes.json`).
- `components/Header.tsx` — top nav; `{/* AUTH CONTROLS GO HERE */}` marks where sign-in / user controls belong.
- `docs/` and `workshop/` — the attendee walkthrough and facilitator material. Don't modify them for app changes.

## Adding Clerk (rules)

- Set up Clerk with the Clerk CLI: `npx -y clerk@latest init`. It works without a Clerk account ("accountless"): it creates a claimable development app, writes keys to `.env.local`, installs `@clerk/nextjs`, wraps the app in `<ClerkProvider>`, and adds `proxy.ts` plus sign-in / sign-up routes. Don't hand-write that setup unless the CLI failed.
- Never ask the user to paste Clerk keys, never print `.env.local`, and never commit `.env*` files (except `.env.example`) or the `.clerk/` folder.
- This project is on Next.js 16, so the Clerk middleware file is `proxy.ts` (not `middleware.ts`).
- `auth()` from `@clerk/nextjs/server` is async — always `await auth()`.
- Use Clerk's prebuilt components (`SignInButton`, `SignUpButton`, `UserButton`, `Show`, `SignIn`, `SignUp`, `UserProfile`) and style them with the `appearance` prop, using the accent color from `app.config.ts`.
- API routes should return `401` JSON when signed out rather than redirecting.
- After setup, run `npx -y clerk@latest doctor` and fix what it reports.
- To test sign-up without a real inbox, use an email containing `+clerk_test` (e.g. `jane+clerk_test@example.com`) and the verification code `424242`.
