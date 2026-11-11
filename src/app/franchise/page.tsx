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
          <span className="text-[#392929] font-medium">Franchise</span>
        </nav>

        {/* Main Franchise Container Card */}
        <div className="bg-[#392929] text-[#FFF8EE] rounded-[18px] p-8 md:p-14 relative overflow-hidden shadow-[0_16px_42px_rgba(57,41,41,0.12)]">
          <span
            aria-hidden="true"
            className="absolute -right-5 -top-36 font-bree text-[500px] text-[#D6B66C]/5 select-none pointer-events-none leading-none"
          >
            K
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 max-lg:gap-8 items-center relative z-10">
            <div>
              <div className="section-kicker text-[#D6B66C]">
                {franchiseData.kicker}
              </div>
              <h1 className="font-bree text-[clamp(34px,4.5vw,52px)] leading-[1.08] tracking-[-0.025em] text-[#F4E4CA] m-0">
                {franchiseData.title}
              </h1>
              <p className="text-[14px] leading-[1.8] text-[#f1e4d7] my-6 max-w-[560px]">
                {franchiseData.copy}
              </p>

              <div>
                <Button
                  variant="gold"
                  href={siteConfig.contact.primaryPhoneTel}
                  aria-label={`Call franchise team at ${siteConfig.contact.primaryPhone}`}
                >
                  {franchiseData.ctaText}
                </Button>
              </div>

              <p className="text-[10px] text-[#c4ae98] mt-4 mb-0">
                {franchiseData.note}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {franchiseData.points.map((point) => (
                <div
                  key={point.number}
                  className="flex gap-4 items-start p-5 border border-[#D6B66C]/25 rounded-[12px] bg-[#FFF8EE]/[0.045]"
                >
                  <div
                    aria-hidden="true"
                    className="w-[31px] h-[31px] rounded-full bg-[#D6B66C] text-[#392929] grid place-items-center font-bree text-[15px] shrink-0"
                  >
                    {point.number}
                  </div>
                  <div>
                    <strong className="block font-bree text-[18px] text-[#F4E4CA] mb-1">
                      {point.title}
                    </strong>
                    <span className="text-[12px] leading-[1.6] text-[#ddcec0]">
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

