# Research Intelligence Case Study Design

## Objective

Create a public, anonymized case study that demonstrates product strategy, research leadership and enablement, AI product discovery, responsible-AI judgment, and implementation-oriented product leadership. The page must support AI product, research leadership, transformation, and operational-systems roles without claiming unvalidated pilot results.

## Route and Entry Point

- Public route: `/research-intelligence`
- Entry point: a clear CTA in the homepage AI & Emerging Technology section
- The case study does not add a seventh Selected Work card and does not replace the regulated clinical-intelligence card.

## Positioning

Title: **From Research Practice to Intelligence System**

Subtitle: **Designing trustworthy project memory for evidence, decisions, and responsible AI**

Context label: **Product Strategy · UX Research · AI Product Discovery · 2026**

The organization and internal product name are generalized. `MOUX`, `Moral`, and protected client/product names must not appear in the rendered case-study source or route metadata.

## Narrative

1. **Overview** — research and design evidence was fragmented across interviews, workshops, transcripts, requirements, designs, tickets, and shared drives. The opportunity was continuity, not more capture or summarization.
2. **My Role** — research synthesis, jobs to be done, personas, product vision, competitive and build/buy analysis, MVP definition, requirements, pilot criteria, roadmap, operating model, and responsible-AI boundaries.
3. **Discovery** — show the recurring signals: provenance gaps, context reconstruction, unsupported certainty, limited capacity, weak reuse, and invisible change history.
4. **Reframing** — present the continuous evidence workflow: Prepare with context → Assist during the work → Analyze with evidence → Review with an expert → Act and remember.
5. **Strategic Decisions** — continuity over capture, project as primary object, human-reviewed consequential interpretation, justified confidence, and responsible boundaries.
6. **MVP** — one complete reviewed-project-memory loop plus explicit non-goals.
7. **Making It Measurable** — pilot criteria and continue/pivot/buy/pause/stop decision gates. Targets are validation criteria, not realized outcomes.
8. **Outcomes** — strategic clarity and concrete artifacts produced: vision, personas, capability model, build/buy boundary, roadmap, MVP, PRD, 30-day plan, governance model, and responsible-AI position.
9. **What I Learned** — judgment architecture, refusal strategy, organizational synthesis, traceability to delivery, and making work decidable.

## Visual Design

- Reuse the portfolio color, typography, spacing, cards, and restrained Motion patterns.
- Use a dark hero with green accents to connect the page to the AI section.
- Present the five-step evidence workflow as responsive connected cards.
- Use paired columns for decisions and non-goals, a compact decision-gate band, and callout quotes for core insights.
- Provide a persistent, visible path back to the homepage and a final contact CTA.
- Avoid fabricated charts, screenshots, metrics, client logos, or decorative AI imagery.

## Metadata

Direct requests to `/research-intelligence/` must receive route-specific static HTML metadata for link crawlers:

- Title: `From Research Practice to Intelligence System | Who Is Poppe`
- Description: `How Poppe turned fragmented research evidence into a focused, governed AI product strategy for trustworthy project memory.`
- Canonical URL: `https://whoispoppe.com/research-intelligence/`
- Open Graph/Twitter title, description, URL, and social image

The deployment build must generate static entry HTML for `/resume/` and `/research-intelligence/` while retaining SPA routing.

## Verification

- Add failing content tests before implementation.
- Assert route composition, required narrative evidence, anonymization, homepage entry CTA, and route-specific metadata generation.
- Run the complete test suite and production build.
- Validate desktop and mobile page rendering, no overflow, no console errors, back navigation, and the homepage-to-case-study interaction.
- After publication, verify direct-route HTTPS status, route-specific HTML metadata, and rendered content.

## Deferred

No proprietary screenshots or unconfirmed pilot outcomes are added. These can be incorporated later if approved evidence becomes available.
