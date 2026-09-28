<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Workshop starter app

A small Next.js (App Router, TypeScript, Tailwind v4) app shell used in the "Add auth with Clerk by prompting Devin" workshop. Each attendee turns it into their own app idea: they give Devin a name and a one-line description, and Devin brands the app, adds Clerk, and fills in a "Coming soon" page. It starts with **no authentication**.

## Commands

- Install: `npm install`
- Dev server: `npm run dev` (http://localhost:3000)
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Build: `npm run build`

Run lint, typecheck and build before opening a PR.

## Layout

- `app.config.ts` — app `name`, `description`, `emoji`, `accent` color and `upcomingFeatures` (the "Coming soon" list). Branding and the feature list live here, not in components.
- `app/page.tsx` — public landing page that pitches the app. Must stay public.
- `app/dashboard/page.tsx` — the "Coming soon" page for signed-in users: a greeting plus one card per `upcomingFeatures` entry, and a "Keep building" hint pointing at the next feature. Keep that hint.
- `app/api/roadmap/route.ts` — returns `upcomingFeatures` as JSON.
- `components/Header.tsx` — top nav; `{/* AUTH CONTROLS GO HERE */}` marks where sign-in / user controls belong.
- `docs/` and `workshop/` — the attendee walkthrough and facilitator material. Don't modify them for app changes.

## Planning requests

- When the user asks for a plan, or asks to change a plan, reply with the plan and stop. Don't edit files, install packages or run commands (including the Clerk CLI) until the user explicitly approves, e.g. by saying "approved". Feedback on a plan is not approval: reply with the full updated plan and wait again.

## Customizing the app

- When the user gives an app name and description, update `app.config.ts`: use their name and description as written (fix only typos), choose a fitting emoji and accent color, and write 4–6 `upcomingFeatures` that follow from the description. Each one should be concrete and small enough to build in one Devin session. Titles under 5 words, descriptions one sentence.
- Adjust the landing page copy to fit the app if needed, but keep it one screen and keep the call to action pointing at `/dashboard`.
- When a feature from `upcomingFeatures` gets built, remove it from the list and link to it from the header.

## Adding Clerk (rules)

- Set up Clerk with the Clerk CLI: `npx -y clerk@latest init`. It works without a Clerk account ("accountless"): it creates a claimable development app, writes keys to `.env.local`, installs `@clerk/nextjs`, wraps the app in `<ClerkProvider>`, and adds `proxy.ts` plus sign-in / sign-up routes. Don't hand-write that setup unless the CLI failed.
- Never ask the user to paste Clerk keys, never print `.env.local`, and never commit `.env*` files (except `.env.example`) or the `.clerk/` folder.
- This project is on Next.js 16, so the Clerk middleware file is `proxy.ts` (not `middleware.ts`).
- `auth()` from `@clerk/nextjs/server` is async — always `await auth()`.
- Use Clerk's prebuilt components (`SignInButton`, `SignUpButton`, `UserButton`, `Show`, `SignIn`, `SignUp`, `UserProfile`) and style them with the `appearance` prop, using the accent color from `app.config.ts`.
- API routes (e.g. `/api/roadmap`) should return `401` JSON when signed out rather than redirecting.
- After setup, run `npx -y clerk@latest doctor` and fix what it reports.
- New Clerk apps only collect email + password at sign-up, so `user.firstName` can be `null`. Fall back to something sensible (e.g. the part of the email before `@`).
- Sign-up may show a "Verify you are human" (Cloudflare) check that automated browsers can't pass. Don't try to bypass it; ask the user to finish the sign-up in the preview.
- To test sign-up without a real inbox, use an email containing `+clerk_test` (e.g. `jane+clerk_test@example.com`) and the verification code `424242`.
