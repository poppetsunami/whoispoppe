import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useEffect, useState } from "react";

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

const highlights = [
  { number: 12,   prefix: "",   suffix: "+", unit: "years",         label: "Digital product & experience strategy" },
  { number: 2500, prefix: "",   suffix: "",  unit: "stores",        label: "Enterprise fulfillment experiences" },
  { number: 6,    prefix: "~$", suffix: "M", unit: "",              label: "Labor savings influenced by redesigned fulfillment workflows" },
  { number: 15,   prefix: "",   suffix: "%", unit: "",              label: "Improvement in picking speed" },
  { number: 60,   prefix: "",   suffix: "+", unit: "facilities",    label: "Warehouse platform modernization" },
  { number: 600,  prefix: "",   suffix: "",  unit: "organizations", label: "Enterprise CSR platform users" },
];

export function ImpactHighlights() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-3" style={{ fontSize: "32px", fontWeight: 600, color: "#111111" }}>
          Strategic Impact
        </h2>
        <p className="text-[#666666]" style={{ fontSize: "16px", fontWeight: 400 }}>
          Evidence of scale from recent work — not decorative statistics.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
        {highlights.map((h, index) => (
          <motion.div
            key={index}
            className="bg-[#F7F7F7] p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="mb-3">
              <span
                className="text-[#111111]"
                style={{ fontSize: "42px", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em" }}
              >
                {h.prefix}
                {isVisible ? <AnimatedCounter end={h.number} /> : "0"}
                {h.suffix}
              </span>
              {h.unit && (
                <span className="text-[#6EDFA3] ml-2" style={{ fontSize: "18px", fontWeight: 600 }}>
                  {h.unit}
                </span>
              )}
            </div>
            <p className="text-[#666666]" style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.5 }}>
              {h.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
