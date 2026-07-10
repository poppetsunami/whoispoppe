import imgImagePoppeLogo from "figma:asset/c96c222c7f0b5cbd3a8693feb4d11ab12fb668f7.png";

function Button() {
  return (
    <div className="absolute bg-[#85ff66] h-[40px] left-[163.5px] rounded-[4px] top-[32px] w-[186.977px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Poppins:SemiBold',sans-serif] leading-[24px] left-[93.5px] not-italic text-[16px] text-black text-center top-[8.5px] whitespace-nowrap">Download as PDF</p>
    </div>
  );
}

function ImagePoppeLogo() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Image (Poppe Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePoppeLogo} />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[648px]" data-name="Heading 1">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#0a0a0a] text-[30px] top-px tracking-[-0.75px] whitespace-nowrap">{`Stephanie "Poppe" Poppe`}</p>
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[#85ff66] h-[8px] left-0 opacity-40 top-[12px] w-[344.266px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="absolute h-[20px] left-0 top-[41px] w-[344.266px]" data-name="Container">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 whitespace-nowrap">Senior Product Designer — Operational Platforms</p>
      <Container4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[69px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading />
        <Container3 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[24px] h-[69px] items-start relative shrink-0 w-full" data-name="Container">
      <ImagePoppeLogo />
      <Container2 />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[119px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[32px] px-[40px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[16px] left-[14.94px] top-0 w-[88.758px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] whitespace-nowrap">Indianapolis, IN</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[16px] left-[14.94px] top-0 w-[148.914px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] whitespace-nowrap">whoispoppe@gmail.com</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[16px] left-[14.94px] top-0 w-[80.617px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] whitespace-nowrap">812-783-9826</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[16px] left-[14.94px] top-0 w-[134.453px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] whitespace-nowrap">www.whoispoppe.com</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[90px] items-start left-0 top-[29.5px] w-[214px]" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-[#85ff66] h-[4px] left-0 opacity-50 top-[12px] w-[63.977px]" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="absolute h-[16px] left-0 top-[5.5px] w-[63.977px]" data-name="Heading 2">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] tracking-[0.6px] uppercase whitespace-nowrap">Contact</p>
      <Container11 />
    </div>
  );
}

function Section() {
  return (
    <div className="h-[119.5px] relative shrink-0 w-full" data-name="Section">
      <Container6 />
      <Heading1 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-white h-[24px] left-0 rounded-[4px] top-0 w-[106.688px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[#0a0a0a] text-[12px] top-[4.5px] whitespace-nowrap">Product Design</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-white h-[24px] left-0 rounded-[4px] top-[30px] w-[159.773px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[#0a0a0a] text-[12px] top-[4.5px] whitespace-nowrap">Operational Systems UX</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-white h-[24px] left-0 rounded-[4px] top-[60px] w-[114.609px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[#0a0a0a] text-[12px] top-[4.5px] whitespace-nowrap">Workflow Design</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-white h-[24px] left-0 rounded-[4px] top-[90px] w-[135.68px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[#0a0a0a] text-[12px] top-[4.5px] whitespace-nowrap">Enterprise Platforms</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-white h-[24px] left-0 rounded-[4px] top-[120px] w-[110.633px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[#0a0a0a] text-[12px] top-[4.5px] whitespace-nowrap">Design Systems</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-white h-[24px] left-0 rounded-[4px] top-[150px] w-[214px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[#0a0a0a] text-[12px] top-[4.5px] whitespace-nowrap">UX Strategy</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute bg-white h-[24px] left-0 rounded-[4px] top-[180px] w-[167.109px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[#0a0a0a] text-[12px] top-[4.5px] whitespace-nowrap">Human-Centered Design</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-white h-[24px] left-0 rounded-[4px] top-[210px] w-[204.227px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[#0a0a0a] text-[12px] top-[4.5px] whitespace-nowrap">Cross-Functional Collaboration</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-white h-[24px] left-0 rounded-[4px] top-[240px] w-[144.453px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[#0a0a0a] text-[12px] top-[4.5px] whitespace-nowrap">Workshop Facilitation</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute bg-white h-[24px] left-0 rounded-[4px] top-[270px] w-[129.438px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[#0a0a0a] text-[12px] top-[4.5px] whitespace-nowrap">Agile Development</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute bg-white h-[24px] left-0 rounded-[4px] top-[300px] w-[137.992px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[#0a0a0a] text-[12px] top-[4.5px] whitespace-nowrap">{`Figma & Prototyping`}</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[324px] left-0 top-[29.5px] w-[214px]" data-name="Container">
      <Text8 />
      <Text9 />
      <Text10 />
      <Text11 />
      <Text12 />
      <Text13 />
      <Text14 />
      <Text15 />
      <Text16 />
      <Text17 />
      <Text18 />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-[#85ff66] h-[4px] left-0 opacity-50 top-[12px] w-[80.148px]" data-name="Container" />;
}

function Heading2() {
  return (
    <div className="absolute h-[16px] left-0 top-[5.5px] w-[80.148px]" data-name="Heading 2">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] tracking-[0.6px] uppercase whitespace-nowrap">Core Skills</p>
      <Container13 />
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[353.5px] relative shrink-0 w-full" data-name="Section">
      <Container12 />
      <Heading2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] w-[202px]">MS Human Computer Interaction Design</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-[0.5px] whitespace-nowrap">Indiana University</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] w-[205px]">{`BA Linguistics & French Language & Literature`}</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-[0.5px] whitespace-nowrap">Purdue University</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[104px] items-start left-0 top-[29.5px] w-[214px]" data-name="Container">
      <Container15 />
      <Container18 />
    </div>
  );
}

function Container21() {
  return <div className="absolute bg-[#85ff66] h-[4px] left-0 opacity-50 top-[12px] w-[76.156px]" data-name="Container" />;
}

function Heading3() {
  return (
    <div className="absolute h-[16px] left-0 top-[5.5px] w-[76.156px]" data-name="Heading 2">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] tracking-[0.6px] uppercase whitespace-nowrap">Education</p>
      <Container21 />
    </div>
  );
}

function Section2() {
  return (
    <div className="h-[133.5px] relative shrink-0 w-full" data-name="Section">
      <Container14 />
      <Heading3 />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute h-[32px] left-[14.94px] top-0 w-[199.063px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] w-[180px]">LUMA Certified Design Thinking Practitioner</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text19 />
      <Text20 />
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute h-[32px] left-[14.94px] top-0 w-[199.063px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] w-[138px]">Systemic Design Toolkit Practitioner</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text21 />
      <Text22 />
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute h-[16px] left-[14.94px] top-0 w-[169.406px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] whitespace-nowrap">Product Thinking for Net Zero</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <Text23 />
      <Text24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[90px] items-start left-0 top-[29.5px] w-[214px]" data-name="Container">
      <Container23 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-[#85ff66] h-[4px] left-0 opacity-50 top-[12px] w-[107.055px]" data-name="Container" />;
}

function Heading4() {
  return (
    <div className="absolute h-[16px] left-0 top-[5.5px] w-[107.055px]" data-name="Heading 2">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] tracking-[0.6px] uppercase whitespace-nowrap">Certifications</p>
      <Container26 />
    </div>
  );
}

function Section3() {
  return (
    <div className="h-[119.5px] relative shrink-0 w-full" data-name="Section">
      <Container22 />
      <Heading4 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] whitespace-nowrap">{`Founder & Executive Director`}</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-[0.5px] whitespace-nowrap">Indy Design Week</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] whitespace-nowrap">2018–2023</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] whitespace-nowrap">Co-Founder / Local Leader</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-[0.5px] whitespace-nowrap">IxDA Indianapolis</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] whitespace-nowrap">2017–2024</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] whitespace-nowrap">Co-Founder</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-[0.5px] w-[193px]">Kroger Environmental Conscious Outcomes ERG</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] whitespace-nowrap">2022–2024</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[172px] items-start left-0 top-[29.5px] w-[214px]" data-name="Container">
      <Container28 />
      <Container32 />
      <Container36 />
    </div>
  );
}

function Container40() {
  return <div className="absolute bg-[#85ff66] h-[4px] left-0 opacity-50 top-[12px] w-[77.281px]" data-name="Container" />;
}

function Heading5() {
  return (
    <div className="absolute h-[16px] left-0 top-[5.5px] w-[77.281px]" data-name="Heading 2">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] tracking-[0.6px] uppercase whitespace-nowrap">Leadership</p>
      <Container40 />
    </div>
  );
}

function Section4() {
  return (
    <div className="h-[201.5px] relative shrink-0 w-full" data-name="Section">
      <Container27 />
      <Heading5 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-[rgba(245,241,232,0.3)] h-[1248.5px] relative shrink-0 w-[280px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pl-[40px] pr-[26px] pt-[24px] relative size-full">
        <Section />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[58.5px] left-0 top-[31px] w-[464px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[0] left-0 not-italic text-[#0a0a0a] text-[0px] text-[12px] top-[0.5px] w-[453px]">
        <span className="leading-[19.5px]">{`Senior Product Designer with `}</span>
        <span className="font-['Poppins:SemiBold',sans-serif] leading-[19.5px]">12+ years of experience</span>
        <span className="leading-[19.5px]">{` improving the systems people rely on to do their jobs across retail operations, enterprise software, and regulated clinical research platforms.`}</span>
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[78px] left-0 top-[95.5px] w-[464px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[0] left-0 not-italic text-[#0a0a0a] text-[0px] text-[12px] top-[0.5px] w-[450px]">
        <span className="leading-[19.5px]">{`Specializes in translating `}</span>
        <span className="font-['Poppins:Light_Italic',sans-serif] italic leading-[19.5px]">fragmented operational workflows</span>
        <span className="leading-[19.5px]">{` and `}</span>
        <span className="font-['Poppins:Light_Italic',sans-serif] italic leading-[19.5px]">complex data environments</span>
        <span className="leading-[19.5px]">{` into cohesive, scalable product experiences. Known for defining interaction models, aligning cross-functional teams, and delivering measurable business impact through human-centered design.`}</span>
      </p>
    </div>
  );
}

function Container41() {
  return <div className="absolute bg-[#85ff66] h-[6px] left-0 opacity-50 top-[14px] w-[77.93px]" data-name="Container" />;
}

function Heading6() {
  return (
    <div className="absolute h-[20px] left-0 top-[3px] w-[77.93px]" data-name="Heading 2">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 tracking-[0.7px] uppercase whitespace-nowrap">Summary</p>
      <Container41 />
    </div>
  );
}

function Section5() {
  return (
    <div className="h-[173.5px] relative shrink-0 w-full" data-name="Section">
      <Paragraph />
      <Paragraph1 />
      <Heading6 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[154.156px]" data-name="Heading 3">
      <p className="font-['Poppins:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Principal UX Designer</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute h-[16px] left-[349.85px] top-[2.5px] w-[114.148px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] whitespace-nowrap">Mar 2025 – Present</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[464px]" data-name="Container">
      <Heading7 />
      <Text25 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[16px] left-0 top-[22px] w-[464px]" data-name="Container">
      <p className="absolute font-['Poppins:Medium_Italic',sans-serif] italic leading-[16px] left-0 text-[#0a0a0a] text-[12px] top-[0.5px] whitespace-nowrap">KAMP Technologies</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[32px] left-0 top-[44px] w-[464px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#364153] text-[12px] top-[0.5px] w-[464px]">Lead product design for a connected platform integrating machine telemetry, fleet monitoring, and operational analytics.</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute h-[32px] left-[14.94px] top-0 w-[449.063px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] w-[417px]">Define interaction models translating complex machine telemetry into actionable operational insights</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="List Item">
      <Text26 />
      <Text27 />
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute h-[32px] left-[14.94px] top-0 w-[449.063px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] w-[421px]">Designed scalable dashboards and reporting workflows for equipment fleet management</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="List Item">
      <Text28 />
      <Text29 />
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute h-[32px] left-[14.94px] top-0 w-[449.063px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] w-[392px]">Established foundational design patterns and UI architecture for a connected product platform</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="List Item">
      <Text30 />
      <Text31 />
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute h-[32px] left-[14.94px] top-0 w-[449.063px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] w-[408px]">Partner with product and engineering leadership to align UX strategy across new platform capabilities</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="List Item">
      <Text32 />
      <Text33 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[134px] items-start left-0 top-[82px] w-[464px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute border-[#e5e7eb] border-b border-solid h-[229px] left-0 top-[31px] w-[464px]" data-name="Container">
      <Container43 />
      <Container44 />
      <Paragraph2 />
      <List />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[212.063px]" data-name="Heading 3">
      <p className="font-['Poppins:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Lead UX Designer (Part-time)</p>
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute h-[16px] left-[351.05px] top-[2.5px] w-[112.945px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] whitespace-nowrap">Jun 2025 – Present</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[464px]" data-name="Container">
      <Heading8 />
      <Text34 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[16px] left-0 top-[22px] w-[464px]" data-name="Container">
      <p className="absolute font-['Poppins:Medium_Italic',sans-serif] italic leading-[16px] left-0 text-[#0a0a0a] text-[12px] top-[0.5px] whitespace-nowrap">Moral</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[32px] left-0 top-[44px] w-[464px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#364153] text-[12px] top-[0.5px] w-[461px]">Lead UX research and design strategy for complex regulated pharmaceutical platforms supporting clinical trial operations.</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute h-[32px] left-[14.94px] top-0 w-[449.063px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] w-[440px]">Partner with Fortune 100 and Fortune 500 pharmaceutical organizations to improve systems used by research and operations teams</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="List Item">
      <Text35 />
      <Text36 />
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute h-[32px] left-[14.94px] top-0 w-[449.063px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] w-[441px]">Lead UX research, workflow design, and product strategy across regulated enterprise environments</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="List Item">
      <Text37 />
      <Text38 />
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text40() {
  return (
    <div className="absolute h-[32px] left-[14.94px] top-0 w-[449.063px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] w-[398px]">Facilitate stakeholder workshops, design critiques, and prioritization sessions aligning product, engineering, and clinical teams</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="List Item">
      <Text39 />
      <Text40 />
    </div>
  );
}

function Text41() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute h-[32px] left-[14.94px] top-0 w-[449.063px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] w-[442px]">Navigate complex stakeholder environments to deliver cohesive UX across fragmented systems</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="List Item">
      <Text41 />
      <Text42 />
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[134px] items-start left-0 top-[82px] w-[464px]" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute border-[#e5e7eb] border-b border-solid h-[229px] left-0 top-[272px] w-[464px]" data-name="Container">
      <Container46 />
      <Container47 />
      <Paragraph3 />
      <List1 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[249.555px]" data-name="Heading 3">
      <p className="font-['Poppins:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Senior Horizontal Product Designer</p>
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute h-[16px] left-[341.3px] top-[2.5px] w-[122.695px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] whitespace-nowrap">Jun 2022 – Mar 2025</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[464px]" data-name="Container">
      <Heading9 />
      <Text43 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[16px] left-0 top-[22px] w-[464px]" data-name="Container">
      <p className="absolute font-['Poppins:Medium_Italic',sans-serif] italic leading-[16px] left-0 text-[#0a0a0a] text-[12px] top-[0.5px] whitespace-nowrap">{`Kroger Technology & Digital`}</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[32px] left-0 top-[44px] w-[464px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#364153] text-[12px] top-[0.5px] w-[388px]">Product design lead for operational systems across supply chain, warehousing, and store fulfillment.</p>
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute h-[32px] left-[14.94px] top-0 w-[449.063px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[0] left-0 not-italic text-[#0a0a0a] text-[0px] text-[12px] top-[0.5px] w-[437px]">
        <span className="leading-[16px]">{`Led design of Pick Up Fulfillment workflows across 2,500 stores, generating `}</span>
        <span className="font-['Poppins:Bold',sans-serif] leading-[16px]">~$6M labor savings</span>
        <span className="leading-[16px]">{` and improving pick speed 15%`}</span>
      </p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="List Item">
      <Text44 />
      <Text45 />
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text47() {
  return (
    <div className="absolute h-[32px] left-[14.94px] top-0 w-[449.063px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] w-[442px]">Designed replacement for a 25-year-old warehouse claims platform used across 60+ distribution facilities</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="List Item">
      <Text46 />
      <Text47 />
    </div>
  );
}

function Text48() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text49() {
  return (
    <div className="absolute h-[32px] left-[14.94px] top-0 w-[449.063px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] w-[415px]">Delivered MVP in 6 months improving efficiency by ~1 hour of labor per claim (~160k claims annually)</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="List Item">
      <Text48 />
      <Text49 />
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute h-[32px] left-[14.94px] top-0 w-[449.063px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] w-[418px]">Collaborated with 9 product teams to align workflows and UX patterns across enterprise systems</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="List Item">
      <Text50 />
      <Text51 />
    </div>
  );
}

function List2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[134px] items-start left-0 top-[82px] w-[464px]" data-name="List">
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute border-[#e5e7eb] border-b border-solid h-[229px] left-0 top-[513px] w-[464px]" data-name="Container">
      <Container49 />
      <Container50 />
      <Paragraph4 />
      <List2 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[135.828px]" data-name="Heading 3">
      <p className="font-['Poppins:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Senior UX Designer</p>
    </div>
  );
}

function Text52() {
  return (
    <div className="absolute h-[16px] left-[339.24px] top-[2.5px] w-[124.758px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] whitespace-nowrap">May 2021 – May 2022</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[464px]" data-name="Container">
      <Heading10 />
      <Text52 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[16px] left-0 top-[22px] w-[464px]" data-name="Container">
      <p className="absolute font-['Poppins:Medium_Italic',sans-serif] italic leading-[16px] left-0 text-[#0a0a0a] text-[12px] top-[0.5px] whitespace-nowrap">YourCause (Blackbaud)</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[32px] left-0 top-[44px] w-[464px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#364153] text-[12px] top-[0.5px] w-[414px]">Lead UX design and research for CSR software used by 600 enterprise organizations.</p>
    </div>
  );
}

function Text53() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text54() {
  return (
    <div className="absolute h-[32px] left-[14.94px] top-0 w-[449.063px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[0] left-0 not-italic text-[#0a0a0a] text-[0px] text-[12px] top-[0.5px] w-[398px]">
        <span className="leading-[16px]">{`Reduced site setup and page management time by `}</span>
        <span className="font-['Poppins:Bold',sans-serif] leading-[16px]">~20%</span>
        <span className="leading-[16px]">{` through redesigned workflows and improved UX patterns`}</span>
      </p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="absolute h-[32px] left-0 top-[82px] w-[464px]" data-name="List Item">
      <Text53 />
      <Text54 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute border-[#e5e7eb] border-b border-solid h-[127px] left-0 top-[754px] w-[464px]" data-name="Container">
      <Container52 />
      <Container53 />
      <Paragraph5 />
      <ListItem12 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[195.961px]" data-name="Heading 3">
      <p className="font-['Poppins:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">Senior Interaction Designer</p>
    </div>
  );
}

function Text55() {
  return (
    <div className="absolute h-[16px] left-[345.75px] top-[2.5px] w-[118.25px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] whitespace-nowrap">Oct 2018 – May 2021</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[464px]" data-name="Container">
      <Heading11 />
      <Text55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[16px] left-0 top-[22px] w-[464px]" data-name="Container">
      <p className="absolute font-['Poppins:Medium_Italic',sans-serif] italic leading-[16px] left-0 text-[#0a0a0a] text-[12px] top-[0.5px] whitespace-nowrap">Software Engineering Professionals (SEP)</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[32px] left-0 top-[44px] w-[464px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#364153] text-[12px] top-[0.5px] w-[422px]">Consulted on UX strategy and interaction design across enterprise and consumer products.</p>
    </div>
  );
}

function Text56() {
  return (
    <div className="absolute h-[16px] left-0 top-[2px] w-[6.938px]" data-name="Text">
      <p className="absolute font-['Poppins:Light','Noto_Sans:Light',sans-serif] leading-[16px] left-0 text-[12px] text-black top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300" }}>
        ●
      </p>
    </div>
  );
}

function Text57() {
  return (
    <div className="absolute h-[32px] left-[14.94px] top-0 w-[449.063px]" data-name="Text">
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] top-[0.5px] w-[403px]">Led discovery and interaction design for complex systems including machine diagnostics tools supporting 2,000+ service shops</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="absolute h-[32px] left-0 top-[82px] w-[464px]" data-name="List Item">
      <Text56 />
      <Text57 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[114px] left-0 top-[893px] w-[464px]" data-name="Container">
      <Container55 />
      <Container56 />
      <Paragraph6 />
      <ListItem13 />
    </div>
  );
}

function Container57() {
  return <div className="absolute bg-[#85ff66] h-[6px] left-0 opacity-50 top-[14px] w-[90.5px]" data-name="Container" />;
}

function Heading12() {
  return (
    <div className="absolute h-[20px] left-0 top-[3px] w-[90.5px]" data-name="Heading 2">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 tracking-[0.7px] uppercase whitespace-nowrap">Experience</p>
      <Container57 />
    </div>
  );
}

function Section6() {
  return (
    <div className="h-[1007px] relative shrink-0 w-full" data-name="Section">
      <Container42 />
      <Container45 />
      <Container48 />
      <Container51 />
      <Container54 />
      <Heading12 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-[1_0_0] h-[1248.5px] min-h-px min-w-px relative" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pl-[32px] pr-[40px] pt-[24px] relative size-full">
        <Section5 />
        <Section6 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[1248.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1367.5px] items-start left-[163.5px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[88px] w-[816px]" data-name="Container">
      <Header />
      <Container5 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#f5f1e8] h-[1487.5px] relative shrink-0 w-full" data-name="App">
      <Container />
    </div>
  );
}

export default function PoppeResume() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Poppe Resume">
      <App />
    </div>
  );
}