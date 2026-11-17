import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/data/images";
import { Container } from "@/components/ui/Container";

export function LifestyleSection() {
  const images = galleryImages;

  return (
    <section
      id="lifestyle"
      aria-label="Brand lifestyle experience"
      className="py-20 md:py-28 bg-[#F5EBDD] text-[#21120F] border-b border-[#C5A66B]/25 overflow-hidden"
    >
      <Container>
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div>
            <div className="section-kicker">Café Culture</div>
            <h2 className="font-cormorant font-bold text-[clamp(34px,4.5vw,56px)] leading-[1.04] text-[#21120F] m-0">
              MORE THAN A COFFEE BREAK.
              <br />
              <span className="text-[#B87943]">IT&apos;S A VIBE.</span>
            </h2>
            <p className="text-sm md:text-base text-[#75452F] leading-relaxed max-w-[520px] mt-2 mb-0">
              From morning pick-me-ups to late-evening conversations, experience a warm space crafted for genuine café lifestyle.
            </p>
          </div>
          <Link
            href="/gallery"
            className="btn btn-dark !py-3 !px-6 text-xs font-bold uppercase tracking-wider"
          >
            View Full Gallery →
          </Link>
        </div>

        {/* Editorial Photo Collage Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Tile 1: Large Featured Left */}
          <div className="col-span-2 row-span-2 relative h-[360px] md:h-[460px] rounded-[20px] overflow-hidden shadow-[0_16px_36px_rgba(33,18,15,0.12)] border border-[#C5A66B]/30 group">
            <Image
              src={images[0]}
              alt="Café lifestyle moments at KoffeeMan"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#21120F]/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C5A66B] block">
                Café Atmosphere
              </span>
              <span className="font-cormorant font-bold text-xl md:text-2xl text-[#FFFDF8]">
                Coffee Moments & Good Energy
              </span>
            </div>
          </div>

          {/* Tile 2: Top Mid-Right */}
          <div className="relative h-[175px] md:h-[218px] rounded-[18px] overflow-hidden shadow-sm border border-[#C5A66B]/30 group">
            <Image
              src={images[1]}
              alt="Friends hanging out over coffee"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#21120F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Tile 3: Top Far-Right */}
          <div className="relative h-[175px] md:h-[218px] rounded-[18px] overflow-hidden shadow-sm border border-[#C5A66B]/30 group">
            <Image
              src={images[2]}
              alt="Freshly served café bites"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#21120F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Tile 4: Bottom Mid-Right */}
          <div className="relative h-[175px] md:h-[218px] rounded-[18px] overflow-hidden shadow-sm border border-[#C5A66B]/30 group">
            <Image
              src={images[3]}
              alt="Refreshing cold brews and drinks"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#21120F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Tile 5: Bottom Far-Right */}
          <div className="relative h-[175px] md:h-[218px] rounded-[18px] overflow-hidden shadow-sm border border-[#C5A66B]/30 group">
            <Image
              src={images[4]}
              alt="Everyday celebrations at KoffeeMan"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#21120F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Subtitle Caption */}
        <div className="mt-8 text-center text-[11px] text-[#8F7466]">
          ✦ Illustrative café lifestyle preview · Replaceable with authentic KoffeeMan guest photography
        </div>
      </Container>
    </section>
  );
}

