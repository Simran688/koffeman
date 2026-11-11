import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { BrandJsonLd, OutletRestaurantJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site-config";
import { menuCategories } from "@/data/menu";
import { outletLocations } from "@/data/locations";
import { containsPrice } from "@/lib/no-prices";
import nextConfig from "../next.config";

describe("SEO, Metadata, Security Headers & Accessibility", () => {
  it("generates valid robots.txt configuration", () => {
    const robotsConfig = robots();
    expect(robotsConfig.sitemap).toBe(`${siteConfig.siteUrl}/sitemap.xml`);
    expect(robotsConfig.rules).toEqual({
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    });
  });

  it("generates comprehensive sitemap with all core pages, outlets, and menu categories", () => {
    const entries = sitemap();
    const urls = entries.map((e) => e.url);

    // Core static routes
    expect(urls).toContain(`${siteConfig.siteUrl}`);
    expect(urls).toContain(`${siteConfig.siteUrl}/menu`);
    expect(urls).toContain(`${siteConfig.siteUrl}/visit-us`);
    expect(urls).toContain(`${siteConfig.siteUrl}/about`);
    expect(urls).toContain(`${siteConfig.siteUrl}/gallery`);
    expect(urls).toContain(`${siteConfig.siteUrl}/franchise`);
    expect(urls).toContain(`${siteConfig.siteUrl}/events`);
    expect(urls).toContain(`${siteConfig.siteUrl}/contact`);

    // Outlet routes
    outletLocations.forEach((outlet) => {
      expect(urls).toContain(`${siteConfig.siteUrl}/visit-us/${outlet.slug}`);
    });

    // All dynamic menu category routes
    menuCategories.forEach((cat) => {
      expect(urls).toContain(`${siteConfig.siteUrl}/menu/${cat.slug}`);
    });

    expect(entries.length).toBe(
      8 + outletLocations.length + menuCategories.length
    );
  });

  it("renders valid Schema.org Brand Organization & WebSite JSON-LD with zero prices", () => {
    const { container } = render(<BrandJsonLd />);
    const script = container.querySelector("script[type='application/ld+json']");
    expect(script).not.toBeNull();

    const data = JSON.parse(script!.textContent || "{}");
    expect(data["@context"]).toBe("https://schema.org");
    expect(data["@graph"]).toBeDefined();
    expect(data["@graph"]).toHaveLength(2);

    const website = data["@graph"].find(
      (item: { "@type": string }) => item["@type"] === "WebSite"
    );
    expect(website).toBeDefined();
    expect(website.name).toBe(siteConfig.brandName);

    const org = data["@graph"].find(
      (item: { "@type": string }) => item["@type"] === "Organization"
    );
    expect(org).toBeDefined();
    expect(org.founder.name).toBe(siteConfig.founder.name);
    expect(org.sameAs).toContain(siteConfig.contact.instagramUrl);

    // Negative check: absolutely zero price fields or currency symbols
    expect(containsPrice(JSON.stringify(data))).toBe(false);
  });

  it("renders valid Schema.org Restaurant JSON-LD for each outlet without prices or fake ratings", () => {
    outletLocations.forEach((outlet) => {
      const { container } = render(<OutletRestaurantJsonLd outlet={outlet} />);
      const script = container.querySelector(
        "script[type='application/ld+json']"
      );
      expect(script).not.toBeNull();

      const data = JSON.parse(script!.textContent || "{}");
      expect(data["@context"]).toBe("https://schema.org");
      expect(data["@type"]).toBe("Restaurant");
      expect(data["@id"]).toBe(
        `${siteConfig.siteUrl}/visit-us/${outlet.slug}#restaurant`
      );
      expect(data.name).toContain(outlet.name);
      expect(data.address.postalCode).toBe("110034");
      expect(data.hasMenu).toBe(`${siteConfig.siteUrl}/menu`);
      expect(data.servesCuisine).toContain("Coffee");

      // Critical negative checks:
      expect(data.priceRange).toBeUndefined();
      expect(data.aggregateRating).toBeUndefined();
      expect(data.review).toBeUndefined();
      expect(data.openingHours).toBeUndefined();
      expect(data.geo).toBeUndefined();
      expect(containsPrice(JSON.stringify(data))).toBe(false);
    });
  });

  it("configures strict security headers in next.config.ts", async () => {
    expect(nextConfig.headers).toBeDefined();
    if (typeof nextConfig.headers === "function") {
      const headerConfigs = await nextConfig.headers();
      expect(headerConfigs).toHaveLength(1);
      const headers = headerConfigs[0].headers;

      const keys = headers.map((h: { key: string }) => h.key);
      expect(keys).toContain("X-Frame-Options");
      expect(keys).toContain("X-Content-Type-Options");
      expect(keys).toContain("Referrer-Policy");
      expect(keys).toContain("Permissions-Policy");

      const frameOptions = headers.find(
        (h: { key: string }) => h.key === "X-Frame-Options"
      );
      expect(frameOptions?.value).toBe("DENY");
    }
  });

  it("ensures zero prices or rate symbols in siteConfig SEO metadata", () => {
    expect(containsPrice(siteConfig.tagline)).toBe(false);
    expect(containsPrice(siteConfig.slogan)).toBe(false);
    expect(containsPrice(siteConfig.supportingLine)).toBe(false);
    expect(containsPrice(siteConfig.brandSignOff)).toBe(false);
  });
});
