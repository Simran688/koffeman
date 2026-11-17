"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { menuCategories, type MenuCategory } from "@/data/menu";

export function InteractiveMenuExplorer() {
  const [activeSlug, setActiveSlug] = useState<string>(menuCategories[0].slug);

  const activeCategory: MenuCategory =
    menuCategories.find((c) => c.slug === activeSlug) ?? menuCategories[0];

  return (
    <div className="bg-[#FFFDF8] rounded-[22px] border border-[#C5A66B]/30 p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(33,18,15,0.08)] mb-12">
      {/* Category Tabs (Desktop & Mobile Scrollable) */}
      <div
        role="tablist"
        aria-label="Menu categories"
        className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin border-b border-[#F5EBDD]"
      >
        {menuCategories.map((cat) => {
          const isActive = cat.slug === activeCategory.slug;
          return (
            <button
              key={cat.slug}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`panel-${cat.slug}`}
              id={`tab-${cat.slug}`}
              onClick={() => setActiveSlug(cat.slug)}
              onMouseEnter={() => setActiveSlug(cat.slug)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                isActive
                  ? "bg-[#21120F] text-[#FFFDF8] shadow-md border border-[#C5A66B]/60"
                  : "bg-[#F5EBDD] text-[#75452F] hover:bg-[#EADBCE] border border-transparent"
              }`}
            >
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* Featured Interactive Panel */}
      <div
        id={`panel-${activeCategory.slug}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeCategory.slug}`}
        className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-center transition-all duration-300"
      >
        {/* Category Description & Item Showcase */}
        <div>
          <div className="text-[10px] font-bold tracking-[0.2em] text-[#C5A66B] uppercase mb-2">
            Featured Category
          </div>
          <h3 className="font-cormorant font-bold text-[32px] sm:text-[42px] leading-tight text-[#21120F] m-0 mb-3">
            {activeCategory.title}
          </h3>
          <p className="text-sm font-semibold text-[#B87943] m-0 mb-3">
            {activeCategory.subtitle}
          </p>
          <p className="text-sm text-[#75452F] leading-relaxed m-0 mb-6 max-w-lg">
            {activeCategory.description}
          </p>

          {/* Coffee Accuracy Note for Coffee category */}
          {activeCategory.slug === "coffee" && (
            <div className="mb-6 p-3.5 rounded-xl bg-[#F5EBDD] border border-[#C5A66B]/40 text-xs text-[#553628] flex items-center gap-2.5">
              <span className="text-[#C5A66B] font-bold text-base">✦</span>
              <span>
                <strong>Signature Beaten Coffee:</strong> Handcrafted traditional beaten coffee, rich cold brews, and black coffee — made with premium quality beans without machine espresso.
              </span>
            </div>
          )}

          {/* Sample items preview */}
          <div className="mb-8">
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#8F7466] block mb-3">
              Popular Selections in this Category:
            </span>
            <div className="flex flex-wrap gap-2">
              {activeCategory.groups.flatMap((g) => g.items).slice(0, 7).map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-[#F5EBDD] text-[#321D17] text-xs font-medium border border-[#C5A66B]/20"
                >
                  {item}
                </span>
              ))}
              {activeCategory.groups.flatMap((g) => g.items).length > 7 && (
                <span className="px-3 py-1.5 rounded-lg bg-[#321D17] text-[#FFFDF8] text-xs font-bold">
                  +{activeCategory.groups.flatMap((g) => g.items).length - 7} more
                </span>
              )}
            </div>
          </div>

          {/* Action Link */}
          <div className="flex items-center gap-4">
            <Link
              href={`/menu/${activeCategory.slug}`}
              className="btn btn-dark !py-3 !px-6 text-xs font-bold uppercase tracking-wider"
            >
              Explore {activeCategory.title} →
            </Link>
            <Link
              href="/menu"
              className="text-xs font-bold text-[#75452F] hover:text-[#B87943] transition-colors"
            >
              View Full Menu ↗
            </Link>
          </div>
        </div>

        {/* Featured Image Showcase */}
        <div className="relative h-[280px] sm:h-[340px] md:h-[380px] rounded-[18px] overflow-hidden shadow-[0_16px_36px_rgba(33,18,15,0.18)] border-4 border-[#F5EBDD]">
          <Image
            src={activeCategory.image}
            alt={activeCategory.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#21120F]/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C5A66B] block">
              KoffeeMan Favourite
            </span>
            <span className="font-cormorant font-bold text-lg text-[#FFFDF8]">
              {activeCategory.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

