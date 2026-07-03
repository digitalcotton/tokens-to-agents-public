# Tokens to Agents: A Working Thesis on the AI-Native Design-to-Code Stack

I run an enterprise design system, and I ship production software built by AI agents. That combination is rare right now, and it puts me on both ends of a shift most teams are only seeing one side of. The design system world is realizing its work has a new consumer. The engineering world is realizing that consumer needs more than a clever prompt. This is my working thesis on where those two realizations meet.

The short version: a design system used to be documentation a human read and interpreted. Now it is infrastructure an agent reads and executes against. When you formalize design decisions into structured, version-controlled data, design stops being a pile of static assets and becomes a source of executable intent. The truth of the system moves out of a fragile codebase and into an architecture built for machines to act on. Four layers make that real: design tokens, machine-readable logic, spec-driven development, and runtime context standards. Each layer hands the next the context it needs, and the whole chain is what turns AI from a guessing intern into a partner you can rely on.

I will walk the chain layer by layer, then make the case for why the whole stack beats any single piece of it.

## Layer 1: Tokens, the boring foundation that has to exist first

Nothing downstream works without a standard, boring substrate, and as of October 2025 we finally have one. The Design Tokens Community Group shipped its first stable spec, v2025.10, which gives us a technology-agnostic format for design decisions: $value, $type, and $description, in a .tokens.json file. Boring is the point. Once the format stops being a debate, the work moves up to where it actually matters, which is architecture, governance, and the pipeline. The payoff is concrete. A brand change that used to take weeks of hand coordination collapses into a single source edit that propagates everywhere. Tokens are the indivisible pieces, the contract that keeps the visual language consistent across platforms.

But values alone only tell an agent what a thing is, not what it means or when to use it. That is the next layer's job.

Here is what that handoff looks like in my own work. I run an agentic platform with about 8,000 internal users at a regulated utility, and we are building the token layer into it right now. We already have a useful data point from doing it. We shipped one portion on a tokenized style guide, but without an enforced JSON contract behind it, and the agent got the design roughly 80 to 90 percent right. The page and multi-page level held up: overall layout, structure, and navigation came through. Where it slipped was at the element and component level, the granular details inside individual components. That is not a coincidence. The component level is exactly where a machine-readable contract earns its keep, because props, variants, and the specific token applied have to be exact, not approximate. So the gap I hit is the precise gap the next layer is built to close. Eighty percent from a loose style guide is the floor, not the ceiling.

## Layer 2: Machine-readable logic, turning the library into an API

A token file tells an agent that a color exists. It does not tell the agent that this red means danger and that one means brand. Without that meaning, the agent guesses, and it guesses from the average of the internet rather than from your decisions. The fix is a meaning layer: structured metadata plus an MCP server that turn the design system from a reference library into something an agent can query like an API, deterministically.

This is where the most useful piece of practitioner research right now comes in, and it is worth getting the lesson exactly right. Diana Wolosin at Indeed, with Tony Rucker building the MCP infrastructure, ran a real benchmark: 77 components parsed from their docs, eight MCP configurations, 1,056 prompts, measured on token cost and accuracy. The headline people repeat is that JSON is five times cheaper than Markdown. That is not quite the lesson. Their human-written documentation was verbose, around 30,000 tokens a query, and structured JSON beat it badly on both cost and accuracy. But Diana's actual rule is JSON for MCP, Markdown for LLM. Structured component data like props, sizes, and variants belongs in JSON because it is a contract. Natural-language rules still belong in Markdown, with front matter instead of bloat. The real takeaway is structure, not size. And it is one team's numbers on one system, so treat it as direction, not law.

The meaning layer is also where governance lives. You can wrap it in a self-healing loop, observe, detect, suggest, and fix, with a human in the oversight seat, so the system catches its own drift in CI instead of shipping it. Get this layer right and you hand the next one a governed environment to build in. Jesse Gardner at New York State is a clean example of what that buys you: a five-page state PDF turned into a working, accessible form in about thirteen minutes, with the system feeding the agent real component code instead of guesses.

One honest caveat that belongs right here, not buried at the end. Machine-readable is necessary but not sufficient. When Indeed put their winning format into production, the team generated 4,300 prototypes in four months, and an audit of a sample still found typography violations, broken spacing, and an invented color palette nobody approved. Structured context raises the floor. It does not remove the need for governance and human review on top.

## Layer 3: Spec-driven development, intent as the source of truth

Once the system is machine-readable, the method has to change too. The old default was code as truth. The agentic default is intent as truth. Spec-driven development means the agent executes against a written, version-controlled, human-verified spec, and the code is a regenerable last-mile artifact, not the thing you protect.

The most useful map of how far you take this comes from Thoughtworks' Birgitta Böckeler, writing in Martin Fowler's Exploring Gen AI series. She splits spec-driven development into three levels. Spec-first: you write a spec to guide the build, and often discard it afterward. Spec-anchored: the spec stays alive and governs the feature as it evolves. Spec-as-source: the human only ever edits the spec, and never touches the generated code. The thing worth getting right is that this is not a ladder you have to climb to be legitimate. Spec-first is where nearly everyone actually is. Her own read is that Kiro is essentially spec-first, that Spec Kit aspires to spec-anchored but in practice still branches per change rather than per feature, and that only Tessl is reaching for spec-as-source, and it is still in beta. So the honest framing is to match the level to the cost of drift, not to adopt rigor you will not enforce.

The reason this works in practice is that you can write specs an agent cannot misread. Alistair Mavin's EARS notation gives you a small set of patterns, ubiquitous, event-driven, state-driven, unwanted-behavior, and optional, that turn fuzzy requirements into testable, unambiguous statements. The tooling is real and moving fast: GitHub Spec Kit at v0.8.7, AWS Kiro, OpenSpec, BMAD. The human's job shifts from writing syntax to verifying logic. That is the part worth saying out loud, because it is the actual change to the job, not just the workflow.

## Layer 4: Runtime context standards, how it all reaches the agent

A great spec still needs a delivery mechanism that does not lock you to one vendor. That is what the runtime files do. AGENTS.md, governed by the Agentic AI Foundation, carries architectural intent. DESIGN.md, which Google Stitch formalized in March 2026, pairs machine-readable tokens in YAML front matter with prose that explains the visual identity. SKILL.md, which Anthropic pioneered, packages portable agent capabilities that travel across projects. Markdown is the common tongue here for a plain reason: it is what these models were trained on, so they read it with the highest fidelity.

And this is not theoretical for me. The same platform was built in large part with exactly this tooling: VS Code, markdown context files, and skills carrying a lot of the load. So when I say these files are how intent reaches the agent, I am describing how I shipped to 8,000 people, not predicting how someone might work someday. The runtime layer is the part of this stack I have leaned on hardest.

These files are the last bridge between your data and the agent's behavior, and they are where you encode the semantic roles that stop the dumbest, most common failure. Left to pick a color, an agent reaches for colors.red.500 on an error state because it looks right, and your semantic layer quietly becomes decorative. Encoding the role, this token is the error color and that one is the brand color, is what takes the guess away.

## Why the whole stack wins

Each layer is useful alone. Together they change what kind of partner the agent is. A system that is tokenized, semantically labeled, spec-driven, and exposed through open context files replaces probabilistic guessing with deterministic context. Think of it as delegation versus homework. Hand an agent an ungoverned pile of options and it has to do homework, making unguided choices you will catch later in review. Give it semantic guardrails and you are delegating a decision with the answer already encoded. The agent stops guessing which red, which spacing, which component, because the system already told it.

I want to be honest about the soft spot, because the people closest to this are. Böckeler, who drew the maturity map in the first place, is openly skeptical of heavy up-front specs, and she warns that spec-as-source could inherit the worst of both worlds: the inflexibility of old model-driven development and the non-determinism of LLMs. The maintenance story is the other half of it. Specs on existing, messy, brownfield code are still immature, and the people doing this seriously, Romina Kavcic among them, put the ongoing maintenance reality at something like a third of the effort. Anyone selling this as free is not running it. The move toward spec-as-source is what keeps code from piling up as debt, but it is a discipline, not a default.

## Where this goes next

The direction is clear even if the timeline is not. Self-healing loops and agentic IDEs like AWS Kiro, which is already turning roughly forty-hour builds into about eight hours of human effort, are pulling this from experiment toward standard practice. Neutral governance through the Agentic AI Foundation and emerging spec registries point at a world where, increasingly, the spec is the prompt and the code is just its current output. We are not all the way there. But the architects who get there first are the ones treating their design system as infrastructure today, not documentation.

That is the bet I am making, and it is the one I am building on.

---

Part of the public canon of tokenstoagents.ai · github.com/digitalcotton/tokens-to-agents-public
(c) 2026 Ryan Payne · CC BY-NC-ND 4.0 · attribution required, no derivatives, no commercial use · full terms in LICENSE.md
