import { Users, Scale, Search, Network, Heart, Compass } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Collaboration",
    description: "I use design systems to enable shared understanding among cross-functional teams and stakeholders.",
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Equitable Design",
    description: "Multi-org platforms must work equally well for all users. That means listening and designing with equity in mind.",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Research Driven",
    description: "Design is rooted in data and real-world discovery, not assumptions or isolated internal perspectives.",
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Systems Thinking",
    description: "I believe in creating modular, scalable design systems that grow with organizational complexity.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Community Building",
    description: "I believe in strong, healthy design communities where everyone can contribute and find belonging.",
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: "Continuous Discovery",
    description: "I believe UX/design discovery should be continuous, not something that happens only at the beginning.",
  },
];

export function CoreValues() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <motion.h2
        className="mb-12"
        style={{ fontSize: "32px", fontWeight: 600, color: "#111111" }}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Core Values
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-16 h-16 bg-[#6EDFA3] bg-opacity-10 rounded-full flex items-center justify-center mb-6 text-[#111111]">
              {value.icon}
            </div>
            <h3 className="mb-3" style={{ fontSize: "20px", fontWeight: 600, color: "#111111" }}>
              {value.title}
            </h3>
            <p className="text-[#666666]" style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.6 }}>
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
