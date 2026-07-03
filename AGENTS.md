# AGENTS.md

Canonical agent instructions for this repository. Read this first. Detailed procedures live in the skills under `.claude/skills/` and load on demand. The context documents under `docs/` are the source of truth for what this site is and what it says.

## What this is

A public learning hub on the four-layer tokens-to-agents stack. The site is the owned, branded authority layer that fronts a NotebookLM master notebook. The notebook is the queryable engine; this site is the front door and the point of view.

Source-of-truth documents, all in `docs/`:
- `brief.md`: the full project definition and the eight goals.
- `strategy.md`: the layered learning strategy, the why behind the structure. The site is a self-directed learning environment, not a links page: a visual map as the mental model, four on-ramps per pillar, the thesis as the spine, and a NotebookLM corpus as the engine. Build to this, not to a flat page.
- `thesis.md`: the canonical content and the argument. Do not restate its claims from scratch, and do not contradict it.
- `visual-framework.md`: the design system, meaning the tokens, type, scale, grid, and component inventory.
- `art-direction.md`: the aesthetic concept in depth, the master prompt, and the storyboard for the kinetic signature.

Where each rule lives, canonically, so nothing drifts out of sync. This file owns the standing rules and the drift alarms. `visual-framework.md` owns the concrete values. `art-direction.md` expands the concept and explains the reasoning behind the alarms, and does not restate the alarm list. When two documents seem to disagree, this file wins for rules, and `visual-framework.md` wins for values.

## Standing rules, always apply

- Never use em dashes or en dashes, in the UI or in any copy. Use commas, colons, parentheses, or periods.
- Token-driven, always. Every color, type size, weight, space, and radius comes from a design token. Never hardcode a value a token should own. See the design-tokens skill.
- Pristine source is a feature. Naming, structure, and formatting must read as deliberate to anyone who opens the repository or views source. See the repo-conventions skill.
- The medium echoes the message. This is a site about machine-readable, structured, token-driven design, so the site itself must be a precise, token-driven artifact.

## The design concept, one paragraph

Monochrome on purpose, with no chromatic accent, because tokens begin life as a grayscale ramp and removing color forces structure and motion to carry the design. A human and machine type duality: a characterful sans for the human voice, a designed monospace for the machine voice, mirroring how DESIGN.md pairs prose with structured data. All boldness is spent in one place, a single kinetic signature where the four-layer stack resolves, a value flowing from a primitive token into a semantic slot, into a component, into rendered output. Everything else stays quiet and disciplined. Full detail in `docs/visual-framework.md` and `docs/art-direction.md`.

## Build order

Build to the strategy in `docs/strategy.md`: a layered learning environment, not a flat page. The map is the centerpiece and the navigation, every pillar carries all four on-ramps with none dropped for convenience, the thesis is the spine, and the NotebookLM hub is the engine. If a decision would reduce the site to a list of links with content attached, it is the wrong decision.

1. Design tokens first. Author the DTCG JSON token files with primitive, semantic, and component tiers, then compile them to CSS custom properties. See the design-tokens skill.
2. A living token reference page that renders the tokens, which doubles as proof the site runs on the system it argues for.
3. The homepage, built around the kinetic stack signature. Before implementing the signature, work from its storyboard in `art-direction.md`; the motion is choreographed there, not improvised here.
4. The four pillar pages, each carrying four on-ramps: a summary, a self-hosted audio overview, the annotated source links, and a link into the hub. See the content-authoring skill.

## Drift alarms, self-correct when you catch these

- A centered hero. Use left-aligned and asymmetric, with the kinetic stack as the hero.
- Inter, Roboto, or system-ui. Use the characterful sans plus the designed mono.
- A gradient, or any single bright accent color. Stay fully monochrome; inversion is the only emphasis.
- Rounded cards in a three-column grid with soft drop shadows. Use the exposed grid and real structure.
- Hairline rules and dense newspaper columns. Carry structure with the type scale and the grid.
- Fade-in-on-scroll on every element. One orchestrated signature, everything else static.
- Buzzword copy, meaning unlock, seamless, empower, elevate. Use the thesis voice, plain and specific.

## Quality floor, no exceptions

Responsive down to mobile, visible keyboard focus, semantic HTML, and prefers-reduced-motion honored. Build to this without announcing it.

## Stack

Astro 7.x, the current major as of June 2026 (Vite 8, Rust compiler by default), with Astro 6.4.x as a settled fallback if a just-released major feels risky against the launch timeline. The architecture is identical either way. Content in Markdown or MDX content collections through the Content Layer API, so adding a source or a pillar is a content edit and not a code change. The one kinetic signature is built as a small island, vanilla CSS and the Web Animations API where possible, or a Svelte island if the animation gets complex. DTCG tokens are the single source of truth for style. Astro's dev server runs in background mode automatically when it detects a coding agent, which suits this build.

## Factual guardrails

The thesis is fact-checked. In any site copy, do not reintroduce these errors:
- The Indeed benchmark is structure, not size, not a blanket claim that JSON beats Markdown. Credit Diana Wolosin, with Tony Rucker on the infrastructure.
- The 4,300 prototypes figure is a cautionary point, not a clean win.
- The three spec-driven development maturity levels, spec-first, spec-anchored, and spec-as-source, are Birgitta Böckeler's, attributed to her, not to Martin Fowler.
- Keep the honest soft spots in. The honesty is part of the credibility.
See `docs/thesis.md` for the full, vetted version.

---

Part of the public canon of tokenstoagents.ai · github.com/digitalcotton/tokens-to-agents-public
(c) 2026 Ryan Payne · CC BY-NC-ND 4.0 · attribution required, no derivatives, no commercial use · full terms in LICENSE.md
