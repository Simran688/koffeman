import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { galleryImages } from "@/data/images";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

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
          <span className="text-[#392929] font-medium">Gallery</span>
        </nav>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div>
            <div className="section-kicker">Visual moments</div>
            <h1 className="font-bree text-[clamp(34px,4.5vw,52px)] leading-[1.08] tracking-[-0.025em] text-[#392929] m-0">
              Café & Food Gallery
            </h1>
            <p className="text-[14px] text-[#866D5B] leading-[1.7] max-w-[500px] mt-2 mb-0">
              A peek into the KoffeeMan vibe. Delicious sips, comfort bites, and relaxed café hours.
            </p>
          </div>

          <Button
            variant="gold"
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow {siteConfig.contact.instagramHandle} ↗
          </Button>
        </div>

        {/* Illustrative Disclaimer Note */}
        <div className="mb-8 p-4 rounded-[11px] bg-[#FFF8EE] border border-[#D9C4A5] text-[11px] text-[#866D5B] flex items-center gap-2">
          <span aria-hidden="true" className="text-[#D6B66C] text-sm font-bold">
            ✦
          </span>
          <span>
            Visual preview: Illustrative photography displayed while our original KoffeeMan outlet and menu photos are being finalized.
          </span>
        </div>

        {/* 8-Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className="relative h-[260px] max-sm:h-[200px] rounded-[13px] overflow-hidden border border-[#D9C4A5] bg-[#FFF8EE] shadow-[0_5px_17px_rgba(57,41,41,0.04)] group"
            >
              <Image
                src={src}
                alt={`Illustrative café photograph ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}

