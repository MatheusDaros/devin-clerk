# Facilitator notes (40 min)

## Before the event
- [ ] Repo `MatheusDaros/devin-clerk` is **public**, marked as a **Template repository** (Settings → General), and GitHub Pages serves `docs/` from `main`.
- [ ] Send `workshop/prereq-email.md` 48h ahead with the coupon codes. Keep spare codes for the day.
- [ ] Do a full dry run with a fresh GitHub account and Devin account: fork → connect → Prompt 1 → Prompt 2 → sign up in the preview. Time each step and note anything that changed in Devin's or Clerk's UI.
- [ ] Open a finished session (from your dry run) in a tab, ready to show on screen.

## Run of show

| Time | Block | Say / show |
|---|---|---|
| 0–4 | Intro | Show a finished app from your dry run: landing page, sign up, Coming soon page with its feature list, sign out, redirect. Ask everyone to think of an app idea (name + one sentence) while they fork. The loop for today is **plan → review → implement → verify → iterate**. |
| 4–8 | Step 1: Fork | Share your screen while you fork. Tell people to **untick "Copy the main branch only"** so the `solution` branch comes with the fork. |
| 8–13 | Step 2: Connect + start | Start a session, open the repository selector, pick the fork, paste Prompt 1. Walk the room: missing-repo problems happen here. |
| 13–20 | Step 3: Describe + plan | Attendees type their app name and description into the walkthrough, then paste Prompt 1. Point out what a good plan contains: the feature list, files, route protection, verification. Everyone replies with one tweak and waits for the updated plan: nobody says "approved" until Prompt 2. |
| 20–31 | Step 4: Implement + verify | Before Prompt 2, show switching the session to **Fusion** in the agent selector (hover the ? on the walkthrough for why). While Devin works (5–10 min), show the session timeline on screen. When previews come up, demo the `+clerk_test` / `424242` sign-up. |
| 31–38 | Step 5: Make it yours | People pick a Prompt 3 option. Put 1–2 attendees' results on screen. |
| 38–40 | Wrap-up | Point at the Coming soon page: every feature on it is the next Devin prompt (step 6 of the walkthrough). Claim the Clerk app from the preview's Clerk banner. |

## Common issues
- **Fork doesn't show up in Devin's repository selector:** the GitHub app was installed for "Only select repositories". Fix: GitHub → Settings → Applications → Installed GitHub Apps → Devin → Configure → add `devin-clerk`, then reload Devin. If they forked into a GitHub organization, that organization also needs a connection (Devin → Settings → Connections → GitHub → Add Connection).
- **Settings → Connections only shows "Unlink user":** this appears when GitHub is already connected for the Devin account. There is no repo list on that page; check the repository selector when starting a session instead.
- **Devin asks for Clerk keys:** reply "Use accountless mode as described in AGENTS.md (`npx -y clerk@latest init`)."
- **No preview link:** ask Devin to "share a browser preview of the dev server on port 3000", or open the session's Desktop tab.
- **Verification email never arrives:** use a `+clerk_test` email and code `424242`.
- **"Verify you are human" on sign-up:** Clerk bot protection; the attendee ticks it in the preview. It can block Devin's own automated browser, so attendees do the sign-up test themselves.
- **Dashboard greeting has no name:** new Clerk apps don't collect names at sign-up. Add one via avatar → Manage account.
- **No app idea:** suggest something from their job or a hobby in one sentence, e.g. "Plant Pal: reminds you when to water each of your plants."
- **Running out of time:** use the catch-up prompt in `workshop/prompts.md`.
