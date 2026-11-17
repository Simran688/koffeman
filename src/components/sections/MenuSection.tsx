import { Container } from "@/components/ui/Container";
import { MenuGrid } from "@/components/menu/MenuGrid";
import { InteractiveMenuExplorer } from "@/components/menu/InteractiveMenuExplorer";

export function MenuSection() {
  return (
    <section id="menu" aria-label="Our Menu" className="bg-[#F5EBDD] py-20 md:py-28 border-b border-[#C5A66B]/25">
      <Container>
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="section-kicker">Find your favourite</div>
            <h2 className="font-cormorant font-bold text-[clamp(34px,4.2vw,54px)] leading-[1.05] tracking-[-0.025em] text-[#21120F] m-0">
              Explore Our Menu
            </h2>
            <p className="text-sm md:text-base text-[#75452F] leading-[1.7] max-w-[500px] mt-2 mb-0">
              Pick a craving. Explore featured categories below or browse every selection crafted for comfort and flavour.
            </p>
          </div>
          <span className="eyebrow">One spot · Endless cravings</span>
        </div>

        {/* Section 3: Interactive Category-Based Menu Explorer */}
        <InteractiveMenuExplorer />

        {/* All Categories Grid */}
        <div className="mt-8">
          <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#75452F] mb-6">
            All 7 Menu Categories:
          </div>
          <MenuGrid />
        </div>
      </Container>
    </section>
  );
}
