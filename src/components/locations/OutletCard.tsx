import Link from "next/link";
import type { OutletLocation } from "@/data/locations";

type OutletCardProps = {
  outlet: OutletLocation;
};

export function OutletCard({ outlet }: OutletCardProps) {
  return (
    <article
      aria-label={`${outlet.name} outlet`}
      className="border border-[#D9C4A5] rounded-[13px] bg-[#F4E4CA] p-6 max-sm:p-[19px] grid grid-cols-[56px_1fr] max-sm:grid-cols-[45px_1fr] gap-[18px] max-sm:gap-[13px] items-start shadow-[0_5px_17px_rgba(57,41,41,0.04)]"
    >
      <div
        aria-hidden="true"
        className="w-[54px] h-[54px] max-sm:w-[44px] max-sm:h-[44px] bg-[#392929] text-[#D6B66C] rounded-full grid place-items-center text-[22px] max-sm:text-[18px] shrink-0"
      >
        ⌖
      </div>

      <div>
        <h3 className="font-bree text-[22px] max-sm:text-[18px] text-[#392929] m-0 mb-2 leading-snug">
          {outlet.name}
        </h3>
        <p className="text-[12px] max-sm:text-[11px] text-[#866D5B] leading-[1.6] m-0 mb-4">
          {outlet.address}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={`/visit-us/${outlet.slug}`}
            className="inline-block text-[11px] font-bold text-[#392929] bg-[#EAD8BD] border border-[#D9C4A5] rounded-[6px] px-2.5 py-1 hover:bg-[#392929] hover:text-[#FFF8EE] transition-colors"
          >
            Outlet info & menu →
          </Link>
          <a
            href={outlet.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get directions to ${outlet.name}`}
            className="inline-block text-[11px] font-bold text-[#7F5738] border-b border-[#D6B66C] pb-[3px] hover:text-[#C84B36] transition-colors"
          >
            Get directions ↗
          </a>
        </div>
      </div>
    </article>
  );
}

