import { Award, Users, Leaf } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface LeadershipItem {
  icon: React.ReactNode;
  role: string;
  organization: string;
}

const leadership: LeadershipItem[] = [
  {
    icon: <Award className="w-6 h-6" />,
    role: "Founder & Executive Director",
    organization: "Indy Design Week",
  },
  {
    icon: <Users className="w-6 h-6" />,
    role: "Co-Founder",
    organization: "IxDA Indianapolis",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    role: "Co-Founder",
    organization: "Kroger Environmental Conscious Outcomes ERG",
  },
];

export function CommunityLeadership() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="max-w-5xl mx-auto px-6 py-16 md:py-24">
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
        Community & Leadership
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {leadership.map((item, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-6 rounded-xl border-2 border-gray-200 relative overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              y: -5,
              borderColor: '#6EDFA3',
              boxShadow: "0 10px 30px rgba(110, 223, 163, 0.15)"
            }}
          >
            {/* Gradient Overlay on Hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#6EDFA3]/5 to-transparent opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div 
              className="w-12 h-12 bg-[#6EDFA3] bg-opacity-10 rounded-lg flex items-center justify-center mb-4 text-[#111111] relative z-10"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(110, 223, 163, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              {item.icon}
            </motion.div>
            <p 
              className="text-[#666666] mb-2 relative z-10" 
              style={{ 
                fontSize: '14px', 
                fontWeight: 500 
              }}
            >
              {item.role}
            </p>
            <h3 
              className="text-[#111111] relative z-10" 
              style={{ 
                fontSize: '18px', 
                fontWeight: 600 
              }}
            >
              {item.organization}
            </h3>

            {/* Decorative Corner Element */}
            <motion.div
              className="absolute bottom-0 right-0 w-16 h-16 opacity-0"
              style={{
                background: 'linear-gradient(135deg, transparent 50%, #6EDFA3 50%)',
                borderRadius: '0 0 12px 0',
              }}
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}