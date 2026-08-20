import { Compass, SearchCheck, Workflow } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Product Strategy",
    description: "Turn evidence and constraints into a direction teams can act on.",
    capabilities: ["Discovery & problem framing", "Product vision & MVP definition", "Roadmap prioritization", "Product requirements", "Experiment & adoption strategy", "Stakeholder alignment"],
  },
  {
    icon: <SearchCheck className="h-6 w-6" />,
    title: "Research Leadership & Enablement",
    description: "Build the practices, systems, and confidence that make research useful beyond one project.",
    capabilities: ["Practice development & mentoring", "Continuous discovery", "Repositories & knowledge reuse", "Taxonomy & ontology", "Research tooling & governance", "Organizational influence"],
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Experience & Service Design",
    description: "Redesign complex services and workflows around how people actually work.",
    capabilities: ["Operational research", "Workflow mapping", "Service design", "Systems thinking", "Prototyping & interaction design", "Physical-digital experiences"],
  },
];

export function WhatIDo() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section ref={ref} aria-labelledby="what-i-do-title" className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <motion.div className="mb-12 max-w-3xl" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <p className="text-[#6EDFA3] font-bold uppercase tracking-[0.12em] text-xs mb-3">What I Do</p>
        <SectionHeading id="what-i-do-title" className="mb-4" label="From evidence to direction—and direction to something real." accent="direction" />
        <p className="text-[#666666]" style={{ fontSize: "18px", lineHeight: 1.7 }}>
          I connect product strategy, research leadership, and experience design to help teams make better decisions inside complicated operating environments.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {pillars.map((pillar, index) => (
          <motion.article key={pillar.title} className="bg-white rounded-2xl border-2 border-gray-100 p-7" initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }}>
            <div className="w-12 h-12 bg-[#111111] text-[#6EDFA3] rounded-xl flex items-center justify-center mb-5">{pillar.icon}</div>
            <h3 className="text-[#111111] mb-3" style={{ fontSize: "21px", fontWeight: 700 }}>{pillar.title}</h3>
            <p className="text-[#666666] mb-5" style={{ fontSize: "15px", lineHeight: 1.65 }}>{pillar.description}</p>
            <ul className="space-y-2" aria-label={`${pillar.title} capabilities`}>
              {pillar.capabilities.map((capability) => <li key={capability} className="text-[#111111] flex gap-2" style={{ fontSize: "14px", lineHeight: 1.5 }}><span aria-hidden="true" className="text-[#6EDFA3] font-bold">→</span>{capability}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
