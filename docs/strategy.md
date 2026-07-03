# The Layered Learning Strategy

One document, two readers. Read it first to confirm it captures the strategy we built. Then it goes to the build agent as the thing to build to, so the strategy is explained once and never flattened again.

## The strategic core, the part that is the actual strategy

Different people learn differently, so forcing everyone through one format is how a learning site fails. The strategy is to take one curated body of knowledge and offer it through several on-ramps, then let each person choose the depth and the format that fits them. The skimmer, the listener, the deep reader, and the question-asker each get their own door into the same curated knowledge.

This is what makes the site a complete, self-directed learning environment rather than a links page with extras bolted on. The map sets the mental model. Each pillar lets a person go as deep or as shallow as they want. The hub is always there for the question the page did not answer. Layering the formats over one corpus is the whole point. It is not a feature list, it is the design.

## The mental model: the visual map

Above everything sits the visual map of the four-layer stack. It is the hook, the primary navigation, and the thesis in one glance. A person arrives, sees the whole shape of the subject at once, understands that the four layers are one connected chain, and clicks into wherever they want to start. The map is how the strategy announces itself: this is structured, this is connected, and you choose your path through it.

In this build, that map is the kinetic stack signature. See `art-direction.md` for its storyboard. The strategy names what the map must do; the art direction specifies how it looks and moves.

## The four on-ramps, per pillar

Every pillar offers the same knowledge through all four. None is optional, because each one is a different learner's only comfortable way in. Remove one and you remove an audience.

1. The summary, the skim. The distilled brief, two or three minutes, for the person who wants the gist before deciding whether to go deeper.
2. The audio, the listen. The NotebookLM overview, for the passive or commuting learner who would rather hear it than read it. Self-hosted and styled to the site, since there is no embeddable player.
3. The annotated sources, the go-deep. The curated direct links to the original articles and specs, each with one line on why it matters and where it sits on the stack. A bare link is aggregation. An annotated link is curation. The annotation is the judgment, and the judgment is the authority.
4. The query, the ask. A link into the NotebookLM master notebook, so a person can interrogate the curated corpus directly and ask the thing the page did not cover.

The build mechanics for these four, the schema fields, the self-hosted audio, and the annotation rule, live in the content-authoring skill. This section is the why; that skill is the how.

## The spine: the thesis

The four pillars are not four separate topics. The thesis is the connective spine that makes them one argument: tokens give the values, machine-readable systems give the meaning, spec-driven development gives the intent, and agent context standards deliver all of it at runtime. The map shows the chain, and the thesis explains the handoffs. Every pillar page should feel like part of one through-line, never a standalone entry in a list. The canonical, fact-checked thesis is `thesis.md`.

## The engine: NotebookLM

The site is the owned, branded front door and the point of view. Behind it, the NotebookLM master notebook is the queryable engine that holds the curated corpus. The summaries, the audio, and the query link all draw from it. The site gives that corpus a home the author controls and a reason to be taken seriously. The author's synthesis and curation are the product, which is what makes him the source rather than an aggregator.

## For the build agent

Build to this whole strategy, not to a flat page. The site is a layered learning environment. Concretely, that means: the map is the centerpiece and the navigation, not decoration. Every pillar carries all four on-ramps, and none is dropped because it is inconvenient to implement. The thesis is the spine, so the pillars read as one connected argument. And the corpus behind it all is the NotebookLM hub, which the summaries, audio, and query link serve. If a decision would reduce the site to a list of links with some content attached, it is the wrong decision.

---

Part of the public canon of tokenstoagents.ai · github.com/digitalcotton/tokens-to-agents-public
(c) 2026 Ryan Payne · CC BY-NC-ND 4.0 · attribution required, no derivatives, no commercial use · full terms in LICENSE.md
