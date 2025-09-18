# DayZero SaaS – Frozen Stack Map
**Status:** ✅ Finalized (Sept 2025)  
**Project:** DayZero Protocol Journaling + AI Coaching SaaS

---

## 1. Frontend
- **Framework:** Next.js (TypeScript, App Router)
- **Styling:** TailwindCSS (utility-first)
- **UI Library:** shadcn/ui (optional for fast component scaffolding)
- **Hosting:** Vercel (deploys, serverless backend functions, cron jobs)

---

## 2. Backend / Database
- **Platform:** Supabase (Postgres + Auth + Storage + Edge Functions)
- **Auth:** Email magic links
- **Database:**  
  - `users` – id, email, plan_tier, created_at  
  - `logs` – id, user_id, date, build, learn, connect, reflect, created_at  
  - `ai_feedback` – log_id, summary, advice, created_at  
  - `subscriptions` – user_id, status, stripe_customer_id, current_period_end  
- **Security:** Strict Row Level Security (RLS) policies
- **Serverless:** Edge Functions for webhooks (Stripe), weekly digests

---

## 3. Payments
- **Provider:** Stripe + Stripe Tax
- **Plans:**
  - Free → 30 logs/month, no AI (or 3 AI runs/month teaser)
  - Pro → A$3.99/mo or A$39.90/year  
  - Features: Unlimited logs, daily AI coaching, exports, weekly digest

---

## 4. AI Integration
- **Provider:** OpenAI API (`openai` npm SDK)
- **Default Model:** gpt-4o-mini (cheap, capable)
- **Guardrails:**
  - 1–3 AI coaching runs/day per user
  - Free plan teaser limit
  - Cache `ai_feedback` (no re-generation on every view)
- **Stretch:** Optional “Deep Review” using larger models (quota-limited)

---

## 5. Emails / Notifications
- **Provider:** Resend
- **Flows:**  
  - Welcome email  
  - Limit-hit notification (Free users)  
  - Dunning emails (via Stripe events)  
  - Weekly digest (Supabase function + Vercel Cron)

---

## 6. Analytics & Monitoring
- **Analytics:** Plausible (privacy-friendly, lightweight)
- **Error Tracking:** Sentry
