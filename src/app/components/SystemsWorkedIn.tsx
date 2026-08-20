import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { SectionHeading } from "./SectionHeading";

const domains = [
  { title: "Healthcare & Clinical Operations", evidence: "Regulated workflows, governed knowledge, and trial operations." },
  { title: "Agriculture & Machinery Service", evidence: "Dealer discovery, diagnostics, fleet monitoring, and service transformation." },
  { title: "Warehouse & Supply Chain", evidence: "Fulfillment, claims, physical-digital workflows, and legacy modernization." },
  { title: "Enterprise & Connected Platforms", evidence: "Multi-organization systems, telemetry, analytics, and scalable foundations." },
  { title: "AI & Knowledge Systems", evidence: "Research intelligence, governed inquiry, experimentation, and human review." },
];

export function SystemsWorkedIn() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  return (
    <section ref={ref} aria-labelledby="systems-title" className="max-w-7xl mx-auto px-6 py-10 md:py-20">
      <motion.div className="mb-10 max-w-3xl" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <SectionHeading id="systems-title" className="mb-3" label="Systems I’ve Worked In" accent="Worked In" />
        <p className="text-[#666666]" style={{ fontSize: "17px", lineHeight: 1.65 }}>Different domains, similar challenge: understand a complicated ecosystem quickly and make it more useful, coherent, and humane.</p>
      </motion.div>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-5">
        {domains.map((domain, index) => (
          <motion.article key={domain.title} className="bg-white p-6" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: index * 0.08 }}>
            <span className="text-[#6EDFA3] text-xs font-bold tracking-[0.12em]">0{index + 1}</span>
            <h3 className="text-[#111111] mt-4 mb-3" style={{ fontSize: "17px", fontWeight: 700, lineHeight: 1.35 }}>{domain.title}</h3>
            <p className="text-[#666666]" style={{ fontSize: "13px", lineHeight: 1.6 }}>{domain.evidence}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
