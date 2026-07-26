import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import QuickSearch from "@/components/home/QuickSearch";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import AreasSection from "@/components/home/AreasSection";
import LeadGenForm from "@/components/home/LeadGenForm";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTABanner from "@/components/home/CTABanner";
import SeoContent from "@/components/home/SeoContent";

export const metadata: Metadata = {
  title: "OM Estate | #1 Property Dealer in Faridabad & Delhi NCR",
  description:
    "OM Estate — Faridabad's most trusted real estate agency. Buy, sell, rent & lease residential flats, commercial shops, offices & industrial plots in Faridabad, Gurugram, Noida & Delhi NCR. 12+ years · 2000+ clients · Free consultation.",
  alternates: { canonical: "https://omestate.online" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickSearch />
      <FeaturedProperties />
      <ServicesSection />
      <StatsSection />
      <AreasSection />
      <LeadGenForm />
      <TestimonialsSection />
      <CTABanner />
      <SeoContent />
    </>
  );
}
