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
          <span className="text-[#21120F]">Events</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-[#21120F] text-[#FFFDF8] border border-[#C5A66B]/30 rounded-[22px] p-8 md:p-14 mb-10 shadow-[0_24px_55px_rgba(33,18,15,0.25)]">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#C5A66B] mb-2">
              {eventsData.kicker}
            </div>
            <h1 className="font-cormorant font-bold text-[clamp(36px,4.5vw,56px)] leading-[1.05] tracking-[-0.025em] text-[#F5EBDD] m-0 mb-3">
              {eventsData.title}
            </h1>
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A66B] mb-4">
              MAKE YOUR CELEBRATIONS TASTE BETTER.
            </div>
            <p className="text-sm md:text-base text-[#D8C5B8] leading-[1.8] my-4 font-dmsans">
              {eventsData.copy}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
              <Button
                variant="gold"
                href={siteConfig.contact.primaryPhoneTel}
                aria-label={`Call to enquire about event bookings at ${siteConfig.contact.primaryPhone}`}
                className="!py-3.5 !px-7 text-xs font-bold uppercase tracking-wider"
              >
                {eventsData.ctaText} ({siteConfig.contact.primaryPhone}) ↗
              </Button>
              <span className="text-xs text-[#C5A66B] font-medium">
                {eventsData.subtext}
              </span>
            </div>
          </div>
        </div>

        {/* 5 Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.items.map((event) => (
            <article
              key={event.id}
              className="bg-[#FFFDF8] border border-[#C5A66B]/30 p-7 rounded-[18px] flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-[#C5A66B] hover:shadow-[0_16px_36px_rgba(33,18,15,0.1)]"
            >
              <div>
                <div
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full bg-[#F5EBDD] text-[#75452F] grid place-items-center text-lg mb-4 border border-[#C5A66B]/30"
                >
                  {event.icon}
                </div>
                <h2 className="font-cormorant font-bold text-[24px] text-[#21120F] m-0 mb-2">
                  {event.title}
                </h2>
                <p className="text-xs sm:text-sm leading-relaxed text-[#75452F] m-0">
                  {event.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[#F5EBDD]">
                <Button
                  variant="outline"
                  href={siteConfig.contact.primaryPhoneTel}
                  className="w-full text-center text-xs font-bold uppercase tracking-wider !py-2.5"
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
