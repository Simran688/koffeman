import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import OutletDetailPage, {
  generateStaticParams,
  generateMetadata,
} from "@/app/visit-us/[outlet]/page";
import { outletLocations } from "@/data/locations";
import { containsPrice } from "@/lib/no-prices";

describe("Distinct Outlet Location Pages (/visit-us/[outlet])", () => {
  it("generates static parameters for all outlets and aliases", () => {
    const params = generateStaticParams();
    const slugs = params.map((p) => p.outlet);
    expect(slugs).toContain("gd-itl-tower");
    expect(slugs).toContain("aggarwal-corporate-heights");
    expect(slugs).toContain("gd-itl");
    expect(slugs).toContain("aggarwal");
  });

  it("generates correct metadata and canonical URLs for GD-ITL Tower", async () => {
    const meta = await generateMetadata({
      params: Promise.resolve({ outlet: "gd-itl-tower" }),
    });
    expect(meta.title).toContain("GD-ITL Tower");
    expect(meta.description).toContain("Netaji Subhash Place");
    expect(meta.alternates?.canonical).toBe(
      "https://koffeeman.in/visit-us/gd-itl-tower"
    );
  });

  it("generates correct metadata and canonical URLs for Aggarwal Corporate Heights", async () => {
    const meta = await generateMetadata({
      params: Promise.resolve({ outlet: "aggarwal-corporate-heights" }),
    });
    expect(meta.title).toContain("Aggarwal Corporate Heights");
    expect(meta.description).toContain("Netaji Subhash Place");
    expect(meta.alternates?.canonical).toBe(
      "https://koffeeman.in/visit-us/aggarwal-corporate-heights"
    );
  });

  it("renders GD-ITL Tower page with unconfirmed unit number clearly noted", async () => {
    const PageComponent = await OutletDetailPage({
      params: Promise.resolve({ outlet: "gd-itl-tower" }),
    });
    render(PageComponent);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "KoffeeMan at GD-ITL Tower, NSP",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Exact unit\/floor number is pending owner confirmation/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /directions to GD-ITL Tower/i })
    ).toHaveAttribute("target", "_blank");

    expect(
      screen.getByRole("link", { name: /Order on Swiggy/i })
    ).toHaveAttribute("href", expect.stringContaining("swiggy.com"));
  });

  it("renders Aggarwal Corporate Heights page with verified Shop G8", async () => {
    const PageComponent = await OutletDetailPage({
      params: Promise.resolve({ outlet: "aggarwal-corporate-heights" }),
    });
    render(PageComponent);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "KoffeeMan at Aggarwal Corporate Heights, NSP",
      })
    ).toBeInTheDocument();

    const matches = screen.getAllByText(/Shop G8, Aggarwal Corporate Heights/i);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it("guarantees no menu prices anywhere on either outlet location page", async () => {
    for (const outlet of outletLocations) {
      const PageComponent = await OutletDetailPage({
        params: Promise.resolve({ outlet: outlet.slug }),
      });
      const { container } = render(PageComponent);
      expect(containsPrice(container.textContent || "")).toBe(false);
    }
  });
});
