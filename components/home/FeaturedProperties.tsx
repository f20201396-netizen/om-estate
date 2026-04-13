import SectionHeader from "@/components/shared/SectionHeader";
import PropertyCard from "@/components/properties/PropertyCard";
import GoldButton from "@/components/shared/GoldButton";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { getFeaturedProperties } from "@/lib/data";

export default function FeaturedProperties() {
  const featured = getFeaturedProperties().slice(0, 6);

  return (
    <section className="section-padding bg-bg px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Handpicked for You"
          title="Featured Properties"
          subtitle="Explore our curated selection of premium residential, commercial, and industrial properties across Faridabad."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((property, i) => (
            <AnimatedSection key={property.id} delay={i * 0.1}>
              <PropertyCard property={property} />
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center">
          <GoldButton href="/properties" variant="outline" size="lg">
            View All Properties
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
