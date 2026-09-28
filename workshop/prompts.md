# Workshop prompts (offline copy)

Replace `<you>` with your GitHub username. The walkthrough page at https://matheusdaros.github.io/devin-clerk/ fills it in for you and has copy buttons.

## Prompt 1: Plan (don't code yet)

```text
Repository: <you>/devin-clerk

I want to add authentication to this app with Clerk. Only write a plan for now: don't change any code until I approve it.

Requirements:
- Set up Clerk with the Clerk CLI in accountless mode, following the rules in AGENTS.md. I don't have Clerk keys.
- Signed-out visitors see "Sign in" and "Sign up" buttons in the header. Signed-in users see their avatar menu instead.
- /dashboard requires sign-in and greets the user by first name.
- /api/notes returns a 401 JSON error when signed out.
- The landing page (/) stays public.

In the plan, list the files you'll create or change, how you'll protect routes, and how you'll check that it works. Keep it short.
```

After reading the plan, reply with one change of your own, for example:

```text
Looks good. One change: style the Clerk components with the accent color from app.config.ts.
```

## Prompt 2: Implement and verify

```text
The plan is approved, go ahead and implement it. When you're done:
1. Run lint, typecheck and build, and fix any errors.
2. Start the dev server and share a live preview with me.
3. Open a pull request with a short description.
Don't commit .env.local or the .clerk folder.
```

Test it in the preview:
- Sign up with an email containing `+clerk_test`, e.g. `yourname+clerk_test@example.com`. The verification code is `424242`.
- You land on /dashboard and it greets you by name. Your avatar is in the header.
- Sign out, then open /dashboard again: you're sent to sign in.

## Prompt 3: Make it yours (pick one)

**3a. Rebrand**
```text
Rebrand the app as "<your idea>": update the name, tagline, emoji and accent color in app.config.ts, change the sample notes in data/notes.json to fit the new theme, and make the Clerk sign-in and sign-up screens match. Update the preview and push to the same PR.
```

**3b. Private notes**
```text
Let signed-in users add their own notes from the dashboard. Save each note with the user's Clerk user ID (in memory or a JSON file is fine) and only show users their own notes, plus the sample ones. /api/notes should return only the signed-in user's notes. Update the preview and push to the same PR.
```

**3c. Branded auth pages**
```text
Redesign the /sign-in and /sign-up pages with a two-column layout: our branding and tagline from app.config.ts on the left, the Clerk component on the right. Stack them on mobile. Update the preview and push to the same PR.
```

**3d. Profile page**
```text
Add a /profile page that only signed-in users can open, using Clerk's UserProfile component, and link to it from the header. Update the preview and push to the same PR.
```

**3e. Teams (advanced)**
```text
Enable Clerk Organizations with the Clerk CLI and add an OrganizationSwitcher to the header. Scope dashboard notes to the active organization, with a personal board when no organization is selected. Update the preview and push to the same PR.
```

## Catch-up prompt (if you're running late)

```text
Compare my branch with the `solution` branch of this repository and finish whatever is still missing from Prompt 2. Then share a live preview.
```
