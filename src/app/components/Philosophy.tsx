import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Philosophy() {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="max-w-5xl mx-auto px-6 py-16 md:py-24 relative">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: "radial-gradient(circle, #6EDFA3 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex items-center gap-8">
        <motion.div
          className="hidden md:block w-2 rounded-full flex-shrink-0 bg-[#6EDFA3]"
          initial={{ height: 0 }}
          animate={isVisible ? { height: 144 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <blockquote className="flex-1">
          <motion.p
            className="text-[#111111]"
            style={{ fontSize: "28px", fontWeight: 500, lineHeight: 1.5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I don't simply design interfaces. I{" "}
            <span style={{ fontWeight: 700 }}>investigate complex problems</span>
            {", "}
            <span style={{ fontWeight: 700 }}>connect customer and business needs</span>
            {", and help teams move from "}
            <span style={{ fontWeight: 700 }}>ambiguity to aligned direction</span>
            {" — with "}
            <span style={{ fontWeight: 700 }}>curiosity and craft</span>{" "}
            intact.
          </motion.p>
        </blockquote>
      </div>
    </section>
  );
}
