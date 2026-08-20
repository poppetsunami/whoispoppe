import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, ExternalLink, Briefcase, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { SectionHeading } from "./SectionHeading";

interface ExperienceItem {
  role: string;
  company: string;
  dates: string;
  summary: string;
  overview: string;
  contributions: string[];
  approach: string[];
  caseStudyLink?: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Lead UX Researcher & Designer",
    company: "Moral",
    dates: "Jun 2025 – Present",
    summary: "Lead UX research and product strategy for regulated platforms supporting clinical-trial operations.",
    overview: "At Moral, I lead UX research and product design strategy for regulated pharmaceutical platforms supporting clinical trial operations. These systems are used by research and operations teams responsible for coordinating complex clinical studies across organizations. The environment is highly regulated, and workflows must support compliance, accuracy, and coordination across multiple stakeholders.",
    contributions: [
      "Lead UX research across clinical operations workflows",
      "Define product design strategy for regulated pharmaceutical systems",
      "Align product, engineering, clinical, research, and operations teams through workshops and prioritization",
      "Translate complex regulatory and operational requirements into usable workflows",
      "Identify usability risks in highly regulated environments where errors carry significant consequences",
      "Translate research with Fortune 100 and Fortune 500 pharmaceutical organizations into product direction",
    ],
    approach: [
      "Clinical trial platforms sit at the intersection of operational complexity, regulatory oversight, and scientific research. The challenge is not simply designing interfaces, but helping teams navigate the tension between compliance requirements and usability.",
      "My approach has focused heavily on understanding real operational workflows before proposing design solutions. That means speaking directly with users involved in trial coordination, identifying where systems break down, and mapping how information moves between teams.",
      "Another critical aspect of this work is facilitating alignment among stakeholders with very different priorities. Product teams, compliance experts, engineers, and research organizations all bring different perspectives. A significant portion of my role involves creating shared understanding of problems before moving into design solutions.",
      "By grounding conversations in user needs and operational realities, we're able to design systems that both satisfy regulatory requirements and genuinely support the people running clinical trials.",
    ],
    caseStudyLink: "Request Case Study Access",
  },
  {
    role: "Principal UX Designer",
    company: "KAMP Technologies",
    dates: "Mar 2025 – Mar 2026",
    summary: "Lead product design for a connected platform integrating machine telemetry, fleet monitoring, and operational analytics.",
    overview: "At KAMP, I lead product design for a connected platform that integrates machine telemetry, fleet monitoring, and operational analytics. The platform aggregates real-time data from equipment in the field and translates it into actionable insights for operators, service teams, and business leaders. The challenge is not simply visualizing machine data, but transforming complex telemetry into systems that support operational decision making.",
    contributions: [
      "Define interaction models, dashboards, reporting workflows, and foundational patterns that turn machine data into actionable insights",
      "Partner with product and engineering leaders to align customer needs, technical constraints, product direction, and UX strategy",
      "Established core design patterns and UI architecture for the platform",
      "Worked closely with engineering to translate data structures into usable product features",
      "Facilitated product discussions around prioritization, user needs, and platform direction",
      "Introduced early design system structure to support product scalability",
    ],
    approach: [
      "Connected products generate enormous volumes of data, but raw telemetry rarely translates directly into value for users. One of my primary responsibilities has been helping the team shift from thinking about 'data visualization' to thinking about operational insight.",
      "Rather than simply exposing machine data, I worked with engineering and product leadership to identify the decisions users actually need to make: diagnosing machine health, understanding fleet performance, and identifying operational risks early. From there, we structured the product around workflows rather than raw metrics.",
      "Another important part of the work has been establishing design foundations for a platform that did not previously have a dedicated design function. This includes defining interaction patterns, clarifying information hierarchies, and building alignment across engineering and product teams around how the system should evolve.",
      "Because connected platforms often grow rapidly and become fragmented, a major focus has been designing structures that can scale as the product expands.",
    ],
    caseStudyLink: "Request Case Study Access",
  },
  {
    role: "Senior Horizontal Product Designer",
    company: "Kroger Technology & Digital",
    dates: "Jun 2022 – Mar 2025",
    summary: "Designing enterprise operational systems across supply chain and retail fulfillment.",
    overview: "At Kroger, I designed enterprise operational systems used across supply chain, warehousing, and store fulfillment. These systems support the day-to-day operations of one of the largest grocery retailers in the United States. My work focused on improving tools used by employees performing complex operational tasks at scale.",
    contributions: [
      "Led design of Pick Up Fulfillment workflows used across 2,500 stores",
      "Delivered ~$6M in annual labor savings through workflow improvements",
      "Improved pick speed by approximately 15% through redesigned task flows",
      "Designed replacement for a 25-year-old warehouse claims platform used across 60+ distribution facilities",
      "Delivered MVP within six months, reducing claims processing time by roughly one hour per claim",
      "Collaborated with nine product teams to align enterprise workflows and design patterns",
    ],
    approach: [
      "Operational systems are often invisible to customers but critical to the functioning of large organizations. The tools employees use to do their work directly affect efficiency, cost, and employee experience.",
      "One of the most impactful projects I worked on was improving Kroger's Pick Up fulfillment workflows. Rather than focusing purely on interface changes, I worked closely with product managers, engineers, and operations leaders to understand the real constraints store employees faced during order picking.",
      "We looked at everything from physical movement through the store to cognitive load during order assembly. Many of the improvements came not from visual redesign alone but from restructuring the workflow to better match how employees actually work.",
      "Another major initiative involved replacing a decades-old warehouse claims system. Legacy operational tools often accumulate complexity over time, making them difficult to maintain and frustrating to use. My role involved helping the team reframe the problem, mapping the underlying workflows, and designing a modern system that could support both current operations and future growth.",
      "The work reinforced a principle I return to often: the best operational systems do not simply digitize existing processes—they rethink them.",
    ],
    caseStudyLink: "Request Case Study Access",
  },
  {
    role: "Senior UX Designer",
    company: "YourCause (Blackbaud)",
    dates: "May 2021 – May 2022",
    summary: "Led UX design for enterprise CSR platforms supporting corporate social responsibility programs.",
    overview: "At YourCause, I worked on CSR software used by hundreds of enterprise organizations to manage corporate philanthropy and employee engagement programs. The platform enables companies to coordinate volunteering initiatives, donations, and social impact programs across large employee populations.",
    contributions: [
      "Led UX design and research for CSR platform used by 600+ organizations",
      "Identified friction in page creation and site configuration workflows",
      "Redesigned setup and page management tools to reduce administrative complexity",
      "Reduced page setup time by approximately 20%",
    ],
    approach: [
      "Enterprise software often becomes difficult to use because it evolves around technical capabilities rather than user workflows. One of the main opportunities I identified in the YourCause platform was simplifying the administrative experience for teams responsible for managing CSR programs.",
      "Rather than adding new features, the focus was on reducing friction in existing processes. Through research and workflow analysis, we identified where administrators were encountering unnecessary steps or confusing interface patterns.",
      "The redesign focused on making common tasks more predictable and easier to navigate. By restructuring the workflow and clarifying interaction patterns, we were able to reduce the time required to configure and manage CSR program pages.",
    ],
  },
  {
    role: "Senior Interaction Designer",
    company: "Software Engineering Professionals (SEP)",
    dates: "Oct 2018 – May 2021",
    summary: "Led discovery and interaction design for enterprise products and connected equipment platforms.",
    overview: "At SEP, I consulted on UX strategy and interaction design across a wide range of enterprise and consumer products. Many of the projects involved complex technical systems used by specialized professional audiences. My work focused on helping teams move from feature-driven thinking to more coherent product experiences.",
    contributions: [
      "Led discovery and interaction design for enterprise platforms",
      "Led discovery and design for machine-diagnostics tools supporting 2,000+ service shops",
      "Supported development of systems used by thousands of technicians and service providers",
      "Facilitated cross-functional design and product workshops",
      "Helped teams translate technical capabilities into usable product experiences",
    ],
    approach: [
      "Consulting environments require quickly understanding unfamiliar industries and complex systems. My approach typically begins with structured discovery, identifying the underlying workflows, decision points, and user goals that shape how a product is used.",
      "One project involved designing diagnostics platforms for connected equipment used by service technicians. These systems must support users diagnosing technical issues in real time, often under time pressure and in physically demanding environments.",
      "Rather than simply presenting system data, the design focused on helping technicians identify likely causes of issues and prioritize next steps. The goal was to reduce cognitive load and support faster troubleshooting in the field.",
      "This experience reinforced how important it is to design systems that reflect the realities of users' environments, rather than assuming ideal conditions.",
    ],
  },
];

export function Experience() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="experience" ref={ref} className="max-w-5xl mx-auto px-6 py-10 md:py-20">
      <motion.div
        className="mb-12" 
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading label="Experience" accent="Experience" />
      </motion.div>
      
      <Accordion.Root type="single" collapsible className="space-y-6">
        {experiences.map((exp, index) => {
          const isCurrentRole = exp.dates.includes('Present');
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Accordion.Item 
                value={`item-${index}`}
                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden group/item relative shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Animated gradient border on hover */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, #6EDFA3, transparent)',
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover/item:opacity-10 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-bl from-[#6EDFA3] to-transparent rounded-2xl" />
                </div>

                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-8 py-8 flex items-start justify-between gap-6 text-left group relative z-10">
                    <div className="flex-1 space-y-4">
                      {/* Top row: Role and Status Badge */}
                      <div className="flex items-start gap-3 flex-wrap">
                        <h3 
                          className="text-[#111111] group-data-[state=open]:text-[#666666] transition-colors flex-1 min-w-0" 
                          style={{ 
                            fontSize: '22px', 
                            fontWeight: 700,
                            lineHeight: 1.3
                          }}
                        >
                          {exp.role}
                        </h3>
                        {isCurrentRole && (
                          <motion.span 
                            className="px-3 py-1 bg-[#6EDFA3] bg-opacity-20 text-[#111111] rounded-full text-xs font-semibold whitespace-nowrap"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                          >
                            Current
                          </motion.span>
                        )}
                      </div>

                      {/* Company and Date row with icons */}
                      <div className="flex flex-wrap items-center gap-4 text-[#666666]">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-[#6EDFA3]" />
                          <span style={{ fontSize: '15px', fontWeight: 600 }}>
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#6EDFA3]" />
                          <span style={{ fontSize: '15px', fontWeight: 500 }}>
                            {exp.dates}
                          </span>
                        </div>
                      </div>

                      {/* Summary */}
                      <p 
                        className="text-[#666666] leading-relaxed" 
                        style={{ 
                          fontSize: '16px', 
                          fontWeight: 400,
                          lineHeight: 1.7
                        }}
                      >
                        {exp.summary}
                      </p>
                    </div>

                    {/* Chevron button with background */}
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#6EDFA3] group-hover:bg-opacity-10 flex items-center justify-center transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronDown className="w-5 h-5 text-[#666666] group-data-[state=open]:rotate-180 transition-all duration-300" />
                    </motion.div>
                  </Accordion.Trigger>
                </Accordion.Header>
                
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  {/* Divider line */}
                  <div className="px-8">
                    <div className="h-px bg-gradient-to-r from-[#6EDFA3] via-gray-200 to-transparent" />
                  </div>

                  <div className="px-8 pb-8 pt-6">
                    <div className="space-y-6 relative">
                      {/* Overview Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <h4 
                          className="text-[#111111] mb-3"
                          style={{
                            fontSize: '18px',
                            fontWeight: 600,
                          }}
                        >
                          Overview
                        </h4>
                        <p 
                          className="text-[#666666]"
                          style={{
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: 1.7,
                          }}
                        >
                          {exp.overview}
                        </p>
                      </motion.div>

                      {/* Key Contributions Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h4 
                          className="text-[#111111] mb-4"
                          style={{
                            fontSize: '18px',
                            fontWeight: 600,
                          }}
                        >
                          Key Contributions
                        </h4>
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-l-4 border-[#6EDFA3] relative overflow-hidden">
                          {/* Background pattern */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-[#6EDFA3] opacity-5 rounded-full blur-3xl" />
                          
                          {/* Animated Gradient along the border */}
                          <motion.div
                            className="absolute left-0 top-0 w-1 bg-gradient-to-b from-[#6EDFA3] via-[#6EDFA3] to-transparent"
                            initial={{ height: 0 }}
                            animate={{ height: '100%' }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                          />

                          <ul className="space-y-4 relative z-10">
                            {exp.contributions.map((contribution, idx) => (
                              <motion.li 
                                key={idx} 
                                className="flex gap-4 group/item-detail"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.4 }}
                              >
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6EDFA3] bg-opacity-20 flex items-center justify-center mt-0.5 group-hover/item-detail:bg-opacity-30 transition-colors">
                                  <div className="w-2 h-2 rounded-full bg-[#6EDFA3]" />
                                </div>
                                <span 
                                  className="text-[#111111] flex-1"
                                  style={{ 
                                    fontSize: '16px', 
                                    fontWeight: 400,
                                    lineHeight: 1.7
                                  }}
                                >
                                  {contribution}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>

                      {/* Approach Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h4 
                          className="text-[#111111] mb-4"
                          style={{
                            fontSize: '18px',
                            fontWeight: 600,
                          }}
                        >
                          How I Approach the Work
                        </h4>
                        <div className="space-y-4 max-w-3xl">
                          {exp.approach.map((paragraph, idx) => (
                            <motion.p
                              key={idx}
                              className="text-[#666666]"
                              style={{
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: 1.6,
                              }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1, duration: 0.4 }}
                            >
                              {paragraph}
                            </motion.p>
                          ))}
                        </div>
                      </motion.div>

                      {/* Case Study Section */}
                      {exp.caseStudyLink && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <h4 
                            className="text-[#111111] mb-4"
                            style={{
                              fontSize: '18px',
                              fontWeight: 600,
                            }}
                          >
                            Case Study
                          </h4>
                          <motion.a 
                            href="mailto:whoispoppe@gmail.com" 
                            className="inline-flex items-center gap-2 px-5 py-3 bg-white border-2 border-[#111111] text-[#111111] rounded-lg hover:bg-[#111111] hover:text-white transition-all duration-300 group/link relative overflow-hidden"
                            style={{ 
                              fontSize: '15px', 
                              fontWeight: 600 
                            }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="absolute inset-0 bg-[#6EDFA3] transform translate-y-full group-hover/link:translate-y-0 transition-transform duration-300" />
                            <ExternalLink className="w-4 h-4 relative z-10 group-hover/link:rotate-45 transition-transform duration-300" />
                            <span className="relative z-10">{exp.caseStudyLink}</span>
                          </motion.a>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          );
        })}
      </Accordion.Root>
    </section>
  );
}
