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
    role: "Co-Founder / Local Leader",
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
        className="mb-6"
        style={{ fontSize: '32px', fontWeight: 600, color: '#111111' }}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-4xl space-y-5 mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="text-[#666666]" style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.75 }}>
          At Moral, I work directly on AI and automation tools, translating complex workflows, governance needs, and technical constraints into product requirements and human-in-the-loop experiences. I direct AI tools to accelerate synthesis, specification drafting, prototype exploration, and critique—and independently build bespoke AI tools and agents to explore AI-native product development firsthand. I’m always experimenting with new tools and technologies to understand what they make possible, where they fall short, and how they can create meaningful value. Human review, traceability, and decision accountability remain central to how I work.
        </p>
        <p className="text-[#111111]" style={{ fontSize: '17px', fontWeight: 500, lineHeight: 1.75 }}>
          I take the work seriously, but not myself. Hard problems can be challenging and still be fun—especially when a team has room to experiment, ask better questions, and enjoy the process. Outcomes matter, but so does the journey: what we learn, how we grow, and the relationships we build along the way.
        </p>
      </motion.div>

      <motion.h3
        className="mb-8"
        style={{ fontSize: '24px', fontWeight: 600, color: '#111111' }}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Community & Leadership
      </motion.h3>
      <div className="grid md:grid-cols-3 gap-6">
        {leadership.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl border-2 border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-12 h-12 bg-[#6EDFA3] bg-opacity-10 rounded-lg flex items-center justify-center mb-4 text-[#111111]">
              {item.icon}
            </div>
            <p className="text-[#666666] mb-2" style={{ fontSize: '14px', fontWeight: 500 }}>
              {item.role}
            </p>
            <h3 className="text-[#111111]" style={{ fontSize: '18px', fontWeight: 600 }}>
              {item.organization}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
