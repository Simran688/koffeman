import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FounderStory } from "@/components/sections/FounderStory";
import { MenuSection } from "@/components/sections/MenuSection";
import { FranchiseSection } from "@/components/sections/FranchiseSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { VisitSection } from "@/components/sections/VisitSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { BrandJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.brandName} — Coffee Shop & Café in NSP, Pitampura`,
  description:
    "Welcome to KoffeeMan in Netaji Subhash Place (NSP), Pitampura, Delhi. Enjoy handcrafted coffee, cold brews, creamy shakes, momos, pasta, and grilled sandwiches.",
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export default function Home() {
  return (
    <>
      <BrandJsonLd />
      <main className="flex-1 flex flex-col">
        <Hero />
        <TrustStrip />
        <FounderStory />
        <MenuSection />
        <FranchiseSection />
        <EventsSection />
        <VisitSection />
        <InstagramSection />
      </main>
    </>
  );
}
