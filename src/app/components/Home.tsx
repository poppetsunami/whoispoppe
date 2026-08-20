import { Hero } from "./Hero";
import { WhatIDo } from "./WhatIDo";
import { ImpactHighlights } from "./ImpactHighlights";
import { AIAndEmergingTechnology } from "./AIAndEmergingTechnology";
import { SelectedWork } from "./SelectedWork";
import { SystemsWorkedIn } from "./SystemsWorkedIn";
import { SystemsApproach } from "./SystemsApproach";
import { Experience } from "./Experience";
import { CommunityLeadership } from "./CommunityLeadership";
import { CaseStudyAccess } from "./CaseStudyAccess";
import { Footer } from "./Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Hero />
      <WhatIDo />
      <ImpactHighlights />
      <AIAndEmergingTechnology />
      <SelectedWork />
      <SystemsWorkedIn />
      <SystemsApproach />
      <Experience />
      <div id="about">
        <CommunityLeadership />
      </div>
      <CaseStudyAccess />
      <Footer />
    </div>
  );
}
