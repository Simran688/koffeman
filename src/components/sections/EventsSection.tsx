import { siteConfig } from "@/data/site-config";
import { eventsData } from "@/data/events";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function EventsSection() {
  return (
    <section
      id="events"
      aria-label="Events and celebrations"
      className="bg-[#21120F] text-[#FFFDF8] py-20 md:py-28 relative overflow-hidden border-b border-[#C5A66B]/25"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(197,166,107,0.12)_0%,rgba(33,18,15,0)_70%)] pointer-events-none blur-3xl"
      />

      <Container className="relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div>
            <div className="text-[11px] font-bold tracking-[0.24em] text-[#C5A66B] uppercase mb-2">
              {eventsData.kicker}
            </div>
            <h2 className="font-cormorant font-bold text-[clamp(34px,4.5vw,56px)] leading-[1.05] text-[#F5EBDD] m-0 mb-3">
              {eventsData.title}
            </h2>
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A66B] mb-3">
              MAKE YOUR CELEBRATIONS TASTE BETTER.
            </div>
            <p className="text-sm md:text-base text-[#D8C5B8] leading-relaxed max-w-[540px] m-0">
              {eventsData.copy}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="gold"
              href={siteConfig.contact.primaryPhoneTel}
              aria-label="Call to Enquire · Book KoffeeMan for Your Event"
              className="!py-3.5 !px-7 text-xs font-bold uppercase tracking-wider"
            >
              {eventsData.ctaText} (9811161923) ↗
            </Button>
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.items.map((item) => (
            <article
              key={item.id}
              className="p-7 rounded-[18px] bg-[#321D17] border border-[#C5A66B]/25 flex flex-col justify-between transition-all duration-300 hover:border-[#C5A66B] hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)]"
            >
              <div>
                <div
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full bg-[#21120F] border border-[#C5A66B]/40 text-[#C5A66B] grid place-items-center text-lg mb-5"
                >
                  {item.icon}
                </div>
                <h3 className="font-cormorant font-bold text-[24px] text-[#FFFDF8] m-0 mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-[#D8C5B8] leading-relaxed m-0 mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#C5A66B]/15 flex items-center justify-between text-[11px] text-[#C5A66B] font-semibold">
                <span>Book for your gathering</span>
                <span>✦</span>
              </div>
            </article>
          ))}

          {/* Corporate & Private Celebrations Card */}
          <article className="p-7 rounded-[18px] bg-[#321D17] border border-[#C5A66B]/25 flex flex-col justify-between transition-all duration-300 hover:border-[#C5A66B] hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)]">
            <div>
              <div
                aria-hidden="true"
                className="w-10 h-10 rounded-full bg-[#21120F] border border-[#C5A66B]/40 text-[#C5A66B] grid place-items-center text-lg mb-5"
              >
                ◈
              </div>
              <h3 className="font-cormorant font-bold text-[24px] text-[#FFFDF8] m-0 mb-2 leading-tight">
                Corporate & Campus
              </h3>
              <p className="text-xs text-[#D8C5B8] leading-relaxed m-0 mb-4">
                Office gatherings, team coffee corners, festivals, and corporate celebrations.
              </p>
            </div>

            <div className="pt-4 border-t border-[#C5A66B]/15 flex items-center justify-between text-[11px] text-[#C5A66B] font-semibold">
              <span>Tailored setup</span>
              <span>✦</span>
            </div>
          </article>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center text-xs text-[#A89285]">
          Direct discussion only · Call {siteConfig.contact.primaryPhone} to check dates and requirements
        </div>
      </Container>
    </section>
  );
}
