import Image from "next/image";
import Link from "next/link";
import { menuImages } from "@/data/images";
import { Container } from "@/components/ui/Container";

type SignatureItem = {
  name: string;
  category: string;
  categorySlug: string;
  image: string;
  description: string;
  tag: string;
};

const SIGNATURE_ITEMS: readonly SignatureItem[] = [
  {
    name: "KoffeeMan Special Beaten Coffee",
    category: "Coffee & Beverages",
    categorySlug: "coffee",
    image: menuImages.coffee,
    description: "Our signature handcrafted beaten coffee, rich, frothy, and comforting.",
    tag: "Signature Brew",
  },
  {
    name: "Tandoori Paneer Grilled Sandwich",
    category: "Sandwiches & Burgers",
    categorySlug: "sandwiches",
    image: menuImages.sandwich,
    description: "Hot, toasted sandwiches and loaded burgers prepared fresh to order.",
    tag: "Café Classic",
  },
  {
    name: "Nutella Choco & Brownie Shake",
    category: "Shakes",
    categorySlug: "shakes",
    image: menuImages.shakes,
    description: "Rich, velvety shakes blended to perfection for every sweet craving.",
    tag: "Sweet Cravings",
  },
  {
    name: "Delhi Street-Style Steamed Momos",
    category: "Chinese Specialities",
    categorySlug: "chinese",
    image: menuImages.momos,
    description: "Freshly prepared momos and savoury Delhi-style Chinese specialities.",
    tag: "Hot & Savoury",
  },
  {
    name: "Virgin Mojito & Fruit Coolers",
    category: "Mojitos & Iced Tea",
    categorySlug: "mojitos",
    image: menuImages.mojitos,
    description: "Cool, sparkling refreshers infused with fruit flavours and fresh mint.",
    tag: "Chilled Refreshers",
  },
  {
    name: "Creamy Comfort Pasta & Loaded Fries",
    category: "Quick Bites",
    categorySlug: "quick-bites",
    image: menuImages.pasta,
    description: "The ultimate comfort lineup: hot bowls, loaded sides, and cheesy snacks.",
    tag: "Comfort Food",
  },
] as const;

export function SignatureCravings() {
  return (
    <section
      id="cravings"
      aria-label="Signature cravings showcase"
      className="py-20 md:py-28 bg-[#21120F] text-[#FFFDF8] relative overflow-hidden"
    >
      {/* Decorative Background Lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(184,121,67,0.15)_0%,rgba(33,18,15,0)_70%)] pointer-events-none blur-3xl"
      />

      <Container className="relative z-10">
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div>
            <div className="text-[11px] font-bold tracking-[0.24em] text-[#C5A66B] uppercase mb-2">
              Handcrafted Favourites
            </div>
            <h2 className="font-cormorant font-bold text-[clamp(34px,4.5vw,56px)] leading-[1.04] text-[#F5EBDD] m-0">
              SIGNATURE CRAVINGS.
            </h2>
            <p className="text-sm md:text-base text-[#D8C5B8] leading-relaxed max-w-[500px] mt-2 mb-0">
              The standout flavours our guests come back for every single day.
            </p>
          </div>
          <Link
            href="/menu"
            className="btn btn-outline-gold !py-3 !px-6 text-xs font-bold uppercase tracking-wider"
          >
            Explore Complete Menu →
          </Link>
        </div>

        {/* 6-Card Editorial Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIGNATURE_ITEMS.map((item) => (
            <article
              key={item.name}
              className="group relative rounded-[20px] overflow-hidden bg-[#321D17] border border-[#C5A66B]/25 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-[#C5A66B] hover:shadow-[0_20px_45px_rgba(0,0,0,0.4)]"
            >
              {/* Product Photography */}
              <div className="relative w-full h-[240px] overflow-hidden bg-[#21120F]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#321D17] via-transparent to-transparent pointer-events-none" />

                {/* Tag Badge */}
                <div className="absolute top-4 left-4 bg-[#21120F]/90 backdrop-blur-sm border border-[#C5A66B]/50 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-[#C5A66B]">
                  {item.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C5A66B] block mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="font-cormorant font-bold text-[24px] leading-tight text-[#FFFDF8] m-0 mb-3 group-hover:text-[#C5A66B] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#D8C5B8] leading-relaxed m-0 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#C5A66B]/15 flex items-center justify-between">
                  <Link
                    href={`/menu/${item.categorySlug}`}
                    className="text-xs font-bold text-[#C5A66B] inline-flex items-center gap-1.5 hover:text-[#FFFDF8] transition-colors"
                  >
                    <span>View in Menu</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                  <span className="text-[10px] text-[#A89285] uppercase tracking-wider font-semibold">
                    Fresh to order
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

