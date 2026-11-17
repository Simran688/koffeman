import { siteConfig } from "@/data/site-config";
import { franchiseData } from "@/data/franchise";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FranchiseSection() {
  return (
    <section
      id="franchise"
      aria-label="Franchise opportunity"
      className="bg-[#21120F] text-[#FFFDF8] py-20 md:py-28 relative overflow-hidden border-b border-[#C5A66B]/25"
    >
      {/* Background Watermark Letter K */}
      <span
        aria-hidden="true"
        className="absolute -right-8 -top-36 font-cormorant font-bold text-[520px] text-[#C5A66B]/5 select-none pointer-events-none leading-none"
      >
        K
      </span>

      <Container className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center relative z-10">
        {/* Left Column: Franchise Intro */}
        <div>
          <div className="text-[11px] font-bold tracking-[0.24em] text-[#C5A66B] uppercase mb-2">
            {franchiseData.kicker}
          </div>
          <h2 className="font-cormorant font-bold text-[clamp(34px,4.5vw,56px)] leading-[1.05] text-[#F5EBDD] m-0 mb-3">
            {franchiseData.title}
          </h2>
          <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A66B] mb-4">
            BRING THE KOFFEEMAN EXPERIENCE TO YOUR CITY.
          </div>
          <p className="text-sm md:text-base leading-[1.8] text-[#D8C5B8] max-w-[580px] m-0 mb-4 font-dmsans">
            {franchiseData.copy}
          </p>
          <p className="text-sm leading-[1.8] text-[#E8D4C2] max-w-[580px] m-0 mb-8 font-medium">
            Be part of a growing coffee and food experience built around quality, variety, and great customer moments.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="gold"
              href={siteConfig.contact.primaryPhoneTel}
              aria-label="Contact Us · Get Started on Franchise"
              className="!py-3.5 !px-7 text-xs font-bold uppercase tracking-wider"
            >
              Contact Us · Get Started ↗
            </Button>
          </div>

          <p className="text-xs text-[#A89285] mt-4 mb-0">
            {franchiseData.note}
          </p>
        </div>

        {/* Right Column: Key Opportunity Highlights */}
        <div className="flex flex-col gap-4">
          {franchiseData.points.map((point) => (
            <div
              key={point.number}
              className="flex gap-4 items-start p-5 rounded-[16px] border border-[#C5A66B]/25 bg-[#321D17]/80 backdrop-blur-sm transition-all duration-300 hover:border-[#C5A66B]"
            >
              <div
                aria-hidden="true"
                className="w-10 h-10 rounded-full bg-[#C5A66B] text-[#21120F] grid place-items-center font-cormorant font-bold text-lg shrink-0 shadow-sm"
              >
                {point.number}
              </div>
              <div>
                <h3 className="font-cormorant font-bold text-[20px] text-[#FFFDF8] m-0 mb-1 leading-snug">
                  {point.title}
                </h3>
                <p className="text-xs text-[#D8C5B8] leading-relaxed m-0">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
