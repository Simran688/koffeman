import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const PRICE_PATTERN = /₹|rs\.?\s*\d|\binr\b|\$\s*\d|€\s*\d/i;
const SKIP_FILES = new Set(["package-lock.json"]);
const SKIP_DIRS = new Set([
  "node_modules",
  ".git",
  ".next",
  "out",
  "coverage",
  "playwright-report",
  "test-results",
  "reference",
]);
const TEXT_EXT = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".json",
  ".md",
  ".css",
  ".html",
]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (SKIP_FILES.has(entry.name)) continue;
    if (SKIP_DIRS.has(entry.name)) continue;
    if (/no-prices|assert-no-prices/.test(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (TEXT_EXT.has(path.extname(entry.name))) files.push(full);
  }
  return files;
}

const hits = [];
for (const file of await walk(ROOT)) {
  const text = await readFile(file, "utf8");
  if (PRICE_PATTERN.test(text)) hits.push(path.relative(ROOT, file));
}

if (hits.length) {
  console.error("Possible price/currency matches:\n" + hits.map((f) => ` - ${f}`).join("\n"));
  process.exit(1);
}

console.log("No currency/price symbols found in scanned source files.");
