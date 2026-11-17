"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/images";

export function GalleryGrid() {
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveImageIdx(null);
      } else if (e.key === "ArrowRight" && activeImageIdx !== null) {
        setActiveImageIdx((prev) => (prev! + 1) % galleryImages.length);
      } else if (e.key === "ArrowLeft" && activeImageIdx !== null) {
        setActiveImageIdx((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
      }
    };

    if (activeImageIdx !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIdx]);

  return (
    <div>
      {/* Editorial Masonry-style Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {galleryImages.map((src, idx) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveImageIdx(idx)}
            aria-label={`Open gallery photo ${idx + 1}`}
            className="group relative h-[260px] sm:h-[300px] rounded-[18px] overflow-hidden bg-[#FFFDF8] border border-[#C5A66B]/30 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C5A66B] hover:shadow-[0_20px_40px_rgba(33,18,15,0.12)] cursor-pointer text-left"
          >
            <Image
              src={src}
              alt={`KoffeeMan café photography moment ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-[#21120F]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <span className="px-4 py-2 rounded-full bg-[#FFFDF8]/90 text-[#21120F] text-xs font-bold shadow-md">
                View Full Size ⤢
              </span>
            </div>
            <div className="absolute bottom-3 left-3 bg-[#21120F]/80 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold text-[#C5A66B]">
              0{idx + 1}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImageIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
          className="fixed inset-0 z-50 bg-[#21120F]/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveImageIdx(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActiveImageIdx(null)}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#321D17] text-[#FFFDF8] border border-[#C5A66B]/50 flex items-center justify-center text-xl font-bold hover:bg-[#C5A66B] hover:text-[#21120F] transition-colors cursor-pointer z-50"
          >
            ✕
          </button>

          {/* Navigation Controls */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIdx((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
            }}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#321D17]/80 text-[#FFFDF8] border border-[#C5A66B]/40 flex items-center justify-center text-xl font-bold hover:bg-[#C5A66B] hover:text-[#21120F] transition-colors cursor-pointer z-50"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIdx((prev) => (prev! + 1) % galleryImages.length);
            }}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#321D17]/80 text-[#FFFDF8] border border-[#C5A66B]/40 flex items-center justify-center text-xl font-bold hover:bg-[#C5A66B] hover:text-[#21120F] transition-colors cursor-pointer z-50"
          >
            ›
          </button>

          {/* Active Image Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-[70vh] rounded-[18px] overflow-hidden border-2 border-[#C5A66B]/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[activeImageIdx]}
              alt={`KoffeeMan café photography moment ${activeImageIdx + 1}`}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
              className="object-contain"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#21120F]/80 backdrop-blur-md p-3 rounded-xl border border-[#C5A66B]/30 flex items-center justify-between text-xs text-[#FFFDF8]">
              <span>KoffeeMan Moment {activeImageIdx + 1} of {galleryImages.length}</span>
              <span className="text-[#C5A66B]">Press Esc or click anywhere to close</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

