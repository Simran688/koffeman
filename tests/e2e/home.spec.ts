import { expect, test } from "@playwright/test";
import { containsPrice } from "@/lib/no-prices";

test.describe("Koffee Man Website — End-to-End Suite", () => {
  test("homepage renders brand design, hero, founder story, and all core sections", async ({
    page,
  }) => {
    await page.goto("/");

    // Skip to main content accessibility link
    const skipLink = page.getByRole("link", { name: "Skip to main content" });
    await expect(skipLink).toHaveAttribute("href", "#main-content");

    // Brand & Hero
    await expect(
      page.getByRole("heading", { name: /Life happens/i })
    ).toBeVisible();

    // Trust Strip
    await expect(page.getByText(/Coffee with character/i)).toBeVisible();
    await expect(page.getByText(/Your NSP neighbourhood spot/i)).toBeVisible();

    // Founder Story
    await expect(
      page.getByRole("heading", { name: /Hi, I'm Rohit Chhabra/i })
    ).toBeVisible();
    await expect(
      page.getByText(/From a roadside van to our first franchise/i)
    ).toBeVisible();

    // Primary Delivery CTAs
    const swiggyBtn = page.getByRole("link", { name: /Order on Swiggy/i });
    await expect(swiggyBtn).toBeVisible();
    await expect(swiggyBtn).toHaveAttribute(
      "href",
      "https://www.swiggy.com/city/delhi/koffeeman-nsp-rest1175563"
    );

    // Instagram Section
    await expect(
      page.getByRole("heading", { name: /KoffeeMan on Instagram/i })
    ).toBeVisible();

    // Floating Call Button
    const floatingCall = page.getByLabel(/Call KoffeeMan at 9811161923/i);
    await expect(floatingCall).toBeVisible();
    await expect(floatingCall).toHaveAttribute("href", "tel:+919811161923");
  });

  test("menu overview and category detail pages load without prices", async ({
    page,
  }) => {
    // Menu Overview
    await page.goto("/menu");
    await expect(
      page.getByRole("heading", { name: /Our Complete Menu/i })
    ).toBeVisible({ timeout: 15_000 });
    await expect(
      page.getByRole("heading", { name: "Coffee & Beverages" })
    ).toBeVisible();

    // Category Detail: Coffee
    await page.goto("/menu/coffee");
    await expect(page).toHaveURL(/\/menu\/coffee/);
    await expect(
      page.getByRole("heading", { name: "Explore the range" })
    ).toBeVisible({ timeout: 15_000 });
    await expect(page.getByText("Classic")).toBeVisible();
    await expect(page.getByText("KoffeeMan Special")).toBeVisible();

    // Category Detail: Sandwiches
    await page.goto("/menu/sandwiches");
    await expect(
      page.getByRole("heading", { name: "Sandwiches & Burgers" })
    ).toBeVisible({ timeout: 15_000 });
  });

  test("about, gallery, visit-us, and contact pages load cleanly", async ({
    page,
  }) => {
    // About
    await page.goto("/about");
    await expect(
      page.getByRole("heading", { name: /About Koffee Man/i })
    ).toBeVisible({ timeout: 15_000 });
    await expect(page.getByText("Good Food. Good Coffee. Good Vibes.")).toBeVisible();

    // Gallery
    await page.goto("/gallery");
    await expect(
      page.getByRole("heading", { name: /Café & Food Gallery/i })
    ).toBeVisible({ timeout: 15_000 });
    await expect(
      page.getByText(/Visual preview: Illustrative photography displayed/i)
    ).toBeVisible();

    // Visit Us
    await page.goto("/visit-us");
    await expect(
      page.getByRole("heading", { name: /Find Your KoffeeMan/i })
    ).toBeVisible({ timeout: 15_000 });
    await expect(
      page.getByRole("heading", { name: "GD-ITL Tower" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Aggarwal Corporate Heights" })
    ).toBeVisible();

    // Contact
    await page.goto("/contact");
    await expect(
      page.getByRole("heading", { name: /Contact KoffeeMan/i })
    ).toBeVisible({ timeout: 15_000 });
    const callLink = page.getByRole("link", { name: "Call 9811161923" });
    await expect(callLink).toBeVisible();
    await expect(callLink).toHaveAttribute("href", "tel:+919811161923");
  });

  test("franchise and event pages expose verified phone CTAs", async ({
    page,
  }) => {
    // Franchise
    await page.goto("/franchise");
    await expect(
      page.getByRole("heading", { name: /Own a KoffeeMan Franchise/i })
    ).toBeVisible({ timeout: 15_000 });
    const franchiseCall = page.getByRole("link", {
      name: /Call franchise team at 9811161923/i,
    });
    await expect(franchiseCall).toBeVisible();
    await expect(franchiseCall).toHaveAttribute("href", "tel:+919811161923");

    // Events
    await page.goto("/events");
    await expect(
      page.getByRole("heading", { name: /Make your moments memorable/i })
    ).toBeVisible({ timeout: 15_000 });
    const eventCall = page.getByRole("link", {
      name: /Call to enquire about event bookings/i,
    });
    await expect(eventCall).toBeVisible();
    await expect(eventCall).toHaveAttribute("href", "tel:+919811161923");
  });

  test("distinct outlet pages load with verified addresses, missing notes, and zero prices", async ({
    page,
  }) => {
    // GD-ITL Tower
    await page.goto("/visit-us/gd-itl-tower");
    await expect(
      page.getByRole("heading", { name: /KoffeeMan at GD-ITL Tower, NSP/i })
    ).toBeVisible({ timeout: 15_000 });
    await expect(
      page.getByText(/Exact unit\/floor number is pending owner confirmation/i)
    ).toBeVisible();

    // Aggarwal Corporate Heights
    await page.goto("/visit-us/aggarwal-corporate-heights");
    await expect(
      page.getByRole("heading", {
        name: /KoffeeMan at Aggarwal Corporate Heights, NSP/i,
      })
    ).toBeVisible({ timeout: 15_000 });
    await expect(
      page.getByText(/Shop G8, Aggarwal Corporate Heights/i).first()
    ).toBeVisible();
  });

  test("404 error page loads with branded messaging and recovery navigation", async ({
    page,
  }) => {
    const response = await page.goto("/non-existent-page-url");
    // Under static preview / dev, verify page renders 404 content
    await expect(
      page.getByRole("heading", { name: /Oops! This Cup Is Empty/i })
    ).toBeVisible({ timeout: 15_000 });
    await expect(page.getByRole("link", { name: "Return Home" })).toBeVisible();
  });

  test("negative verification: zero currency symbols or prices exist on key routes", async ({
    page,
  }) => {
    const routes = [
      "/",
      "/menu",
      "/menu/coffee",
      "/about",
      "/gallery",
      "/visit-us",
      "/visit-us/gd-itl-tower",
      "/visit-us/aggarwal-corporate-heights",
    ];

    for (const route of routes) {
      await page.goto(route);
      const textContent = await page.innerText("body");
      expect(containsPrice(textContent)).toBe(false);
    }
  });
});
