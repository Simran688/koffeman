import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { storyImages } from "@/data/images";
import { Container } from "@/components/ui/Container";

const TIMELINE_STEPS = [
  {
    step: "01",
    phase: "The Beginning",
    title: "A Roadside Coffee Van",
    description: "Starting with a mobile van, brewing fresh coffee and connecting with people one cup at a time.",
  },
  {
    step: "02",
    phase: "The Vision",
    title: "Quality & Wide Variety",
    description: "A steadfast focus on premium quality coffee beans and a welcoming menu for every kind of craving.",
  },
  {
    step: "03",
    phase: "2022 Milestone",
    title: "Our First Franchise",
    description: "Taking an important step forward in 2022 by opening the first official KoffeeMan franchise.",
  },
  {
    step: "04",
    phase: "Today & Beyond",
    title: "Growing Coffee Culture",
    description: "Expanding our café presence across NSP Pitampura with vibrant spaces and unforgettable flavours.",
  },
] as const;

export function FounderStory() {
  const { founder } = siteConfig;

  return (
    <section
      id="story"
      aria-label="Founder story"
      className="bg-[#21120F] text-[#FFFDF8] py-20 md:py-28 relative overflow-hidden border-b border-[#C5A66B]/25"
    >
      {/* Cinematic Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/3 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(197,166,107,0.12)_0%,rgba(33,18,15,0)_70%)] pointer-events-none blur-3xl"
      />

      <Container className="relative z-10">
        {/* Top Story Header & Personal Note */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center mb-16">
          <div>
            <div className="text-[11px] font-bold tracking-[0.24em] text-[#C5A66B] uppercase mb-3">
              {founder.kicker}
            </div>
            <h2 className="font-cormorant font-bold text-[clamp(34px,4.5vw,56px)] leading-[1.05] text-[#F5EBDD] m-0 mb-4">
              {founder.heading}
            </h2>
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A66B] mb-6">
              FROM A ROADSIDE DREAM TO A GROWING COFFEE CULTURE.
            </div>

            <div className="text-sm md:text-base leading-[1.85] text-[#D8C5B8] flex flex-col gap-4 font-dmsans">
              {founder.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature Block */}
            <div className="font-lora italic font-semibold text-[22px] md:text-[26px] text-[#C5A66B] mt-8 leading-snug">
              {founder.signOff}
              <br />
              <span className="text-[#FFFDF8]">{founder.signature}</span>
            </div>
          </div>

          {/* Photo Showcase with Gold Badge */}
          <div className="relative">
            <div className="relative w-full h-[400px] sm:h-[460px] rounded-[22px] overflow-hidden shadow-[0_24px_55px_rgba(0,0,0,0.5)] border-4 border-[#321D17]">
              <Image
                src={storyImages.founder}
                alt="A warm coffee moment at KoffeeMan"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21120F]/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Gold Photo Badge */}
            <div className="absolute -left-4 sm:-left-6 bottom-6 bg-[#C5A66B] px-5 py-4 rounded-xl text-[#21120F] font-cormorant font-bold text-[17px] sm:text-[19px] max-w-[260px] shadow-[0_16px_36px_rgba(0,0,0,0.4)] leading-snug border border-[#FFFDF8]/30 select-none">
              {founder.photoTag}
            </div>
          </div>
        </div>

        {/* Visual Brand Journey Timeline */}
        <div className="pt-12 border-t border-[#C5A66B]/20">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#C5A66B] block mb-2">
              Our Journey
            </span>
            <h3 className="font-cormorant font-bold text-[28px] md:text-[36px] text-[#F5EBDD] m-0">
              The KoffeeMan Milestone Timeline
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE_STEPS.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-[16px] bg-[#321D17] border border-[#C5A66B]/25 flex flex-col justify-between transition-all duration-300 hover:border-[#C5A66B]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-cormorant font-bold text-[28px] text-[#C5A66B] leading-none">
                      {item.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#21120F] text-[#D8C5B8] border border-[#C5A66B]/30 font-semibold">
                      {item.phase}
                    </span>
                  </div>
                  <h4 className="font-cormorant font-bold text-[20px] text-[#FFFDF8] m-0 mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#D8C5B8] leading-relaxed m-0">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
