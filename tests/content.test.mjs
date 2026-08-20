import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const readOptional = async (path) => {
  try {
    return await read(path);
  } catch (error) {
    if (error?.code === "ENOENT") return "";
    throw error;
  }
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

test("Homepage leads with product strategy and research leadership", async () => {
  const [hero, whatIDo, home] = await Promise.all([
    read("src/app/components/Hero.tsx"),
    readOptional("src/app/components/WhatIDo.tsx"),
    read("src/app/components/Home.tsx"),
  ]);

  assert.match(hero, /Product & Experience Strategist/);
  assert.match(hero, /Research Leader/);
  assert.match(hero, /turn research into product strategy, better workflows, and useful technology/i);
  assert.equal((hero.match(/h-3 bg-\[#6EDFA3\]/g) ?? []).length, 2);
  assert.doesNotMatch(hero, /text-\[#666666\][^>]*>· Research Leader/);

  for (const pillar of ["Product Strategy", "Research Leadership & Enablement", "Experience & Service Design"]) {
    assert.match(whatIDo, new RegExp(escapeRegExp(pillar)));
  }

  assert.match(home, /<WhatIDo \/>/);
  assert.doesNotMatch(home, /<LeadingDesign \/>/);
});

test("AI and emerging technology section shows specific, accountable practice", async () => {
  const source = await readOptional("src/app/components/AIAndEmergingTechnology.tsx");

  for (const evidence of [
    "Research Intelligence & AI Enablement",
    "Human + AI Experience Strategy",
    "AI Product Experimentation",
    "Building with AI",
    "Claude",
    "Codex",
    "MCP/connectors",
    "agentic workflows",
    "conversation intelligence",
    "sentiment analysis",
    "provenance",
    "bias evaluation",
    "human review",
  ]) {
    assert.match(source, new RegExp(escapeRegExp(evidence), "i"));
  }
});

test("Systems band communicates five complex operating domains", async () => {
  const source = await readOptional("src/app/components/SystemsWorkedIn.tsx");

  for (const domain of [
    "Healthcare & Clinical Operations",
    "Agriculture & Machinery Service",
    "Warehouse & Supply Chain",
    "Enterprise & Connected Platforms",
    "AI & Knowledge Systems",
  ]) {
    assert.match(source, new RegExp(escapeRegExp(domain)));
  }
});

test("Selected Work presents exactly six distinct, anonymized case studies", async () => {
  const source = await read("src/app/components/SelectedWork.tsx");

  const projectEntries = source.match(/\n  \{\n    label:/g) ?? [];
  assert.equal(projectEntries.length, 6);

  for (const title of [
    "Agricultural Equipment Service Platform",
    "KAMP Connected Equipment Platform",
    "Kroger Permanent Container Labels",
    "Governed Clinical Knowledge & Trial Intelligence",
    "Connected Home Water Platform",
    "Kroger Warehouse Claims Platform",
  ]) {
    assert.match(source, new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  for (const evidence of [
    "three-month discovery",
    "10 dealers",
    "approximately 50 products",
    "configurable work-management",
    "two product owners",
    "six months of dual-track delivery",
    "fewer support calls",
    "Exact metrics were owned by the client",
  ]) {
    assert.match(source, new RegExp(evidence, "i"));
  }

  for (const descriptor of [
    "Product discovery, service strategy, and workflow transformation for agricultural equipment service",
    "Modernizing an enterprise warehouse claims system through operational research and service design",
  ]) {
    assert.match(source, new RegExp(escapeRegExp(descriptor), "i"));
  }

  for (const evidence of ["legacy-system constraints", "business rules", "product requirements"]) {
    assert.match(source, new RegExp(escapeRegExp(evidence), "i"));
  }

  for (const protectedName of ["Lilly", "John Deere", "Culligan", "Smartconnect", "MOUX"]) {
    assert.doesNotMatch(source, new RegExp(protectedName, "i"));
  }
});

test("How I Work stays focused after AI evidence moves to its own section", async () => {
  const source = await read("src/app/components/SystemsApproach.tsx");

  for (const practice of ["Discover", "Frame", "Strategize", "Make", "Align"]) {
    assert.match(source, new RegExp(practice, "i"));
  }
  assert.doesNotMatch(source, /AI-native product practice/i);
});

test("About Me communicates curiosity, coaching, and playful leadership without repeating AI details", async () => {
  const source = await read("src/app/components/CommunityLeadership.tsx");

  for (const phrase of [
    "About Me",
    "curiosity",
    "coaching",
    "I take the work seriously, but not myself",
    "Outcomes matter, but so does the journey",
    "Community & Leadership",
  ]) {
    assert.match(source, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
  }
  assert.doesNotMatch(source, /bespoke AI tools and agents/i);
});

test("Metadata reflects the strategic and research leadership positioning", async () => {
  const source = await read("index.html");

  assert.match(source, /<title>Poppe — Product &amp; Experience Strategist · Research Leader<\/title>/);
  assert.match(source, /turn research into product strategy, better workflows, and useful technology/i);
  assert.match(source, /og:title" content="Poppe — Product &amp; Experience Strategist · Research Leader"/);
  assert.match(source, /twitter:title" content="Poppe — Product &amp; Experience Strategist · Research Leader"/);
  assert.match(source, /social-preview\.png\?v=3/);
});

test("Rendered homepage sources do not expose protected client or product names", async () => {
  const paths = [
    "index.html",
    "src/app/components/Hero.tsx",
    "src/app/components/WhatIDo.tsx",
    "src/app/components/AIAndEmergingTechnology.tsx",
    "src/app/components/SelectedWork.tsx",
    "src/app/components/SystemsWorkedIn.tsx",
    "src/app/components/SystemsApproach.tsx",
    "src/app/components/Experience.tsx",
    "src/app/components/CommunityLeadership.tsx",
  ];
  const source = (await Promise.all(paths.map(readOptional))).join("\n");

  for (const protectedName of ["Lilly", "John Deere", "Culligan", "SmartConnect", "MOUX"]) {
    assert.doesNotMatch(source, new RegExp(escapeRegExp(protectedName), "i"));
  }
  assert.doesNotMatch(source, /wixstatic|wixsite/i);
});

test("Research intelligence case study is routed and linked from the AI section", async () => {
  const [routes, aiSection] = await Promise.all([
    read("src/app/routes.tsx"),
    read("src/app/components/AIAndEmergingTechnology.tsx"),
  ]);

  assert.match(routes, /path: "\/research-intelligence"/);
  assert.match(routes, /<ResearchIntelligence \/>/);
  assert.match(aiSection, /href="\/research-intelligence"/);
  assert.match(aiSection, /Explore the research intelligence case study/i);
});

test("Research intelligence case study tells an evidence-led, measurable product story", async () => {
  const source = await readOptional("src/app/pages/ResearchIntelligence.tsx");

  for (const evidence of [
    "From Research Practice to Intelligence System",
    "Designing trustworthy project memory for evidence, decisions, and responsible AI",
    "My Role",
    "What We Discovered",
    "Prepare with context",
    "Assist during the work",
    "Analyze with evidence",
    "Review with an expert",
    "Act and remember",
    "Strategic Product Decisions",
    "The First Testable Loop",
    "What the MVP Would Not Do",
    "Continue",
    "Pivot",
    "Buy or configure",
    "Pause",
    "Stop",
    "validation criteria rather than realized results",
    "Judgment architecture",
    "refusal strategy",
    "document.title = \"From Research Practice to Intelligence System | Who Is Poppe\"",
  ]) {
    assert.match(source, new RegExp(escapeRegExp(evidence), "i"));
  }

  for (const protectedName of ["MOUX", "Moral", "Lilly", "Culligan", "John Deere", "SmartConnect"]) {
    assert.doesNotMatch(source, new RegExp(escapeRegExp(protectedName), "i"));
  }
});

test("Build creates route-specific static metadata for the research intelligence case study", async () => {
  const [packageSource, routeBuilder] = await Promise.all([
    read("package.json"),
    readOptional("scripts/create-route-pages.mjs"),
  ]);

  assert.match(packageSource, /vite build && node scripts\/create-route-pages\.mjs/);
  for (const metadata of [
    "research-intelligence/index.html",
    "From Research Practice to Intelligence System | Who Is Poppe",
    "How Poppe turned fragmented research evidence into a focused, governed AI product strategy for trustworthy project memory.",
    "https://whoispoppe.com/research-intelligence/",
  ]) {
    assert.match(routeBuilder, new RegExp(escapeRegExp(metadata)));
  }
});

test("Mobile impact metrics wrap and case-study cards never begin hidden", async () => {
  const [impact, selectedWork] = await Promise.all([
    read("src/app/components/ImpactHighlights.tsx"),
    read("src/app/components/SelectedWork.tsx"),
  ]);

  assert.match(impact, /p-5 sm:p-8/);
  assert.match(impact, /flex flex-col items-start gap-1 sm:block/);
  assert.match(impact, /clamp\(34px, 10vw, 42px\)/);
  assert.match(impact, /sm:ml-2/);
  assert.match(selectedWork, /initial=\{false\}/);
  assert.doesNotMatch(selectedWork, /initial=\{\{ opacity: 0, y: 30 \}\}/);
});

test("Homepage section headings share the bold green-highlight treatment", async () => {
  const heading = await readOptional("src/app/components/SectionHeading.tsx");
  assert.match(heading, /fontWeight: 700/);
  assert.match(heading, /color: tone === "dark" \? "#ffffff" : "#111111"/);
  assert.match(heading, /bg-\[#6EDFA3\]/);
  assert.match(heading, /absolute bottom-0 left-0 h-2/);

  const expectations = new Map([
    ["src/app/components/WhatIDo.tsx", "direction"],
    ["src/app/components/ImpactHighlights.tsx", "Impact"],
    ["src/app/components/AIAndEmergingTechnology.tsx", "experimentation."],
    ["src/app/components/SelectedWork.tsx", "Work"],
    ["src/app/components/SystemsWorkedIn.tsx", "Worked In"],
    ["src/app/components/SystemsApproach.tsx", "Work"],
    ["src/app/components/Experience.tsx", "Experience"],
    ["src/app/components/CommunityLeadership.tsx", "Me"],
    ["src/app/components/CaseStudyAccess.tsx", "Access"],
  ]);

  for (const [path, accent] of expectations) {
    const source = await read(path);
    assert.match(source, /<SectionHeading/);
    assert.match(source, new RegExp(`accent=["{]${escapeRegExp(accent)}`));
  }
});

test("KAMP engagement dates remain March 2025 through March 2026", async () => {
  const source = await read("src/app/components/Experience.tsx");
  assert.match(source, /company: "KAMP Technologies"[\s\S]*?dates: "Mar 2025 – Mar 2026"/);
});
