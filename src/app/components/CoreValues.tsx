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
        style={{ 
          fontSize: '32px', 
          fontWeight: 600, 
          color: '#111111' 
        }}
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
            className="bg-white p-8 rounded-xl group relative overflow-hidden cursor-pointer"
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
              whileHover={{ opacity: 0.1 }}
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
                {value.icon}
              </motion.div>
              <h3 
                className="mb-3" 
                style={{ 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  color: '#111111' 
                }}
              >
                {value.title}
              </h3>
              <p 
                className="text-[#666666]" 
                style={{ 
                  fontSize: '16px', 
                  fontWeight: 400,
                  lineHeight: 1.6
                }}
              >
                {value.description}
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