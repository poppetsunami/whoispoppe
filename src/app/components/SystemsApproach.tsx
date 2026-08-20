import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Search, Layers, TrendingUp, Wrench, Users2, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

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
    description: "Research ecosystems, customers, workflows, constraints, and unmet needs before defining a solution.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    verb: "02",
    title: "Frame",
    description: "Turn ambiguity and fragmented evidence into opportunity areas, decision criteria, and a shared problem frame.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    verb: "03",
    title: "Strategize",
    description: "Connect customer value, business outcomes, operational realities, and technical constraints into coherent direction.",
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    verb: "04",
    title: "Align",
    description: "Bring product, engineering, research, operations, domain experts, and leadership together around consequential decisions.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    verb: "05",
    title: "Make",
    description: "Prototype products, services, workflows, and experiences so assumptions can be tested rather than merely discussed.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    verb: "06",
    title: "Deliver & Evolve",
    description: "Partner through implementation, launch, adoption, and continuous refinement—using real-world feedback and product signals to improve what ships.",
  },
];

export function SystemsApproach() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 py-10 md:py-20">
      <motion.div
        className="mb-14 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading className="mb-4" label="How I Work" accent="Work" />
        <p className="text-[#666666]" style={{ fontSize: "18px", fontWeight: 400, lineHeight: 1.7 }}>
          Six integrated capabilities, not six separate services. In practice they overlap, loop back, and inform each other — because real product work does not follow a clean linear path.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-6 border-2 border-gray-100 relative overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <span
              className="text-[#6EDFA3] mb-4 block"
              style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em" }}
            >
              {cap.verb}
            </span>

            <div className="w-12 h-12 bg-[#111111] rounded-xl flex items-center justify-center mb-4 text-white flex-shrink-0">
              {cap.icon}
            </div>

            <h3 className="text-[#111111] mb-3" style={{ fontSize: "20px", fontWeight: 700 }}>
              {cap.title}
            </h3>

            <p className="text-[#666666]" style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.65 }}>
              {cap.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
