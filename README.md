# Vibe Board — Clerk × Devin workshop

A tiny Next.js app with **no authentication yet**. In this 40-minute workshop you'll fork it, connect it to [Devin](https://app.devin.ai), and prompt Devin to add sign-in, sign-up and a protected dashboard with [Clerk](https://clerk.com). You won't write any code yourself.

**Start the walkthrough: https://matheusdaros.github.io/devin-clerk/**

## What's inside

| Path | What it is |
|---|---|
| `app/page.tsx` | Public landing page |
| `app/dashboard/page.tsx` | The board. Private in theory, public in practice (for now) |
| `app/api/notes/route.ts` | Mock notes API |
| `app.config.ts` | Name, tagline, emoji and accent color. Make it yours |
| `AGENTS.md` | Instructions Devin reads before touching the code |
| `workshop/` | Prompts (offline copy), facilitator notes, pre-event email |
| `docs/` | The walkthrough page (GitHub Pages) |

The `solution` branch has a finished version if you want to compare or catch up.

## Run it yourself (optional)

```bash
npm install
npm run dev   # http://localhost:3000
```
