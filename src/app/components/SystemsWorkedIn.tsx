import { motion, useReducedMotion } from "motion/react";
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <section ref={ref} aria-labelledby="systems-title" className="max-w-7xl mx-auto px-6 py-10 md:py-20">
      <motion.div className="mb-10 max-w-3xl" initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <SectionHeading id="systems-title" className="mb-3" label="Systems I’ve Worked In" accent="Worked In" />
        <p className="text-[#666666]" style={{ fontSize: "17px", lineHeight: 1.65 }}>Different domains, similar challenge: understand a complicated ecosystem quickly and make it more useful, coherent, and humane.</p>
      </motion.div>
      <div className="relative isolate overflow-hidden rounded-[28px] bg-[#111111] px-5 py-8 text-white shadow-[0_10px_0_#d9d9d9] md:px-10 md:py-12">
        <motion.div
          className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-[#6EDFA3]/20 blur-3xl"
          animate={shouldReduceMotion ? {} : { x: [0, 42, 0], y: [0, 24, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-[#6EDFA3]/10 blur-3xl"
          animate={shouldReduceMotion ? {} : { x: [0, -36, 0], y: [0, -18, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <svg className="pointer-events-none absolute inset-0 hidden h-full w-full opacity-25 lg:block" viewBox="0 0 1200 360" preserveAspectRatio="none" aria-hidden="true">
          <path d="M600 176 C480 80 300 70 130 96 M600 176 C510 140 400 145 330 176 M600 176 C690 140 800 145 870 176 M600 176 C720 80 900 70 1070 96 M600 176 C600 230 600 260 600 320" fill="none" stroke="#6EDFA3" strokeWidth="1.5" strokeDasharray="6 10" />
        </svg>

        <div className="relative z-10 mx-auto mb-7 w-fit rounded-full border border-[#6EDFA3]/50 bg-[#6EDFA3]/10 px-5 py-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#6EDFA3]">
          Complex operating ecosystems
        </div>

        <div className="relative z-10 flex flex-wrap justify-center gap-3 md:gap-4">
          {domains.map((domain, index) => (
            <motion.article
              key={domain.title}
              className="w-full rounded-full border border-white/15 bg-white/[0.07] px-5 py-4 backdrop-blur-sm sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]"
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              whileHover={shouldReduceMotion ? {} : { y: -3, borderColor: "rgba(110, 223, 163, 0.55)" }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <h3 className="mb-1 text-white" style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.35 }}>{domain.title}</h3>
              <p className="text-gray-300" style={{ fontSize: "12px", lineHeight: 1.55 }}>{domain.evidence}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
