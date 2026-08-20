# Research Intelligence Case Study Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish an anonymized, evidence-led research-intelligence case study with a homepage entry point and route-specific sharing metadata.

**Architecture:** Add one React page and route, link it from the existing AI section, and generate route-specific static entry HTML after Vite builds. Keep narrative content local to the page and use a small build script for static route metadata.

**Tech Stack:** React 18, TypeScript, React Router 7, Vite 6, Tailwind CSS 4, Motion, Lucide React, Node test runner

**Spec:** `docs/superpowers/specs/2026-08-20-research-intelligence-case-study-design.md`

## Global Constraints

- Do not add a seventh Selected Work card.
- Do not expose MOUX, Moral, Lilly, Culligan, John Deere, SmartConnect, or other protected client/product names.
- Do not present pilot targets as realized results.
- Preserve the existing visual system and responsive behavior.
- Direct route HTML must contain route-specific crawler metadata.

---

### Task 1: Define case-study behavior with failing tests

**Files:**
- Modify: `tests/content.test.mjs`

- [ ] Add tests for the new route, homepage CTA, required narrative sections, workflow, MVP non-goals, decision gates, anonymization, and route metadata configuration.
- [ ] Run `npm test` and confirm the new assertions fail because the page, route, CTA, and build script do not exist.

### Task 2: Build and connect the case-study page

**Files:**
- Create: `src/app/pages/ResearchIntelligence.tsx`
- Modify: `src/app/routes.tsx`
- Modify: `src/app/components/AIAndEmergingTechnology.tsx`

- [ ] Implement the semantic case-study narrative and responsive visual patterns from the spec.
- [ ] Register `/research-intelligence` in the React router.
- [ ] Add an `Explore the research intelligence case study` CTA to the AI section.
- [ ] Run `npm test` and confirm content and route tests pass.

### Task 3: Generate route-specific static metadata

**Files:**
- Create: `scripts/create-route-pages.mjs`
- Modify: `package.json`
- Modify: `.github/workflows/deploy-pages.yml`
- Modify: `tests/content.test.mjs`

- [ ] Create a dependency-free Node script that reads `dist/index.html`, writes `dist/resume/index.html`, and writes `dist/research-intelligence/index.html` with the approved title, description, canonical URL, and Open Graph/Twitter fields.
- [ ] Run the script after `vite build` through the package build command.
- [ ] Remove duplicated route-copy commands from the Pages workflow.
- [ ] Run tests and build; inspect generated route HTML for exact metadata.

### Task 4: Rendered QA and publication

**Files:**
- Verify only

- [ ] Run `npm test && npm run build && git diff --check`.
- [ ] Validate homepage CTA → case-study route → back-to-home interaction at desktop and mobile widths.
- [ ] Confirm page identity, meaningful content, console health, no framework overlay, and no horizontal overflow.
- [ ] Commit, push one branch, create and merge one PR, and watch GitHub Pages to success.
- [ ] Verify `https://whoispoppe.com/research-intelligence/` returns route-specific metadata and the rendered case study over HTTPS.
