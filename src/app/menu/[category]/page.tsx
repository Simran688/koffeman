import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { menuCategories, getMenuCategory } from "@/data/menu";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return menuCategories.map((c) => ({
    category: c.slug,
  }));
}

const categoryMetaTitles: Record<string, { title: string; desc: string }> = {
  coffee: {
    title: "Cold Coffee & Beaten Brews — KoffeeMan Menu NSP, Pitampura",
    desc: "Discover classic cold coffee, handcrafted beaten coffee, and signature brews at KoffeeMan in Netaji Subhash Place (NSP), Pitampura.",
  },
  shakes: {
    title: "Creamy Shakes & Dessert Blends — KoffeeMan Menu NSP",
    desc: "Thick shakes and dessert-inspired chilled blends at KoffeeMan café in NSP, Pitampura.",
  },
  chinese: {
    title: "Momos & Chinese Favourites — KoffeeMan Menu NSP, Pitampura",
    desc: "Veg momos, paneer momos, noodles, and rolls prepared fresh at KoffeeMan in Netaji Subhash Place, Pitampura.",
  },
  sandwiches: {
    title: "Grilled Sandwiches & Burgers — KoffeeMan Menu NSP",
    desc: "Toasted grilled sandwiches and stacked burgers made fresh to order at KoffeeMan NSP, Pitampura.",
  },
  "quick-bites": {
    title: "Pasta, Fries & Comfort Quick Bites — KoffeeMan Menu NSP",
    desc: "Comfort pasta, hot Maggi bowls, fries, and cheesy quick bites at KoffeeMan in Netaji Subhash Place (NSP), Pitampura.",
  },
  mojitos: {
    title: "Mojitos & Coolers — KoffeeMan Menu NSP, Pitampura",
    desc: "Chilled mint mojitos, fruit refreshers, and iced coolers at KoffeeMan in NSP, Pitampura.",
  },
  chai: {
    title: "Chai & Warm Brews — KoffeeMan Menu NSP, Pitampura",
    desc: "Traditional desi chai, masala tea, and soothing warm beverages at KoffeeMan in NSP, Pitampura.",
  },
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getMenuCategory(category);
  if (!cat) {
    return {
      title: "Menu Category Not Found | Koffee Man",
    };
  }

  const metaOverride = categoryMetaTitles[cat.slug];
  const title = metaOverride?.title ?? `${cat.title} — ${siteConfig.brandName} Menu`;
  const description =
    metaOverride?.desc ??
    `${cat.title} menu at ${siteConfig.brandName}, NSP, Pitampura. ${cat.description}`;
  const canonicalUrl = `${siteConfig.siteUrl}/menu/${cat.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.brandName,
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = getMenuCategory(category);

  if (!cat) {
    notFound();
  }

  return (
    <main className="min-h-[80vh] py-10 md:py-16 bg-[#F5EBDD]">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs text-[#75452F] mb-6 font-semibold">
          <Link
            href="/menu"
            className="text-[#B87943] hover:text-[#21120F] transition-colors"
          >
            ← Back to menu
          </Link>
          <span className="mx-2 text-[#C5A66B]">/</span>
          <span className="text-[#21120F]">{cat.title}</span>
        </nav>

        {/* Detail Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] bg-[#21120F] rounded-[22px] overflow-hidden mb-10 shadow-[0_20px_50px_rgba(33,18,15,0.25)] border border-[#C5A66B]/30">
          <div className="p-8 md:p-12 text-[#FFFDF8] flex flex-col justify-center">
            <div className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#C5A66B] mb-2">
              Explore the KoffeeMan menu
            </div>
            <h1 className="font-cormorant font-bold text-[36px] sm:text-[46px] md:text-[54px] text-[#F5EBDD] my-2 leading-[1.05]">
              {cat.title}
            </h1>
            <p className="text-xs md:text-sm font-semibold text-[#C5A66B] m-0 mb-3">
              {cat.subtitle}
            </p>
            <p className="text-xs md:text-sm text-[#D8C5B8] leading-[1.8] max-w-[520px] mb-6">
              {cat.description}
            </p>

            {/* Coffee Accuracy Note */}
            {cat.slug === "coffee" && (
              <div className="mb-6 p-3 rounded-xl bg-[#321D17] border border-[#C5A66B]/40 text-xs text-[#E8D4C2]">
                ✦ <strong>Authentic Beaten Coffee:</strong> Handcrafted beaten brews, iced coffee, and black coffee. Zero machine espresso.
              </div>
            )}

            <div>
              <Button
                variant="gold"
                href={siteConfig.ordering.swiggyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="!py-3 !px-6 text-xs font-bold uppercase tracking-wider"
              >
                Order on Swiggy ↗
              </Button>
            </div>
          </div>

          <div className="relative min-h-[260px] lg:min-h-[340px] w-full bg-[#321D17]">
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#21120F]/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Detail Item Catalogue List */}
        <div className="bg-[#FFFDF8] border border-[#C5A66B]/30 rounded-[20px] p-6 sm:p-8 md:p-10 shadow-[0_16px_36px_rgba(33,18,15,0.06)]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-8 pb-4 border-b border-[#F5EBDD]">
            <div>
              <div className="section-kicker">The selection</div>
              <h2 className="font-cormorant font-bold text-[28px] md:text-[34px] text-[#21120F] m-0">
                Explore the range
              </h2>
            </div>
            <span className="eyebrow">Good food · Good coffee</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cat.groups.map((group) => (
              <section
                key={group.title}
                className="border border-[#C5A66B]/25 bg-[#F5EBDD]/60 rounded-[14px] p-5 sm:p-6"
              >
                <h3 className="font-cormorant font-bold text-[22px] text-[#75452F] m-0 mb-4 leading-snug">
                  {group.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="text-xs sm:text-[13px] leading-relaxed text-[#321D17] relative pl-4 font-medium"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 text-[#C5A66B] text-[10px]"
                      >
                        ✦
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Footer Call to Action */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#21120F] text-[#FFFDF8] p-6 md:p-8 rounded-[16px] mt-8 border border-[#C5A66B]/30">
            <div>
              <h3 className="font-cormorant font-bold text-[22px] md:text-[26px] text-[#F5EBDD] m-0 mb-1">
                Found your favourite?
              </h3>
              <p className="text-xs text-[#D8C5B8] m-0">
                Order online on Swiggy or visit us in Netaji Subhash Place, Pitampura.
              </p>
            </div>
            <Button
              variant="gold"
              href={siteConfig.ordering.swiggyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="!py-3 !px-6 text-xs font-bold uppercase tracking-wider shrink-0"
            >
              Order on Swiggy ↗
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
