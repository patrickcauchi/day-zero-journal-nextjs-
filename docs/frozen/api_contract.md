API_CONTRACT.md
**Note:** Keep responses tiny; everything is server-side validated.

### POST `/api/coach`
- **Body:** `{ logId: string }`
- **Auth:** session required; must own log
- **Logic:** fetch log → if cached feedback exists & content unchanged, return cache; else call OpenAI with short prompt → store → return
- **Response (200):** `{ summary: string, advice: string, model: "gpt-4o-mini" }`
- **Errors:** 401 unauth, 403 forbidden (not owner), 429 quota, 500

### POST `/api/stripe/webhook`
- **Auth:** Stripe signature header
- **Events handled:** `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`
- **Effect:** upsert `subscriptions`, set `profiles.plan_tier`