import { Hero } from "./Hero";
import { Philosophy } from "./Philosophy";
import { ImpactHighlights } from "./ImpactHighlights";
import { SelectedWork } from "./SelectedWork";
import { SystemsApproach } from "./SystemsApproach";
import { Experience } from "./Experience";
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
      <SelectedWork />
      <SystemsApproach />
      <Experience />
      <LeadingDesign />
      <div id="about">
        <CommunityLeadership />
      </div>
      <CaseStudyAccess />
      <Footer />
    </div>
  );
}
