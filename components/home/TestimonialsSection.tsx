import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-surface px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Client Stories"
          title="What Our Clients Say"
          subtitle="Real experiences from families and businesses who trusted OM Estate with their most important decisions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={testimonial.id} delay={i * 0.12}>
              <div className="p-8 bg-surface-elevated border border-border-dark hover:border-gold/20 transition-all duration-300 h-full flex flex-col">
                <Quote size={28} className="text-gold/30 mb-6" />
                <p className="font-josefin text-text-secondary text-sm leading-relaxed flex-1 mb-8 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-border-dark">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <span className="font-cinzel text-gold font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-josefin font-500 text-white text-sm">{testimonial.name}</p>
                    <p className="font-josefin text-text-muted text-xs truncate">
                      {testimonial.propertyType} · {testimonial.location}
                    </p>
                  </div>
                  <div className="flex gap-0.5 shrink-0">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} size={12} className="text-gold fill-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
