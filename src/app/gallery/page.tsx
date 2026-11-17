import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { DeliveryPanel } from "@/components/ui/DeliveryPanel";

export const metadata: Metadata = {
  title: `Café & Food Gallery — Koffee Man NSP, Pitampura`,
  description:
    "Explore the KoffeeMan gallery. Illustrative moments of our coffee, beverages, comfort food, and café vibes in Netaji Subhash Place (NSP), Pitampura.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/gallery`,
  },
};

export default function GalleryPage() {
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
          <span className="text-[#21120F]">Gallery</span>
        </nav>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 pb-8 border-b border-[#C5A66B]/25">
          <div>
            <div className="section-kicker">Visual moments</div>
            <h1 className="font-cormorant font-bold text-[clamp(36px,4.5vw,58px)] leading-[1.02] tracking-[-0.025em] text-[#21120F] m-0">
              Café & Food Gallery
            </h1>
            <p className="text-sm md:text-base text-[#75452F] leading-relaxed max-w-[540px] mt-2 mb-0">
              A peek into the KoffeeMan vibe. Handcrafted beaten brews, dessert shakes, comfort bites, and relaxed café hours in NSP.
            </p>
          </div>

          <Button
            variant="gold"
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="!py-3 !px-6 text-xs font-bold uppercase tracking-wider shrink-0"
          >
            Follow {siteConfig.contact.instagramHandle} ↗
          </Button>
        </div>

        {/* Illustrative Disclaimer Note */}
        <div className="mb-10 p-4 rounded-[14px] bg-[#FFFDF8] border border-[#C5A66B]/40 text-xs text-[#75452F] flex items-center gap-3 shadow-sm">
          <span aria-hidden="true" className="text-[#C5A66B] text-base font-bold">
            ✦
          </span>
          <span>
            Visual preview: Illustrative photography displayed. Authentic KoffeeMan photography will replace sample files seamlessly without altering components.
          </span>
        </div>

        {/* Interactive Lightbox Gallery */}
        <div className="mb-16">
          <GalleryGrid />
        </div>

        {/* Delivery Footer */}
        <DeliveryPanel />
      </Container>
    </main>
  );
}
