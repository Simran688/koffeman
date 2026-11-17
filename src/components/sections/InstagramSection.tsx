import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { galleryImages } from "@/data/images";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function InstagramSection() {
  const previewImages = galleryImages.slice(0, 4);

  return (
    <section
      id="instagram"
      aria-label="Instagram community"
      className="bg-[#F5EBDD] py-20 md:py-28 border-t border-[#C5A66B]/25"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="section-kicker">Follow the vibe</div>
            <h2 className="font-cormorant font-bold text-[clamp(34px,4.5vw,56px)] leading-[1.05] text-[#21120F] m-0">
              KoffeeMan on Instagram
            </h2>
            <p className="text-sm md:text-base text-[#75452F] leading-relaxed max-w-[500px] mt-2 mb-0">
              Catch our daily brew moments, new comfort cravings, and NSP neighbourhood stories.
            </p>
          </div>

          <Button
            variant="dark"
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow KoffeeMan on Instagram"
            className="!py-3.5 !px-7 text-xs font-bold uppercase tracking-wider"
          >
            Follow {siteConfig.contact.instagramHandle} ↗
          </Button>
        </div>

        {/* 4-Image Editorial Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {previewImages.map((src, idx) => (
            <a
              key={src}
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View KoffeeMan Instagram post ${idx + 1}`}
              className="group relative h-[220px] sm:h-[260px] rounded-[18px] overflow-hidden border border-[#C5A66B]/30 bg-[#FFFDF8] shadow-[0_10px_25px_rgba(33,18,15,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C5A66B] hover:shadow-[0_20px_40px_rgba(33,18,15,0.15)]"
            >
              <Image
                src={src}
                alt={`KoffeeMan café moment ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-[#21120F]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-[#FFFDF8] text-xs font-bold gap-2 p-4 text-center">
                <span>View on Instagram ↗</span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
