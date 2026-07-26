import type { Metadata } from "next";
import { Shield, Award, Users, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GoldButton from "@/components/shared/GoldButton";

export const metadata: Metadata = {
  title: "About Us | Best Property Dealer in Faridabad Since 2012",
  description:
    "OM Estate — Faridabad's most trusted real estate agency since 2012. Meet our team of expert property consultants. 12+ years experience, 2000+ clients, ₹500Cr+ in deals across Faridabad & Delhi NCR.",
  alternates: { canonical: "https://omestate.online/about" },
  openGraph: {
    title: "About OM Estate | Best Property Dealer in Faridabad",
    description: "12+ years of real estate expertise in Faridabad & NCR. Transparent, client-first approach. Meet the team.",
    url: "https://omestate.online/about",
  },
};

const pillars = [
  {
    Icon: Shield,
    title: "Trust & Transparency",
    description:
      "Every transaction is conducted with complete transparency. No hidden charges, no misleading information. Your trust is our most valuable asset.",
  },
  {
    Icon: Award,
    title: "Market Expertise",
    description:
      "12+ years of deep local knowledge means we know every sector, every price movement, and every opportunity in the Faridabad real estate market.",
  },
  {
    Icon: Users,
    title: "Client-First Approach",
    description:
      "We listen before we advise. Understanding your needs, budget, and vision is the foundation of every successful transaction we facilitate.",
  },
  {
    Icon: TrendingUp,
    title: "Investment Insight",
    description:
      "Beyond transactions, we provide strategic guidance on property investment, helping clients build wealth through informed real estate decisions.",
  },
];

const team = [
  { name: "Rajiv Agarwal", role: "Founder & MD", experience: "15+ years" },
  { name: "Sunita Sharma", role: "Head — Residential", experience: "10+ years" },
  { name: "Vikram Mehta", role: "Head — Commercial", experience: "8+ years" },
  { name: "Priya Kapoor", role: "Head — Industrial", experience: "7+ years" },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-surface py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/3 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="font-josefin text-xs tracking-[0.35em] uppercase text-gold mb-5">Our Story</p>
            <h1
              className="font-cinzel font-semibold text-white leading-tight mb-8"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
            >
              About
              <br />
              <span className="text-gold">OM Estate</span>
            </h1>
            <p className="font-josefin text-text-secondary text-lg leading-relaxed max-w-2xl">
              Founded in 2012, OM Estate has grown from a boutique agency in Sector 16 to Faridabad&apos;s
              most trusted name in real estate — with over 500 successful transactions and a reputation
              built on integrity, expertise, and genuine client care.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-bg px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <p className="font-josefin text-xs tracking-[0.35em] uppercase text-gold mb-5">Our Journey</p>
            <h2 className="font-cinzel text-3xl font-semibold text-white mb-6 leading-tight">
              Built on a Decade of Faridabad&apos;s Growth
            </h2>
            <div className="space-y-4 font-josefin text-text-secondary text-sm leading-relaxed">
              <p>
                When Rajiv Agarwal started OM Estate in 2012, Faridabad was at an inflection point —
                rapid industrialization, infrastructure investment, and a growing professional class
                were transforming the city&apos;s real estate landscape.
              </p>
              <p>
                We built our reputation one honest deal at a time. No overselling, no pressure tactics —
                just deep knowledge of local market dynamics and an unwavering commitment to finding
                the right property for every client, whether they&apos;re a young family, an entrepreneur,
                or a seasoned investor.
              </p>
              <p>
                Today, OM Estate is the go-to agency for residential, commercial, and industrial
                properties across Faridabad, with a network that spans IMT to sector housing to
                prime NH-48 commercial corridors.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Properties Transacted" },
                { value: "₹500Cr+", label: "Deal Value" },
                { value: "2000+", label: "Happy Clients" },
                { value: "12+", label: "Years in Faridabad" },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface-elevated border border-border-dark p-6 text-center">
                  <p className="font-cinzel text-3xl font-bold text-gold mb-2">{stat.value}</p>
                  <p className="font-josefin text-xs text-text-muted tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Why OM Estate"
            title="What Sets Us Apart"
            subtitle="We don't just sell properties — we build relationships and help clients make the most important financial decisions of their lives."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.1}>
                <div className="flex gap-5 p-6 bg-surface-elevated border border-border-dark hover:border-gold/20 transition-all">
                  <div className="w-12 h-12 bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <pillar.Icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-white font-medium text-lg mb-2">{pillar.title}</h3>
                    <p className="font-josefin text-text-muted text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-bg px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our People"
            title="Meet the Team"
            subtitle="Specialists who live and breathe Faridabad real estate, dedicated to delivering exceptional results."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="bg-surface-elevated border border-border-dark p-6 text-center group hover:border-gold/20 transition-all">
                  <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-cinzel text-gold font-semibold text-xl">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-white font-medium mb-1">{member.name}</h3>
                  <p className="font-josefin text-gold text-xs tracking-wide mb-2">{member.role}</p>
                  <p className="font-josefin text-text-muted text-xs">{member.experience}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-surface text-center">
        <AnimatedSection>
          <p className="font-josefin text-xs tracking-[0.35em] uppercase text-gold mb-4">Get Started</p>
          <h2 className="font-cinzel text-3xl font-semibold text-white mb-6">
            Ready to Find Your Property?
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <GoldButton href="/properties" size="lg">Browse Listings</GoldButton>
            <GoldButton href="/contact" variant="outline" size="lg">Contact Us</GoldButton>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
