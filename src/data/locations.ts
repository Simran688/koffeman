/**
 * Factual KoffeeMan outlet data for Netaji Subhash Place (NSP), Pitampura, Delhi.
 *
 * Missing-data contract (DO NOT INVENT VALUES):
 * - GD-ITL Tower: unit/floor/shop number is unconfirmed.
 * - Aggarwal Corporate Heights: Shop G8 is verified; additional floor details pending confirmation.
 * - Opening hours per outlet: unconfirmed.
 * - Outlet-specific telephone: unconfirmed (numbers are shared brand contact lines).
 * - Direct Zomato outlet links: unconfirmed (interim area search used).
 * - Google Business Profile IDs/links: unconfirmed.
 * - Outlet photography: illustrative prototypes until owner provides genuine photos.
 *
 * NEVER add menu prices, rates, currency symbols, or price fields.
 */

export type OutletMissingData = {
  exactUnitNumber: {
    confirmed: boolean;
    value?: string;
    statusNote: string;
  };
  exactMapPin: {
    confirmed: boolean;
    statusNote: string;
  };
  openingHours: {
    confirmed: boolean;
    value?: string;
    statusNote: string;
  };
  outletSpecificPhone: {
    confirmed: boolean;
    phoneTel: string;
    displayPhone: string;
    statusNote: string;
  };
  directZomatoUrl: {
    confirmed: boolean;
    url?: string;
    fallbackUrl: string;
    statusNote: string;
  };
  googleBusinessProfile: {
    confirmed: boolean;
    cidUrl?: string;
    statusNote: string;
  };
  genuinePhotos: {
    confirmed: boolean;
    statusNote: string;
  };
};

export type OutletLocation = {
  id: string;
  slug: string;
  name: string;
  fullTitle: string;
  address: string;
  streetAddress: string;
  locality: string;
  region: string;
  postalCode: string;
  country: string;
  directionsUrl: string;
  note: string;
  missingData: OutletMissingData;
  pageTitle: string;
  metaDescription: string;
  h1: string;
  kicker: string;
  heroDescription: string;
  highlights: string[];
  recommendedCategories: Array<{
    title: string;
    slug: string;
    description: string;
  }>;
};

export const outletLocations: readonly OutletLocation[] = [
  {
    id: "gd-itl",
    slug: "gd-itl-tower",
    name: "GD-ITL Tower",
    fullTitle: "KoffeeMan at GD-ITL Tower — Netaji Subhash Place, Pitampura",
    address: "Netaji Subhash Place, Pitampura, Delhi",
    streetAddress: "GD-ITL Tower, Netaji Subhash Place",
    locality: "Pitampura",
    region: "Delhi",
    postalCode: "110034",
    country: "IN",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=GD-ITL+Tower+Netaji+Subhash+Place+Pitampura+Delhi",
    note: "Located at GD-ITL Tower in the heart of NSP.",
    missingData: {
      exactUnitNumber: {
        confirmed: false,
        statusNote:
          "Exact unit/floor number is pending owner confirmation. GD-ITL Tower complex verified.",
      },
      exactMapPin: {
        confirmed: false,
        statusNote:
          "Exact geographic coordinates and map pin pending owner confirmation. Verified building search query provided.",
      },
      openingHours: {
        confirmed: false,
        statusNote:
          "Opening hours pending owner confirmation. Please call shared business line before visiting.",
      },
      outletSpecificPhone: {
        confirmed: false,
        phoneTel: "tel:+919811161923",
        displayPhone: "+91 9811161923",
        statusNote:
          "Direct outlet telephone line is unmapped. Central business contact line shown until confirmed.",
      },
      directZomatoUrl: {
        confirmed: false,
        fallbackUrl: "https://www.zomato.com/ncr/pitampura-delhi-restaurants",
        statusNote:
          "Direct Zomato listing URL pending owner confirmation. Interim Pitampura restaurant search provided.",
      },
      googleBusinessProfile: {
        confirmed: false,
        statusNote:
          "Google Business Profile claim/verification pending owner action.",
      },
      genuinePhotos: {
        confirmed: false,
        statusNote:
          "Prototype/sample photos are illustrative placeholders pending verified KoffeeMan photography.",
      },
    },
    pageTitle: "Coffee near GD-ITL Tower — KoffeeMan Café NSP, Pitampura",
    metaDescription:
      "Visit KoffeeMan at GD-ITL Tower in Netaji Subhash Place (NSP), Pitampura, Delhi. Cold coffee, hot brews, sandwiches, and quick bites. Get directions.",
    h1: "KoffeeMan at GD-ITL Tower, NSP",
    kicker: "NSP Pitampura Outlet",
    heroDescription:
      "Grab fresh coffee near GD-ITL Tower. Your regular stop in Netaji Subhash Place for chilled cold brews, hot espresso drinks, grilled sandwiches, and fast comforting bites.",
    highlights: [
      "Convenient coffee stop right at the bustling GD-ITL Tower in NSP",
      "Signature cold coffee brews, iced lattes, and flavoured frappes",
      "Comfort food menu including veg & paneer momos, sandwiches, and quick bites",
      "Takeaway and doorstep delivery through Swiggy",
    ],
    recommendedCategories: [
      {
        title: "Coffee & Beverages",
        slug: "coffee",
        description: "Hot brews, cold coffee variants, and signature roasts.",
      },
      {
        title: "Chinese Specialities & Momos",
        slug: "chinese",
        description: "Fresh steamed and fried momos with spicy chutney.",
      },
      {
        title: "Sandwiches & Burgers",
        slug: "sandwiches",
        description: "Toasted grilled sandwiches made fresh to order.",
      },
    ],
  },
  {
    id: "aggarwal",
    slug: "aggarwal-corporate-heights",
    name: "Aggarwal Corporate Heights",
    fullTitle:
      "KoffeeMan at Aggarwal Corporate Heights — Netaji Subhash Place, Pitampura",
    address:
      "Shop G8, Aggarwal Corporate Heights, NSP, Pitampura, Delhi – 110034",
    streetAddress: "Shop G8, Aggarwal Corporate Heights, Netaji Subhash Place",
    locality: "Pitampura",
    region: "Delhi",
    postalCode: "110034",
    country: "IN",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Aggarwal+Corporate+Heights+NSP+Pitampura+Delhi",
    note: "Ground floor outlet (Shop G8) with outdoor seating area.",
    missingData: {
      exactUnitNumber: {
        confirmed: true,
        value: "Shop G8",
        statusNote:
          "Shop G8 is verified. Additional landmark/block details pending owner confirmation if applicable.",
      },
      exactMapPin: {
        confirmed: false,
        statusNote:
          "Exact geographic coordinates and map pin pending owner confirmation. Verified building search query provided.",
      },
      openingHours: {
        confirmed: false,
        statusNote:
          "Opening hours pending owner confirmation. Please call shared business line before visiting.",
      },
      outletSpecificPhone: {
        confirmed: false,
        phoneTel: "tel:+919811161923",
        displayPhone: "+91 9811161923",
        statusNote:
          "Direct outlet telephone line is unmapped. Central business contact line shown until confirmed.",
      },
      directZomatoUrl: {
        confirmed: false,
        fallbackUrl: "https://www.zomato.com/ncr/pitampura-delhi-restaurants",
        statusNote:
          "Direct Zomato listing URL pending owner confirmation. Interim Pitampura restaurant search provided.",
      },
      googleBusinessProfile: {
        confirmed: false,
        statusNote:
          "Google Business Profile claim/verification pending owner action.",
      },
      genuinePhotos: {
        confirmed: false,
        statusNote:
          "Prototype/sample photos are illustrative placeholders pending verified KoffeeMan photography.",
      },
    },
    pageTitle:
      "Café near Aggarwal Corporate Heights — KoffeeMan NSP, Pitampura",
    metaDescription:
      "Visit KoffeeMan at Shop G8, Aggarwal Corporate Heights, Netaji Subhash Place (NSP), Pitampura. Fresh coffee, thick shakes, pasta, and quick bites.",
    h1: "KoffeeMan at Aggarwal Corporate Heights, NSP",
    kicker: "NSP Pitampura Outlet",
    heroDescription:
      "Meet for coffee at Aggarwal Corporate Heights. Featuring ground-floor outdoor seating at Shop G8 in NSP Pitampura, serving rich shakes, creamy pasta, hot beverages, and savoury snacks.",
    highlights: [
      "Located at Shop G8, Aggarwal Corporate Heights with comfortable outdoor seating",
      "Creamy dessert shakes, loaded cold coffee variants, and mojitos",
      "Comfort food menu featuring pasta, grilled sandwiches, and loaded fries",
      "Doorstep delivery across Netaji Subhash Place and Pitampura via Swiggy",
    ],
    recommendedCategories: [
      {
        title: "Coffee & Beverages",
        slug: "coffee",
        description: "Hot classic coffees, cold brews, and seasonal specials.",
      },
      {
        title: "Shakes",
        slug: "shakes",
        description: "Creamy dessert shakes blended fresh.",
      },
      {
        title: "Quick Bites & Pasta",
        slug: "quick-bites",
        description: "Comfort pasta, crispy snacks, and warm bowls.",
      },
    ],
  },
] as const;

export function getOutletBySlug(slug: string): OutletLocation | undefined {
  return outletLocations.find(
    (loc) => loc.slug === slug || loc.id === slug
  );
}
