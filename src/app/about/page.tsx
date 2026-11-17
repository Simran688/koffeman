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

const TIMELINE_STEPS = [
  {
    step: "01",
    phase: "The Beginning",
    title: "A Roadside Coffee Van",
    description: "Brewing fresh beaten coffee and taking the dream to people one cup at a time from a roadside van.",
  },
  {
    step: "02",
    phase: "The Vision",
    title: "Quality & Choices",
    description: "Building an expansive menu around premium quality coffee, delicious shakes, and savoury comfort food.",
  },
  {
    step: "03",
    phase: "2022 Milestone",
    title: "First Franchise",
    description: "Marking our expansion with the opening of our first franchise in 2022.",
  },
  {
    step: "04",
    phase: "Today",
    title: "NSP Café Hangouts",
    description: "Growing into a vibrant café destination in Netaji Subhash Place, Pitampura.",
  },
] as const;

export default function AboutPage() {
  const { founder } = siteConfig;

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
          <span className="text-[#21120F]">About</span>
        </nav>

        {/* Section Heading */}
        <div className="mb-12 pb-8 border-b border-[#C5A66B]/25">
          <div className="section-kicker">Our Story</div>
          <h1 className="font-cormorant font-bold text-[clamp(36px,4.5vw,58px)] leading-[1.02] tracking-[-0.025em] text-[#21120F] m-0">
            About {siteConfig.brandName}
          </h1>
          <p className="text-sm md:text-base text-[#75452F] leading-relaxed max-w-[560px] mt-2 mb-0 font-medium">
            {siteConfig.slogan} · NSP, Pitampura
          </p>
        </div>

        {/* Founder Story Feature Card */}
        <div className="bg-[#21120F] text-[#FFFDF8] rounded-[22px] p-8 md:p-14 mb-14 shadow-[0_24px_55px_rgba(33,18,15,0.25)] border border-[#C5A66B]/30">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#C5A66B] mb-2">
                {founder.kicker}
              </div>
              <h2 className="font-cormorant font-bold text-[32px] sm:text-[42px] text-[#F5EBDD] m-0 mb-4 leading-tight">
                {founder.heading}
              </h2>
              <div className="text-sm md:text-base leading-[1.85] text-[#D8C5B8] flex flex-col gap-4 font-dmsans">
                {founder.paragraphs.map((para, i) => (
                  <p key={i} className="m-0">
                    {para}
                  </p>
                ))}
              </div>
              <div className="font-lora italic font-semibold text-[24px] text-[#C5A66B] mt-8 leading-snug">
                {founder.signOff}
                <br />
                <span className="text-[#FFFDF8]">{founder.signature}</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-[360px] md:h-[440px] rounded-[18px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.5)] border-4 border-[#321D17]">
                <Image
                  src={storyImages.founder}
                  alt="A warm coffee moment at KoffeeMan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#21120F]/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute -left-4 sm:-left-6 bottom-6 bg-[#C5A66B] px-5 py-3.5 rounded-xl text-[#21120F] font-cormorant font-bold text-[17px] max-w-[240px] shadow-xl leading-snug border border-[#FFFDF8]/30">
                {founder.photoTag}
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="mb-14">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#75452F] block mb-1">
              Historical Milestones
            </span>
            <h2 className="font-cormorant font-bold text-[30px] md:text-[38px] text-[#21120F] m-0">
              From Roadside Van to Growing Culture
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE_STEPS.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-[16px] bg-[#FFFDF8] border border-[#C5A66B]/30 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-cormorant font-bold text-[28px] text-[#C5A66B] leading-none">
                      {item.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F5EBDD] text-[#75452F] font-semibold">
                      {item.phase}
                    </span>
                  </div>
                  <h3 className="font-cormorant font-bold text-[20px] text-[#21120F] m-0 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#75452F] leading-relaxed m-0">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#FFFDF8] border border-[#C5A66B]/30 p-7 rounded-[18px] shadow-sm">
            <span aria-hidden="true" className="text-[26px] text-[#C5A66B] block mb-2">
              ✦
            </span>
            <h3 className="font-cormorant font-bold text-[24px] text-[#21120F] m-0 mb-2">
              Good Food
            </h3>
            <p className="text-xs sm:text-sm text-[#75452F] m-0 leading-relaxed">
              Grilled sandwiches, loaded burgers, spicy Maggi, and Delhi street-style Chinese favourites made fresh to order.
            </p>
          </div>

          <div className="bg-[#FFFDF8] border border-[#C5A66B]/30 p-7 rounded-[18px] shadow-sm">
            <span aria-hidden="true" className="text-[26px] text-[#C5A66B] block mb-2">
              ✦
            </span>
            <h3 className="font-cormorant font-bold text-[24px] text-[#21120F] m-0 mb-2">
              Good Coffee
            </h3>
            <p className="text-xs sm:text-sm text-[#75452F] m-0 leading-relaxed">
              From our roadside van beginnings to rich beaten hot coffee, chilled blends, and signature roasts crafted with quality.
            </p>
          </div>

          <div className="bg-[#FFFDF8] border border-[#C5A66B]/30 p-7 rounded-[18px] shadow-sm">
            <span aria-hidden="true" className="text-[26px] text-[#C5A66B] block mb-2">
              ✦
            </span>
            <h3 className="font-cormorant font-bold text-[24px] text-[#21120F] m-0 mb-2">
              Good Vibes
            </h3>
            <p className="text-xs sm:text-sm text-[#75452F] m-0 leading-relaxed">
              A welcoming NSP hangout for daily regulars, evening crowds, casual hangouts, and celebration bookings.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-[#C5A66B]/25">
          <Button variant="dark" href="/menu">
            Explore Our Menu →
          </Button>
          <Button variant="outline" href="/visit-us">
            Visit Our NSP Outlets
          </Button>
          <Button variant="gold" href={siteConfig.contact.primaryPhoneTel}>
            Call Founder Team: {siteConfig.contact.primaryPhone}
          </Button>
        </div>
      </Container>
    </main>
  );
}
