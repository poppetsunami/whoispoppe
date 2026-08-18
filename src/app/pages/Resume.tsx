import { Link } from "react-router";
import { ArrowLeft, Download } from "lucide-react";
import { motion } from "motion/react";

const resumePath = "/assets/resume/Stephanie_Poppe_Branded_Resume.pdf";

export function Resume() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] py-8">
      {/* Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.button
              className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#111111] text-[#111111] rounded-lg hover:bg-[#111111] hover:text-white transition-all duration-300 shadow-sm"
              style={{ fontSize: "16px", fontWeight: 500 }}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </motion.button>
          </Link>

          <motion.a
            href={resumePath}
            download="Stephanie_Poppe_Branded_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-[#6EDFA3] text-[#111111] rounded-lg hover:bg-[#5fce92] transition-all duration-300 shadow-md hover:shadow-lg"
            style={{ fontSize: "16px", fontWeight: 600 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            <span>Download PDF</span>
          </motion.a>
        </div>
      </div>

      {/* Resume Container */}
      <div className="max-w-7xl mx-auto px-2 md:px-6">
        <iframe
          src={`${resumePath}#view=FitH`}
          title="Stephanie Poppe branded resume"
          className="w-full h-[calc(100vh-11rem)] min-h-[700px] bg-white shadow-2xl rounded-lg"
        />
      </div>

      {/* Mobile Download Button */}
      <div className="max-w-7xl mx-auto px-6 mt-8 md:hidden">
        <motion.a
          href={resumePath}
          download="Stephanie_Poppe_Branded_Resume.pdf"
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#6EDFA3] text-[#111111] rounded-lg hover:bg-[#5fce92] transition-all duration-300 shadow-md"
          style={{ fontSize: "16px", fontWeight: 600 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-5 h-5" />
          <span>Download PDF</span>
        </motion.a>
      </div>
    </div>
  );
}
