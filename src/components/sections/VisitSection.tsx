import { outletLocations } from "@/data/locations";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { OutletCard } from "@/components/locations/OutletCard";
import { DeliveryPanel } from "@/components/ui/DeliveryPanel";

export function VisitSection() {
  return (
    <section id="visit" aria-label="Visit our outlets" className="bg-[#F5EBDD] py-20 md:py-28 border-b border-[#C5A66B]/25">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="section-kicker">Come say hello</div>
            <h2 className="font-cormorant font-bold text-[clamp(34px,4.5vw,56px)] leading-[1.05] text-[#21120F] m-0">
              Find Your KoffeeMan
            </h2>
            <p className="text-sm md:text-base text-[#75452F] leading-relaxed max-w-[500px] mt-2 mb-0">
              Visit us in Netaji Subhash Place (NSP), Pitampura. Two spots to fuel your day.
            </p>
          </div>
          <div className="text-right">
            <span className="eyebrow">{siteConfig.logoTagline}</span>
            <div className="text-xs text-[#8F7466] italic mt-1 font-lora">
              &ldquo;On the way, to give you energy.&rdquo;
            </div>
          </div>
        </div>

        {/* 2 Outlet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {outletLocations.map((outlet) => (
            <OutletCard key={outlet.id} outlet={outlet} />
          ))}
        </div>

        {/* Delivery Callout Panel */}
        <DeliveryPanel />
      </Container>
    </section>
  );
}
