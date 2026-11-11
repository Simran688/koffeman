/**
 * Central business facts and external destination URLs.
 *
 * Never invent opening hours, ratings, store counts, awards,
 * or direct Zomato outlet URLs without owner confirmation.
 */

export const siteConfig = {
  siteUrl: "https://koffeeman.in",
  brandName: "Koffee Man",
  brandAltName: "KoffeeMan",
  tagline: "Life happens. Koffee helps.",
  supportingLine: "One spot. Endless cravings.",
  brandSignOff: "Taste the vibe. Love the brew.",
  logoTagline: "ON THE WAY TO GIVE YOU ENERGY",
  slogan: "Good Food. Good Coffee. Good Vibes.",
  announcement: "Good food · Good coffee · Good vibes   ✦   NSP, Pitampura",

  founder: {
    name: "Rohit Chhabra",
    firstFranchiseYear: "2022",
    kicker: "A note from our founder",
    heading: "Hi, I'm Rohit Chhabra.",
    paragraphs: [
      "KoffeeMan began with a simple idea: I wanted to serve premium-quality coffee, with a variety people could genuinely enjoy. I started with a roadside van, taking that idea to people one cup at a time.",
      "As more people connected with the idea, we took an important next step and opened our first franchise in 2022.",
      "The heart of KoffeeMan is still the same: quality coffee, plenty of choice, and a welcoming place for every kind of craving. Thank you for being part of this journey.",
    ],
    signOff: "See you over a cup,",
    signature: "Rohit",
    photoTag: "From a roadside van to our first franchise.",
  },

  contact: {
    primaryPhone: "9811161923",
    secondaryPhone: "8700020291",
    primaryPhoneTel: "tel:+919811161923",
    secondaryPhoneTel: "tel:+918700020291",
    instagramHandle: "@koffeeman_",
    instagramUrl: "https://www.instagram.com/koffeeman_/",
  },

  ordering: {
    swiggyUrl: "https://www.swiggy.com/city/delhi/koffeeman-nsp-rest1175563",
    // Direct Zomato outlet URL is not yet confirmed by owner.
    // Using Pitampura/NSP discovery search as the documented interim destination.
    zomatoSearchUrl: "https://www.zomato.com/ncr/pitampura-delhi-restaurants",
  },

  outlets: [
    {
      id: "gd-itl",
      slug: "gd-itl-tower",
      name: "GD-ITL Tower",
      url: "/visit-us/gd-itl-tower",
      // Exact shop/floor number is not yet supplied by the owner. Do not invent one.
      address: "Netaji Subhash Place, Pitampura, Delhi",
      mapsQueryUrl:
        "https://www.google.com/maps/search/?api=1&query=GD-ITL+Tower+Netaji+Subhash+Place+Pitampura+Delhi",
    },
    {
      id: "aggarwal",
      slug: "aggarwal-corporate-heights",
      name: "Aggarwal Corporate Heights",
      url: "/visit-us/aggarwal-corporate-heights",
      address:
        "Shop G8, Aggarwal Corporate Heights, NSP, Pitampura, Delhi – 110034",
      mapsQueryUrl:
        "https://www.google.com/maps/search/?api=1&query=Aggarwal+Corporate+Heights+NSP+Pitampura+Delhi",
    },
  ],

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Our Menu", href: "/menu" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Visit Us", href: "/visit-us" },
    { label: "Contact", href: "/contact" },
  ],

  footerLinks: [
    { label: "Home", href: "/" },
    { label: "Our Menu", href: "/menu" },
    { label: "Our Story", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Franchise", href: "/franchise" },
    { label: "Events", href: "/events" },
    { label: "Visit Us", href: "/visit-us" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

