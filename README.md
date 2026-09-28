# Clerk × Devin workshop starter

A tiny Next.js app shell with **no authentication yet**. In this 40-minute workshop you'll fork it, connect it to [Devin](https://app.devin.ai), describe an app idea of your own, and prompt Devin to turn this shell into that app, with sign-in and sign-up by [Clerk](https://clerk.com) and a members-only "Coming soon" page listing what to build next. You won't write any code yourself.

**Start the walkthrough: https://matheusdaros.github.io/devin-clerk/**

## What's inside

| Path | What it is |
|---|---|
| `app.config.ts` | App name, description, emoji, accent color and the "Coming soon" feature list |
| `app/page.tsx` | Public landing page |
| `app/dashboard/page.tsx` | "Coming soon" page. Members-only in theory, public in practice (for now) |
| `app/api/roadmap/route.ts` | Returns the upcoming features as JSON |
| `AGENTS.md` | Instructions Devin reads before touching the code |
| `workshop/` | Prompts (offline copy), facilitator notes, pre-event email |
| `docs/` | The walkthrough page (GitHub Pages) |

The `solution` branch has a finished example if you want to compare or catch up.

## Run it yourself (optional)

```bash
npm install
npm run dev   # http://localhost:3000
```
