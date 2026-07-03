# Art Direction

The aesthetic concept for the site, in depth, plus the master prompt and the storyboard for the kinetic signature. This document owns the why. The concrete values live in `visual-framework.md`. The standing rules and the drift alarms live in `AGENTS.md` and are not restated here.

## The concept, in depth

### Monochrome on purpose

True monochrome, a single grayscale ramp from a warm paper to a cool, blue-black ink, with no chromatic accent anywhere. This is not a style preference, it is an argument. Tokens begin life as a grayscale ramp before any color decision is made, and stripping color out forces structure, type, and motion to carry the design. A site that leaned on a brand accent could hide weak structure behind it. This one cannot, which is the point: the discipline is visible.

Emphasis is inversion, never a second color. A block that needs weight flips from ink-on-paper to paper-on-ink. The only chroma in the whole system is the faint temperature difference, paper kept slightly warm and ink kept slightly cool, and that is deliberate. If a reviewer cannot name a single accent color, the system is working.

### The human and the machine, as two voices

Type carries a duality that mirrors the subject. A characterful sans is the human voice, the argument, the prose, the point of view. A designed monospace is the machine voice, and it carries the token names and values, the code, the file paths, and the structured-data excerpts; the layer numbers and labels around them are the human voice's chrome. The two voices sit side by side the way `DESIGN.md` pairs human prose with machine-readable front matter, and the way the whole thesis pairs a person writing intent with a machine reading structure. The form states the argument before a word is read.

Use the sans for everything a human is meant to absorb. Use the mono for everything that is, or represents, structured data. Never blur the two, because the separation is the meaning.

### All boldness in one place

The site spends its entire boldness budget on a single kinetic signature, described below, and stays quiet and disciplined everywhere else. The quiet is not timidity. It is the setting that lets one bold thing register. A page where everything moves and everything is loud has no signature at all. Concentration is the technique.

### The medium echoes the message

This is a site about machine-readable, structured, token-driven design. So the site itself has to be a precise, token-driven artifact, and the proof has to survive view-source. Anyone who opens the repository or reads the rendered HTML should find a clean, deliberate, token-driven thing. The argument and the artifact are the same claim made twice.

## The master prompt

A single block to re-establish the whole art direction in one shot. Paste it, then name the screen.

> Design and build this screen for a public learning hub about the four-layer tokens-to-agents stack. The aesthetic is true monochrome: a warm-paper to cool-ink grayscale ramp with no chromatic accent, where emphasis is inversion only, surfaces flipping ink-on-paper to paper-on-ink. Two type voices: a characterful sans, not Inter, Roboto, or Helvetica, for the human argument and its chrome, and a designed monospace, not Courier, for the machine voice that carries token names and values, code, and file paths. Layout is left-aligned and asymmetric on generous paper, with a visible modular grid treated as real structure, and never a centered hero. All motion is concentrated in one place, the kinetic stack signature; everything else is static or uses the smallest calm transition. Every visual value comes from a DTCG design token through var(--token-name), with no raw hex, pixel, or font literals. Pristine source is part of the deliverable. Never use em dashes or en dashes; use commas, colons, parentheses, or periods. Honor prefers-reduced-motion, visible keyboard focus, semantic HTML, and mobile. Pull exact values from docs/visual-framework.md and follow the drift alarms in AGENTS.md.

## The signature storyboard

This is the one bold element, so it is choreographed here rather than improvised at build time. It is the homepage hero, the primary navigation into the four pillars, and the thing the site is remembered by.

### What it shows

The four-layer stack resolving: a single value travels from a primitive token, into a semantic slot, into a component, into rendered output. The whole idea rests on one discipline that makes this composition work and keeps it from looking like four boxes lighting up in sequence. The value itself never changes. What changes at each station is its name and its container. That is the literal claim of the token architecture, made visible: the system does not change the value, it wraps meaning around it.

### The stage

The exposed modular grid is faintly present, the baseline lines treated as real structure. Four stations sit left to right along a single horizontal rail, one baseline line acting as the track. Each station is labeled with its number and name in the human voice's label register, with the token value beneath in the machine voice:

`01 PRIMITIVE`   `02 SEMANTIC`   `03 COMPONENT`   `04 RENDERED`

These four stations are also the site's primary navigation, one into each pillar page.

### The motion, frame by frame

One orchestrated sweep, left to right, carried by `transform` and `opacity` only, nothing that triggers layout. Roughly 1.4 to 1.8 seconds, a calm ease-in-out, played once on load.

1. Station 01, primitive. A mono chip appears: the name `gray.950` beside a small solid swatch filled with the ink value. It reads as raw data. No meaning attached yet.
2. In transit to 02. The chip translates right along the rail. As it reaches station 02, the name cross-fades from `gray.950` to `color.foreground`. The swatch does not change. Meaning has been mapped onto the same value.
3. In transit to 03. The chip continues. At station 03 the name cross-fades to `button.background`, and the chip's form resolves from a bare swatch into a small component outline, a button silhouette, filled with the value. The token is now applied inside a component.
4. Arrival at 04, rendered. The component fills solid, and the one emphasis move fires: that station inverts, paper to ink, foreground to its inverse. The mono label resolves to `var(--color-foreground)`. The value has gone primitive, semantic, component, rendered, unchanged in itself, wrapped in meaning at each step.

### Navigation behavior

Each station is a real link into its pillar. On hover or focus, a calm state change, its number inverts, no motion. Every station is keyboard reachable with a visible focus style.

### Reduced motion

Honor `prefers-reduced-motion: reduce` fully. The static version presents all four states at once, laid out left to right as a diagram: `gray.950` at 01, `color.foreground` at 02, the same value inside a component outline at 03, and the inverted rendered output at 04. The chip does not travel. The four stages are simply all present, so the resolve still reads with no continuous motion. Build this version alongside the animated one, not after.

### Why this and not a generic sequence

A row of panels that fade in one by one communicates "four steps," which is decoration. A constant value that is progressively renamed and re-contained communicates "one value, four layers of meaning the system adds," which is the thesis. Monochrome forces the motion to carry the idea, so the motion has to say something exact. And because the signature doubles as navigation, the boldest element on the site is also the most functional, which is what frees everything else to stay quiet.

## The drift alarms

The full list lives in `AGENTS.md` and is the canonical version. The reasoning behind all of them is one thing: every item on that list is a default, and defaults are exactly what a model reaches for when left to average. A centered hero, Inter, a soft gradient, rounded cards with drop shadows, fade-in-on-scroll, buzzword copy: these are the resting state of a generated site. The alarms exist because this site has a specific point of view, and a point of view is the opposite of a default. When something feels safe and familiar, that is usually the alarm, not the solution.
