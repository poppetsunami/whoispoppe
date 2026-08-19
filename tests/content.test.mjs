import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("Selected Work presents the agricultural service engagement evidence", async () => {
  const source = await read("src/app/components/SelectedWork.tsx");

  for (const evidence of [
    "Agricultural Equipment Service Platform",
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
});

test("Selected Work frames connected mower telemetry as operational decisions", async () => {
  const source = await read("src/app/components/SelectedWork.tsx");

  assert.match(source, /Connected Equipment Telemetry & Fleet Operations/);
  assert.match(source, /mower telemetry/i);
  assert.match(source, /operators, service teams, and business leaders/i);
});

test("How I Work includes accountable AI-native practice", async () => {
  const source = await read("src/app/components/SystemsApproach.tsx");

  for (const practice of [
    "research synthesis",
    "specification drafting",
    "prototype exploration",
    "implementation review",
    "human judgment",
    "traceability",
    "decision accountability",
  ]) {
    assert.match(source, new RegExp(practice, "i"));
  }
});

test("About Me communicates AI experimentation and playful leadership", async () => {
  const source = await read("src/app/components/CommunityLeadership.tsx");

  for (const phrase of [
    "About Me",
    "AI and automation tools",
    "bespoke AI tools and agents",
    "always experimenting with new tools and technologies",
    "I take the work seriously, but not myself",
    "Outcomes matter, but so does the journey",
    "Community & Leadership",
  ]) {
    assert.match(source, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
  }
});

test("KAMP engagement dates remain March 2025 through March 2026", async () => {
  const source = await read("src/app/components/Experience.tsx");
  assert.match(source, /company: "KAMP Technologies"[\s\S]*?dates: "Mar 2025 – Mar 2026"/);
});
