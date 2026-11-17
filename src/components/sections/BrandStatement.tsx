import { Container } from "@/components/ui/Container";

export function BrandStatement() {
  return (
    <section
      id="statement"
      aria-label="Brand Philosophy"
      className="relative py-24 md:py-32 bg-[#F5EBDD] text-[#21120F] overflow-hidden border-b border-[#C5A66B]/30"
    >
      {/* Decorative Large Watermark Typography */}
      <span
        aria-hidden="true"
        className="absolute -left-10 top-1/2 -translate-y-1/2 font-cormorant font-bold text-[18vw] text-[#C5A66B]/10 select-none pointer-events-none leading-none tracking-tight whitespace-nowrap"
      >
        KOFFEEMAN
      </span>

      <Container className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        {/* Editorial Eyebrow */}
        <div className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] text-[#75452F] uppercase mb-6">
          <span className="w-8 h-[1px] bg-[#C5A66B]" />
          Our Everyday Promise
          <span className="w-8 h-[1px] bg-[#C5A66B]" />
        </div>

        {/* Dramatic Headline */}
        <h2 className="font-cormorant font-bold text-[clamp(38px,5vw,68px)] leading-[1.04] tracking-[-0.025em] text-[#21120F] m-0 mb-8 max-w-[720px]">
          ONE SPOT.
          <br />
          <span className="text-[#B87943]">ENDLESS CRAVINGS.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="font-dmsans text-[16px] md:text-[20px] text-[#553628] leading-[1.8] max-w-[700px] m-0 mb-10 font-normal">
          From your everyday coffee break to those unforgettable food cravings, KoffeeMan brings together good flavours, great energy, and moments worth repeating.
        </p>

        {/* Subtle Signature Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#FFFDF8] border border-[#C5A66B]/40 shadow-sm text-xs font-semibold text-[#75452F]">
          <span className="text-[#C5A66B]">✦</span>
          <span>Authentic Beaten Coffee · Comfort Bites · NSP, Pitampura</span>
          <span className="text-[#C5A66B]">✦</span>
        </div>
      </Container>
    </section>
  );
}
