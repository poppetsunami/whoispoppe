import { ChevronDown } from "lucide-react";

export const portfolioCardClassName =
  "group/card relative overflow-hidden rounded-2xl border border-[#222222] bg-white shadow-[0_8px_0_#d9d9d9,0_14px_28px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_0_#6EDFA3,0_18px_34px_rgba(0,0,0,0.14)]";

export function PortfolioCardAccent() {
  return <div className="h-1.5 bg-[#6EDFA3]" aria-hidden="true" />;
}

export function AccordionExploreRow({ label }: { label: string }) {
  return (
    <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4">
      <span className="text-xs font-bold text-[#111111]">{label}</span>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111111] text-[#6EDFA3] transition-colors group-hover:bg-[#222222]">
        <ChevronDown className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" aria-hidden="true" />
      </span>
    </div>
  );
}
