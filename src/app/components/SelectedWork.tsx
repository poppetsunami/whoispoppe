import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Mail, ArrowRight } from "lucide-react";

interface ProjectCard {
  label: string;
  title: string;
  problem: string;
  role: string;
  scale: string;
  outcome: string;
  capabilities: string[];
  confidential?: boolean;
}

const projects: ProjectCard[] = [
  {
    label: "Enterprise Retail Operations",
    title: "Kroger Fulfillment Platform",
    problem: "Store employees were completing online order fulfillment through fragmented, inefficient workflows that slowed operations and increased labor costs across a national footprint.",
    role: "Led product design across discovery, strategy, and delivery for fulfillment systems. Collaborated with nine product teams to align enterprise workflows and design patterns.",
    scale: "2,500 stores · National fulfillment network",
    outcome: "~$6M in annual labor savings. 15% improvement in pick speed. Established enterprise design patterns adopted across multiple product teams.",
    capabilities: ["Product Strategy", "Research & Discovery", "Operational Design", "Cross-team Alignment"],
  },
  {
    label: "Legacy System Modernization",
    title: "Warehouse Claims Platform",
    problem: "A 25-year-old claims system had become a liability — brittle, difficult to use, and unable to support the growing complexity of a modern distribution network.",
    role: "Led discovery, strategy, and interaction design. Mapped underlying workflows, reframed the problem space, and designed a modern system capable of scaling with operations.",
    scale: "60+ distribution facilities · ~160,000 claims annually",
    outcome: "MVP delivered in six months. Approximately one labor hour saved per claim. Platform capable of supporting future operational growth.",
    capabilities: ["Discovery & Synthesis", "Systems Thinking", "Product Strategy", "Service Design"],
  },
  {
    label: "Regulated Pharmaceutical Environments",
    title: "Clinical Trial & Research Platforms",
    problem: "Research and operations teams coordinating complex clinical studies were navigating fragmented systems and poorly structured workflows in a highly regulated environment.",
    role: "Lead UX research and product design strategy. Facilitate stakeholder alignment across product, engineering, operations, and Fortune 100 and 500 pharmaceutical organizations.",
    scale: "Regulated pharma environments · Multi-organization coordination",
    outcome: "Workflow improvements reducing coordination friction. Design systems supporting compliance and operational accuracy.",
    capabilities: ["Research & Synthesis", "Stakeholder Alignment", "Regulatory UX", "Product Strategy"],
    confidential: true,
  },
  {
    label: "Connected Products & Analytics",
    title: "Industrial Fleet Telemetry Platform",
    problem: "Machine telemetry data existed in volume but was not translating into actionable operational intelligence for the teams responsible for fleet health and performance.",
    role: "Defined foundational interaction models for translating telemetry into operational insight. Established design patterns and UI architecture for a platform without prior design function.",
    scale: "Multi-site fleet operations · Real-time equipment monitoring",
    outcome: "Operational insight models enabling faster diagnosis and prioritization. Design foundations supporting platform scalability.",
    capabilities: ["Data Experience Design", "Systems Architecture", "Product Direction", "Design Systems"],
    confidential: true,
  },
];

function ProjectCard({ project, index, isVisible }: { project: ProjectCard; index: number; isVisible: boolean }) {
  return (
    <motion.div
      className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden group hover:border-[#6EDFA3] transition-colors duration-300 flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.07)" }}
    >
      {/* Top accent bar */}
      <div className="h-1 bg-[#6EDFA3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-8 flex flex-col flex-1">
        {/* Label */}
        <p
          className="text-[#6EDFA3] mb-2"
          style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}
        >
          {project.label}
        </p>

        {/* Title */}
        <h3
          className="text-[#111111] mb-5"
          style={{ fontSize: "22px", fontWeight: 700, lineHeight: 1.3 }}
        >
          {project.title}
        </h3>

        {/* Problem */}
        <div className="mb-4">
          <p
            className="text-[#666666] mb-1"
            style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}
          >
            The Problem
          </p>
          <p
            className="text-[#111111]"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.6 }}
          >
            {project.problem}
          </p>
        </div>

        {/* Role */}
        <div className="mb-4">
          <p
            className="text-[#666666] mb-1"
            style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}
          >
            My Role
          </p>
          <p
            className="text-[#111111]"
            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.6 }}
          >
            {project.role}
          </p>
        </div>

        {/* Scale */}
        <p
          className="text-[#666666] mb-5 text-sm"
          style={{ fontWeight: 500 }}
        >
          {project.scale}
        </p>

        {/* Outcome */}
        <div className="bg-[#F7F7F7] rounded-xl px-5 py-4 mb-6 border-l-4 border-[#6EDFA3]">
          <p
            className="text-[#666666] mb-1"
            style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}
          >
            Outcome
          </p>
          <p
            className="text-[#111111]"
            style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.6 }}
          >
            {project.outcome}
          </p>
        </div>

        {/* Capabilities */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.capabilities.map((cap) => (
            <span
              key={cap}
              className="px-3 py-1 bg-[#111111] text-white rounded-full"
              style={{ fontSize: "12px", fontWeight: 500 }}
            >
              {cap}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:whoispoppe@gmail.com"
          className="inline-flex items-center gap-2 text-[#111111] group/link"
          style={{ fontSize: "14px", fontWeight: 600 }}
        >
          <Mail className="w-4 h-4 text-[#6EDFA3]" />
          <span className="border-b border-transparent group-hover/link:border-[#111111] transition-colors">
            {project.confidential ? "Request case study access" : "View case study"}
          </span>
          <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity -translate-x-2 group-hover/link:translate-x-0 transition-transform duration-200" />
        </a>
      </div>
    </motion.div>
  );
}

export function SelectedWork() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="work" ref={ref} className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="mb-3"
          style={{ fontSize: "32px", fontWeight: 600, color: "#111111" }}
        >
          Selected Work
        </h2>
        <p className="text-[#666666] max-w-2xl" style={{ fontSize: "17px", lineHeight: 1.6 }}>
          Enterprise-scale problems in retail operations, legacy modernization, regulated pharmaceutical environments, and connected products. Each project required understanding complex systems, not just designing interfaces.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
}
