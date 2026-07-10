import { Hero } from "./Hero";
import { Philosophy } from "./Philosophy";
import { ImpactHighlights } from "./ImpactHighlights";
import { Experience } from "./Experience";
import { SystemsApproach } from "./SystemsApproach";
import { CoreValues } from "./CoreValues";
import { LeadingDesign } from "./LeadingDesign";
import { CommunityLeadership } from "./CommunityLeadership";
import { CaseStudyAccess } from "./CaseStudyAccess";
import { Footer } from "./Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Hero />
      <Philosophy />
      <ImpactHighlights />
      <Experience />
      <SystemsApproach />
      <CoreValues />
      <LeadingDesign />
      <CommunityLeadership />
      <CaseStudyAccess />
      <Footer />
    </div>
  );
}