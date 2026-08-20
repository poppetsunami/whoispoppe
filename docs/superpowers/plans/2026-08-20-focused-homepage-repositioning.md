# Focused Homepage Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the homepage around product and experience strategy, research leadership and enablement, operational systems, and hands-on AI practice while retaining six anonymized case studies.

**Architecture:** Add three focused content components and compose them into the existing React homepage. Reframe existing hero, work, workflow, about, and metadata content rather than creating parallel narratives. Keep all content static and typed in its owning component.

**Tech Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Motion, Lucide React, Node test runner

**Spec:** `docs/superpowers/specs/2026-08-20-focused-homepage-repositioning-design.md`

## Global Constraints

- Keep exactly six Selected Work cards.
- Only Kroger and KAMP may remain named; rendered source must not contain Lilly, Culligan, John Deere, SmartConnect, or MOUX.
- Use the primary identity “Product & Experience Strategist · Research Leader”.
- Explicitly name Claude, Codex, MCP/connectors, agentic workflows, provenance, and bias evaluation.
- Preserve the existing color and motion system and responsive behavior.
- Do not add the deferred research-intelligence case study in this release.

---

### Task 1: Lock content and metadata requirements in tests

**Files:**
- Modify: `tests/content.test.mjs`
- Test: `tests/content.test.mjs`

**Interfaces:**
- Consumes: component source files and `index.html` as UTF-8 text
- Produces: regression tests for the approved positioning, sections, anonymization, and metadata

- [ ] **Step 1: Add failing homepage positioning tests**

Add tests that read `Hero.tsx`, `WhatIDo.tsx`, `AIAndEmergingTechnology.tsx`, `SystemsWorkedIn.tsx`, `Home.tsx`, and `index.html`. Assert the approved headline, three pillar titles, four AI card titles, named tools, five system domains, section composition, and metadata language.

- [ ] **Step 2: Strengthen protected-name coverage**

Create one protected-name array containing `Lilly`, `Culligan`, `John Deere`, `SmartConnect`, and `MOUX`, then assert those names are absent from every rendered component source and `index.html` while Kroger and KAMP remain present in Selected Work.

- [ ] **Step 3: Run the tests to verify failure**

Run: `npm test`

Expected: FAIL because `WhatIDo.tsx`, `AIAndEmergingTechnology.tsx`, and `SystemsWorkedIn.tsx` do not exist and the old hero/metadata copy remains.

- [ ] **Step 4: Commit the failing test boundary**

```bash
git add -- tests/content.test.mjs
git commit -m "test: define homepage repositioning requirements"
```

### Task 2: Build the positioning and AI evidence layer

**Files:**
- Create: `src/app/components/WhatIDo.tsx`
- Create: `src/app/components/AIAndEmergingTechnology.tsx`
- Create: `src/app/components/SystemsWorkedIn.tsx`
- Modify: `src/app/components/Hero.tsx`
- Modify: `src/app/components/Home.tsx`
- Test: `tests/content.test.mjs`

**Interfaces:**
- Consumes: `useScrollAnimation(threshold: number)` and existing Motion/Lucide patterns
- Produces: `WhatIDo`, `AIAndEmergingTechnology`, and `SystemsWorkedIn` named React components

- [ ] **Step 1: Implement What I Do**

Create a semantic section with a heading, brief introduction, and a responsive three-card grid. Each card owns a title, short framing statement, and concise list of approved competencies.

- [ ] **Step 2: Implement AI & Emerging Technology**

Create a compact responsive four-card section with the approved evidence categories. Include Claude, Codex, MCP/connectors, agentic workflows, conversation intelligence, sentiment analysis, provenance, bias evaluation, human review, and accountable decisions in natural prose.

- [ ] **Step 3: Implement Systems I’ve Worked In**

Create a five-domain visual band using small tiles rather than project cards. Each tile contains the approved domain label and one sentence tying it to relevant work.

- [ ] **Step 4: Update the hero**

Replace the headline with `Product & Experience Strategist · Research Leader`, use the approved through-line and supporting credibility statement, and keep the existing calls to action and portrait.

- [ ] **Step 5: Compose the new homepage order**

In `Home.tsx`, render Hero, What I Do, Strategic Impact, AI & Emerging Technology, Selected Work, Systems I’ve Worked In, How I Work, Experience, About, access, and footer. Remove `LeadingDesign` from the homepage composition.

- [ ] **Step 6: Run tests**

Run: `npm test`

Expected: positioning and new-section assertions PASS; assertions for work reframing, consolidation, and metadata may still FAIL.

- [ ] **Step 7: Commit the positioning layer**

```bash
git add -- src/app/components/Hero.tsx src/app/components/Home.tsx src/app/components/WhatIDo.tsx src/app/components/AIAndEmergingTechnology.tsx src/app/components/SystemsWorkedIn.tsx
git commit -m "feat: broaden homepage positioning and AI evidence"
```

### Task 3: Reframe portfolio evidence and remove repetition

**Files:**
- Modify: `src/app/components/SelectedWork.tsx`
- Modify: `src/app/components/SystemsApproach.tsx`
- Modify: `src/app/components/CommunityLeadership.tsx`
- Test: `tests/content.test.mjs`

**Interfaces:**
- Consumes: the existing `ProjectCard` structure
- Produces: a new `descriptor: string` field displayed below every project title and consolidated workflow/about copy

- [ ] **Step 1: Add card descriptors**

Add `descriptor: string` to `ProjectCard`, populate all six entries, and render it directly under each project title. Use the exact approved descriptors for the agricultural and Kroger warehouse cards.

- [ ] **Step 2: Strengthen agricultural evidence**

Keep the current metrics and explicitly surface legacy-system constraints, operational workflow redesign, roadmap prioritization, two Product Owners, and dual-track delivery without naming the protected client.

- [ ] **Step 3: Strengthen Kroger warehouse evidence**

Make the role narrative explicitly connect warehouse operations, workflow mapping, systemic pain points, business rules, product requirements, and the redesigned enterprise system.

- [ ] **Step 4: Consolidate How I Work**

Remove the AI-native callout and `Sparkles` import. Shorten the five capability descriptions so they support rather than repeat What I Do.

- [ ] **Step 5: Tighten About Me**

Remove the long AI-practice paragraph now covered by the dedicated section. Retain the personal leadership paragraph and community leadership cards, adding only a concise bridge about curiosity, coaching, and building healthy practices.

- [ ] **Step 6: Run tests**

Run: `npm test`

Expected: all content assertions except metadata PASS.

- [ ] **Step 7: Commit the evidence reframing**

```bash
git add -- src/app/components/SelectedWork.tsx src/app/components/SystemsApproach.tsx src/app/components/CommunityLeadership.tsx tests/content.test.mjs
git commit -m "feat: sharpen strategic and operational portfolio evidence"
```

### Task 4: Align metadata and sharing artwork

**Files:**
- Modify: `index.html`
- Modify: `public/social-preview.svg`
- Modify: `public/social-preview.png`
- Test: `tests/content.test.mjs`

**Interfaces:**
- Consumes: canonical URL `https://whoispoppe.com/` and existing flower favicon
- Produces: consistent HTML metadata and a 1200×630 flower-branded PNG

- [ ] **Step 1: Update document and social metadata**

Use `Product & Experience Strategist · Research Leader` in the document title and social titles. Use a concise version of the approved through-line in description fields. Preserve canonical, index/follow, image dimensions, and cache-busted HTTPS image URLs.

- [ ] **Step 2: Update the source sharing artwork**

Replace the social-preview headline with `Product & Experience Strategist` and `Research Leader`, retain the flower mark, and keep supporting text readable at preview size.

- [ ] **Step 3: Render the PNG**

Use headless Chrome at exactly 1200×630 to render `public/social-preview.svg` to `public/social-preview.png`.

- [ ] **Step 4: Run content tests and build**

Run: `npm test && npm run build && git diff --check`

Expected: all tests PASS, Vite build exits 0, and diff check returns no errors.

- [ ] **Step 5: Commit metadata and artwork**

```bash
git add -- index.html public/social-preview.svg public/social-preview.png tests/content.test.mjs
git commit -m "feat: align portfolio metadata with strategic positioning"
```

### Task 5: Rendered QA and publication

**Files:**
- Verify only: production build and deployed site

**Interfaces:**
- Consumes: the built Vite site and GitHub Pages workflow
- Produces: verified desktop/mobile experience and live HTTPS metadata

- [ ] **Step 1: Validate locally at desktop and mobile widths**

Verify page identity, meaningful DOM content, no framework overlay, console health, no horizontal overflow, and responsive card collapse. Exercise the Selected Work anchor and one Experience accordion interaction.

- [ ] **Step 2: Run final verification**

Run: `npm test && npm run build && git diff --check && git status -sb`

Expected: all tests PASS, build exits 0, diff check is clean, and only intended commits are ahead of `main`.

- [ ] **Step 3: Push and merge one PR**

Push the feature branch, create one non-draft PR against `main`, merge it, and monitor the GitHub Pages workflow through a successful deploy conclusion.

- [ ] **Step 4: Verify production**

Fetch `https://whoispoppe.com/` and the social image over HTTPS. Confirm the new hero and section text in the deployed bundle, updated title/description/Open Graph/Twitter metadata in HTML, image response `200 image/png`, and image dimensions `1200×630`.
