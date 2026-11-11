import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";

const OUT_DIR = path.resolve("out");

console.log("=== KoffeeMan Phase 2 SEO Verification ===");

// 1. Verify robots.txt
console.log("\n[1/6] Verifying robots.txt...");
const robotsTxt = readFileSync(path.join(OUT_DIR, "robots.txt"), "utf8");
console.log("robots.txt content:\n" + robotsTxt.trim());
if (!robotsTxt.includes("Allow: /") || !robotsTxt.includes("sitemap.xml")) {
  throw new Error("Invalid robots.txt content");
}
console.log("✓ robots.txt is valid.");

// 2. Verify sitemap.xml
console.log("\n[2/6] Verifying sitemap.xml...");
const sitemapXml = readFileSync(path.join(OUT_DIR, "sitemap.xml"), "utf8");
const locMatches = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (m) => m[1]
);
console.log(`Found ${locMatches.length} URLs in sitemap.xml:`);
locMatches.forEach((url, i) => console.log(`  ${i + 1}. ${url}`));

// Check for trailing slash consistency (none should end with / except root if any)
const trailingSlashUrls = locMatches.filter(
  (u) => u !== "https://koffeeman.in" && u.endsWith("/")
);
if (trailingSlashUrls.length > 0) {
  throw new Error(
    `Inconsistent trailing slash URLs found in sitemap: ${trailingSlashUrls.join(", ")}`
  );
}

// Check for duplicates
const uniqueUrls = new Set(locMatches);
if (uniqueUrls.size !== locMatches.length) {
  throw new Error("Duplicate URLs found in sitemap.xml");
}
console.log("✓ sitemap.xml is valid with zero duplicates.");

// 3. Verify 404 response page
console.log("\n[3/6] Verifying 404.html page...");
if (!existsSync(path.join(OUT_DIR, "404.html"))) {
  throw new Error("404.html does not exist in out/");
}
const notFoundHtml = readFileSync(path.join(OUT_DIR, "404.html"), "utf8");
if (!notFoundHtml.includes("404") || !notFoundHtml.includes("Page Not Found")) {
  throw new Error("404.html does not contain valid 404 content");
}
console.log("✓ 404.html is properly prerendered.");

// 4. Verify JSON-LD Schema on Homepage & Outlet pages
console.log("\n[4/6] Verifying Schema.org JSON-LD structured data...");

function extractJsonLd(filePath) {
  const html = readFileSync(filePath, "utf8");
  const regex = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  const schemas = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    schemas.push(JSON.parse(match[1]));
  }
  return { html, schemas };
}

// Homepage
const home = extractJsonLd(path.join(OUT_DIR, "index.html"));
if (home.schemas.length === 0) {
  throw new Error("No JSON-LD schema found on homepage");
}
const homeSchema = home.schemas[0];
console.log("Homepage Schema Graph:", JSON.stringify(homeSchema, null, 2));
const types = homeSchema["@graph"].map((g) => g["@type"]);
if (!types.includes("WebSite") || !types.includes("Organization")) {
  throw new Error("Homepage missing WebSite or Organization schema");
}
if (types.includes("LocalBusiness") || types.includes("Restaurant")) {
  throw new Error(
    "Homepage should not declare LocalBusiness; must be on distinct outlet pages"
  );
}
console.log("✓ Homepage Brand Organization & WebSite schema is valid.");

// Outlets
const outlets = [
  {
    name: "GD-ITL Tower",
    file: path.join(OUT_DIR, "visit-us", "gd-itl-tower.html"),
    expectedId: "https://koffeeman.in/visit-us/gd-itl-tower#restaurant",
  },
  {
    name: "Aggarwal Corporate Heights",
    file: path.join(OUT_DIR, "visit-us", "aggarwal-corporate-heights.html"),
    expectedId:
      "https://koffeeman.in/visit-us/aggarwal-corporate-heights#restaurant",
  },
];

for (const outlet of outlets) {
  const { schemas } = extractJsonLd(outlet.file);
  if (schemas.length === 0) {
    throw new Error(`No JSON-LD schema found for ${outlet.name}`);
  }
  const schema = schemas[0];
  console.log(`\n${outlet.name} Schema:`, JSON.stringify(schema, null, 2));

  if (schema["@type"] !== "Restaurant") {
    throw new Error(
      `${outlet.name} schema @type must be Restaurant, got ${schema["@type"]}`
    );
  }
  if (schema["@id"] !== outlet.expectedId) {
    throw new Error(
      `${outlet.name} schema @id mismatch. Expected ${outlet.expectedId}, got ${schema["@id"]}`
    );
  }
  if (!schema.hasMenu) {
    throw new Error(`${outlet.name} schema missing hasMenu`);
  }
  if (schema.priceRange !== undefined) {
    throw new Error(
      `Forbidden priceRange field found in ${outlet.name} schema!`
    );
  }
  if (schema.openingHours !== undefined) {
    throw new Error(
      `Unconfirmed openingHours field found in ${outlet.name} schema!`
    );
  }
  if (schema.aggregateRating !== undefined || schema.review !== undefined) {
    throw new Error(`Fabricated ratings found in ${outlet.name} schema!`);
  }
  if (schema.geo !== undefined) {
    throw new Error(`Unconfirmed geo coordinates found in ${outlet.name} schema!`);
  }
  console.log(`✓ ${outlet.name} Restaurant schema is completely compliant.`);
}

// 5. Page-by-page title, description, and canonical verification
console.log("\n[5/6] Verifying page-by-page title, description, and canonical tags...");
const routesToCheck = [
  { path: "index.html", url: "https://koffeeman.in" },
  { path: "menu.html", url: "https://koffeeman.in/menu" },
  { path: "visit-us.html", url: "https://koffeeman.in/visit-us" },
  { path: "about.html", url: "https://koffeeman.in/about" },
  { path: "gallery.html", url: "https://koffeeman.in/gallery" },
  { path: "franchise.html", url: "https://koffeeman.in/franchise" },
  { path: "events.html", url: "https://koffeeman.in/events" },
  { path: "contact.html", url: "https://koffeeman.in/contact" },
  {
    path: path.join("visit-us", "gd-itl-tower.html"),
    url: "https://koffeeman.in/visit-us/gd-itl-tower",
  },
  {
    path: path.join("visit-us", "aggarwal-corporate-heights.html"),
    url: "https://koffeeman.in/visit-us/aggarwal-corporate-heights",
  },
  {
    path: path.join("menu", "coffee.html"),
    url: "https://koffeeman.in/menu/coffee",
  },
  {
    path: path.join("menu", "shakes.html"),
    url: "https://koffeeman.in/menu/shakes",
  },
  {
    path: path.join("menu", "chinese.html"),
    url: "https://koffeeman.in/menu/chinese",
  },
  {
    path: path.join("menu", "sandwiches.html"),
    url: "https://koffeeman.in/menu/sandwiches",
  },
  {
    path: path.join("menu", "quick-bites.html"),
    url: "https://koffeeman.in/menu/quick-bites",
  },
  {
    path: path.join("menu", "mojitos.html"),
    url: "https://koffeeman.in/menu/mojitos",
  },
  {
    path: path.join("menu", "chai.html"),
    url: "https://koffeeman.in/menu/chai",
  },
];

console.log("\n| Route | Canonical Tag | Title | Meta Description |");
console.log("|---|---|---|---|");

for (const r of routesToCheck) {
  const fullPath = path.join(OUT_DIR, r.path);
  const html = readFileSync(fullPath, "utf8");

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
  const title = titleMatch ? titleMatch[1].trim() : "MISSING";

  const descMatch = html.match(
    /<meta\s+name="description"\s+content="([\s\S]*?)"/
  );
  const desc = descMatch ? descMatch[1].trim() : "MISSING";

  const canonMatch = html.match(
    /<link\s+rel="canonical"\s+href="([\s\S]*?)"/
  );
  const canon = canonMatch ? canonMatch[1].trim() : "MISSING";

  console.log(
    `| \`${r.url.replace("https://koffeeman.in", "") || "/"}\` | \`${canon}\` | ${title} | ${desc.substring(0, 70)}... |`
  );

  if (!canon || !canon.startsWith("https://koffeeman.in")) {
    throw new Error(`Invalid canonical URL for ${r.path}: ${canon}`);
  }
}

// 6. Crawl internal links to check for 404s
console.log("\n[6/6] Crawling internal links to ensure zero 404s...");
const allHtmlFiles = [];
function findHtml(dir) {
  for (const f of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) {
      if (!f.name.startsWith("_")) findHtml(p);
    } else if (f.name.endsWith(".html")) {
      allHtmlFiles.push(p);
    }
  }
}
findHtml(OUT_DIR);

const linkedHrefs = new Set();
for (const file of allHtmlFiles) {
  const html = readFileSync(file, "utf8");
  const hrefMatches = [...html.matchAll(/href="([^"#][^"]*)"/g)];
  for (const m of hrefMatches) {
    const href = m[1];
    if (href.startsWith("/")) {
      linkedHrefs.add(href);
    }
  }
}

console.log(`Discovered ${linkedHrefs.size} internal root-relative links:`);
for (const href of [...linkedHrefs].sort()) {
  // Check if destination exists as html file, direct asset file, or directory index
  const cleanHref = href.split("?")[0].split("#")[0].replace(/\/$/, "");
  const directAsset = path.join(OUT_DIR, cleanHref);
  const directHtml = path.join(OUT_DIR, `${cleanHref}.html`);
  const indexHtml = path.join(OUT_DIR, cleanHref, "index.html");
  const rootIndex = cleanHref === "" ? path.join(OUT_DIR, "index.html") : null;

  const exists =
    existsSync(directAsset) ||
    existsSync(directHtml) ||
    existsSync(indexHtml) ||
    (rootIndex && existsSync(rootIndex));

  if (!exists) {
    throw new Error(`Broken internal link found: ${href} (neither ${directHtml} nor ${indexHtml} nor ${directAsset} exists)`);
  }
  console.log(`  ✓ ${href} -> OK`);
}

console.log("\n=== ALL SEO VERIFICATIONS PASSED SUCCESSFULLY ===");
