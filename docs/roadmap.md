# DayZero SaaS – Roadmap

**Project:** DayZero Protocol Journaling + AI Coaching SaaS  
**Status:** Active build (Sept 2025 onwards)  

---

## 1. Phase 0 – Foundation (Week 1)
- [ ] Scaffold Next.js (TS, App Router) + Tailwind
- [ ] Setup Supabase project, Auth (email magic link), RLS enabled
- [ ] Wire Supabase client libs (`lib/supabase/client.ts`, `server.ts`)
- [ ] Deploy initial build to Vercel (hello world + login)

**Deliverable:** User can sign up / sign in and see an empty dashboard.

---

## 2. Phase 1 – Core Journaling (Weeks 2–3)
- [ ] Implement DB: `profiles`, `journal_entries`
- [ ] CRUD pages:
  - `/dashboard` → list logs
  - `/journal/new` → create log
  - `/journal/[id]` → read log
  - `/journal/[id]/edit` → edit log
- [ ] Enforce Row Level Security (RLS) for logs
- [ ] Tailwind UI: cards, forms, responsive layouts

**Deliverable:** Users can log daily Build/Learn/Connect/Reflect entries.

---

## 3. Phase 2 – Daily Pulse (Weeks 3–4)
- [ ] DB: `daily_pulse` table (unique user+date)
- [ ] Dashboard component with dropdowns (Energy, Focus, Clarity)
- [ ] Connect to logs (optional: link pulse → journal entry)

**Deliverable:** Users record their daily pulse alongside logs.

---

## 4. Phase 3 – AI Coaching (Weeks 4–5)
- [ ] API route `/api/coach` → calls OpenAI (`gpt-4o-mini`)
- [ ] Cache output to `ai_feedback` table
- [ ] Dashboard: “Coach Me” button → summary + 3 tips
- [ ] Enforce free vs. pro quotas (3 free runs / day teaser)

**Deliverable:** Users get daily AI reflections on their logs.

---

## 5. Phase 4 – Payments & Plans (Weeks 6–7)
- [ ] Stripe integration (Checkout, Billing Portal)
- [ ] Webhook → Supabase Edge Function → update `subscriptions`, `profiles.plan_tier`
- [ ] Plan gating (free: 30 logs/month, pro: unlimited)

**Deliverable:** Working freemium model with upgrade flow.

---

## 6. Phase 5 – Notifications & Digest (Week 8)
- [ ] Resend integration (welcome, free-limit hit, dunning, weekly digest)
- [ ] Supabase cron/Edge Function → generate weekly digest → send via Resend
- [ ] Dunning emails via Stripe events

**Deliverable:** Automated comms for lifecycle + weekly summary.

---

## 7. Phase 6 – Analytics & Monitoring (Week 9)
- [ ] Plausible analytics setup
- [ ] Sentry error tracking
- [ ] Basic metrics dashboard (signups, active users, conversions)

**Deliverable:** Operational visibility for product health.

---

## 8. Stretch Goals (Post-MVP)
- [ ] Deep Review (larger AI model quota)
- [ ] CSV/Markdown exports
- [ ] Mobile app shell (Expo)
- [ ] Team/multi-user features

---

## Milestone Definition
- **MVP Complete:** Phase 1–3 (auth + journaling + daily pulse + basic AI).  
- **Launch-Ready:** Phase 1–6 (MVP + payments + notifications).  
- **Growth:** Phase 7+ (analytics, polish, stretch features).

---
