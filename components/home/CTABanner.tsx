import { MessageCircle, Phone } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function CTABanner() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface-elevated to-surface" />
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-gold/3 to-transparent pointer-events-none" />
      <div className="absolute left-0 top-0 w-1 h-full bg-gold-gradient" />
      <div className="absolute right-0 top-0 w-1 h-full bg-gold-gradient" />

      <div className="relative max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="font-josefin text-sm tracking-[0.35em] text-gold uppercase mb-6">
            Ready to Begin?
          </p>
          <h2
            className="font-cinzel font-semibold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            Find Your Property Today
          </h2>
          <p className="font-josefin text-text-muted text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you&apos;re buying your first home, expanding your business, or making an industrial
            investment — our team is ready to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919810071925?text=Hello%2C%20I%27m%20interested%20in%20a%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#25D366] text-white font-josefin font-500 text-sm tracking-[0.1em] uppercase hover:bg-[#22c55e] transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <a
              href="tel:+919810071925"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 border border-gold text-gold font-josefin font-500 text-sm tracking-[0.1em] uppercase hover:bg-gold hover:text-bg transition-all"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
