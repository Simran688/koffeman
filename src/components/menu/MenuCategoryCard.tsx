import Image from "next/image";
import Link from "next/link";
import type { MenuCategory } from "@/data/menu";

type MenuCategoryCardProps = {
  category: MenuCategory;
};

export function MenuCategoryCard({ category }: MenuCategoryCardProps) {
  return (
    <Link
      href={`/menu/${category.slug}`}
      className="group flex flex-col border border-[#C5A66B]/30 rounded-[16px] overflow-hidden bg-[#FFFDF8] text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(33,18,15,0.12)] hover:border-[#C5A66B]"
      aria-label={`Explore ${category.title}`}
    >
      <div className="relative w-full h-[180px] max-sm:h-[135px] overflow-hidden bg-[#F5EBDD]">
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
          className="object-cover transition-transform duration-500 group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#21120F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-5 max-sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-cormorant font-bold text-[22px] max-sm:text-[18px] text-[#21120F] m-0 mb-1.5 leading-snug group-hover:text-[#B87943] transition-colors">
            {category.title}
          </h3>
          <p className="text-[12px] max-sm:text-[11px] text-[#75452F] m-0 leading-[1.5]">
            {category.subtitle}
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 text-[#B87943] text-xs font-bold mt-5 group-hover:text-[#75452F] transition-colors">
          <span>Explore category</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
