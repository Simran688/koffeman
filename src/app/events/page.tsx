import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { eventsData } from "@/data/events";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `KoffeeMan Event Bookings & Catering Enquiry — Delhi`,
  description:
    "Book KoffeeMan for your celebrations. Coffee and snack setups for weddings, private parties, corporate events, and college fests in Delhi. Enquire now.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/events`,
  },
};

export default function EventsPage() {
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
          <span className="text-[#392929] font-medium">Events</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-[#EAD8BD] border border-[#D9C4A5] rounded-[18px] p-8 md:p-12 mb-8 shadow-[0_16px_42px_rgba(57,41,41,0.06)]">
          <div className="max-w-2xl">
            <div className="section-kicker">{eventsData.kicker}</div>
            <h1 className="font-bree text-[clamp(34px,4.5vw,52px)] leading-[1.08] tracking-[-0.025em] text-[#392929] m-0">
              {eventsData.title}
            </h1>
            <p className="text-[14px] text-[#5f4a3b] leading-[1.8] my-5">
              {eventsData.copy}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                variant="dark"
                href={siteConfig.contact.primaryPhoneTel}
                aria-label={`Call to enquire about event bookings at ${siteConfig.contact.primaryPhone}`}
              >
                {eventsData.ctaText}
              </Button>
              <span className="text-[11px] text-[#866D5B]">
                {eventsData.subtext}
              </span>
            </div>
          </div>
        </div>

        {/* 5 Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {eventsData.items.map((event) => (
            <article
              key={event.id}
              className="bg-[#FFF8EE] border border-[#D9C4A5] p-6 rounded-[14px] flex flex-col justify-between shadow-[0_5px_17px_rgba(57,41,41,0.04)]"
            >
              <div>
                <div
                  aria-hidden="true"
                  className="text-[28px] text-[#7F5738] mb-3 leading-none"
                >
                  {event.icon}
                </div>
                <h2 className="font-bree text-[20px] text-[#392929] m-0 mb-2">
                  {event.title}
                </h2>
                <p className="text-[12px] leading-[1.6] text-[#866D5B] m-0">
                  {event.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#D9C4A5]/40">
                <Button
                  variant="outline"
                  href={siteConfig.contact.primaryPhoneTel}
                  className="w-full text-center"
                  aria-label={`Enquire about ${event.title} bookings`}
                >
                  Enquire for {event.title}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}

