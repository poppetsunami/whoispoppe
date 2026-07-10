import { Download, Eye } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-20"
        style={{ background: 'linear-gradient(135deg, #6EDFA3 0%, #6EDFA3 100%)' }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 rounded-full opacity-10"
        style={{ background: 'linear-gradient(135deg, #6EDFA3 0%, #111111 100%)' }}
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        {/* Left Column */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-start gap-3">
            <motion.img
              src="https://static.wixstatic.com/media/97cbb1_e398a07703674fabb48e695dd413a3fc~mv2.png/v1/fill/w_100,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/poppy.png"
              alt="Poppy icon"
              className="w-10 h-10 mt-1"
              animate={{
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="flex-1">
              <motion.p 
                className="text-[#666666] mb-4" 
                style={{ fontSize: '16px', fontWeight: 400 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi there! I'm Poppe<br />
                Designer, Strategist, Researcher, and Community Builder.
              </motion.p>
              <motion.h1 
                className="mb-6" 
                style={{ 
                  fontSize: '48px', 
                  fontWeight: 700, 
                  lineHeight: 1.2, 
                  color: '#111111' 
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Designing systems that help people do{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">complex work</span>
                  <motion.span
                    className="absolute bottom-1 left-0 h-3 bg-[#6EDFA3] -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
                {' '}better.
              </motion.h1>
              <motion.p 
                className="text-[#666666] mb-8" 
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.6 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Senior product designer improving operational and enterprise systems across retail operations, connected products, and regulated industries.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a 
                  href="#experience"
                  className="px-8 py-3 bg-[#111111] text-white rounded-lg flex items-center gap-2 relative overflow-hidden group" 
                  style={{ fontSize: '16px', fontWeight: 500 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 bg-[#6EDFA3] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <Eye className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">View Experience</span>
                </motion.a>
                <motion.a 
                  href="/resume"
                  className="px-8 py-3 border-2 border-[#111111] text-[#111111] rounded-lg flex items-center gap-2 relative overflow-hidden group" 
                  style={{ fontSize: '16px', fontWeight: 500 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 bg-[#111111] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <Download className="w-5 h-5 relative z-10 group-hover:text-white transition-colors duration-300" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Resume</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Gradient Background Accent */}
            <motion.div
              className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
              style={{ background: 'linear-gradient(135deg, #6EDFA3 0%, #111111 100%)' }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img
              src="https://static.wixstatic.com/media/97cbb1_64e54ba6d69c480b964de8e85ff2db89~mv2.jpeg/v1/fill/w_1030,h_1456,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/97cbb1_64e54ba6d69c480b964de8e85ff2db89~mv2.jpeg"
              alt="Portrait"
              className="rounded-2xl shadow-lg w-full max-w-md relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}