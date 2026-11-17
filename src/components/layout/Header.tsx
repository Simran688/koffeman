"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { brandImages } from "@/data/images";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 h-[88px] max-sm:h-[72px] bg-[#FFFDF8]/92 backdrop-blur-md border-b border-[#C5A66B]/25 transition-all">
      <Container className="h-full flex items-center justify-between gap-6">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3.5 min-w-[210px] max-sm:min-w-0 group"
          aria-label={`${siteConfig.brandName} home`}
          onClick={closeMobileMenu}
        >
          <div className="relative h-[62px] w-[62px] max-sm:h-[48px] max-sm:w-[48px] rounded-full overflow-hidden shrink-0 border-2 border-[#C5A66B]/40 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image
              src={brandImages.logo}
              alt="KoffeeMan truck logo"
              fill
              sizes="(max-width: 640px) 48px, 62px"
              priority
              className="object-contain"
            />
          </div>
          <span className="flex flex-col">
            <span className="font-cormorant font-bold text-[30px] max-sm:text-[24px] leading-none text-[#21120F] tracking-tight group-hover:text-[#75452F] transition-colors">
              {siteConfig.brandName}
            </span>
            <span className="text-[8px] max-sm:text-[7px] tracking-[0.2em] text-[#75452F] font-bold mt-[5px] uppercase">
              {siteConfig.logoTagline}
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-7 text-[13px] font-semibold tracking-wide text-[#321D17]"
          aria-label="Main navigation"
        >
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative py-1 transition-colors hover:text-[#B87943] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A66B] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="dark"
            href={siteConfig.ordering.swiggyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order online on Swiggy"
            className="!py-2.5 !px-5 text-xs font-bold shadow-md hover:shadow-lg"
          >
            Order Online ↗
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden flex items-center justify-center h-[42px] w-[42px] rounded-full border border-[#C5A66B]/50 bg-[#F5EBDD] text-[#21120F] text-lg transition-colors hover:bg-[#EBDBC4]"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </Container>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden absolute top-[72px] left-0 right-0 bg-[#FFFDF8] border-b border-[#C5A66B]/30 px-6 py-6 shadow-[0_20px_40px_rgba(33,18,15,0.15)] flex flex-col gap-4 animate-in fade-in slide-in-from-top-2"
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-3 font-semibold text-[15px] text-[#321D17]"
          >
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="py-2 border-b border-[#F5EBDD] hover:text-[#B87943] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <Button
              variant="dark"
              href={siteConfig.ordering.swiggyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order online on Swiggy"
              onClick={closeMobileMenu}
              className="w-full justify-center"
            >
              Order Online on Swiggy ↗
            </Button>
            <a
              href={siteConfig.contact.primaryPhoneTel}
              onClick={closeMobileMenu}
              className="text-center text-xs font-bold text-[#75452F] py-2 hover:text-[#21120F] transition-colors"
            >
              Call Us: {siteConfig.contact.primaryPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
