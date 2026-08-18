import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Search, Layers, TrendingUp, Wrench, Users2 } from "lucide-react";

interface Capability {
  icon: React.ReactNode;
  verb: string;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    icon: <Search className="w-6 h-6" />,
    verb: "01",
    title: "Discover",
    description: "Research complex ecosystems, customers, workflows, behaviors, constraints, and unmet needs. I go into the field, talk to real people, and map how work actually happens before touching a single wireframe.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    verb: "02",
    title: "Frame",
    description: "Turn ambiguity and fragmented evidence into clear opportunity areas and product direction. This is often the hardest step — and the most important. The right framing changes everything downstream.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    verb: "03",
    title: "Strategize",
    description: "Connect customer value, business outcomes, operational realities, and technical constraints into a coherent direction. Strategy without grounding is just guessing.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    verb: "04",
    title: "Make",
    description: "Prototype products, services, workflows, and experiences so ideas can be tested rather than merely discussed. Artifacts create accountability and surface assumptions that documents never will.",
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    verb: "05",
    title: "Align",
    description: "Bring product, engineering, design, research, operations, clinical experts, and leadership together around decisions. Alignment is not a soft skill — it is how complex things actually ship.",
  },
];

export function SystemsApproach() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <motion.div
        className="mb-14 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="mb-4"
          style={{ fontSize: "32px", fontWeight: 600, color: "#111111" }}
        >
          How I Work
        </h2>
        <p
          className="text-[#666666]"
          style={{ fontSize: "18px", fontWeight: 400, lineHeight: 1.7 }}
        >
          Five integrated capabilities, not five separate services. In practice they overlap, loop back, and inform each other — because real product work does not follow a clean linear path.
        </p>
      </motion.div>

      {/* Capability Cards — horizontal scroll on mobile, 5-col grid on lg */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {capabilities.map((cap, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-6 border-2 border-gray-100 group hover:border-[#6EDFA3] transition-colors duration-300 relative overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.07)" }}
          >
            {/* Green hover fill */}
            <motion.div
              className="absolute inset-0 bg-[#6EDFA3] opacity-0 group-hover:opacity-5 transition-opacity duration-300"
            />

            {/* Verb/number */}
            <span
              className="text-[#6EDFA3] mb-4 block"
              style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em" }}
            >
              {cap.verb}
            </span>

            {/* Icon */}
            <motion.div
              className="w-12 h-12 bg-[#111111] rounded-xl flex items-center justify-center mb-4 text-white relative z-10 flex-shrink-0"
              whileHover={{ scale: 1.08, rotate: 6 }}
              transition={{ duration: 0.3 }}
            >
              {cap.icon}
            </motion.div>

            {/* Title */}
            <h3
              className="text-[#111111] mb-3 relative z-10"
              style={{ fontSize: "20px", fontWeight: 700 }}
            >
              {cap.title}
            </h3>

            {/* Description */}
            <p
              className="text-[#666666] relative z-10"
              style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.65 }}
            >
              {cap.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
