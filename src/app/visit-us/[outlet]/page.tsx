import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { outletLocations, getOutletBySlug } from "@/data/locations";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { OutletRestaurantJsonLd } from "@/components/seo/JsonLd";

type OutletPageProps = {
  params: Promise<{ outlet: string }>;
};

export function generateStaticParams() {
  return [
    { outlet: "gd-itl-tower" },
    { outlet: "aggarwal-corporate-heights" },
    { outlet: "gd-itl" },
    { outlet: "aggarwal" },
  ];
}

export async function generateMetadata({
  params,
}: OutletPageProps): Promise<Metadata> {
  const { outlet: outletParam } = await params;
  const outlet = getOutletBySlug(outletParam);

  if (!outlet) {
    return {
      title: "Outlet Not Found | Koffee Man",
    };
  }

  const canonicalUrl = `${siteConfig.siteUrl}/visit-us/${outlet.slug}`;

  return {
    title: outlet.pageTitle,
    description: outlet.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: outlet.pageTitle,
      description: outlet.metaDescription,
      url: canonicalUrl,
      siteName: siteConfig.brandName,
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function OutletDetailPage({ params }: OutletPageProps) {
  const { outlet: outletParam } = await params;
  const outlet = getOutletBySlug(outletParam);

  if (!outlet) {
    notFound();
  }

  const otherOutlet = outletLocations.find((o) => o.id !== outlet.id);

  return (
    <>
      <OutletRestaurantJsonLd outlet={outlet} />
      <main className="min-h-[80vh] py-8 md:py-14 bg-[#F4E4CA]">
        <Container>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="text-[11px] text-[#866D5B] mb-6">
            <Link
              href="/"
              className="text-[#7F5738] font-bold hover:text-[#C84B36] transition-colors"
            >
              ← Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/visit-us"
              className="text-[#7F5738] font-bold hover:text-[#C84B36] transition-colors"
            >
              Visit Us
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#392929] font-medium">{outlet.name}</span>
          </nav>

          {/* Hero Section */}
          <header className="mb-10">
            <div className="section-kicker">{outlet.kicker}</div>
            <h1 className="font-bree text-[clamp(32px,4.5vw,50px)] leading-[1.08] tracking-[-0.025em] text-[#392929] m-0 mb-3">
              {outlet.h1}
            </h1>
            <p className="text-[15px] text-[#5f4a3b] leading-[1.7] max-w-[620px] m-0">
              {outlet.heroDescription}
            </p>
          </header>

          {/* Main Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 mb-12 items-start">
            {/* Left Card: Verified Location Details & Action Buttons */}
            <article className="bg-[#FFF8EE] border border-[#D9C4A5] rounded-[18px] p-6 sm:p-8 shadow-[0_5px_17px_rgba(57,41,41,0.04)]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EAD8BD]">
                <div
                  aria-hidden="true"
                  className="w-12 h-12 bg-[#392929] text-[#D6B66C] rounded-full grid place-items-center text-[20px] shrink-0"
                >
                  ⌖
                </div>
                <div>
                  <h2 className="font-bree text-[22px] text-[#392929] m-0">
                    Location & Directions
                  </h2>
                  <p className="text-[12px] text-[#866D5B] m-0">
                    Netaji Subhash Place (NSP), Pitampura, Delhi
                  </p>
                </div>
              </div>

              {/* Address details */}
              <div className="space-y-4 mb-6 text-[13px]">
                <div>
                  <span className="font-bold text-[#392929] block mb-1">
                    Verified Address:
                  </span>
                  <p className="text-[#5f4a3b] m-0 leading-relaxed font-medium">
                    {outlet.address}
                  </p>
                </div>

                {/* Status of unit number */}
                <div className="bg-[#F4E4CA]/60 border border-[#D9C4A5] rounded-[10px] p-3 text-[12px]">
                  <span className="font-bold text-[#7F5738] block mb-0.5">
                    Unit / Floor Details:
                  </span>
                  <p className="text-[#6d5543] m-0 leading-normal">
                    {outlet.missingData.exactUnitNumber.statusNote}
                  </p>
                </div>

                {/* Telephone */}
                <div>
                  <span className="font-bold text-[#392929] block mb-1">
                    Contact Telephone:
                  </span>
                  <p className="text-[#5f4a3b] m-0">
                    <a
                      href={outlet.missingData.outletSpecificPhone.phoneTel}
                      className="font-bold text-[#7F5738] hover:text-[#C84B36] transition-colors"
                    >
                      {outlet.missingData.outletSpecificPhone.displayPhone}
                    </a>
                  </p>
                  <p className="text-[11px] text-[#866D5B] mt-0.5 m-0">
                    {outlet.missingData.outletSpecificPhone.statusNote}
                  </p>
                </div>

                {/* Opening Hours */}
                <div>
                  <span className="font-bold text-[#392929] block mb-1">
                    Opening Hours:
                  </span>
                  <p className="text-[12px] text-[#866D5B] m-0">
                    {outlet.missingData.openingHours.statusNote}
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-[#EAD8BD]">
                <Button
                  variant="dark"
                  href={outlet.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get directions to ${outlet.name} on Google Maps`}
                >
                  Get Directions on Maps ↗
                </Button>
                <Button
                  variant="outline"
                  href={outlet.missingData.outletSpecificPhone.phoneTel}
                  aria-label={`Call ${outlet.missingData.outletSpecificPhone.displayPhone}`}
                >
                  Call Outlet
                </Button>
                <Button
                  variant="gold"
                  href={siteConfig.ordering.swiggyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order on Swiggy ↗
                </Button>
              </div>

              {/* Map pin note */}
              <p className="text-[11px] text-[#866D5B] mt-4 mb-0">
                Note on map pin: {outlet.missingData.exactMapPin.statusNote}
              </p>
            </article>

            {/* Right Card: Highlights & Local Search Context */}
            <div className="space-y-6">
              <article className="bg-[#FFF8EE] border border-[#D9C4A5] rounded-[18px] p-6 sm:p-8 shadow-[0_5px_17px_rgba(57,41,41,0.04)]">
                <h2 className="font-bree text-[20px] text-[#392929] m-0 mb-4">
                  What You&apos;ll Find Here
                </h2>
                <ul className="space-y-2.5 text-[13px] text-[#5f4a3b] pl-4 list-disc marker:text-[#7F5738]">
                  {outlet.highlights.map((item) => (
                    <li key={item} className="leading-snug">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              {/* Verified Online Delivery Status */}
              <article className="bg-[#F4E4CA] border border-[#D9C4A5] rounded-[18px] p-6 text-[12px]">
                <h3 className="font-bree text-[16px] text-[#392929] m-0 mb-2">
                  Online Delivery & Platform Listings
                </h3>
                <p className="text-[#5f4a3b] leading-relaxed mb-3">
                  Enjoy KoffeeMan coffee, shakes, and food delivered straight to your home or office in NSP and Pitampura.
                </p>
                <ul className="space-y-2 pl-4 list-disc text-[#6d5543]">
                  <li>
                    <strong>Swiggy:</strong> Verified active outlet delivery.{" "}
                    <a
                      href={siteConfig.ordering.swiggyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#7F5738] hover:text-[#C84B36] transition-colors"
                    >
                      View Swiggy Menu ↗
                    </a>
                  </li>
                  <li>
                    <strong>Zomato:</strong> {outlet.missingData.directZomatoUrl.statusNote}{" "}
                    <a
                      href={outlet.missingData.directZomatoUrl.fallbackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#7F5738] hover:text-[#C84B36] transition-colors"
                    >
                      Browse Pitampura on Zomato ↗
                    </a>
                  </li>
                </ul>
              </article>

              {/* Genuine Photography Status */}
              <div className="border border-dashed border-[#D9C4A5] rounded-[12px] p-4 text-[11px] text-[#866D5B] bg-[#FFF8EE]/60">
                <strong className="text-[#392929] block mb-1">
                  Photography Notice:
                </strong>
                {outlet.missingData.genuinePhotos.statusNote}
              </div>
            </div>
          </div>

          {/* Recommended Menu Categories */}
          <section className="mb-12" aria-labelledby="recommended-menu-heading">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6">
              <div>
                <div className="section-kicker">Craving inspiration</div>
                <h2
                  id="recommended-menu-heading"
                  className="font-bree text-[26px] text-[#392929] m-0"
                >
                  Popular Menu Selections at this Outlet
                </h2>
              </div>
              <Link
                href="/menu"
                className="text-[12px] font-bold text-[#7F5738] border-b border-[#D6B66C] pb-0.5 hover:text-[#C84B36] transition-colors"
              >
                View Full Menu →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {outlet.recommendedCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/menu/${cat.slug}`}
                  className="group bg-[#FFF8EE] border border-[#D9C4A5] rounded-[14px] p-5 hover:border-[#D6B66C] hover:shadow-[0_12px_28px_rgba(57,41,41,0.08)] transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bree text-[18px] text-[#392929] m-0 mb-1 group-hover:text-[#7F5738] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[12px] text-[#866D5B] m-0 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#7F5738] mt-4 group-hover:text-[#C84B36]">
                    View items <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Switch to Other Outlet */}
          {otherOutlet && (
            <aside className="bg-[#EAD8BD] border border-[#D9C4A5] rounded-[16px] p-6 text-center">
              <h3 className="font-bree text-[20px] text-[#392929] m-0 mb-2">
                Also Visiting NSP?
              </h3>
              <p className="text-[13px] text-[#5f4a3b] max-w-md mx-auto mb-4">
                Explore our other Netaji Subhash Place café outlet at {otherOutlet.name}.
              </p>
              <Button variant="outline" href={`/visit-us/${otherOutlet.slug}`}>
                View {otherOutlet.name} Outlet Details →
              </Button>
            </aside>
          )}
        </Container>
      </main>
    </>
  );
}
