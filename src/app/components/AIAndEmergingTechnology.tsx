import { Bot, BrainCircuit, Network, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { SectionHeading } from "./SectionHeading";

const practices = [
  { icon: <BrainCircuit className="h-6 w-6" />, title: "Research Intelligence & AI Enablement", description: "Use AI to increase synthesis capacity, improve retrieval, preserve institutional knowledge, and make research evidence easier to reuse." },
  { icon: <ShieldCheck className="h-6 w-6" />, title: "Human + AI Experience Strategy", description: "Design expert-led, AI-assisted workflows around trust, provenance, bias evaluation, human review, and accountable decisions." },
  { icon: <Network className="h-6 w-6" />, title: "AI Product Experimentation", description: "Define MVPs and test conversation intelligence, sentiment analysis, agentic workflows, MCP/connectors, and governed knowledge experiences." },
  { icon: <Bot className="h-6 w-6" />, title: "Building with AI", description: "Prototype directly with Claude and Codex, create reusable skills and agents, connect tools and data, and learn through implementation—not only facilitation." },
];

export function AIAndEmergingTechnology() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  return (
    <section ref={ref} aria-labelledby="ai-title" className="bg-[#111111] text-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="mb-12 max-w-3xl" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-[#6EDFA3] font-bold uppercase tracking-[0.12em] text-xs mb-3">AI & Emerging Technology</p>
          <SectionHeading id="ai-title" tone="dark" className="mb-4" label="Strategy grounded in hands-on experimentation." accent="experimentation." />
          <p className="text-gray-300" style={{ fontSize: "18px", lineHeight: 1.7 }}>I explore what AI makes possible by building with it—while keeping expert judgment, governance, and real user value at the center.</p>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {practices.map((practice, index) => (
            <motion.article key={practice.title} className="rounded-2xl border border-white/15 bg-white/5 p-6" initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.08 }}>
              <div className="w-11 h-11 rounded-xl bg-[#6EDFA3] text-[#111111] flex items-center justify-center mb-5">{practice.icon}</div>
              <h3 className="mb-3" style={{ fontSize: "18px", fontWeight: 700, lineHeight: 1.35 }}>{practice.title}</h3>
              <p className="text-gray-300" style={{ fontSize: "14px", lineHeight: 1.65 }}>{practice.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
