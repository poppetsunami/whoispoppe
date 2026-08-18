import { Linkedin, Mail, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Tagline */}
          <div className="text-center md:text-left">
            <p
              className="text-[#666666]"
              style={{
                fontSize: '16px',
                fontWeight: 400
              }}
            >
              Digital Product & Experience Strategist · Indianapolis
            </p>
          </div>

          {/* Right - Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/whoispoppe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-[#111111] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:whoispoppe@gmail.com"
              className="text-[#666666] hover:text-[#111111] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="/resume.pdf"
              download="Stephanie_Poppe_Resume.pdf"
              className="text-[#666666] hover:text-[#111111] transition-colors flex items-center gap-2"
              style={{ fontSize: '14px', fontWeight: 500 }}
            >
              <FileText className="w-5 h-5" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
