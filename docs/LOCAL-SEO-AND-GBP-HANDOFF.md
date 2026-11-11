# KoffeeMan Local SEO & Google Business Profile Handoff Guide

This document is the operational guide for the owner of **Koffee Man** regarding local search listings, Google Business Profile (GBP), Google Search Console (GSC), and privacy-conscious analytics.

---

## 1. Google Business Profile (GBP) Eligibility & Rules

Google imposes strict guidelines regarding business profile eligibility:
> Official guidelines: [Google Business Profile Eligibility Guidelines](https://support.google.com/business/answer/3038177)

### Eligibility Criteria for Two Profiles:
Two separate Google Business Profiles can **only** be maintained if **both** conditions are met:
1. **Physical Permanence & Signage**: Each outlet is a genuine, staffed customer-facing physical location with permanent, visible exterior KoffeeMan signage.
2. **Distinct Physical Address**: Each outlet occupies distinct, identifiable physical premises (e.g. Shop G8 at Aggarwal Corporate Heights vs a separate unit at GD-ITL Tower).
3. **No Duplicate Listings**: Never create multiple listings for the same physical counter or kiosk within the same commercial complex.

### Name, Address, Phone (NAP) Consistency:
- **Business Name**: Must be entered as `Koffee Man` (or `KoffeeMan` as shown on physical signage). **Do not append keywords** such as "Koffee Man - Best Cold Coffee NSP" or "KoffeeMan Pitampura Café" — keyword stuffing violates Google's policies and risks profile suspension.
- **Address**: Must match the exact building, unit, floor, and PIN code.
- **Phone**: Use the direct, local phone number that reaches that specific counter.
- **Website URL**:
  - GD-ITL Tower Profile: Point directly to `https://koffeeman.in/visit-us/gd-itl-tower`
  - Aggarwal Corporate Heights Profile: Point directly to `https://koffeeman.in/visit-us/aggarwal-corporate-heights`
- **Menu Link**: `https://koffeeman.in/menu`
- **Primary Category**: `Café` or `Coffee shop`
- **Secondary Categories**: `Fast food restaurant`, `Beverage shop`, `Chinese restaurant` (for momos)

---

## 2. Owner Data Sheet (Outstanding Items to Confirm)

The following items are marked as pending owner confirmation in the codebase:

| Item | GD-ITL Tower Outlet | Aggarwal Corporate Heights Outlet |
|---|---|---|
| **Exact Unit / Shop / Floor** | Pending owner confirmation (complex verified) | `Shop G8` verified (additional landmarks pending if needed) |
| **Exact Map Pin Coordinates** | Pending exact pin verification | Pending exact pin verification |
| **Opening Hours** | Pending confirmation (e.g. 10:00 AM – 11:00 PM) | Pending confirmation (e.g. 10:00 AM – 11:00 PM) |
| **Outlet-Specific Telephone** | Shared business numbers (`9811161923` / `8700020291`) until mapped | Shared business numbers (`9811161923` / `8700020291`) until mapped |
| **Direct Zomato Outlet URL** | Pending direct URL (interim Pitampura search used) | Pending direct URL (interim Pitampura search used) |
| **Existing Google Business Profile** | Pending owner confirmation / claim | Pending owner confirmation / claim |
| **Authentic Outlet Photography** | Illustrative sample images until authentic shoot | Illustrative sample images until authentic shoot |

---

## 3. Google Search Console (GSC) Setup

When the domain `koffeeman.in` is active in production:

### Step 1: Verification
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Choose **Domain** verification for `koffeeman.in`.
3. Add the TXT verification record to the DNS provider (e.g. Cloudflare DNS):
   - Type: `TXT`
   - Name: `@`
   - Content: `google-site-verification=XXXXXXXXXXXXXXXXXXXXXX`
4. Alternatively, use **URL-prefix** (`https://koffeeman.in`) and select Cloudflare or HTML file / tag verification.

### Step 2: Submit Sitemap
1. Navigate to **Sitemaps** in the left sidebar.
2. Enter: `sitemap.xml`.
3. Click **Submit**.
4. Confirm status displays **Success** with all canonical URLs indexed.

### Step 3: URL Inspection & Indexing Checks
1. Use the **URL Inspection** tool on primary routes:
   - `https://koffeeman.in/`
   - `https://koffeeman.in/visit-us`
   - `https://koffeeman.in/visit-us/gd-itl-tower`
   - `https://koffeeman.in/visit-us/aggarwal-corporate-heights`
   - `https://koffeeman.in/menu`
2. Click **Test Live URL** to verify:
   - HTTP 200 response
   - Googlebot can access all CSS/JS
   - Structured data (Organization / Restaurant) is detected with zero validation issues.
3. Request indexing on primary routes.

---

## 4. Google Analytics 4 (GA4) Privacy-Conscious Setup

### Step 1: Create GA4 Property
1. Create a GA4 Web Stream for `https://koffeeman.in`.
2. Obtain the Measurement ID (format: `G-XXXXXXXXXX`).
3. Set the environment variable:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Step 2: Privacy Configuration
- Enable IP Anonymization (default in GA4).
- Disable Google Signals if user consent banner is not implemented.
- Set data retention to 14 months.
- The website includes event tracking helpers for:
  - `order_swiggy_click`
  - `order_zomato_click`
  - `phone_click`
  - `franchise_enquiry_click`
  - `event_enquiry_click`

---

## 5. Bing Webmaster Tools (Optional)

1. Open [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Sign in with the same Google Account used for GSC and select **Import from Google Search Console**.
3. All verified domain properties and sitemaps will synchronize automatically.
