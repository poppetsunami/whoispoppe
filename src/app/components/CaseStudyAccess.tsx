import { Mail } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { SectionHeading } from "./SectionHeading";

export function CaseStudyAccess() {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="max-w-4xl mx-auto px-6 py-10 md:py-20">
      <motion.div 
        className="bg-white p-12 rounded-2xl text-center relative overflow-hidden"
        style={{
          border: '2px solid #E5E5E5',
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        {/* Animated Background Pattern */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#6EDFA3] to-transparent"
          initial={{ x: '-100%' }}
          animate={isVisible ? { x: '100%' } : {}}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }}
        />

        {/* Decorative Circles */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-2 border-[#6EDFA3] opacity-10" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border-2 border-[#6EDFA3] opacity-10" />

        <div className="max-w-2xl mx-auto relative z-10">
          <motion.div
            className="mb-6" 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <SectionHeading label="Case Study Access" accent="Access" />
          </motion.div>
          <motion.p 
            className="text-[#666666] mb-8" 
            style={{ 
              fontSize: '18px', 
              fontWeight: 400,
              lineHeight: 1.6
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Some projects involve confidential enterprise systems and are available only by request.
            <br /><br />
            If you would like to review detailed case studies, please reach out and I will happily share access.
          </motion.p>
          <motion.a 
            href="mailto:whoispoppe@gmail.com"
            className="px-8 py-3 bg-[#111111] text-white rounded-lg inline-flex items-center gap-2 relative overflow-hidden group" 
            style={{ fontSize: '16px', fontWeight: 500 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-[#6EDFA3] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <Mail className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Request Case Study Access</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
