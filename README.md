# Tokens-to-Agents Site Scaffold

A starting scaffold for building the learning hub in Claude Code. It carries the agent context, a set of project skills, and the visual framework, so a Claude Code session begins grounded in every decision instead of re-deriving them.

## The framework decision

Build on Astro.

Astro is the right tool because the site is content-first, and Astro ships zero JavaScript by default, produces the cleanest static HTML, and gives you type-safe content collections for the pillars and an islands model for the one piece of interactivity. For the requirement that the source read as pristine, that matters concretely: an Astro page ships the HTML and the CSS you write and nothing else, with no framework runtime to clutter view-source.

Next.js was considered and set aside. It is an application framework that ships a React runtime on every page, which is heavier and messier to view-source. It would be the right call only if this were an authenticated app rather than a content site.

SvelteKit was the third option. It is app-first and the wrong whole-site choice, but its compiled output is excellent for animation. The move that captures its strength without adopting it: build the one kinetic signature as a single Svelte island inside Astro, since Astro's islands are framework-agnostic. For maximum pristineness, default the signature to vanilla CSS and the Web Animations API, and reach for a Svelte island only if the choreography needs it.

Versions, checked June 2026: Astro is on 7.0.x (Vite 8, Rust compiler by default), with Astro 6.4.x as a settled fallback if a freshly released major feels risky against the launch timeline. The architecture in this scaffold is identical on either. Next.js, for reference, is on 16.2.x. Confirm the latest patch before you start.

A detail that fits the project: Astro's dev server now starts in background mode automatically when it detects a coding agent, so a Claude Code session manages the dev server cleanly. The framework itself is converging on the agentic patterns the thesis describes.

## What is in here

```
AGENTS.md                  Canonical agent instructions. The session reads this first.
CLAUDE.md                  Thin pointer to AGENTS.md plus the three critical rules.
.claude/skills/            Project skills, committed to the repo, loaded on demand:
  design-tokens/           DTCG three-tier tokens, naming, compile to CSS variables.
  astro-components/        Component conventions, token-only styles, islands discipline.
  content-authoring/       Content collections, the pillar schema, the four on-ramps, voice.
  motion-signature/        The one kinetic signature, reduced motion, implementation.
  repo-conventions/        The pristine-source standard: structure, naming, CSS, commits.
docs/
  strategy.md              The layered learning strategy: map, four on-ramps, thesis spine, hub engine.
  visual-framework.md      The concrete design system: palette, type, scale, grid, signature.
  art-direction.md         The aesthetic concept, the master prompt, and the signature storyboard.
```

## How the context files work

- `AGENTS.md` is the open standard for always-on repository instructions. It holds the project rules, the build order, the drift alarms, and pointers to the skills and docs. It is the canonical owner of the rules and the alarms.
- `CLAUDE.md` is Claude Code's own native memory file. Here it is thin and points to `AGENTS.md`, so the setup is robust whether your Claude Code version reads `AGENTS.md` natively or only `CLAUDE.md`.
- The skills carry the detail. Claude Code preloads each skill's name and description, then loads the full body only when a task calls for it. This keeps always-on context lean and the detail on demand, which is the same rules-versus-on-demand idea the thesis describes.

A note on single source of truth, since the site argues for exactly that. The drift alarms live in `AGENTS.md` only. `visual-framework.md` owns the concrete values. `art-direction.md` expands the concept and explains the reasoning, and does not restate the alarms. Edit each fact in one place.

## Before you start: add the two context documents

`art-direction.md` ships in this scaffold. Two more documents are referenced by `AGENTS.md`, `visual-framework.md`, and the skills, so copy them into `docs/` before the first session:
- `docs/brief.md`, the project brief.
- `docs/thesis.md`, the finished, fact-checked thesis (the voiced version), the source of truth for content and the argument.

## Two things to set up outside the repo

- NotebookLM has no embeddable audio player. For each pillar, download the audio overview from the notebook, host the file in the site, and play it from a native `audio` element. The content-authoring skill covers this. It is also the more pristine option, and it survives a regenerated share link.
- Public notebook sharing is domain-restricted on Workspace and Education accounts. The public master notebook that the hub links into must live on a personal Google account, set to "Anyone with a link."

## Fonts

The two type voices, N27 (human) and Basier Square Mono (machine), are both licensed from atipo for this website only. Neither license permits redistribution, so the font files are excluded from this repository and it builds on the fallback stacks (`ui-sans-serif, system-ui, sans-serif` and `ui-monospace, monospace`). That exclusion is care, not omission. See `DESIGN.md` for the full type decision.

## Kickoff sequence

1. Create a fresh Astro project, then drop this scaffold's files into the repository root, merging the `.claude/` and `docs/` folders.
2. Add the two context documents to `docs/` as above.
3. Open Claude Code in the repository. It reads `CLAUDE.md` and `AGENTS.md`, and the skills become available.
4. Build in the order set in `AGENTS.md`. Storyboard the signature first, from `art-direction.md`, so the motion is decided before any code. Then author the tokens (the signature animates real token values, so the tokens have to exist for it to be honest), then the living token reference page, then the homepage built around the signature, then the four pillar pages.
5. Work one screen at a time, and use the drift alarms in `AGENTS.md` to keep it from averaging to the middle.

Never use em dashes or en dashes, in the code or in any copy. The skills and `AGENTS.md` restate this because it is a hard rule for this project.

## License

Source-available, not open source. The written work and tokens are CC BY-NC-ND 4.0, the build configuration is MIT, and the fonts are commercially licensed and excluded. See `LICENSE.md`. For permissions beyond the license: ryan@digitalcotton.com.

---

Part of the public canon of tokenstoagents.ai · github.com/digitalcotton/tokens-to-agents-public
(c) 2026 Ryan Payne · CC BY-NC-ND 4.0 · attribution required, no derivatives, no commercial use · full terms in LICENSE.md
