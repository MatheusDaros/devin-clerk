# Facilitator notes (40 min)

## Before the event
- [ ] Repo `MatheusDaros/devin-clerk` is **public**, marked as a **Template repository** (Settings → General), and GitHub Pages serves `docs/` from `main`.
- [ ] Send `workshop/prereq-email.md` 48h ahead with the coupon codes. Keep spare codes for the day.
- [ ] Do a full dry run with a fresh GitHub account and Devin account: fork → connect → Prompt 1 → Prompt 2 → sign up at the trycloudflare.com link → Prompt 3 (claim the Clerk app, set the password minimum to 8). Time each step and note anything that changed in Devin's or Clerk's UI.
- [ ] Open a finished session (from your dry run) in a tab, ready to show on screen.

## Run of show

| Time | Block | Say / show |
|---|---|---|
| 0–4 | Intro | Show a finished app from your dry run: landing page, sign up, Coming soon page with its feature list, sign out, redirect. Ask everyone to think of an app idea (name + one sentence) while they fork. The loop for today is **plan → review → implement → verify → iterate**. |
| 4–8 | Step 1: Fork | Share your screen while you fork. Tell people to **untick "Copy the main branch only"** so the `solution` branch comes with the fork. |
| 8–13 | Step 2: Connect + start | Start a session, open the repository selector (**+** under the message box → **Repositories**), pick the fork, paste Prompt 1. Walk the room: missing-repo problems happen here. |
| 13–20 | Step 3: Describe + plan | Attendees type their app name and description into the walkthrough, then paste Prompt 1. Point out what a good plan contains: the feature list, files, route protection, verification. Everyone replies with one tweak and waits for the updated plan: nobody says "approved" until Prompt 2. |
| 20–31 | Step 4: Implement + verify | Before Prompt 2, show switching the session to **Fusion** in the agent selector (hover the ? on the walkthrough for why). While Devin works (5–10 min), show the session timeline on screen. When the trycloudflare.com links come up, demo the `+clerk_test` / `424242` sign-up in a normal browser tab. Remind people not to use Devin's built-in preview. |
| 31–38 | Step 5: Make it yours | Everyone sends Prompt 3, claims their Clerk app from the link Devin sends and sets the password minimum to 8 in the Clerk Dashboard. Show the Users page with the account they signed up with. |
| 38–40 | Wrap-up | Point at the Coming soon page: every feature on it is the next Devin prompt (step 6 of the walkthrough). The "More ideas to try" prompts are there for later. |

## Common issues
- **Fork doesn't show up in Devin's repository selector:** the GitHub app was installed for "Only select repositories". Fix: GitHub → Settings → Applications → Installed GitHub Apps → Devin → Configure → add `devin-clerk`, then reload Devin. If they forked into a GitHub organization, that organization also needs a connection (Devin → Settings → Connections → GitHub → Add Connection).
- **Settings → Connections only shows "Unlink user":** this appears when GitHub is already connected for the Devin account. There is no repo list on that page; check the repository selector when starting a session instead.
- **Devin asks for Clerk keys:** reply "Use accountless mode as described in AGENTS.md (`npx -y clerk@latest init`)."
- **Devin shared a built-in preview, or sign-in fails in it:** Clerk sign-in doesn't work in Devin's preview. Ask Devin to "run npm run share and send the public trycloudflare.com link". Don't spend time debugging the preview.
- **trycloudflare.com link stopped working:** the tunnel only runs while Devin's machine is awake. Ask Devin to restart the dev server and `npm run share` and send the new link; the old one is gone.
- **Devin asks the attendee to sign up in its Desktop browser:** the "Verify you are human" check fails there. Reply "I'll sign up at the public link myself."
- **Claim link:** it's single-use and works like a password. Attendees shouldn't paste it into the room chat.
- **"Waiting for you to paste your keys" after claiming:** tell attendees to click **Otherwise skip**. `clerk init` already wrote the same keys to `.env.local`, and nobody should paste the secret key into Devin's chat.
- **Verification email never arrives:** use a `+clerk_test` email and code `424242`.
- **"Verify you are human" on sign-up:** Clerk bot protection; the attendee ticks it at their public link. It can block Devin's own automated browser, so attendees do the sign-up test themselves.
- **Dashboard greeting has no name:** new Clerk apps don't collect names at sign-up. Add one via avatar → Manage account.
- **No app idea:** suggest something from their job or a hobby in one sentence, e.g. "Plant Pal: reminds you when to water each of your plants."
- **Running out of time:** use the catch-up prompt in `workshop/prompts.md`.
