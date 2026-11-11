import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { storyImages } from "@/data/images";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `About KoffeeMan — Our Story & Founder Note | Rohit Chhabra`,
  description:
    "Discover the story of KoffeeMan. Founded by Rohit Chhabra from a roadside van to our first franchise in 2022. Good Food. Good Coffee. Good Vibes in NSP, Pitampura.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/about`,
  },
};

export default function AboutPage() {
  const { founder } = siteConfig;

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
          <span className="text-[#392929] font-medium">About</span>
        </nav>

        {/* Section Heading */}
        <div className="mb-10">
          <div className="section-kicker">Our Story</div>
          <h1 className="font-bree text-[clamp(34px,4.5vw,52px)] leading-[1.08] tracking-[-0.025em] text-[#392929] m-0">
            About {siteConfig.brandName}
          </h1>
          <p className="text-[14px] text-[#866D5B] leading-[1.7] max-w-[520px] mt-2 mb-0">
            {siteConfig.slogan} · NSP, Pitampura
          </p>
        </div>

        {/* Founder Story Feature Card */}
        <div className="bg-[#392929] text-[#FFF8EE] rounded-[18px] p-8 md:p-12 mb-10 shadow-[0_16px_42px_rgba(57,41,41,0.12)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <div>
              <div className="section-kicker text-[#D6B66C]">
                {founder.kicker}
              </div>
              <h2 className="font-bree text-[28px] md:text-[38px] text-[#F4E4CA] m-0 mb-4">
                {founder.heading}
              </h2>
              <div className="text-[14px] leading-[1.9] text-[#f3e8dc] flex flex-col gap-4">
                {founder.paragraphs.map((para, i) => (
                  <p key={i} className="m-0">
                    {para}
                  </p>
                ))}
              </div>
              <div className="font-lora italic font-semibold text-[23px] text-[#D6B66C] mt-6 leading-snug">
                {founder.signOff}
                <br />
                {founder.signature}
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-[360px] md:h-[420px] rounded-[14px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
                <Image
                  src={storyImages.founder}
                  alt="A warm coffee moment at KoffeeMan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -left-4 bottom-5 bg-[#D6B66C] px-5 py-3.5 rounded text-[#392929] font-bree text-[16px] max-w-[220px] shadow-lg leading-tight">
                {founder.photoTag}
              </div>
            </div>
          </div>
        </div>

        {/* Brand Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="bg-[#FFF8EE] border border-[#D9C4A5] p-6 rounded-[14px]">
            <span aria-hidden="true" className="text-[24px] text-[#D6B66C]">
              ✦
            </span>
            <h3 className="font-bree text-[20px] text-[#392929] my-2">
              Good Food
            </h3>
            <p className="text-[12px] text-[#866D5B] m-0 leading-relaxed">
              Grilled sandwiches, loaded burgers, spicy Maggi, and Delhi street-style Chinese favourites made fresh.
            </p>
          </div>

          <div className="bg-[#FFF8EE] border border-[#D9C4A5] p-6 rounded-[14px]">
            <span aria-hidden="true" className="text-[24px] text-[#D6B66C]">
              ✦
            </span>
            <h3 className="font-bree text-[20px] text-[#392929] my-2">
              Good Coffee
            </h3>
            <p className="text-[12px] text-[#866D5B] m-0 leading-relaxed">
              From our roadside van beginnings to rich hot brews, cold blends, and signature roasts crafted with quality.
            </p>
          </div>

          <div className="bg-[#FFF8EE] border border-[#D9C4A5] p-6 rounded-[14px]">
            <span aria-hidden="true" className="text-[24px] text-[#D6B66C]">
              ✦
            </span>
            <h3 className="font-bree text-[20px] text-[#392929] my-2">
              Good Vibes
            </h3>
            <p className="text-[12px] text-[#866D5B] m-0 leading-relaxed">
              A welcoming NSP hangout for daily regulars, evening crowds, casual hangouts, and celebration bookings.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <Button variant="dark" href="/menu">
            Explore Our Menu
          </Button>
          <Button variant="outline" href="/visit-us">
            Visit Our NSP Outlets
          </Button>
        </div>
      </Container>
    </main>
  );
}

