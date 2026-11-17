import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { outletLocations } from "@/data/locations";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-[#21120F] text-[#FFFDF8] pt-16 pb-8 mt-auto border-t border-[#C5A66B]/25">
      <Container>
        {/* Top Closing Statement / Callout */}
        <div className="pb-12 border-b border-[#C5A66B]/20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="text-[11px] font-bold tracking-[0.22em] text-[#C5A66B] uppercase mb-2">
              The KoffeeMan Experience
            </div>
            <h2 className="font-cormorant font-bold text-[clamp(36px,4.5vw,56px)] leading-[1.02] text-[#F5EBDD] m-0">
              TASTE THE VIBE.
              <br />
              <span className="text-[#C5A66B]">LOVE THE BREW.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="btn btn-gold !py-3 !px-6 text-xs font-bold"
            >
              Explore Menu
            </Link>
            <a
              href={siteConfig.ordering.swiggyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-gold !py-3 !px-6 text-xs font-bold"
            >
              Order Now ↗
            </a>
            <Link
              href="/contact"
              className="btn btn-dark !py-3 !px-6 text-xs font-bold border border-[#C5A66B]/40"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Multi-Column Editorial Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12 border-b border-[#C5A66B]/15 text-sm">
          {/* Brand & Identity */}
          <div className="md:col-span-1">
            <div className="font-cormorant font-bold text-[32px] text-[#F5EBDD] leading-none mb-2">
              {siteConfig.brandName}
            </div>
            <div className="font-lora italic text-[14px] text-[#C5A66B] mb-3">
              {siteConfig.tagline}
            </div>
            <p className="text-xs text-[#C2AEA3] leading-relaxed mb-4">
              {siteConfig.supportingLine}
            </p>
            <div className="text-[10px] tracking-[0.18em] text-[#C5A66B] uppercase font-bold">
              {siteConfig.logoTagline}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <div className="font-cormorant font-bold text-[18px] text-[#F5EBDD] mb-4">
              Explore
            </div>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2.5 text-xs text-[#D5C2B5]">
              {siteConfig.footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#C5A66B] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Outlets */}
          <div>
            <div className="font-cormorant font-bold text-[18px] text-[#F5EBDD] mb-4">
              Our NSP Outlets
            </div>
            <div className="flex flex-col gap-4 text-xs text-[#D5C2B5]">
              {outletLocations.map((outlet) => (
                <div key={outlet.id}>
                  <div className="font-semibold text-[#F5EBDD]">{outlet.name}</div>
                  <p className="text-[11px] text-[#A89285] mt-0.5 leading-snug">
                    {outlet.address}
                  </p>
                  <a
                    href={outlet.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[11px] text-[#C5A66B] hover:underline mt-1"
                  >
                    Get directions ↗
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Connect & Enquiries */}
          <div>
            <div className="font-cormorant font-bold text-[18px] text-[#F5EBDD] mb-4">
              Connect With Us
            </div>
            <div className="flex flex-col gap-3 text-xs text-[#D5C2B5]">
              <div>
                <span className="text-[10px] text-[#A89285] block uppercase tracking-wider">
                  Direct Line & Franchise
                </span>
                <a
                  href={siteConfig.contact.primaryPhoneTel}
                  className="text-sm font-bold text-[#F5EBDD] hover:text-[#C5A66B] transition-colors"
                >
                  Call +91 {siteConfig.contact.primaryPhone}
                </a>
              </div>
              <div>
                <span className="text-[10px] text-[#A89285] block uppercase tracking-wider">
                  Customer Support
                </span>
                <a
                  href={siteConfig.contact.secondaryPhoneTel}
                  className="text-sm font-bold text-[#F5EBDD] hover:text-[#C5A66B] transition-colors"
                >
                  {siteConfig.contact.secondaryPhone}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#C5A66B] hover:text-[#F5EBDD] transition-colors"
                >
                  <span>Follow {siteConfig.contact.instagramHandle} on Instagram</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-[#A89285]">
          <span>© {new Date().getFullYear()} {siteConfig.brandAltName}. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <span>Netaji Subhash Place, Pitampura, Delhi</span>
            <span>·</span>
            <a
              href={siteConfig.contact.primaryPhoneTel}
              className="hover:text-[#C5A66B] transition-colors"
            >
              {siteConfig.contact.primaryPhone}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
