import { Home, Building2, Factory } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

const services = [
  {
    Icon: Home,
    title: "Residential",
    subtitle: "Homes & Apartments",
    description:
      "Find your perfect home among our curated selection of flats, builder floors, independent houses, villas, and residential plots across Faridabad's most sought-after sectors.",
    features: ["2BHK & 3BHK Flats", "Builder Floors", "Independent Villas", "Residential Plots"],
  },
  {
    Icon: Building2,
    title: "Commercial",
    subtitle: "Offices & Retail",
    description:
      "Power your business with prime commercial spaces — from Grade-A offices and retail showrooms to co-working hubs and established high-street shops.",
    features: ["Office Spaces", "Showrooms", "Retail Shops", "Co-Working Spaces"],
  },
  {
    Icon: Factory,
    title: "Industrial",
    subtitle: "Plots & Sheds",
    description:
      "Establish your enterprise with industrial plots and factory sheds in IMT Faridabad and surrounding industrial zones with excellent infrastructure and connectivity.",
    features: ["IMT Industrial Plots", "Factory Sheds", "Warehouse Spaces", "Industrial Land"],
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-surface px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Expertise"
          subtitle="12 years of deep market knowledge across every property segment in Faridabad."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.15}>
              <div className="group p-8 border border-border-dark hover:border-gold/30 transition-all duration-400 bg-surface-elevated hover:bg-bg h-full">
                <div className="w-14 h-14 bg-gold/10 border border-gold/20 flex items-center justify-center mb-7 group-hover:bg-gold/20 transition-colors">
                  <service.Icon size={24} className="text-gold" />
                </div>
                <p className="font-josefin text-xs tracking-[0.25em] text-gold uppercase mb-2">
                  {service.subtitle}
                </p>
                <h3 className="font-cinzel text-2xl font-medium text-white mb-4">{service.title}</h3>
                <p className="font-josefin text-text-muted text-sm leading-relaxed mb-7">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 font-josefin text-sm text-text-secondary">
                      <span className="w-1 h-1 bg-gold rounded-full shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
