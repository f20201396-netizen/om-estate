import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Property Dealer Faridabad — Free Consultation",
  description:
    "Contact OM Estate — Faridabad's leading property dealer. Call +91 98100 71925 or WhatsApp for a free property consultation. Buy, sell, rent properties in Faridabad & Delhi NCR.",
  alternates: { canonical: "https://omestate.online/contact" },
  openGraph: {
    title: "Contact OM Estate | Free Property Consultation Faridabad",
    description: "Get free expert advice on buying, selling or renting property in Faridabad & NCR. Call or WhatsApp: +91 98100 71925.",
    url: "https://omestate.online/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
