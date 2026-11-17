import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { MenuSection } from "@/components/sections/MenuSection";
import { SignatureCravings } from "@/components/sections/SignatureCravings";
import { FounderStory } from "@/components/sections/FounderStory";
import { LifestyleSection } from "@/components/sections/LifestyleSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { FranchiseSection } from "@/components/sections/FranchiseSection";
import { VisitSection } from "@/components/sections/VisitSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { BrandJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.brandName} — Coffee Shop & Café in NSP, Pitampura`,
  description:
    "Welcome to KoffeeMan in Netaji Subhash Place (NSP), Pitampura, Delhi. Enjoy handcrafted beaten coffee, cold brews, creamy shakes, momos, pasta, and grilled sandwiches.",
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export default function Home() {
  return (
    <>
      <BrandJsonLd />
      <main className="flex-1 flex flex-col">
        {/* Section 1: Cinematic Hero */}
        <Hero />

        {/* Section 2: Trust Strip & Editorial Brand Statement */}
        <TrustStrip />
        <BrandStatement />

        {/* Section 3: Interactive Menu Explorer & Grid */}
        <MenuSection />

        {/* Section 4: Signature Cravings Showcase */}
        <SignatureCravings />

        {/* Section 5: Founder Story & Milestones */}
        <FounderStory />

        {/* Section 6: Brand Lifestyle & Café Culture */}
        <LifestyleSection />

        {/* Section 7: Events and Celebrations */}
        <EventsSection />

        {/* Section 8: Franchise Experience */}
        <FranchiseSection />

        {/* Section 9: Our NSP Outlets */}
        <VisitSection />

        {/* Section 10: Instagram Showcase */}
        <InstagramSection />
      </main>
    </>
  );
}
