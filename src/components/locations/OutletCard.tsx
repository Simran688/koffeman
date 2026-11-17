import Link from "next/link";
import type { OutletLocation } from "@/data/locations";
import { siteConfig } from "@/data/site-config";

type OutletCardProps = {
  outlet: OutletLocation;
};

export function OutletCard({ outlet }: OutletCardProps) {
  return (
    <article
      aria-label={`${outlet.name} outlet`}
      className="border border-[#C5A66B]/30 rounded-[18px] bg-[#FFFDF8] p-6 sm:p-8 flex flex-col justify-between shadow-[0_16px_36px_rgba(33,18,15,0.06)] transition-all duration-300 hover:border-[#C5A66B] hover:shadow-[0_20px_45px_rgba(33,18,15,0.12)]"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div
            aria-hidden="true"
            className="w-12 h-12 bg-[#21120F] text-[#C5A66B] rounded-full grid place-items-center text-xl shrink-0 border border-[#C5A66B]/40"
          >
            ⌖
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C5A66B] bg-[#F5EBDD] px-3 py-1 rounded-full border border-[#C5A66B]/30">
            NSP Pitampura
          </span>
        </div>

        <h3 className="font-cormorant font-bold text-[26px] sm:text-[30px] text-[#21120F] m-0 mb-2 leading-tight">
          {outlet.name}
        </h3>
        <p className="text-xs sm:text-sm text-[#75452F] leading-relaxed m-0 mb-4">
          {outlet.address}
        </p>

        {!outlet.missingData.exactUnitNumber.confirmed && (
          <p className="text-[11px] text-[#8F7466] italic mb-4">
            {outlet.missingData.exactUnitNumber.statusNote}
          </p>
        )}

        <div className="text-[11px] font-semibold text-[#8F7466] mb-5">
          Phone:{" "}
          <a
            href={siteConfig.contact.primaryPhoneTel}
            className="text-[#21120F] font-bold hover:text-[#B87943] transition-colors"
          >
            {siteConfig.contact.primaryPhone}
          </a>
          {" · "}
          <a
            href={siteConfig.contact.secondaryPhoneTel}
            className="text-[#21120F] font-bold hover:text-[#B87943] transition-colors"
          >
            {siteConfig.contact.secondaryPhone}
          </a>
        </div>
      </div>

      <div className="pt-4 border-t border-[#F5EBDD] flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/visit-us/${outlet.slug}`}
          className="text-xs font-bold text-[#21120F] bg-[#F5EBDD] border border-[#C5A66B]/40 rounded-full px-4 py-2 hover:bg-[#21120F] hover:text-[#FFFDF8] transition-colors"
        >
          Outlet info & menu →
        </Link>
        <a
          href={outlet.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Get directions to ${outlet.name}`}
          className="text-xs font-bold text-[#75452F] border-b border-[#C5A66B] pb-0.5 hover:text-[#B87943] transition-colors"
        >
          Get directions ↗
        </a>
      </div>
    </article>
  );
}
