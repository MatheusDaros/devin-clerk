# Workshop prompts (offline copy)

Replace `<you>` with your GitHub username, and `<app name>` / `<one-sentence description>` with your app idea. The walkthrough page at https://matheusdaros.github.io/devin-clerk/ fills these in for you and has copy buttons.

## Prompt 1: Plan (don't code yet)

```text
Repository: <you>/devin-clerk

My app idea is "<app name>": <one-sentence description>

Turn this starter into the first version of my app, with sign-in by Clerk. Only write a plan for now: don't change any code until I approve it.

Requirements:
- Brand it: put my app's name and description in app.config.ts and pick an emoji and accent color that fit.
- Set up Clerk with the Clerk CLI in accountless mode, following the rules in AGENTS.md. I don't have Clerk keys.
- Signed-out visitors see "Sign in" and "Sign up" buttons in the header. Signed-in users see their avatar menu instead.
- The landing page (/) stays public and pitches my app.
- /dashboard requires sign-in and is a "Coming soon" page: greet the user by first name (or the start of their email if they have no name) and list 4–6 features to build next, based on my description.
- /api/roadmap returns a 401 JSON error when signed out.

In the plan, list the features you'd put on the Coming soon page, the files you'll change, how you'll protect routes, and how you'll check that it works. Keep it short.
```

After reading the plan, reply with one change of your own, for example:

```text
Looks good. Two changes: swap feature 3 for "<a feature you want>", and style the Clerk sign-in and sign-up components with the accent color from app.config.ts.
```

## Prompt 2: Implement and verify

Tip: before sending this, switch the session to **Fusion** in the agent selector next to the message box. A frontier lead model plans and reviews while a cheaper sidekick does the routine edits and checks, so implementation costs less at frontier quality. As of Sept 28, 2026, Fusion is also 30–40% cheaper (https://devin.ai/blog/more-efficient-devin). See https://cognition.com/blog/local-fusion and https://docs.devin.ai/desktop/fusion.

```text
The plan is approved, go ahead and implement it. When you're done:
1. Run lint, typecheck and build, and fix any errors.
2. Start the dev server and share a live preview with me.
3. Open a pull request with a short description.
Don't commit .env.local or the .clerk folder.
```

Test it in the preview:
- Sign up with an email containing `+clerk_test`, e.g. `yourname+clerk_test@example.com`. The verification code is `424242`.
- You land on the Coming soon page (/dashboard). It greets you and lists the features Devin proposed. Your avatar is in the header.
- Sign out, then open /dashboard again: you're sent to sign in.

## Prompt 3: Make it yours (pick one)

**3a. Polish the landing page**
```text
Make the landing page sell my app better: a short headline, three benefit bullets based on the description in app.config.ts, and a "Get early access" button that opens sign-up for signed-out visitors and goes to /dashboard for signed-in users. Update the preview and push to the same PR.
```

**3b. Branded sign-in pages**
```text
Redesign the /sign-in and /sign-up pages with a two-column layout: my app's name, emoji and description from app.config.ts on the left, the Clerk component on the right. Stack them on mobile. Update the preview and push to the same PR.
```

**3c. Feature voting**
```text
On the Coming soon page, let signed-in users upvote the features they want most. Store votes by Clerk user ID (in memory is fine), allow one vote per user per feature, and sort features by votes. Update the preview and push to the same PR.
```

**3d. Profile page**
```text
Add a /profile page that only signed-in users can open, using Clerk's UserProfile component, and link to it from the header. Update the preview and push to the same PR.
```

**3e. Teams (advanced)**
```text
Enable Clerk Organizations with the Clerk CLI and add an OrganizationSwitcher to the header. Show the active organization's name on the Coming soon page, or "Personal" when none is selected. Update the preview and push to the same PR.
```

## After the event: build the next feature

Every feature on your Coming soon page is a ready-made next prompt. Start a new Devin session and send:

```text
Repository: <you>/devin-clerk

Let's build the next feature of <app name>. Pick the first entry in upcomingFeatures in app.config.ts and write a short plan for it. Don't change any code until I approve it. Once it's built: remove it from the Coming soon list, link to it from the header, share a preview and open a PR.
```

## Catch-up prompt (if you're running late)

```text
Compare my branch with the `solution` branch of this repository and finish whatever is still missing from Prompt 2, keeping my app's name, description and features. Then share a live preview.
```
