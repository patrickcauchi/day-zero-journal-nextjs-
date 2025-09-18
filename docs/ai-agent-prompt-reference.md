## Roadmap
The project roadmap is maintained in [`docs/roadmap.md`](./roadmap.md). This file is intentionally kept in the main `docs` folder (not in `/docs/frozen/`) because it is iterative and will evolve as the project progresses. It is not part of the frozen documentation set and should be referenced for current and upcoming priorities, milestones, and planned features.

# AI Agent Prompt Reference (IDE Agent)

This document is the reference for the **IDE agent workflow programming assistant** (e.g., GitHub Copilot, VS Code AI) prompts and conventions for the DayZero SaaS codebase.

**Note:** The prompt for the in-app agent (the agent used at runtime via API call) is maintained separately in [`docs/app_prompt.md`](./app_prompt.md). This file is for the IDE agent only.

It preserves the original and revised prompt for generating or updating [`docs/copilot-instructions.md`](./copilot-instructions.md) to guide AI coding agents in the DayZero SaaS codebase.

---

## Revised Prompt (Sept 2025)

Analyze this codebase to generate or update `docs/copilot-instructions.md` for guiding AI coding agents.

Focus on surfacing the essential knowledge that would help an AI agent be immediately productive in this codebase. Consider aspects like:
- The "big picture" architecture, which requires reading multiple files—especially `docs/frozen/stack.md` and `docs/frozen/schema.md`—to understand major components, service boundaries, data flows, and the rationale behind structural decisions.
- Critical developer workflows (builds, tests, debugging), noting that this project currently manages infrastructure via Vercel and Supabase dashboards rather than scripts in the repo.
- Project-specific conventions and patterns, such as strict Row Level Security (RLS) in Supabase, plan gating, and AI feedback caching, as described in `docs/frozen/schema.md` and `docs/frozen/stack.md`.
- Integration points, external dependencies, and cross-component communication patterns (e.g., Vercel, Supabase, Stripe, OpenAI, Resend).

Source any existing AI conventions from `docs/copilot-instructions.md` and reference key documentation files in `/docs`.

Guidelines (see https://aka.ms/vscode-instructions-docs):
- If `docs/copilot-instructions.md` exists, merge intelligently—preserve valuable content while updating outdated sections.
- Write concise, actionable instructions (~20-50 lines) using markdown structure.
- Include specific examples from the codebase when describing patterns.
- Avoid generic advice ("write tests", "handle errors")—focus on THIS project's specific approaches.
- Document only discoverable patterns, not aspirational practices.
- Reference key files/directories (e.g., `docs/frozen/stack.md`, `docs/frozen/schema.md`, and the evolving `docs/roadmap.md`) that exemplify important patterns and current priorities.


Update [`docs/copilot-instructions.md`](./copilot-instructions.md) for the user, then ask for feedback on any unclear or incomplete sections to iterate.

---

This file serves as a reference for future prompt engineering and documentation updates.
