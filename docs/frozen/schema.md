# DayZero SaaS – Database Schema (v0.1)

**Status:** ✅ Frozen for MVP build (Sept 2025)  
**Scope:** Minimum schema to support journaling logs + plan tiers.  
Future tables (AI feedback, subscriptions, usage counters) will be added after core UI is working.

---

## 1. Profiles
Each user has one profile row. Used to track plan tier (free/pro).

```sql
create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  plan_tier text not null default 'free',
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy profiles_self
  on public.profiles
  for all
  using (user_id = auth.uid())
  with check (user_id = auth.uid());
```

## 2. Logs
Journaling entries per user.

```sql
create table if not exists public.logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  build text,
  learn text,
  connect text,
  reflect text,
  created_at timestamptz not null default now()
);

alter table public.logs enable row level security;

create policy logs_self
  on public.logs
  for all
  using (user_id = auth.uid())
  with check (user_id = auth.uid());
```

---

**Schema is frozen for MVP.**
