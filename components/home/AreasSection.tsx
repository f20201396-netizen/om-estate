import { MapPin } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

const areas = [
  {
    city: "Faridabad",
    description: "Our home market — every sector, every pocket.",
    zones: [
      "Old Faridabad",
      "NIT",
      "Sector 14–21",
      "Sector 28–46",
      "Neharpar / Greater Faridabad",
      "BPTP Park",
      "IMT Faridabad",
      "Sector 81–89",
    ],
    primary: true,
  },
  {
    city: "Gurugram",
    description: "Premium residential & commercial corridors.",
    zones: ["DLF Phases", "Sohna Road", "Golf Course Extension", "Dwarka Expressway"],
    primary: false,
  },
  {
    city: "Noida & Greater Noida",
    description: "High-growth investment zones across the Yamuna Expressway belt.",
    zones: ["Sector 137–150", "Greater Noida West", "Knowledge Park", "Yamuna Expressway"],
    primary: false,
  },
  {
    city: "Delhi",
    description: "Prime South & Central Delhi residential & commercial.",
    zones: ["South Delhi", "Vasant Kunj", "Okhla", "Lajpat Nagar"],
    primary: false,
  },
  {
    city: "Ghaziabad",
    description: "Affordable residential and emerging commercial hubs.",
    zones: ["Indirapuram", "Vaishali", "Raj Nagar Extension", "NH-58 Corridor"],
    primary: false,
  },
];

export default function AreasSection() {
  return (
    <section className="section-padding bg-bg px-6" id="areas">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Pan-NCR Coverage"
          title="Locations We Serve"
          subtitle="From affordable plots in Neharpar to premium residences in South Delhi — we cover all of NCR."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <AnimatedSection key={area.city} delay={i * 0.1}>
              <div
                className={`p-6 border h-full transition-all duration-300 hover:border-gold/30 ${
                  area.primary
                    ? "border-gold/30 bg-surface-elevated"
                    : "border-border-dark bg-surface-elevated hover:bg-surface"
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`w-9 h-9 flex items-center justify-center shrink-0 border ${
                      area.primary
                        ? "bg-gold/15 border-gold/40"
                        : "bg-gold/8 border-gold/15"
                    }`}
                  >
                    <MapPin size={14} className="text-gold" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-cinzel text-white font-medium text-base">{area.city}</h3>
                      {area.primary && (
                        <span className="font-josefin text-[9px] tracking-[0.2em] uppercase bg-gold/10 border border-gold/20 text-gold px-2 py-0.5">
                          Primary
                        </span>
                      )}
                    </div>
                    <p className="font-josefin text-text-muted text-xs mt-0.5">{area.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {area.zones.map((zone) => (
                    <span
                      key={zone}
                      className="font-josefin text-xs text-text-secondary border border-border-dark px-2.5 py-1 hover:border-gold/30 hover:text-gold transition-colors cursor-default"
                    >
                      {zone}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* NCR catch-all card */}
          <AnimatedSection delay={0.5}>
            <div className="p-6 border border-dashed border-border-dark bg-transparent h-full flex flex-col items-center justify-center text-center min-h-[180px] hover:border-gold/20 transition-colors">
              <p className="font-josefin text-xs tracking-[0.25em] uppercase text-gold mb-3">
                Don&apos;t see your area?
              </p>
              <p className="font-josefin text-sm text-text-muted leading-relaxed max-w-xs">
                We source properties across all NCR districts. Call us with your requirement.
              </p>
              <a
                href="tel:+919810071925"
                className="mt-5 font-josefin text-sm text-gold tracking-wide hover:text-gold-accent transition-colors"
              >
                +91 98100 71925 →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
