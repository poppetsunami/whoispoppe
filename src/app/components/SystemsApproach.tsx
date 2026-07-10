import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Workflow, Target, Brain, TreeDeciduous } from "lucide-react";

interface Principle {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Start with the real workflow",
    description: "Understand how work actually happens before designing solutions. Observe patterns, pain points, and workarounds that reveal system needs.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Design for decision making",
    description: "Good operational systems surface the right information at the right time, enabling confident decisions under pressure.",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Reduce cognitive load",
    description: "Complex environments require interfaces that reduce mental overhead, not add to it. Clarity and consistency matter most.",
  },
  {
    icon: <TreeDeciduous className="w-8 h-8" />,
    title: "Design for evolution",
    description: "Systems need to adapt as organizations change. Build flexibility and extensibility into the foundation, not as an afterthought.",
  },
];

export function SystemsApproach() {
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
        My Approach to Systems Design
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
          Many of the products I work on sit at the intersection of people, operations, and complex technical systems. These environments often evolve organically over time, accumulating layers of processes, tools, and assumptions.
        </p>
        <p 
          className="text-[#666666]"
          style={{
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: 1.7,
          }}
        >
          My role as a designer is often to help teams step back and see the system clearly—understanding how information, decisions, and workflows move through an organization before designing solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {principles.map((principle, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-8 rounded-xl group relative overflow-hidden cursor-pointer border-2 border-gray-100 hover:border-[#6EDFA3] transition-colors"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)"
            }}
          >
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, #6EDFA3, #111111)',
                opacity: 0,
              }}
              whileHover={{ opacity: 0.05 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Content Container */}
            <div className="relative z-10">
              <motion.div 
                className="w-16 h-16 bg-[#6EDFA3] bg-opacity-10 rounded-full flex items-center justify-center mb-6 text-[#111111]"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(110, 223, 163, 0.2)",
                  rotate: 360
                }}
                transition={{ duration: 0.6 }}
              >
                {principle.icon}
              </motion.div>
              <h3 
                className="mb-3" 
                style={{ 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  color: '#111111' 
                }}
              >
                {principle.title}
              </h3>
              <p 
                className="text-[#666666]" 
                style={{ 
                  fontSize: '16px', 
                  fontWeight: 400,
                  lineHeight: 1.6
                }}
              >
                {principle.description}
              </p>
            </div>

            {/* Decorative Element */}
            <motion.div
              className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#6EDFA3] opacity-0 blur-2xl"
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
