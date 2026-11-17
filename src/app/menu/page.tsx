import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { MenuGrid } from "@/components/menu/MenuGrid";
import { DeliveryPanel } from "@/components/ui/DeliveryPanel";

export const metadata: Metadata = {
  title: `Menu — Coffee, Shakes, Momos, Pasta & Quick Bites | KoffeeMan NSP`,
  description:
    "Explore the complete KoffeeMan menu in Netaji Subhash Place (NSP), Pitampura. Handcrafted beaten coffee, thick shakes, steamed momos, grilled sandwiches, and comfort pasta.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/menu`,
  },
};

function MenuHero() {
  return (
    <div className="mb-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#75452F] mb-6 font-semibold">
        <Link
          href="/"
          className="text-[#B87943] hover:text-[#21120F] transition-colors"
        >
          ← Home
        </Link>
        <span className="mx-2 text-[#C5A66B]">/</span>
        <span className="text-[#21120F]">Menu</span>
      </nav>

      {/* Section Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 border-b border-[#C5A66B]/25">
        <div>
          <div className="section-kicker">Find your favourite</div>
          <h1 className="font-cormorant font-bold text-[clamp(36px,4.5vw,58px)] leading-[1.02] tracking-[-0.025em] text-[#21120F] m-0">
            Our Complete Menu
          </h1>
          <p className="text-sm md:text-base text-[#75452F] leading-relaxed max-w-[560px] mt-2 mb-0">
            Pick a craving. Select any category card to view every item in that selection. From signature beaten coffee to street-style momos and toasted grilled sandwiches.
          </p>
        </div>
        <span className="eyebrow">{siteConfig.supportingLine}</span>
      </div>

      {/* Authentic Coffee Accuracy Note */}
      <div className="mt-8 p-4 rounded-[14px] bg-[#FFFDF8] border border-[#C5A66B]/40 text-xs text-[#553628] flex items-center gap-3 shadow-sm">
        <span className="text-[#C5A66B] font-bold text-lg">✦</span>
        <span>
          <strong>Authentic Coffee Preparation:</strong> KoffeeMan specializes in handcrafted traditional beaten coffee, hot brews, and chilled cold coffee. Zero machine espresso — pure handcrafted flavour.
        </span>
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <main className="min-h-[80vh] py-10 md:py-16 bg-[#F5EBDD]">
      <Container>
        <MenuHero />

        {/* Category Grid */}
        <div className="mb-16">
          <MenuGrid />
        </div>

        {/* Bottom Delivery Callout */}
        <DeliveryPanel />
      </Container>
    </main>
  );
}
