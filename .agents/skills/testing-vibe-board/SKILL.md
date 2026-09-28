---
name: testing-vibe-board
description: Runtime testing of the Vibe Board walkthrough and Clerk solution branch without exposing development credentials.
---

# Runtime testing

- Preserve the initial branch and tracked working-tree status. The starter/PR branch and `solution` have different behavior; restore the initial checkout and stop servers after testing.
- Serve the PR's `docs/` with `python3 -m http.server 8000 --directory docs`. If switching branches while testing, copy the docs to a temporary directory first and serve that snapshot.
- On `solution`, run `npm install` and `npm run dev -- --port 3000`. Use the existing ignored `.env.local` and `.clerk/`; never print their contents.
- Walkthrough state uses localStorage keys `clerkDevin.user`, `clerkDevin.done`, and `clerkDevin.timer`. Test real controls and reload persistence. At 390px, compare document scrollWidth with innerWidth as well as inspecting screenshots.
- Test auth API responses using browser-context fetch, retaining the browser's session. Expected signed-out response: 401 `{"error":"Unauthorized"}`; authenticated response: 200 with six notes.
- Use a unique `+clerk_test` email and verification code `424242`. Try Turnstile only via an ordinary GUI click. If it blocks, report UI signup as incomplete, not passed.
- Only with explicit authorization, a development Clerk Backend API user and short-lived sign-in token can provide signed-in test coverage. Keep keys and tickets in memory, never print them or include them in recordings. Navigate `/sign-in?__clerk_ticket=<token>`, then `/dashboard`. This does not prove UI signup.
- Avatar → Manage account → Update profile exposes optional first/last name fields. Save and reload the dashboard to verify the first-name greeting; clearing the name should show the email local part.
- Verify sign-out restores header buttons, dashboard redirect, and API 401.

## Devin Secrets Needed

Existing local development credentials: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` in ignored `.env.local`. Do not request or use production credentials for tests.
