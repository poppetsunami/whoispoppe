import { useRef } from "react";
import { Link } from "react-router";
import { ArrowLeft, Download } from "lucide-react";
import { motion } from "motion/react";
import PoppeResume from "../../imports/PoppeResume";

export function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    // Use the browser's native print dialog which preserves fonts and styling
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] py-8 print:bg-white print:py-0 print:min-h-0">
      {/* Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 mb-8 print:hidden">
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

          <motion.button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-6 py-3 bg-[#6EDFA3] text-[#111111] rounded-lg hover:bg-[#5fce92] transition-all duration-300 shadow-md hover:shadow-lg"
            style={{ fontSize: "16px", fontWeight: 600 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            <span>Download as PDF</span>
          </motion.button>
        </div>
      </div>

      {/* Resume Container */}
      <div className="max-w-7xl mx-auto px-6 print:px-0 print:max-w-none print:mx-auto md:px-6 px-2">
        <div 
          ref={resumeRef}
          className="bg-white shadow-2xl rounded-lg overflow-auto print:shadow-none print:rounded-none resume-container"
        >
          <PoppeResume />
        </div>
      </div>

      {/* Mobile Download Button */}
      <div className="max-w-7xl mx-auto px-6 mt-8 md:hidden print:hidden">
        <motion.button
          onClick={handleDownloadPDF}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#6EDFA3] text-[#111111] rounded-lg hover:bg-[#5fce92] transition-all duration-300 shadow-md"
          style={{ fontSize: "16px", fontWeight: 600 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-5 h-5" />
          <span>Download as PDF</span>
        </motion.button>
      </div>
    </div>
  );
}