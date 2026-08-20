import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Mail, ArrowRight } from "lucide-react";

interface ProjectCard {
  label: string;
  title: string;
  descriptor: string;
  problem: string;
  role: string;
  scale: string;
  outcome: string;
  capabilities: string[];
  confidential?: boolean;
}

const projects: ProjectCard[] = [
  {
    label: "Agricultural Equipment Service",
    title: "Agricultural Equipment Service Platform",
    descriptor: "Product discovery, service strategy, and workflow transformation for agricultural equipment service.",
    problem: "The application was the lowest-performing product in a portfolio of approximately 50 products. Agricultural equipment dealers and service centers were navigating service and reporting friction that limited adoption and satisfaction.",
    role: "Led a three-month discovery, interviewed 10 dealers, and mapped operational workflows shaped by legacy-system constraints. Partnered with two Product Owners and business stakeholders on service strategy, operational workflow redesign, a configurable work-management direction, and roadmap prioritization, then continued through six months of dual-track delivery.",
    scale: "10 dealer interviews · Two product owners · Discovery through six months of delivery",
    outcome: "Contributed to increased adoption and satisfaction with fewer support calls while establishing a clearer path from customer evidence to product priorities. Exact metrics were owned by the client.",
    capabilities: ["Customer Discovery", "Product Direction", "Service Workflows", "Dual-track Delivery"],
    confidential: true,
  },
  {
    label: "Connected Products & Analytics",
    title: "KAMP Connected Equipment Platform",
    descriptor: "Creating the product architecture for connected equipment, fleet operations, and actionable telemetry.",
    problem: "Machine telemetry, connectivity, subscriptions, organizations, alerts, and reporting needed to function as one coherent product rather than a collection of disconnected features.",
    role: "Defined the experience architecture connecting organizations, machines, devices, telemetry, status, alerts, geofences, and action. Designed fleet monitoring and reporting workflows while establishing reusable interaction models for an emerging platform.",
    scale: "Multi-site fleet operations · Real-time equipment monitoring · Emerging platform architecture",
    outcome: "Created a scalable foundation that moved the product from raw telemetry toward operational understanding, reusable patterns, and configurable platform capabilities.",
    capabilities: ["Systems Architecture", "Data Experience Design", "Product Strategy", "Design Systems"],
    confidential: true,
  },
  {
    label: "Kroger Zero-Waste Fulfillment",
    title: "Kroger Permanent Container Labels",
    descriptor: "Reimagining a high-volume physical-digital fulfillment workflow to reduce waste and operating cost.",
    problem: "E-commerce fulfillment depended on millions of dollars in single-use labels, printers, ink, maintenance, and label-removal labor. Replacing them meant redesigning a connected physical and digital workflow without disrupting store operations.",
    role: "Co-led research and service design across trolley preparation, picking, staging, de-staging, and checkout. Ran store tours, work-alongs, subject-matter interviews, and four pilot rounds while coordinating the physical solution with five product teams.",
    scale: "17 associates · Two stores · Four pilot rounds · Five connected products",
    outcome: "Validated the base workflow and received strongly positive associate feedback. The business case projected $7.1M in annual savings across supplies and labor; additional studies were planned to validate further opportunities.",
    capabilities: ["Service Design", "Mixed-method Research", "Physical-Digital UX", "Cross-team Alignment"],
  },
  {
    label: "Regulated AI & Knowledge Systems",
    title: "Governed Clinical Knowledge & Trial Intelligence",
    descriptor: "Turning fragmented clinical knowledge into governed, testable, human-reviewed intelligence.",
    problem: "Clinical teams had abundant information but no fast, reliable way to reconcile sources, assess freshness and confidence, route sensitive questions, or preserve the rationale behind decisions.",
    role: "Designed a governed conversational inquiry prototype, converted the vision into measurable knowledge-management experiments, and structured a roadmap around reusable search, FAQ, decision-log, insight, and human-review capabilities.",
    scale: "14 user-facing experiments · Four delivery enablers · Q3–Q4 capability roadmap",
    outcome: "Connected an experiential vision, testable quick wins, shared telemetry, governance requirements, and technical readiness into a credible path toward a scalable trial-intelligence platform.",
    capabilities: ["AI Product Strategy", "Governance UX", "Experiment Design", "Executive Alignment"],
    confidential: true,
  },
  {
    label: "Consumer IoT & Behavior Change",
    title: "Connected Home Water Platform",
    descriptor: "Unifying connected products through customer research, behavior change, and platform prioritization.",
    problem: "A failing mobile app needed to support a new family of connected water products, unify a fragmented device ecosystem, and move the experience beyond monitoring toward meaningful household engagement.",
    role: "Led product design from ecosystem mapping and prioritization through research, prototyping, testing, and delivery. Coached a junior designer, partnered closely with product and engineering, and balanced behavior-change ambitions against legacy-code, budget, and timeline constraints.",
    scale: "Approximately 20 interviews · Approximately 300 survey responses · Seven-month delivery",
    outcome: "Delivered a unified iOS and Android MVP with a redesigned dashboard, connection experience, and data-informed engagement model while retaining as much of the legacy framework as practical.",
    capabilities: ["Consumer Research", "IoT Experience Design", "Behavior Change", "Product Prioritization"],
    confidential: true,
  },
  {
    label: "Kroger Legacy Modernization",
    title: "Kroger Warehouse Claims Platform",
    descriptor: "Modernizing an enterprise warehouse claims system through operational research and service design.",
    problem: "A 25-year-old claims system had become a liability — brittle, difficult to use, and unable to support the growing complexity of a modern distribution network.",
    role: "Led discovery, product strategy, and service design from warehouse operations through delivery. Connected workflow mapping and systemic pain points to business rules, product requirements, and a redesigned enterprise system capable of scaling with operations.",
    scale: "60+ distribution facilities · Approximately 160,000 claims annually",
    outcome: "MVP delivered in six months. Approximately one labor hour saved per claim, with a platform foundation capable of supporting future operational growth.",
    capabilities: ["Discovery & Synthesis", "Systems Thinking", "Product Strategy", "Service Design"],
    confidential: true,
  },
];

function ProjectCard({ project, index, isVisible }: { project: ProjectCard; index: number; isVisible: boolean }) {
  return (
    <motion.div
      className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden flex flex-col"
      initial={false}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      {/* Top accent bar — always visible */}
      <div className="h-1 bg-[#6EDFA3]" />

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
          className="text-[#111111] mb-2"
          style={{ fontSize: "22px", fontWeight: 700, lineHeight: 1.3 }}
        >
          {project.title}
        </h3>

        <p className="text-[#666666] mb-5" style={{ fontSize: "15px", fontWeight: 500, lineHeight: 1.55 }}>
          {project.descriptor}
        </p>

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
