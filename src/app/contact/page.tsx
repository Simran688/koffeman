import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { outletLocations } from "@/data/locations";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

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
          <span className="text-[#392929] font-medium">Contact Us</span>
        </nav>

        {/* Section Heading */}
        <div className="mb-10">
          <div className="section-kicker">We&apos;re here for you</div>
          <h1 className="font-bree text-[clamp(34px,4.5vw,52px)] leading-[1.08] tracking-[-0.025em] text-[#392929] m-0">
            Contact KoffeeMan
          </h1>
          <p className="text-[14px] text-[#866D5B] leading-[1.7] max-w-[520px] mt-2 mb-0">
            Call us directly for queries, takeaway, franchise discussions, or event bookings.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {/* Primary Phone */}
          <article className="bg-[#FFF8EE] border border-[#D9C4A5] p-6 rounded-[14px] flex flex-col justify-between shadow-[0_5px_17px_rgba(57,41,41,0.04)]">
            <div>
              <div aria-hidden="true" className="text-[26px] text-[#7F5738] mb-3">
                ☎
              </div>
              <h2 className="font-bree text-[20px] text-[#392929] m-0 mb-1">
                Primary Phone
              </h2>
              <p className="text-[12px] text-[#866D5B] m-0 mb-4 leading-relaxed">
                For general enquiries, franchise questions, and celebration bookings.
              </p>
            </div>
            <Button
              variant="dark"
              href={siteConfig.contact.primaryPhoneTel}
              aria-label={`Call ${siteConfig.contact.primaryPhone}`}
            >
              Call {siteConfig.contact.primaryPhone}
            </Button>
          </article>

          {/* Secondary Phone */}
          <article className="bg-[#FFF8EE] border border-[#D9C4A5] p-6 rounded-[14px] flex flex-col justify-between shadow-[0_5px_17px_rgba(57,41,41,0.04)]">
            <div>
              <div aria-hidden="true" className="text-[26px] text-[#7F5738] mb-3">
                📞
              </div>
              <h2 className="font-bree text-[20px] text-[#392929] m-0 mb-1">
                Secondary Phone
              </h2>
              <p className="text-[12px] text-[#866D5B] m-0 mb-4 leading-relaxed">
                Alternative direct line for customer assistance and quick calls.
              </p>
            </div>
            <Button
              variant="outline"
              href={siteConfig.contact.secondaryPhoneTel}
              aria-label={`Call ${siteConfig.contact.secondaryPhone}`}
            >
              Call {siteConfig.contact.secondaryPhone}
            </Button>
          </article>

          {/* Instagram */}
          <article className="bg-[#FFF8EE] border border-[#D9C4A5] p-6 rounded-[14px] flex flex-col justify-between shadow-[0_5px_17px_rgba(57,41,41,0.04)]">
            <div>
              <div aria-hidden="true" className="text-[26px] text-[#7F5738] mb-3">
                ✦
              </div>
              <h2 className="font-bree text-[20px] text-[#392929] m-0 mb-1">
                Instagram
              </h2>
              <p className="text-[12px] text-[#866D5B] m-0 mb-4 leading-relaxed">
                Follow our latest updates, vibes, and café moments.
              </p>
            </div>
            <Button
              variant="gold"
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow KoffeeMan on Instagram"
            >
              Follow {siteConfig.contact.instagramHandle} ↗
            </Button>
          </article>
        </div>

        {/* Outlets Overview */}
        <div className="bg-[#FFF8EE] border border-[#D9C4A5] p-6 md:p-8 rounded-[16px]">
          <h2 className="font-bree text-[24px] text-[#392929] m-0 mb-2">
            Our Outlets in NSP, Pitampura
          </h2>
          <p className="text-[13px] text-[#866D5B] m-0 mb-6">
            Visit us in person at Netaji Subhash Place.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {outletLocations.map((outlet) => (
              <div
                key={outlet.id}
                className="p-5 border border-[#D9C4A5] rounded-[11px] bg-[#FBF1E4]"
              >
                <h3 className="font-bree text-[18px] text-[#7F5738] m-0 mb-1">
                  {outlet.name}
                </h3>
                <p className="text-[12px] text-[#866D5B] m-0 mb-3">
                  {outlet.address}
                </p>
                <a
                  href={outlet.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#7F5738] border-b border-[#D6B66C] pb-0.5 hover:text-[#C84B36] transition-colors"
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

