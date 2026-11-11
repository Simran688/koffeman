import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { MenuGrid } from "@/components/menu/MenuGrid";

export const metadata: Metadata = {
  title: `Menu — Coffee, Shakes, Momos, Pasta & Quick Bites | KoffeeMan NSP`,
  description:
    "Explore the complete KoffeeMan menu in Netaji Subhash Place (NSP), Pitampura. Cold coffee, thick shakes, steamed momos, grilled sandwiches, and comfort pasta.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/menu`,
  },
};

export default function MenuPage() {
  return (
    <main className="min-h-[80vh] py-8 md:py-14 bg-[#F4E4CA]">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-[11px] text-[#866D5B] mb-6">
          <Link
            href="/"
            className="text-[#7F5738] font-bold hover:text-[#C84B36] transition-colors"
          >
            ← Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#392929] font-medium">Menu</span>
        </nav>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
            <div className="section-kicker">Find your favourite</div>
            <h1 className="font-bree text-[clamp(34px,4vw,52px)] leading-[1.05] tracking-[-0.025em] text-[#392929] m-0">
              Our Complete Menu
            </h1>
            <p className="text-[14px] text-[#866D5B] leading-[1.7] max-w-[500px] mt-2 mb-0">
              Pick a craving. Select any category card to view every item in that selection.
            </p>
          </div>
          <span className="eyebrow">{siteConfig.supportingLine}</span>
        </div>

        {/* Category Grid */}
        <MenuGrid />
      </Container>
    </main>
  );
}

