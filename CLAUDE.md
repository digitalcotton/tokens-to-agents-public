# CLAUDE.md

This repository uses `AGENTS.md` as its canonical agent instruction file. Read `AGENTS.md` first, then load the relevant skill from `.claude/skills/` for the task at hand.

Three rules that always apply, restated here so they are never missed:

1. Never use em dashes or en dashes, anywhere, in the UI or in copy. Use commas, colons, parentheses, or periods.
2. Every visual value comes from a design token. Never hardcode what a token should own.
3. Pristine naming and structure are a feature. Write the repository so it reads as deliberate to anyone who opens it.

Everything else, the design concept, build order, drift alarms, quality floor, stack, and factual guardrails, is in `AGENTS.md`.
