import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { franchiseData } from "@/data/franchise";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `KoffeeMan Franchise Enquiries & Opportunities`,
  description:
    "Partner with KoffeeMan. Bring our coffee, shakes, and comfort menu to your location. Connect with us directly for KoffeeMan franchise enquiries.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/franchise`,
  },
};

export default function FranchisePage() {
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
          <span className="text-[#21120F]">Franchise</span>
        </nav>

        {/* Main Franchise Container Card */}
        <div className="bg-[#21120F] text-[#FFFDF8] rounded-[22px] p-8 md:p-14 relative overflow-hidden shadow-[0_24px_55px_rgba(33,18,15,0.25)] border border-[#C5A66B]/30">
          <span
            aria-hidden="true"
            className="absolute -right-8 -top-36 font-cormorant font-bold text-[520px] text-[#C5A66B]/5 select-none pointer-events-none leading-none"
          >
            K
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
            <div>
              <div className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#C5A66B] mb-2">
                {franchiseData.kicker}
              </div>
              <h1 className="font-cormorant font-bold text-[clamp(36px,4.5vw,56px)] leading-[1.05] tracking-[-0.025em] text-[#F5EBDD] m-0 mb-3">
                {franchiseData.title}
              </h1>
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A66B] mb-4">
                BRING THE KOFFEEMAN EXPERIENCE TO YOUR CITY.
              </div>
              <p className="text-sm md:text-base leading-[1.8] text-[#D8C5B8] my-5 max-w-[560px] font-dmsans">
                {franchiseData.copy}
              </p>
              <p className="text-xs sm:text-sm leading-[1.8] text-[#E8D4C2] mb-7 max-w-[560px] font-medium">
                Be part of a growing coffee and food experience built around quality, variety, and great customer moments.
              </p>

              <div>
                <Button
                  variant="gold"
                  href={siteConfig.contact.primaryPhoneTel}
                  aria-label={`Call franchise team at ${siteConfig.contact.primaryPhone}`}
                  className="!py-3.5 !px-7 text-xs font-bold uppercase tracking-wider"
                >
                  {franchiseData.ctaText} ({siteConfig.contact.primaryPhone}) ↗
                </Button>
              </div>

              <p className="text-xs text-[#A89285] mt-4 mb-0">
                {franchiseData.note}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {franchiseData.points.map((point) => (
                <div
                  key={point.number}
                  className="flex gap-4 items-start p-5 rounded-[16px] border border-[#C5A66B]/25 bg-[#321D17]/80 backdrop-blur-sm"
                >
                  <div
                    aria-hidden="true"
                    className="w-10 h-10 rounded-full bg-[#C5A66B] text-[#21120F] grid place-items-center font-cormorant font-bold text-lg shrink-0"
                  >
                    {point.number}
                  </div>
                  <div>
                    <strong className="block font-cormorant font-bold text-[20px] text-[#F5EBDD] mb-1">
                      {point.title}
                    </strong>
                    <span className="text-xs leading-[1.6] text-[#D8C5B8]">
                      {point.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
