import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { heroImages } from "@/data/images";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Welcome and featured highlights"
      className="relative min-h-[92vh] flex flex-col justify-center py-16 md:py-24 bg-[#21120F] text-[#FFFDF8] overflow-hidden"
    >
      {/* Cinematic Ambient Lighting Gradients */}
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(184,121,67,0.18)_0%,rgba(33,18,15,0)_70%)] pointer-events-none blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(197,166,107,0.12)_0%,rgba(33,18,15,0)_70%)] pointer-events-none blur-2xl"
      />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center my-auto">
        {/* Left Column: Cinematic Editorial Copy & CTAs */}
        <div className="flex flex-col items-start">
          {/* Eyebrow / Kicker */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#321D17] border border-[#C5A66B]/30 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#C5A66B] uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C5A66B] animate-pulse" />
            Welcome to {siteConfig.brandName} · NSP, Pitampura
          </div>

          {/* Main Headline */}
          <h1 className="font-cormorant font-bold text-[clamp(42px,5.4vw,76px)] leading-[0.98] tracking-[-0.03em] text-[#FFFDF8] m-0 mb-6">
            GOOD COFFEE.
            <br />
            <span className="text-[#C5A66B]">GREAT CRAVINGS.</span>
            <br />
            BETTER MOMENTS.
            <span className="font-lora italic font-normal text-[0.45em] block text-[#E8D4C2] tracking-normal mt-3">
              Life happens. <span className="text-[#C5A66B] font-semibold">Koffee helps.</span>
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-[15px] sm:text-[16px] text-[#D8C5B8] leading-[1.75] max-w-[540px] m-0 mb-8 font-dmsans">
            From our signature handcrafted beaten coffee to decadent shakes, hot momos, and toasted grilled sandwiches — KoffeeMan brings together rich flavours, youthful energy, and café moments worth repeating.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6">
            <Link
              href="/menu"
              className="btn btn-gold !py-3.5 !px-7 text-xs font-bold uppercase tracking-wider"
            >
              Explore Our Menu →
            </Link>
            <a
              href="#order"
              className="btn btn-outline-gold !py-3.5 !px-6 text-xs font-bold uppercase tracking-wider"
            >
              Order Now
            </a>
          </div>

          {/* Verified Delivery Partner Links */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#C5A66B]/20 w-full max-w-[520px]">
            <span className="text-[11px] uppercase tracking-wider text-[#A89285] font-semibold">
              Instant Delivery:
            </span>
            <Button
              variant="dark"
              href={siteConfig.ordering.swiggyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on Swiggy"
              className="!py-2 !px-4 text-[11px] bg-[#321D17] border border-[#C5A66B]/30 hover:border-[#C5A66B]"
            >
              Order on Swiggy ↗
            </Button>
            <Button
              variant="outline-gold"
              href={siteConfig.ordering.zomatoSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find us on Zomato"
              className="!py-2 !px-4 text-[11px]"
            >
              Find us on Zomato ↗
            </Button>
          </div>
        </div>

        {/* Right Column: Layered Editorial Visual Showcase */}
        <div className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center justify-center">
          {/* Subtle Rotating Geometric Aura */}
          <div
            aria-hidden="true"
            className="absolute inset-0 m-auto w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-[#C5A66B]/15 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 m-auto w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border border-dashed border-[#C5A66B]/20 pointer-events-none"
          />

          {/* Main Arched Editorial Food Photography */}
          <div className="relative w-[76%] h-[420px] sm:h-[480px] rounded-t-[200px] rounded-b-[24px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] border-4 border-[#C5A66B]/30 transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src={heroImages.burger}
              alt="KoffeeMan food favourite served fresh"
              fill
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 480px"
              priority
              className="object-cover"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#21120F]/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Accent Card (Coffee Imagery) */}
          <div className="absolute left-0 bottom-4 sm:bottom-6 w-[48%] h-[210px] sm:h-[230px] rounded-[18px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.6)] border-4 border-[#321D17] animate-float">
            <Image
              src={heroImages.coffee}
              alt="Freshly brewed coffee served at KoffeeMan"
              fill
              sizes="(max-width: 640px) 180px, 240px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#21120F]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-left">
              <span className="text-[9px] font-bold tracking-[0.16em] uppercase text-[#C5A66B] block">
                Signature Brew
              </span>
              <span className="font-cormorant font-bold text-sm text-[#FFFDF8]">
                Handcrafted Beaten Coffee
              </span>
            </div>
          </div>

          {/* Circular Vintage Stamp Badge */}
          <div
            aria-hidden="true"
            className="absolute -top-3 right-2 sm:right-6 w-[124px] h-[124px] sm:w-[136px] sm:h-[136px] rounded-full bg-[#321D17] text-[#C5A66B] grid place-items-center text-center font-cormorant font-bold text-[15px] sm:text-[16px] leading-[1.1] rotate-6 border-2 border-dashed border-[#C5A66B] p-3 shadow-2xl select-none pointer-events-none"
          >
            <span>
              100% Fresh
              <small className="block font-dmsans text-[8px] sm:text-[9px] tracking-[0.18em] uppercase mt-1 text-[#FFFDF8] font-semibold">
                NSP Pitampura
              </small>
            </span>
          </div>
        </div>
      </Container>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 mx-auto mt-8 flex flex-col items-center gap-2 select-none">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A66B] font-semibold">
          Scroll to explore
        </span>
        <div className="w-5 h-8 rounded-full border border-[#C5A66B]/40 flex justify-center pt-1">
          <div className="w-1 h-2 rounded-full bg-[#C5A66B] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
