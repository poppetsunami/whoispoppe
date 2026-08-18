import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Users2, Lightbulb, Network, MessageSquare } from "lucide-react";

interface LeadershipPrinciple {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const principles: LeadershipPrinciple[] = [
  {
    icon: <Users2 className="w-8 h-8" />,
    title: "Facilitating alignment",
    description: "Bringing stakeholders together to build shared understanding of goals, constraints, and tradeoffs before solutions are defined.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Framing the problem",
    description: "Helping teams articulate what we're solving and why it matters, creating clarity that guides better design decisions.",
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Connecting teams",
    description: "Building bridges between product, engineering, operations, and business stakeholders to surface insights and dependencies early.",
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Translating complexity",
    description: "Making technical systems and operational constraints understandable across disciplines, enabling informed collaboration.",
  },
];

export function LeadingDesign() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <motion.h2 
        className="mb-6" 
        style={{ 
          fontSize: '32px', 
          fontWeight: 600, 
          color: '#111111' 
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Leading Product Design
      </motion.h2>
      
      <motion.div
        className="mb-12 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p 
          className="text-[#666666] mb-4"
          style={{
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: 1.7,
          }}
        >
          Design leadership often happens without formal authority. Many of the environments I work in involve multiple product teams, engineering groups, and operational stakeholders with different priorities.
        </p>
        <p 
          className="text-[#666666]"
          style={{
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: 1.7,
          }}
        >
          My approach focuses on building shared understanding of problems before moving into solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-xl border-2 border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-16 h-16 bg-[#6EDFA3] bg-opacity-10 rounded-full flex items-center justify-center mb-6 text-[#111111]">
              {principle.icon}
            </div>
            <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 600, color: '#111111' }}>
              {principle.title}
            </h3>
            <p className="text-[#666666]" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
              {principle.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
