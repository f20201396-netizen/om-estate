"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-surface py-20 px-6 border-b border-border-dark">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="font-josefin text-xs tracking-[0.35em] uppercase text-gold mb-5">Get in Touch</p>
            <h1
              className="font-cinzel font-semibold text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
            >
              Contact
              <br />
              <span className="text-gold">OM Estate</span>
            </h1>
            <p className="font-josefin text-text-muted mt-5 text-lg max-w-xl">
              Ready to buy, sell, rent, or lease? Our team is available six days a week
              to help you find the perfect property.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection direction="left">
              <h2 className="font-cinzel text-xl text-white font-medium mb-6">Reach Us</h2>
              <div className="space-y-5">
                {[
                  {
                    Icon: MapPin,
                    label: "Office Address",
                    value: "Sector 16 Market, Faridabad, Haryana — 121002",
                    href: "https://maps.google.com/?q=Sector+16+Faridabad",
                  },
                  {
                    Icon: Phone,
                    label: "Phone",
                    value: "+91 98100 71925",
                    href: "tel:+919810071925",
                  },
                  {
                    Icon: Mail,
                    label: "Email",
                    value: "info@omestate.in",
                    href: "mailto:info@omestate.in",
                  },
                  {
                    Icon: Clock,
                    label: "Office Hours",
                    value: "Mon – Sat: 10:00 AM – 7:00 PM",
                    href: null,
                  },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4 group">
                    <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-1">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-josefin text-sm text-text-secondary hover:text-gold transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-josefin text-sm text-text-secondary">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 pt-8 border-t border-border-dark">
                <a
                  href="https://wa.me/919810071925?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20a%20property."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-josefin text-sm tracking-[0.15em] uppercase hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageCircle size={18} />
                  Chat with Us on WhatsApp
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatedSection direction="right">
              {submitted ? (
                <div className="p-10 bg-surface-elevated border border-gold/20 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center mb-5">
                    <Send size={22} className="text-gold" />
                  </div>
                  <p className="font-cinzel text-white text-2xl mb-3">Message Sent!</p>
                  <p className="font-josefin text-text-muted text-sm max-w-sm">
                    Thank you for reaching out. Our team will contact you within 24 business hours.
                    For urgent queries, please WhatsApp us directly.
                  </p>
                </div>
              ) : (
                <div className="p-8 bg-surface-elevated border border-border-dark">
                  <h2 className="font-cinzel text-xl text-white font-medium mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          placeholder="Your name"
                          className="w-full bg-surface border border-border-dark text-text-secondary font-josefin text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-muted"
                        />
                      </div>
                      <div>
                        <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                          placeholder="+91 98765 43210"
                          className="w-full bg-surface border border-border-dark text-text-secondary font-josefin text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-muted"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        placeholder="you@example.com"
                        className="w-full bg-surface border border-border-dark text-text-secondary font-josefin text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-muted"
                      />
                    </div>

                    <div>
                      <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
                        Your Message
                      </label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        placeholder="Tell us what you're looking for..."
                        className="w-full bg-surface border border-border-dark text-text-secondary font-josefin text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-muted resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 bg-gold text-bg font-josefin text-sm font-500 tracking-[0.15em] uppercase hover:bg-gold-accent transition-colors"
                    >
                      <Send size={15} />
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 border border-border-dark overflow-hidden">
          <div className="h-80 bg-surface-elevated relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112076.50580025487!2d77.2495!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd26f8e64bd9%3A0x7a7b042e29e748b!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OM Estate — Faridabad Office"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
