import type { Metadata } from "next";
import { Cinzel, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const BASE_URL = "https://omestate.online";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "OM Estate | #1 Property Dealer in Faridabad & Delhi NCR",
    template: "%s | OM Estate Faridabad",
  },
  description:
    "OM Estate — Faridabad's most trusted real estate agency. Buy, sell, rent & lease residential flats, commercial shops, offices, industrial plots in Faridabad, Gurugram, Noida, Delhi NCR. 12+ years · 2000+ clients · Free consultation.",
  keywords: [
    "property dealer in Faridabad",
    "real estate Faridabad",
    "property in Faridabad",
    "buy flat in Faridabad",
    "property for sale in Faridabad",
    "commercial property Faridabad",
    "plot for sale Faridabad",
    "property dealer NCR",
    "real estate agent Delhi NCR",
    "property in Neharpar Faridabad",
    "industrial plot IMT Faridabad",
    "rent flat Faridabad",
    "2BHK 3BHK flat Faridabad",
    "builder floor Faridabad",
    "property for rent Faridabad",
    "real estate consultant Faridabad",
    "best property dealer Faridabad",
    "buy property Delhi NCR",
    "shop for rent Faridabad",
    "office space Faridabad",
  ],
  authors: [{ name: "OM Estate", url: BASE_URL }],
  creator: "OM Estate",
  publisher: "OM Estate",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "OM Estate",
    title: "OM Estate | #1 Property Dealer in Faridabad & Delhi NCR",
    description:
      "Buy, sell, rent or lease residential, commercial & industrial properties in Faridabad & NCR. 12+ years experience · 2000+ happy clients · Free property consultation.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "OM Estate — Faridabad Real Estate" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OM Estate | Property Dealer Faridabad & Delhi NCR",
    description: "Buy, sell & rent properties in Faridabad & NCR. Residential · Commercial · Industrial. Free consultation.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: BASE_URL },
  verification: {},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["RealEstateAgent", "LocalBusiness"],
      "@id": `${BASE_URL}/#business`,
      name: "OM Estate",
      alternateName: "Om Estate Faridabad",
      description:
        "OM Estate is Faridabad's leading real estate agency dealing in residential, commercial, and industrial properties across Faridabad and Delhi NCR. 12+ years of experience, 2000+ satisfied clients.",
      url: BASE_URL,
      telephone: "+91-98100-71925",
      email: "omestate@gmail.com",
      foundingDate: "2012",
      priceRange: "₹₹₹",
      image: `${BASE_URL}/og-image.jpg`,
      logo: `${BASE_URL}/logo.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "C-20, G.F., 81 Puri High Street, Sector 81",
        addressLocality: "Faridabad",
        addressRegion: "Haryana",
        postalCode: "121002",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.4089,
        longitude: 77.3178,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "19:00",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Faridabad" },
        { "@type": "City", name: "Gurugram" },
        { "@type": "City", name: "Noida" },
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Ghaziabad" },
        { "@type": "City", name: "Greater Noida" },
      ],
      knowsAbout: [
        "Residential Properties",
        "Commercial Properties",
        "Industrial Properties",
        "Property Investment",
        "Real Estate Faridabad",
        "Property Registration",
      ],
      sameAs: [],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "247",
        bestRating: "5",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "OM Estate",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/properties?location={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${josefinSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-text-primary font-josefin antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
