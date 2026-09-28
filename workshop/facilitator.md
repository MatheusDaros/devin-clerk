# Facilitator notes (40 min)

## Before the event
- [ ] Repo `MatheusDaros/devin-clerk` is **public**, marked as a **Template repository** (Settings → General), and GitHub Pages serves `docs/` from `main`.
- [ ] Send `workshop/prereq-email.md` 48h ahead with the coupon codes. Keep spare codes for the day.
- [ ] Do a full dry run with a fresh GitHub account and Devin account: fork → connect → Prompt 1 → Prompt 2 → sign up in the preview. Time each step and note anything that changed in Devin's or Clerk's UI.
- [ ] Open a finished session (from your dry run) in a tab, ready to show on screen.

## Run of show

| Time | Block | Say / show |
|---|---|---|
| 0–4 | Intro | Show the finished app: sign up, dashboard greeting, sign out, redirect. The loop for today is **plan → review → implement → verify → iterate**. |
| 4–8 | Step 1: Fork | Share your screen while you fork. Tell people to **untick "Copy the main branch only"** so the `solution` branch comes with the fork. |
| 8–13 | Step 2: Connect + start | Show Settings → Connections → GitHub. Start a session, pick the fork, paste Prompt 1. Walk the room: missing-repo problems happen here. |
| 13–20 | Step 3: Review the plan | Point out what a good plan contains: files, route protection, verification. Everyone replies with one tweak. |
| 20–31 | Step 4: Implement + verify | While Devin works (5–10 min), show the session timeline on screen. When previews come up, demo the `+clerk_test` / `424242` sign-up. |
| 31–38 | Step 5: Make it yours | People pick a Prompt 3 option. Put 1–2 attendees' results on screen. |
| 38–40 | Wrap-up | Claim the Clerk app from the preview's Clerk banner, deploy stretch goal, docs links. |

## Common issues
- **Fork doesn't show up in Devin:** the GitHub app was installed for "Only select repositories". Fix: GitHub → Settings → Applications → Installed GitHub Apps → Devin → Configure → add `devin-clerk`.
- **Devin asks for Clerk keys:** reply "Use accountless mode as described in AGENTS.md (`npx -y clerk@latest init`)."
- **No preview link:** ask Devin to "share a browser preview of the dev server on port 3000", or open the session's Desktop tab.
- **Verification email never arrives:** use a `+clerk_test` email and code `424242`.
- **"Verify you are human" on sign-up:** Clerk bot protection; the attendee ticks it in the preview. It can block Devin's own automated browser, so attendees do the sign-up test themselves.
- **Dashboard greeting has no name:** new Clerk apps don't collect names at sign-up. Add one via avatar → Manage account.
- **Running out of time:** use the catch-up prompt in `workshop/prompts.md`.
