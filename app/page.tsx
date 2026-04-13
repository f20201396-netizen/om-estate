import HeroSection from "@/components/home/HeroSection";
import QuickSearch from "@/components/home/QuickSearch";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickSearch />
      <FeaturedProperties />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
