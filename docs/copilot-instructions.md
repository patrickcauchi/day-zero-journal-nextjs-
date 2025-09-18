
# About Frozen Docs
Finalized documents (stack, schema, product spec) are stored in [`/docs/frozen/`](./frozen/). These are versioned, immutable references for the project. Only update them for major version changes.

All iterative or evolving documentation (such as prompts and agent instructions) remain in `/docs/`.

**References to stack, schema, and product spec throughout this file point to `/docs/frozen/`.**

# Copilot Instructions for DayZero SaaS (IDE Agent)

## Scope
This document is for the **IDE agent workflow programming assistant** (e.g., GitHub Copilot, VS Code AI), not the app's runtime agent. For the in-app agent prompt, see [`docs/app_prompt.md`](./app_prompt.md).

## Project Overview
- **DayZero SaaS** is a journaling and AI coaching platform with a Next.js frontend and a Supabase backend.
- The stack and schema are **frozen for MVP** (as of Sept 2025). Major changes require explicit revision/version bump.

## Architecture & Data Flow
- **Frontend:** Next.js (TypeScript, App Router), TailwindCSS, shadcn/ui (optional), hosted on Vercel.
- **Backend:** Supabase (Postgres, Auth, Storage, Edge Functions). Strict Row Level Security (RLS) is enforced.
- **Payments:** Stripe (with Stripe Tax), plan gating via Supabase and Stripe webhooks.
- **AI:** OpenAI API (gpt-4o-mini), with usage limits and caching of AI feedback.
- **Notifications:** Resend for transactional emails, Vercel Cron for digests.

## Key Files & Conventions
- **App agent prompt:** [`docs/app_prompt.md`](./app_prompt.md) (for the agent used inside the app via API call)
- **IDE agent prompt reference:** [`docs/ai-agent-prompt-reference.md`](./ai-agent-prompt-reference.md)
- **Database schema:** See [`docs/frozen/schema.md`](./frozen/schema.md) for all current tables and RLS policies. Only `profiles` and `logs` are in MVP; others are planned.
- **Stack details:** See [`docs/frozen/stack.md`](./frozen/stack.md) for finalized tech stack, service boundaries, and execution timeline.
- **Product spec:** See [`docs/frozen/product_spec.md`](./frozen/product_spec.md) for the frozen product requirements and features.
- **Roadmap:** [`docs/roadmap.md`](./roadmap.md) is the evolving project roadmap. It is intentionally kept in the main `docs` folder (not in `/docs/frozen/`) so it can be edited and iterated over time. Reference this file for current priorities and planned features.
- **No build scripts or tests** are present in this repo (as of MVP freeze). All infra is managed via Vercel/Supabase dashboards.
- **No secrets** should be committed. All sensitive config is managed via environment variables in Vercel/Supabase.

## Patterns & Workflows
- **Frontend/Backend split:** All business logic and data access should respect RLS and be performed via Supabase client SDK or Edge Functions.
- **Plan gating:** Enforced both in frontend (UI) and backend (RLS + Stripe webhooks).
- **AI feedback:** Cached in `ai_feedback` table; do not re-generate on every view. Free plan users have strict limits.
- **Emails:** All transactional flows (welcome, limit-hit, dunning, digest) are handled via Resend and/or Supabase Edge Functions.
- **Analytics:** Use Plausible for privacy-friendly analytics; Sentry for error tracking.

## Example: Adding a New Table
1. Update [`docs/frozen/schema.md`](./frozen/schema.md) with SQL and RLS policy.
2. Apply changes via Supabase dashboard (not via migration scripts in this repo).
3. Update [`docs/frozen/stack.md`](./frozen/stack.md) and [`docs/frozen/product_spec.md`](./frozen/product_spec.md) if the change affects architecture, plan gating, or product requirements.

## Principles
- **Security first:** RLS enforced from day 1. No plaintext secrets in repo.
- **API cost control:** AI usage is capped to keep costs predictable.
- **Growth loops:** Weekly digests and public log sharing are key retention/virality drivers.

---
For any unclear conventions or missing context, consult [`docs/frozen/schema.md`](./frozen/schema.md), [`docs/frozen/stack.md`](./frozen/stack.md), and [`docs/frozen/product_spec.md`](./frozen/product_spec.md) first. If still unclear, ask for explicit guidance before proceeding with major changes.
