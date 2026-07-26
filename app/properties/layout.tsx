import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties for Sale & Rent in Faridabad & Delhi NCR",
  description:
    "Browse 1000+ properties in Faridabad & NCR — 2BHK 3BHK flats, builder floors, villas, commercial shops, offices, industrial plots. Buy, sell, rent, lease. Free site visits.",
  keywords: [
    "property for sale in Faridabad",
    "flat for sale Faridabad",
    "2BHK flat Faridabad",
    "3BHK flat Faridabad",
    "commercial property Faridabad",
    "plot for sale Faridabad",
    "industrial plot IMT Faridabad",
    "property for rent Faridabad",
    "shop for rent Faridabad",
    "office space Faridabad",
    "builder floor Faridabad",
    "property in Neharpar",
    "property in sector 15 Faridabad",
    "property in sector 16 Faridabad",
  ],
  alternates: { canonical: "https://omestate.online/properties" },
  openGraph: {
    title: "Properties for Sale & Rent in Faridabad & NCR | OM Estate",
    description: "1000+ residential, commercial & industrial properties across Faridabad & Delhi NCR. Free site visits arranged.",
    url: "https://omestate.online/properties",
  },
};

export default function PropertiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
