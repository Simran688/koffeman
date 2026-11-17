import { Container } from "@/components/ui/Container";

const TRUST_POINTS = [
  "Coffee with character",
  "Something for every craving",
  "Your NSP neighbourhood spot",
  "Gather, celebrate, repeat",
] as const;

export function TrustStrip() {
  return (
    <section
      aria-label="KoffeeMan brand qualities"
      className="bg-[#321D17] py-4 md:py-5 border-y border-[#C5A66B]/25 text-[#F5EBDD]"
    >
      <Container className="flex justify-between items-center gap-6 max-sm:justify-center max-sm:gap-x-6 max-sm:gap-y-3 flex-wrap">
        {TRUST_POINTS.map((point) => (
          <div
            key={point}
            className="flex items-center text-[12px] max-sm:text-[10px] text-[#F5EBDD] font-bold tracking-[0.06em]"
          >
            <span aria-hidden="true" className="text-[#C5A66B] text-[16px] mr-2.5">
              ✦
            </span>
            {point}
          </div>
        ))}
      </Container>
    </section>
  );
}
