# Tokens-to-Agents Learning Hub: build handoff

This folder is the canon: a private git repo (tokens-to-agents-canon) that publishes its sanitized allowlist to the public mirror. After editing any canon document, commit here, then run `./sync-public.sh`; the pre-push hook (`.githooks/pre-push`, wired via core.hooksPath) blocks a push while the mirror is behind.

This folder is also the complete input bundle for the Astro production build. Open it in Claude Code and execute `PRODUCTION-BUILD-SPEC.md`. Everything that spec calls "the scaffold" and "the Claude Design artifact" is here, in one place, ready to run.

## The two phases, and why this is a handoff

The work splits in two:

1. Design (done, approved, locked). The homepage, the four pillar pages, the token reference, the audio player, and the whole design language were designed as HTML design components and signed off. They already run on the real three-tier token system. They live in `design-artifact/`.

2. Production build (this bundle's job). Porting that design to a deployable Astro 7 site needs a Node toolchain: Style Dictionary v5 for the DTCG token compile, the MDX Content Layer, Vite, the Astro build and dev server. That toolchain runs in Claude Code, not in the design environment, which is why the design ships to you as reference artifacts rather than as a running Astro repo.

So the rule is simple: do not redesign, port. The design files are the source of truth for markup, tokens, type, motion, and behavior. Recreate them as Astro components on the real token pipeline.

## The lock

Locked and approved. Reproduce faithfully. Do not restyle, re-lay-out, or refactor the look:
- the homepage, including the kinetic stack signature
- the four pillar pages (one template, four layers)
- the token reference page
- the audio player
- the design language end to end: the monochrome system, the two type voices, inversion-only emphasis, the sharp 2px radius

Net-new visual surfaces. The only two screens designed from scratch in this build, and both are now provided as built, on-system DC references in `design-artifact/`, ready to port like the rest:
- the About / colophon page (`About.dc.html`, spec section 6)
- the 404 physics page (`404.dc.html`, spec section 8)

If a build step seems to require changing a locked page, stop and ask the author before touching it.

## Read order

1. `AGENTS.md` (rules, build order, drift alarms)
2. `.claude/skills/` (five skills: design-tokens, astro-components, content-authoring, motion-signature, repo-conventions)
3. `docs/strategy.md`, then `docs/art-direction.md`, then `docs/visual-framework.md`
4. `PRODUCTION-BUILD-SPEC.md` (the build steps)
5. `design-artifact/HANDOFF.md` (the token manifest, the component inventory with props, the routing model, the view-transition model, and the placeholder map), then the four `.dc.html` files themselves

Precedence when documents disagree: `AGENTS.md` wins for rules, `visual-framework.md` wins for values, `PRODUCTION-BUILD-SPEC.md` wins for build steps, `thesis.md` wins for content claims.

## What is in this bundle

```
tokens-to-agents-handoff/
  START-HERE.md                 this file
  PRODUCTION-BUILD-SPEC.md      the engineering spec to execute
  AGENTS.md  CLAUDE.md  README.md
  docs/
    strategy.md  art-direction.md  visual-framework.md
  .claude/skills/
    design-tokens/  astro-components/  content-authoring/
    motion-signature/  repo-conventions/
  design-artifact/
    HANDOFF.md                  authoritative manifest, read this to port
    Homepage.dc.html            the map: header, hero, kinetic signature, spine, on-ramps, footer
    Pillar.dc.html              one template, four layers (?layer=NN today, real routes in the build)
    AudioPlayer.dc.html         the listen on-ramp, imported by Pillar
    Token-Reference.dc.html     the living reference, rendered from computed tokens
    About.dc.html               net-new: colophon and author presence, byline placeholder
    404.dc.html                 net-new: the token-chip physics field, the one wild screen
    support.js                  design-component runtime, generated, do not edit or port
    favicon.svg  apple-touch-icon.png  og-image.png   monochrome identity
```

### Reading the design artifact

The `.dc.html` files are design references, not the production source. Open any one in a browser to see and operate it: the signature animates, the player runs, the token reference renders live from computed values. Read them as the specification for the port. The markup structure, the `var(--token-name)` usage, the component props, and the interaction logic are all explicit in the file. `support.js` is the runtime that makes them render in a browser. Do not port `support.js`, and do not ship the HTML. Rebuild each component in Astro per `HANDOFF.md`.

## What the author still has to supply

The design uses an obvious structured placeholder everywhere real content goes. A missing asset is a slot to fill, never a reason to invent content. Required before the content is real:

- `thesis.md`. Included in `docs/`, the canonical source for every claim and all pillar copy. Pull all pillar content from it, and do not paraphrase the fact-checked claims from memory. When it disagrees with any note here or in the spec, it wins.
- `brief.md` (optional). The project definition and the eight goals. Add to `docs/` if available.
- Four pillar overview MP3s, self-hosted, dropped at each `audio.slotPath` (`audio/01-tokens-overview.mp3` and so on), with `src` pointed at them.
- The public NotebookLM notebook URL (the hub link, read by the pillar header, the ask door, and the footer).
- The vetted source links per pillar, each with its one-line note. The annotation is the product, so render it with the link's weight. Replace the representative entries, do not invent citations.
- The four pillar summaries, the vetted skim, replacing the representative summary prose.
- The production domain, wired into canonical, `og:url`, and the sitemap.

## Content fidelity, do not soften

These facts are fact-checked and fragile, and the common version of each is wrong. Carry them exactly (full detail in `AGENTS.md` factual guardrails and spec section 5):

- The Indeed lesson is structure, not size. The rule is JSON for MCP, Markdown for LLM. Credit Diana Wolosin, with Tony Rucker on the infrastructure. Shown at Into Design Systems.
- The three spec-driven development maturity levels (spec-first, spec-anchored, spec-as-source) are Birgitta Böckeler's, written in the Exploring Gen AI series on martinfowler.com, which is why they get misattributed to Fowler. Spell it Böckeler.
- The 4,300 prototypes are a cautionary governance data point, not a success metric.
- Keep the honest soft spots in. The honesty is part of the credibility.

## Definition of done

See `PRODUCTION-BUILD-SPEC.md`, "Definition of done". In short: tokens live in DTCG JSON and compile through Style Dictionary with nothing hardcoded, all four pillars are populated from `thesis.md` with all four on-ramps wired, every `HANDOFF.md` component is ported and token-driven, real routes and prev/next and the carried view transition work, About and 404 exist, the production layer (titles, meta, favicon, og:image, canonical, sitemap, robots) is in place, accessibility and reduced motion pass, no em or en dashes anywhere, and the homepage and design language are unchanged from the approved artifact.

---

Part of the public canon of tokenstoagents.ai · github.com/digitalcotton/tokens-to-agents-public
(c) 2026 Ryan Payne · CC BY-NC-ND 4.0 · attribution required, no derivatives, no commercial use · full terms in LICENSE.md
