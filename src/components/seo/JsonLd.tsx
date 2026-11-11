import { siteConfig } from "@/data/site-config";
import type { OutletLocation } from "@/data/locations";

type JsonLdProps = {
  schema: Record<string, unknown> | Array<Record<string, unknown>>;
};

/**
 * Generic Schema.org JSON-LD script renderer.
 * Validates that no menu prices or rates are injected.
 */
export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Brand-level Organization and WebSite entity for the homepage.
 * Sourced solely from verified brand facts.
 * NO prices, ratings, awards, coordinates, or unverified claims.
 */
export function BrandJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.brandName,
        alternateName: siteConfig.brandAltName,
        description: `${siteConfig.brandName} café in NSP, Netaji Subhash Place, Pitampura, Delhi. ${siteConfig.slogan}`,
        publisher: {
          "@id": `${siteConfig.siteUrl}/#organization`,
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.siteUrl}/#organization`,
        name: siteConfig.brandName,
        alternateName: siteConfig.brandAltName,
        url: siteConfig.siteUrl,
        logo: `${siteConfig.siteUrl}/images/brand/koffeeman-logo.jpg`,
        sameAs: [siteConfig.contact.instagramUrl],
        founder: {
          "@type": "Person",
          name: siteConfig.founder.name,
        },
        slogan: siteConfig.slogan,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.contact.primaryPhoneTel.replace("tel:", ""),
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
        ],
      },
    ],
  };

  return <JsonLd schema={schema} />;
}

/**
 * Factual Restaurant (LocalBusiness subtype) Schema for an individual outlet.
 *
 * Rules:
 * - Unique stable @id based on canonical outlet URL.
 * - Exact verified address fields only.
 * - hasMenu pointing to the real menu URL.
 * - NO priceRange (per project rule).
 * - NO fake openingHours, aggregateRating, reviews, or coordinates.
 */
export function OutletRestaurantJsonLd({ outlet }: { outlet: OutletLocation }) {
  const canonicalUrl = `${siteConfig.siteUrl}/visit-us/${outlet.slug}`;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${canonicalUrl}#restaurant`,
    name: `${siteConfig.brandName} — ${outlet.name}`,
    alternateName: `${siteConfig.brandAltName} ${outlet.name}`,
    url: canonicalUrl,
    description: outlet.metaDescription,
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.brandName,
      url: siteConfig.siteUrl,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: outlet.streetAddress,
      addressLocality: outlet.locality,
      addressRegion: outlet.region,
      postalCode: outlet.postalCode,
      addressCountry: outlet.country,
    },
    telephone: siteConfig.contact.primaryPhoneTel.replace("tel:", ""),
    hasMenu: `${siteConfig.siteUrl}/menu`,
    servesCuisine: [
      "Coffee",
      "Fast Food",
      "Beverages",
      "Street Food",
    ],
    sameAs: [siteConfig.contact.instagramUrl],
  };

  return <JsonLd schema={schema} />;
}
