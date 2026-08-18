import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Philosophy() {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="max-w-5xl mx-auto px-6 py-16 md:py-24 relative">
      {/* Decorative Background Element */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: "radial-gradient(circle, #6EDFA3 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex items-center gap-8">
        {/* Animated Green accent bar */}
        <motion.div
          className="hidden md:block w-2 rounded-full flex-shrink-0 bg-[#6EDFA3]"
          initial={{ height: 0 }}
          animate={isVisible ? { height: 144 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Quote */}
        <blockquote className="flex-1">
          <motion.p
            className="text-[#111111]"
            style={{ fontSize: "28px", fontWeight: 500, lineHeight: 1.5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I don't simply design interfaces. I{" "}
            <motion.span
              style={{ fontWeight: 700 }}
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10">investigate complex problems</span>
              <motion.span
                className="absolute bottom-0 left-0 h-2 bg-[#6EDFA3] opacity-30 -z-10"
                initial={{ width: 0 }}
                animate={isVisible ? { width: "100%" } : {}}
                transition={{ delay: 0.5, duration: 0.4 }}
              />
            </motion.span>
            {", "}
            <motion.span
              style={{ fontWeight: 700 }}
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10">connect customer and business needs</span>
              <motion.span
                className="absolute bottom-0 left-0 h-2 bg-[#6EDFA3] opacity-30 -z-10"
                initial={{ width: 0 }}
                animate={isVisible ? { width: "100%" } : {}}
                transition={{ delay: 0.8, duration: 0.4 }}
              />
            </motion.span>
            {", and help teams move from "}
            <motion.span
              style={{ fontWeight: 700 }}
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10">ambiguity to aligned direction</span>
              <motion.span
                className="absolute bottom-0 left-0 h-2 bg-[#6EDFA3] opacity-30 -z-10"
                initial={{ width: 0 }}
                animate={isVisible ? { width: "100%" } : {}}
                transition={{ delay: 1.1, duration: 0.4 }}
              />
            </motion.span>
            {" — with "}
            <motion.span
              style={{ fontWeight: 700 }}
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10">curiosity and craft</span>
              <motion.span
                className="absolute bottom-0 left-0 h-2 bg-[#6EDFA3] opacity-30 -z-10"
                initial={{ width: 0 }}
                animate={isVisible ? { width: "100%" } : {}}
                transition={{ delay: 1.4, duration: 0.4 }}
              />
            </motion.span>{" "}
            intact.
          </motion.p>
        </blockquote>
      </div>
    </section>
  );
}
