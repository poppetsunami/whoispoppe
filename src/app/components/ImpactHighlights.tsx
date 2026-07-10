import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { TrendingUp, Users, Building2 } from "lucide-react";

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

  return <span>{count}</span>;
}

export function ImpactHighlights() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const highlights = [
    {
      icon: TrendingUp,
      number: 6,
      prefix: "$",
      suffix: "M",
      text: "labor savings through redesigned retail fulfillment workflows",
      color: "#6EDFA3",
    },
    {
      icon: Building2,
      number: 2500,
      prefix: "",
      suffix: "+",
      text: "stores and 60+ distribution facilities using operational systems",
      color: "#6EDFA3",
    },
    {
      icon: Users,
      number: 600,
      prefix: "",
      suffix: "+",
      text: "organizations supported by enterprise platforms with thousands of operational users",
      color: "#6EDFA3",
    },
  ];

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <motion.h2 
        className="mb-3" 
        style={{ 
          fontSize: '32px', 
          fontWeight: 600, 
          color: '#111111' 
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Impact Highlights
      </motion.h2>
      <motion.p
        className="mb-12 text-[#666666]"
        style={{
          fontSize: '16px',
          fontWeight: 400,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Selected outcomes from recent work
      </motion.p>
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((highlight, index) => {
          const Icon = highlight.icon;
          return (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-xl border-l-4 border-[#6EDFA3] relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(110, 223, 163, 0.15)"
              }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6EDFA3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <motion.div
                className="mb-4 inline-block"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Icon className="w-8 h-8 text-[#6EDFA3]" />
              </motion.div>

              {/* Animated Number */}
              <div className="mb-4 relative z-10">
                <motion.span
                  className="block"
                  style={{ 
                    fontSize: '40px', 
                    fontWeight: 700, 
                    color: '#111111',
                    lineHeight: 1,
                  }}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                >
                  {highlight.prefix}
                  {isVisible && <AnimatedCounter end={highlight.number} />}
                  {highlight.suffix}
                </motion.span>
              </div>

              <p 
                className="text-[#666666] relative z-10" 
                style={{ 
                  fontSize: '16px', 
                  fontWeight: 400, 
                  lineHeight: 1.6 
                }}
              >
                {highlight.text}
              </p>

              {/* Decorative Element */}
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20"
                style={{ background: highlight.color }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}