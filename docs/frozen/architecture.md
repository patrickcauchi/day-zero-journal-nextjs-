## ARCHITECTURE.md
**Purpose:** One-pager on how the app hangs together so you don’t overbuild.

### Stack
- Frontend: Next.js (TS, App Router) + Tailwind (+ shadcn/ui optional)
- Backend: Supabase (Postgres, Auth, RLS, Edge Functions)
- Payments: Stripe + Stripe Tax
- AI: OpenAI (`gpt-4o-mini`)
- Infra: Vercel (hosting + cron), Resend (email), Plausible, Sentry, Crisp

### High-level flow
1) User signs in (Supabase Auth magic link) → `profiles.plan_tier` = 'free' by default  
2) Daily Log CRUD → table: `logs`  
3) “Coach me” → `/api/coach` server action → calls OpenAI → caches to `ai_feedback` (later)  
4) Upgrade → Stripe Checkout → webhook → upsert `subscriptions` & set `profiles.plan_tier='pro'`  
5) Weekly digest (Edge Function / Vercel Cron) → Resend email

### App routes (MVP)
- `/` Landing  
- `/app` Dashboard (today’s log + history)  
- `/app/new` New/edit log (or inline on dashboard)  
- `/account` Plan/billing (Stripe Portal link)  
- API: `/api/coach`, `/api/stripe/webhook`

### Data flow (minimal)
Next.js server actions ↔ Supabase client/server → Postgres (RLS).  
All AI writes are **idempotent**: one AI record per log; re-generate only if content changed.
