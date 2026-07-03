<!--
Part of the public canon of tokenstoagents.ai · github.com/digitalcotton/tokens-to-agents-public
(c) 2026 Ryan Payne · CC BY-NC-ND 4.0 · attribution required, no derivatives, no commercial use · full terms in LICENSE.md
-->

# Production Build Spec: Tokens-to-Agents Learning Hub

## What this is

The engineering spec to take the approved Claude Design artifact to a finished, deployable Astro site, the build the brief and AGENTS.md describe. The design language and the homepage are done and locked. This document is what a fresh Claude Code session executes to port that design onto a real token pipeline, wire the routes and the content, and ship it public.

Read order for the agent: AGENTS.md first (rules, build order, drift alarms), then the five skills in `.claude/skills/`, then `docs/strategy.md`, `docs/art-direction.md`, and `docs/visual-framework.md`, then this spec. When this spec and a doc disagree, AGENTS.md wins for rules, visual-framework.md wins for values, and this spec wins for build steps.

## Inputs you have

- The scaffold: AGENTS.md, CLAUDE.md, the skills, and the three docs above.
- `thesis.md`, the fact-checked, voiced argument. This is the canonical source for every claim and all pillar copy. If `brief.md` is present, it holds the project definition and the eight goals.
- The Claude Design artifact: the built HTML running on the real tokens, plus `HANDOFF.md`, the manifest of every token in use and the component inventory with props. Port from this. Do not redesign.
- Assets supplied by the author: four NotebookLM overview MP3s (one per pillar), the public notebook URL (personal account, anyone with the link), the curated source links with a one-line note each per pillar, and the four pillar summaries.

If any author asset is missing at build time, leave the structured placeholder the Design artifact already uses and keep going. A missing asset is a slot to fill, never a reason to invent content.

## Non-negotiables

These carry from AGENTS.md and do not loosen.
- True monochrome. Warm paper to cool blue-black ink, no accent color anywhere. Emphasis is inversion. Exact ramp and semantics in visual-framework.md.
- Two type voices. The characterful sans for the human argument, the designed monospace for the machine voice (layer numbers, token names, code, labels). Use whichever sans and mono the Design artifact committed to.
- Every visual value is a token, consumed as `var(--token-name)`. Nothing hardcoded.
- The kinetic stack signature is the only looping animation on the content site. Everything else is quiet, with top-tier micro-interactions under 200ms. The single deliberate exception is the 404 page, specified below, which is the one screen allowed to break this rule on purpose.
- Honor the drift alarms in AGENTS.md. No centered hero, no Inter or system-ui, no gradients or bright accents, no rounded cards with drop shadows in a three-column grid, no fade-in-on-scroll on everything.
- Never use em dashes or en dashes, in the code or any copy. Use commas, colons, parentheses, or periods.

## 1. Stack and setup

- Astro 7.x (Vite 8, Rust compiler by default). Astro 6.4.x is an acceptable fallback; the architecture is identical. Confirm the latest patch before starting.
- Zero client JavaScript by default. The signature, the audio player, and the 404 field are the only islands. Keep view-source pristine, per repo-conventions.
- Tokens in DTCG JSON compiled to CSS custom properties by Style Dictionary v5. Use v5, since full support for the DTCG 2025.10 format is still landing there; this system stays inside basic types, so it is safe. The site imports one generated CSS file at the root and consumes only the variables.
- Content in MDX content collections through the Content Layer API. Each pillar is one entry against the schema in the content-authoring skill.

## 2. Token layer

Author the DTCG JSON in three tiers from visual-framework.md exact values.
- Primitive: the full warm-paper-to-ink ramp (`gray.000` through `gray.950` with the listed hexes), the `size` scale, and the `space` scale.
- Semantic: `color.surface`, `color.surface-inverse`, `color.foreground`, `color.foreground-inverse`, `color.muted`, `color.line`, mapped to primitives as specified.
- Component: per-component tokens (the player, the cards, the diagram) that reference semantics, never primitives directly.

Style Dictionary config compiles all of it to a single CSS custom-properties file. Regenerate from JSON; never hand-edit the CSS. Reconcile against `HANDOFF.md` so every token the Design artifact used exists in the JSON with the same name.

## 3. Components

Port each component named in `HANDOFF.md`, token-driven, props as the manifest specifies. At minimum: StackDiagram (the signature, hero and nav), PillarCard (numbered 01 to 04), OnRamps (the four-door block), SourceList (annotated links), AudioEmbed (spec below), SiteHeader, SiteFooter, and TokenReference. Match the Design artifact exactly; this is a port, not a rebuild.

### The audio player

There is no embeddable NotebookLM player, so this is a custom element in the machine voice, styled to the system as the Design artifact specified. Carry that design faithfully: a sharp-cornered panel bordered in `color.line`, no drop shadow; inversion to signal playing; one sharp transport control morphing play to pause by transform; progress as a row of thin baseline-aligned ticks, played in ink and remaining in line-gray; a single thin caret playhead; a tabular time readout in the label register; and a speed toggle cycling 1x, 1.25x, 1.5x, 2x. Source is `audioSrc` per pillar. Fully keyboard-operable with labeled controls. transform and opacity only.

## 4. Routes and pages

- Replace the artifact's `?layer=NN` query routing with real routes: `/` (home), one route per pillar (`/tokens`, `/machine-readable`, `/spec-driven`, `/runtime-context`, or an `/01` style, your call, but real and readable), `/reference` (token reference), `/about`, and the 404.
- The four signature stations link to the four real pillar routes.
- View transitions between home and the pillars: carry the 01 to 04 number and the layer name as a shared element into the pillar header, so the chain stays visibly continuous. Prev and next advance the same number. Do not modify the homepage to achieve this; read from it.
- Each pillar header shows the mono number and layer name, the four on-ramps as equal doors, and prev/next.

## 5. Content integration

Pull all thesis content only from `thesis.md`. Populate all four pillars, not a template with one example: 01 Tokens (the values), 02 Machine-readable logic (the meaning), 03 Spec-driven development (the intent), and 04 Runtime context (the delivery).

Argue the spine, do not just list it. The thinnest content in the design is the handoffs, so write the connective argument on each pillar: why tokens force a meaning layer, why meaning enables spec-driven work, why intent needs a runtime delivery standard. Every pillar reads as part of one through-line.

Wire each pillar's four on-ramps: the summary (`summary`), the self-hosted audio (`audioSrc`, the MP3), the annotated sources (`sources`, each with its one-line `note`), and the hub link (`hubUrl`). The annotation is the product, so render it with the same weight as the link.

### Content fidelity, read this twice

These facts are fact-checked and fragile, and the common version of each is wrong. Do not paraphrase them from memory, and do not "correct" them to the popular version.
- The Indeed lesson is structure, not size. Diana Wolosin's rule is JSON for MCP, Markdown for LLM. The 5x cost figure is a real data point, but the lesson is structure. She is ex-Indeed, now at Netflix; the work was shown at Into Design Systems.
- The three spec-driven development maturity levels are Birgitta Böckeler's, written in the Exploring Gen AI series on martinfowler.com, which is exactly why people misattribute it to Fowler. Spell it Böckeler.
- The 4,300 prototypes are a cautionary data point about governance, not a success metric.
- The honest soft spots stay in. Do not sand them off to make the argument cleaner.
- Grounding details you may use to make copy exact: the DTCG shipped its first stable spec, Format Module 2025.10, in October 2025; design tokens originated with the Salesforce design system team; Style Dictionary has had first-class DTCG support since v4. MCP was introduced by Anthropic in November 2024 and adopted by OpenAI in March 2025; the current spec centers host-to-server communication, with agent-to-agent as the unsettled next frontier.

When `thesis.md` and these notes disagree, `thesis.md` wins.

## 6. The About page, the author's presence

The strategy's whole claim to authority is that the author's curation makes him the source, not an aggregator, and right now the author is invisible. Add an About or colophon page with a byline and a short first-person practitioner statement: who is behind this, why the curation can be trusted, and what the point of view is. Thread a light first-person voice through the pillar copy as the content skill asks. This closes a strategic hole, not just a missing page.

## 7. Production and public-ready

- Per page: a real page title and meta description.
- Favicon and a social share image (`og:image`) matched to the monochrome identity. Canonical URL and `og:url`.
- `sitemap.xml`, `robots.txt`, and the 404 page.
- Wire the domain so canonical, og:url, and the sitemap point at it.

## 8. The 404 page, the one wild screen

This is the deliberate exception to the one-signature rule, and it should read as intentional rule-breaking, not drift. The concept is off the map. The entire site is order: one value resolving through the stack in a single disciplined motion. Here the system comes apart, because the visitor has navigated off the grid, so the grid lets go. Same vocabulary, unbound.

Requirements:
- A physics field. The token chips from the signature (real token names: `gray.950`, `color.foreground`, `button.background`, and so on) become loose bodies that bounce off the viewport walls and collide with each other, spinning, with enough restitution to feel alive. Drive it with a small physics island (Matter.js or a hand-rolled canvas solver), rendered with transforms.
- The numerals 404 are set large in the display sans and act as solid colliders, so chips ricochet off the digits. The digits may drift or wobble slowly.
- Component outlines from the system (button silhouettes, card frames) drift on a slower parallax layer behind the chips, rotating gently in line-gray, for depth and the trippy layered feel.
- The grid destabilizes: the baseline grid tilts, skews, or ripples slowly behind everything.
- Monochrome holds, and this is the one identity rule that does not break even here: no accent color. Collisions may flash a brief inversion, a chip or a wall edge flipping ink and paper on impact, which keeps the chaos inside the system's own emphasis language and gives it the pop a color would, without a color.
- A still anchor. Amid all the motion, one calm, sharp, perfectly still element: a line of label-register text and a single sharp link home, for example "404. You are off the stack." with an inline link "Return to the map." The stillness of the exit against the chaos is the composition. The visitor is never actually lost.
- Make it a toy if it stays tasteful: the cursor can push the chips, or a click can fling or spawn one. Optional, and it must not get annoying.
- Reduced motion: `prefers-reduced-motion` gets a composed static tableau, chips frozen mid-scatter, numerals solid, and the exit link present. The idea reads with no continuous motion.
- Performance: cap the body count, pause the simulation when the tab is hidden, and keep it off the main thread where possible. It must not pin the CPU.

## 9. Accessibility and responsive

A full pass across every screen: the signature and the 404 field both work on mobile, the audio player controls are labeled and keyboard-operable, focus order is sensible, and focus styles are visible throughout. Honor reduced motion everywhere it applies.

## 10. Optional: reading mode

A quiet opt-in reading-mode toggle, for dyslexia comfort and long-form reading: slightly larger body, looser spacing, and uppercase labels rendered sentence case while active. Off by default, remembered if toggled. Worth doing, not required for launch.

## Definition of done

The build is finished when:
- Tokens live in DTCG JSON, compile through Style Dictionary, and the site uses only `var(--token-name)`. No hardcoded values.
- All four pillars are populated from `thesis.md`, each with all four on-ramps wired and the spine handoffs argued.
- Every component from `HANDOFF.md` is ported and token-driven, including the custom audio player.
- Real per-pillar routes work, the four stations and prev/next navigate correctly, and view transitions carry the layer number without touching the homepage.
- The About page exists with a byline and a first-person voice.
- Titles, meta, favicon, og:image, canonical, og:url, sitemap.xml, robots.txt, and the 404 page are all in place.
- The 404 page runs the physics field with a still exit and a reduced-motion fallback.
- Accessibility and responsive pass clean, and reduced motion is honored on the signature, the player, and the 404.
- No em dashes or en dashes anywhere. The drift alarms hold on every screen except the intentional 404.
- The homepage and the design language are unchanged from the approved Design artifact.

From the public canon of tokenstoagents.ai · (c) 2026 Ryan Payne · CC BY-NC-ND 4.0 · see LICENSE.md
