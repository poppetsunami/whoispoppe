import { ArrowLeft, ArrowRight, Check, Mail, ShieldCheck, Sparkles, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const discoverySignals = [
  "Evidence and rationale were fragmented across many tools.",
  "Teams repeatedly reconstructed project context before new work.",
  "Designers could not reliably trace features back to evidence or decisions.",
  "Generic AI summaries could omit nuance or express unsupported certainty.",
  "New information could contradict earlier assumptions without a visible change history.",
  "Existing research was difficult to retrieve, connect, and reuse.",
];

const workflow = [
  { step: "01", title: "Prepare with context", detail: "Start from an approved context pack, project history, research goals, and known constraints." },
  { step: "02", title: "Assist during the work", detail: "Support the researcher without replacing facilitation, interpretation, or judgment." },
  { step: "03", title: "Analyze with evidence", detail: "Classify observations, interpretations, decisions, actions, assumptions, and open questions." },
  { step: "04", title: "Review with an expert", detail: "Accept, revise, reject, merge, or defer every consequential proposed change." },
  { step: "05", title: "Act and remember", detail: "Update versioned project memory and reuse approved evidence in later requirements, designs, and decisions." },
];

const decisions = [
  { title: "Continuity, not capture", text: "Integrate mature recording, transcription, and repository tools instead of rebuilding them." },
  { title: "The project as the primary object", text: "Connect interviews, workshops, requirements, decisions, and designs to shared project memory." },
  { title: "Human-reviewed interpretation", text: "Generated analysis never silently becomes accepted truth; experts inspect the evidence and decide." },
  { title: "Justified confidence", text: "Help people understand what is known, why it is believed, what changed, and what remains unresolved." },
  { title: "Responsible boundaries", text: "Exclude facial-expression scoring, personality inference, and hidden-emotion analysis." },
];

const mvpSteps = [
  "Create or open a project and add approved sources.",
  "Generate a living brief from the current project context.",
  "Import a new transcript or research session.",
  "Classify observations, interpretations, decisions, actions, and questions.",
  "Place proposed changes in an expert review queue.",
  "Accept, revise, reject, merge, or defer each change.",
  "Update versioned project memory.",
  "Reuse approved evidence in later work.",
];

const nonGoals = ["A proprietary recording platform", "A full repository replacement", "Autonomous research facilitation", "Live emotion or personality inference", "Enterprise-scale infrastructure", "Commercialization before validation"];

const gates = [
  { title: "Continue", text: "The reviewed-memory workflow creates distinct, repeatable value." },
  { title: "Pivot", text: "The problem is real, but this intervention is not the right one." },
  { title: "Buy or configure", text: "Existing products sufficiently address the need." },
  { title: "Pause", text: "Governance, sponsorship, data, or capacity is not ready." },
  { title: "Stop", text: "The evidence does not justify further investment." },
];

const outputs = ["Unified product vision and positioning", "Evidence-backed researcher and designer personas", "Prepare-to-remember capability model", "Build, buy, and integrate boundary", "Outcome-based roadmap", "Focused project-memory MVP", "PRD with requirements, non-goals, risks, and success criteria", "30-day product and delivery plan", "Governance and decision-rights model", "Responsible-AI position grounded in provenance and expert review"];

export function ResearchIntelligence() {
  useEffect(() => {
    document.title = "From Research Practice to Intelligence System | Who Is Poppe";
    return () => {
      document.title = "Poppe — Product & Experience Strategist · Research Leader";
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#F7F7F7] text-[#111111]">
      <header className="bg-[#111111] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#6EDFA3] opacity-15 blur-3xl" />
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-12 relative">
          <a href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-[#6EDFA3] transition-colors mb-16"><ArrowLeft className="h-4 w-4" /> Back to portfolio</a>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl pb-16 md:pb-24">
            <p className="text-[#6EDFA3] text-xs font-bold uppercase tracking-[0.14em] mb-5">Product Strategy · UX Research · AI Product Discovery · 2026</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-[-0.035em] mb-7">From Research Practice to Intelligence System</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl">Designing trustworthy project memory for evidence, decisions, and responsible AI</p>
          </motion.div>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <p className="text-xl md:text-2xl leading-relaxed mb-8">Research and design teams were producing valuable evidence across interviews, workshops, transcripts, requirements, designs, tickets, and shared drives. The problem was not a lack of information. It was a lack of continuity.</p>
        <blockquote className="border-l-4 border-[#6EDFA3] pl-6 py-2 text-2xl md:text-3xl font-semibold leading-snug">The opportunity was not to create more summaries. It was to maintain a trustworthy, evolving understanding of the project.</blockquote>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16 md:pb-24 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div><p className="text-[#6EDFA3] text-xs font-bold uppercase tracking-[0.12em] mb-3">My Role</p><h2 className="text-3xl font-semibold">Research lead, product strategist, and builder</h2></div>
        <div className="grid sm:grid-cols-2 gap-3">{["Research and stakeholder synthesis", "Jobs to be done and personas", "Product vision and value proposition", "Competitive and build-versus-buy analysis", "MVP and non-goal definition", "Product requirements and pilot criteria", "Roadmap and operating model", "Provenance and responsible-AI boundaries"].map((item) => <div key={item} className="bg-white border border-gray-200 rounded-xl p-4 flex gap-3"><Check className="h-5 w-5 text-[#6EDFA3] shrink-0" /><span className="text-sm leading-relaxed">{item}</span></div>)}</div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6"><h2 className="text-3xl md:text-4xl font-semibold mb-4">What We Discovered</h2><p className="text-[#666666] text-lg max-w-3xl mb-10">The recurring pain was not capture. It was the loss of context between research, interpretation, decisions, requirements, and design.</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{discoverySignals.map((signal, index) => <article key={signal} className="bg-[#F7F7F7] rounded-xl p-6"><span className="text-[#6EDFA3] text-xs font-bold">0{index + 1}</span><p className="mt-4 leading-relaxed">{signal}</p></article>)}</div></div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl mb-12"><p className="text-[#6EDFA3] text-xs font-bold uppercase tracking-[0.12em] mb-3">The Reframe</p><h2 className="text-3xl md:text-4xl font-semibold mb-4">One continuous evidence workflow</h2><p className="text-[#666666] text-lg leading-relaxed">The product became an intelligence layer connecting existing systems—not a replacement for the tools teams already used.</p></div>
        <div className="grid md:grid-cols-5 gap-3">{workflow.map((item) => <article key={item.title} className="bg-[#111111] text-white rounded-2xl p-5"><span className="text-[#6EDFA3] text-xs font-bold">{item.step}</span><h3 className="font-bold text-lg mt-4 mb-3">{item.title}</h3><p className="text-gray-300 text-sm leading-relaxed">{item.detail}</p></article>)}</div>
      </section>

      <section className="bg-[#111111] text-white py-16 md:py-24"><div className="max-w-6xl mx-auto px-6"><h2 className="text-3xl md:text-4xl font-semibold mb-10">Strategic Product Decisions</h2><div className="grid md:grid-cols-2 gap-4">{decisions.map((decision) => <article key={decision.title} className="border border-white/15 rounded-2xl p-6"><ShieldCheck className="h-6 w-6 text-[#6EDFA3] mb-4" /><h3 className="font-bold text-xl mb-2">{decision.title}</h3><p className="text-gray-300 leading-relaxed">{decision.text}</p></article>)}</div></div></section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24"><div className="grid lg:grid-cols-2 gap-10"><div><p className="text-[#6EDFA3] text-xs font-bold uppercase tracking-[0.12em] mb-3">MVP</p><h2 className="text-3xl md:text-4xl font-semibold mb-6">The First Testable Loop</h2><ol className="space-y-3">{mvpSteps.map((step, index) => <li key={step} className="flex gap-4 bg-white rounded-xl border border-gray-200 p-4"><span className="text-[#6EDFA3] font-bold">{index + 1}</span><span>{step}</span></li>)}</ol></div><aside className="bg-white border-2 border-[#111111] rounded-2xl p-7 h-fit"><div className="flex items-center gap-3 mb-5"><X className="h-6 w-6 text-[#6EDFA3]" /><h3 className="text-2xl font-semibold">What the MVP Would Not Do</h3></div><ul className="space-y-3">{nonGoals.map((item) => <li key={item} className="text-[#666666] flex gap-3"><span aria-hidden="true">—</span>{item}</li>)}</ul></aside></div></section>

      <section className="bg-white py-16 md:py-24"><div className="max-w-6xl mx-auto px-6"><h2 className="text-3xl md:text-4xl font-semibold mb-4">Making the Work Decidable</h2><p className="text-[#666666] text-lg max-w-3xl mb-10">A successful prototype demonstration is not the same as a successful product experiment. Pilot targets remain validation criteria rather than realized results.</p><div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">{gates.map((gate) => <article key={gate.title} className="bg-[#F7F7F7] rounded-xl p-5"><h3 className="font-bold mb-2">{gate.title}</h3><p className="text-[#666666] text-sm leading-relaxed">{gate.text}</p></article>)}</div></div></section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24"><div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10"><div><p className="text-[#6EDFA3] text-xs font-bold uppercase tracking-[0.12em] mb-3">Outcomes</p><h2 className="text-3xl md:text-4xl font-semibold mb-5">From promising features to a coherent product strategy</h2><p className="text-[#666666] leading-relaxed">The meaningful outcome was strategic clarity: what problem to solve, for whom, which capabilities to own, what not to build, and what evidence would justify continued investment.</p></div><div className="grid sm:grid-cols-2 gap-3">{outputs.map((output) => <div key={output} className="bg-white rounded-xl border border-gray-200 p-4 flex gap-3"><Sparkles className="h-5 w-5 text-[#6EDFA3] shrink-0" /><span className="text-sm">{output}</span></div>)}</div></div></section>

      <section className="bg-[#111111] text-white py-16 md:py-24"><div className="max-w-5xl mx-auto px-6"><h2 className="text-3xl md:text-4xl font-semibold mb-10">What I Learned</h2><div className="grid md:grid-cols-2 gap-5">{[{title:"AI products need judgment architecture",text:"Trust comes from how evidence is classified, cited, reviewed, corrected, approved, and reused."},{title:"Product strategy is partly a refusal strategy",text:"Choosing what not to build protected the product boundary and focused investment on differentiated value."},{title:"Synthesis can be organizational",text:"Teams need to understand who holds knowledge, who made decisions, and how evidence should travel."},{title:"Research must remain connected to delivery",text:"Evidence creates value when its relationship to requirements, designs, and decisions stays visible."}].map((lesson) => <article key={lesson.title} className="border-l-4 border-[#6EDFA3] pl-5 py-2"><h3 className="font-bold text-xl mb-2">{lesson.title}</h3><p className="text-gray-300 leading-relaxed">{lesson.text}</p></article>)}</div></div></section>

      <footer className="max-w-5xl mx-auto px-6 py-16 text-center"><h2 className="text-3xl font-semibold mb-4">Working through a complex product or research system?</h2><p className="text-[#666666] mb-7">I’d be glad to compare notes.</p><a href="mailto:whoispoppe@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-[#111111] text-white px-6 py-3 font-semibold hover:bg-[#6EDFA3] hover:text-[#111111] transition-colors"><Mail className="h-4 w-4" /> Get in touch <ArrowRight className="h-4 w-4" /></a></footer>
    </main>
  );
}
