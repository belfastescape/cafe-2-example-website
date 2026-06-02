import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk, Newsreader, Figtree } from "next/font/google";
import { site } from "@/content/site";
import { resolveTheme } from "@/lib/theme";
import "./globals.css";
import "./themes.css";

const instrument = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--font-instrument", display: "swap" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-newsreader", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });

const fontVars = [instrument, hanken, newsreader, figtree].map((f) => f.variable).join(" ");

export const metadata: Metadata = {
  metadataBase: new URL("https://littlenook.cafe"),
  title: `${site.name} — ${site.tagline}`,
  description: site.metaDescription,
  openGraph: {
    title: site.name,
    description: site.metaDescription,
    images: [site.hero.image],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const t = resolveTheme();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: site.name,
    description: site.metaDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.visit.address[0],
      addressLocality: site.visit.address[1],
    },
    telephone: site.visit.phone,
    email: site.visit.email,
    geo: { "@type": "GeoCoordinates", latitude: site.visit.geo.lat, longitude: site.visit.geo.lng },
    openingHours: ["Mo-Fr 07:30-16:00", "Sa 08:00-17:00", "Su 08:30-15:00"],
    servesCuisine: "Cafe",
    priceRange: "££",
  };

  return (
    <html
      lang="en"
      data-direction={t.direction}
      data-hero={t.hero}
      data-mood={t.mood}
      className={fontVars}
      style={{ ["--accent" as string]: t.accent, ["--radius" as string]: `${t.radius}px` }}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
