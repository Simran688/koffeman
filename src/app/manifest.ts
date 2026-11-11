import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.brandName,
    short_name: siteConfig.brandAltName,
    description: `${siteConfig.brandName} café in NSP, Netaji Subhash Place, Pitampura, Delhi.`,
    start_url: "/",
    display: "standalone",
    background_color: "#F4E4CA",
    theme_color: "#392929",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

