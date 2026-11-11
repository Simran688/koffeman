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
          <span className="text-[#392929] font-medium">Visit Us</span>
        </nav>

        {/* Section Heading */}
        <div className="mb-10">
          <div className="section-kicker">Come say hello</div>
          <h1 className="font-bree text-[clamp(34px,4.5vw,52px)] leading-[1.08] tracking-[-0.025em] text-[#392929] m-0">
            Find Your KoffeeMan
          </h1>
          <p className="text-[14px] text-[#866D5B] leading-[1.7] max-w-[520px] mt-2 mb-0">
            Visit us at our two NSP neighbourhood spots in Pitampura, Delhi. Grab your regular cup or sit down for comfort-food cravings.
          </p>
        </div>

        {/* Outlet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
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

