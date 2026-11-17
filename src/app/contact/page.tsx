import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { outletLocations } from "@/data/locations";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: `Contact KoffeeMan — Café Enquiries NSP, Pitampura`,
  description:
    "Connect with KoffeeMan café. Call 9811161923 or 8700020291 for takeaway, franchise discussions, or event bookings in NSP, Pitampura, Delhi.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
  },
};

export default function ContactPage() {
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
          <span className="text-[#21120F]">Contact Us</span>
        </nav>

        {/* Section Heading */}
        <div className="mb-12 pb-8 border-b border-[#C5A66B]/25">
          <div className="section-kicker">We&apos;re here for you</div>
          <h1 className="font-cormorant font-bold text-[clamp(36px,4.5vw,58px)] leading-[1.02] tracking-[-0.025em] text-[#21120F] m-0">
            Contact KoffeeMan
          </h1>
          <p className="text-sm md:text-base text-[#75452F] leading-relaxed max-w-[540px] mt-2 mb-0">
            Call us directly for general queries, takeaway, franchise discussions, or celebration event bookings in Netaji Subhash Place, Pitampura.
          </p>
        </div>

        {/* Direct Phone & Social Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Primary Phone */}
          <article className="bg-[#FFFDF8] border border-[#C5A66B]/30 p-7 rounded-[18px] flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-[#C5A66B]">
            <div>
              <div aria-hidden="true" className="text-[26px] text-[#C5A66B] mb-3">
                ☎
              </div>
              <h2 className="font-cormorant font-bold text-[24px] text-[#21120F] m-0 mb-1">
                Primary Phone
              </h2>
              <p className="text-xs sm:text-sm text-[#75452F] m-0 mb-5 leading-relaxed">
                For general enquiries, franchise questions, and celebration bookings.
              </p>
            </div>
            <Button
              variant="dark"
              href={siteConfig.contact.primaryPhoneTel}
              aria-label={`Call ${siteConfig.contact.primaryPhone}`}
              className="!py-3 text-xs font-bold uppercase tracking-wider justify-center"
            >
              Call {siteConfig.contact.primaryPhone}
            </Button>
          </article>

          {/* Secondary Phone */}
          <article className="bg-[#FFFDF8] border border-[#C5A66B]/30 p-7 rounded-[18px] flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-[#C5A66B]">
            <div>
              <div aria-hidden="true" className="text-[26px] text-[#C5A66B] mb-3">
                📞
              </div>
              <h2 className="font-cormorant font-bold text-[24px] text-[#21120F] m-0 mb-1">
                Secondary Phone
              </h2>
              <p className="text-xs sm:text-sm text-[#75452F] m-0 mb-5 leading-relaxed">
                Alternative direct line for customer assistance and quick takeaway calls.
              </p>
            </div>
            <Button
              variant="outline"
              href={siteConfig.contact.secondaryPhoneTel}
              aria-label={`Call ${siteConfig.contact.secondaryPhone}`}
              className="!py-3 text-xs font-bold uppercase tracking-wider justify-center"
            >
              Call {siteConfig.contact.secondaryPhone}
            </Button>
          </article>

          {/* Instagram */}
          <article className="bg-[#FFFDF8] border border-[#C5A66B]/30 p-7 rounded-[18px] flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-[#C5A66B]">
            <div>
              <div aria-hidden="true" className="text-[26px] text-[#C5A66B] mb-3">
                ✦
              </div>
              <h2 className="font-cormorant font-bold text-[24px] text-[#21120F] m-0 mb-1">
                Instagram
              </h2>
              <p className="text-xs sm:text-sm text-[#75452F] m-0 mb-5 leading-relaxed">
                Follow our latest updates, daily vibes, and café moments.
              </p>
            </div>
            <Button
              variant="gold"
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow KoffeeMan on Instagram"
              className="!py-3 text-xs font-bold uppercase tracking-wider justify-center"
            >
              Follow {siteConfig.contact.instagramHandle} ↗
            </Button>
          </article>
        </div>

        {/* Functional Contact & Enquiry Form */}
        <div className="mb-14">
          <ContactForm />
        </div>

        {/* Outlets Overview */}
        <div className="bg-[#FFFDF8] border border-[#C5A66B]/30 p-7 md:p-10 rounded-[20px] shadow-sm">
          <h2 className="font-cormorant font-bold text-[28px] text-[#21120F] m-0 mb-2">
            Our Outlets in NSP, Pitampura
          </h2>
          <p className="text-xs sm:text-sm text-[#75452F] m-0 mb-6">
            Visit us in person at Netaji Subhash Place.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {outletLocations.map((outlet) => (
              <div
                key={outlet.id}
                className="p-6 border border-[#C5A66B]/25 rounded-[14px] bg-[#F5EBDD]/60 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-cormorant font-bold text-[22px] text-[#75452F] m-0 mb-1.5">
                    {outlet.name}
                  </h3>
                  <p className="text-xs text-[#75452F] m-0 mb-4 leading-relaxed">
                    {outlet.address}
                  </p>
                </div>
                <a
                  href={outlet.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#B87943] border-b border-[#C5A66B] pb-0.5 hover:text-[#21120F] transition-colors inline-block w-fit"
                >
                  Get directions on Google Maps ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
