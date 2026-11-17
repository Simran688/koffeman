import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { outletLocations } from "@/data/locations";
import { Container } from "@/components/ui/Container";
import { OutletCard } from "@/components/locations/OutletCard";
import { DeliveryPanel } from "@/components/ui/DeliveryPanel";

export const metadata: Metadata = {
  title: `Café Outlets in NSP, Pitampura — ${siteConfig.brandName} Locations`,
  description:
    "Find KoffeeMan café outlets at GD-ITL Tower and Aggarwal Corporate Heights in Netaji Subhash Place (NSP), Pitampura, Delhi. Get directions, outlet info, and order online.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/visit-us`,
  },
};

export default function VisitUsPage() {
  return (
    <main className="min-h-[80vh] py-10 md:py-16 bg-[#F5EBDD]">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-[#75452F] mb-6 font-semibold">
          <Link
            href="/"
            className="text-[#B87943] hover:text-[#21120F] transition-colors"
          >
            ← Home
          </Link>
          <span className="mx-2 text-[#C5A66B]">/</span>
          <span className="text-[#21120F]">Visit Us</span>
        </nav>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 pb-8 border-b border-[#C5A66B]/25">
          <div>
            <div className="section-kicker">Come say hello</div>
            <h1 className="font-cormorant font-bold text-[clamp(36px,4.5vw,58px)] leading-[1.02] tracking-[-0.025em] text-[#21120F] m-0">
              Find Your KoffeeMan
            </h1>
            <p className="text-sm md:text-base text-[#75452F] leading-relaxed max-w-[540px] mt-2 mb-0">
              Visit us at our two NSP neighbourhood spots in Pitampura, Delhi. Grab your handcrafted beaten coffee or sit down for comfort-food cravings.
            </p>
          </div>
          <div className="text-right">
            <span className="eyebrow">{siteConfig.logoTagline}</span>
            <div className="text-xs text-[#8F7466] italic mt-1 font-lora">
              &ldquo;On the way, to give you energy.&rdquo;
            </div>
          </div>
        </div>

        {/* Outlet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {outletLocations.map((outlet) => (
            <OutletCard key={outlet.id} outlet={outlet} />
          ))}
        </div>

        {/* Delivery Options */}
        <DeliveryPanel />
      </Container>
    </main>
  );
}
