"use client";

import { useState } from "react";
import { Send, MessageCircle, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";

type FormState = {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  budget: string;
  location: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  propertyType: "",
  budget: "",
  location: "",
  message: "",
};

const propertyTypes = [
  "Residential — Buy",
  "Commercial — Buy",
  "Residential Plot",
  "Commercial Plot",
  "Residential — Rent",
  "Commercial — Rent/Lease",
  "Industrial Property",
];

const budgets = [
  "Under ₹30 Lakhs",
  "₹30L – ₹60L",
  "₹60L – ₹1 Crore",
  "₹1Cr – ₹2Cr",
  "₹2Cr – ₹5Cr",
  "Above ₹5 Crore",
  "Rental Budget",
];

export default function LeadGenForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s|-/g, "")))
      newErrors.phone = "Enter a valid 10-digit mobile number";
    return newErrors;
  };

  const buildWAMessage = (f: FormState) => {
    const lines = [
      `Hi, I found Om Estate online and would like a property consultation.`,
      ``,
      `*Name:* ${f.name}`,
      `*Phone:* ${f.phone}`,
      f.email ? `*Email:* ${f.email}` : null,
      f.propertyType ? `*Looking for:* ${f.propertyType}` : null,
      f.budget ? `*Budget:* ${f.budget}` : null,
      f.location ? `*Location:* ${f.location}` : null,
      f.message ? `*Requirements:* ${f.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/919810071925?text=${encodeURIComponent(lines)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    // Redirect to WhatsApp with pre-filled enquiry after a brief delay
    setTimeout(() => {
      window.open(buildWAMessage(form), "_blank");
    }, 800);
  };

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const waLink = `https://wa.me/919810071925?text=${encodeURIComponent(
    "Hello, I'd like to enquire about a property in Faridabad / NCR."
  )}`;

  return (
    <section className="section-padding bg-surface px-6 relative overflow-hidden" id="enquire">
      {/* Decorative gold line on left */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gold-gradient opacity-60" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left — copy */}
          <div className="lg:col-span-2">
            <AnimatedSection direction="left">
              <p className="font-josefin text-xs tracking-[0.35em] uppercase text-gold mb-5">
                Free Consultation
              </p>
              <h2
                className="font-cinzel font-semibold text-white leading-tight mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
              >
                Looking for a
                <br />
                <span className="text-gold">Property?</span>
                <br />
                Let&apos;s Talk.
              </h2>
              <p className="font-josefin text-text-muted text-sm leading-relaxed mb-8">
                Share your requirements and our Faridabad experts will get back to you
                within 2 hours — no obligation, no pressure.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Personal guidance from local experts",
                  "1000+ residential, commercial & plot listings",
                  "Paperwork & registration assistance",
                  "Transparent pricing, no hidden fees",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle size={15} className="text-gold shrink-0" />
                    <span className="font-josefin text-sm text-text-secondary">{point}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp shortcut */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-josefin text-sm tracking-[0.1em] uppercase hover:bg-[#25D366]/20 transition-colors"
              >
                <MessageCircle size={17} />
                Prefer WhatsApp? Chat Now
              </a>
            </AnimatedSection>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <AnimatedSection direction="right">
              {submitted ? (
                <div className="p-10 bg-surface-elevated border border-gold/20 flex flex-col items-center justify-center text-center min-h-[480px]">
                  <div className="w-16 h-16 bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                    <CheckCircle size={28} className="text-gold" />
                  </div>
                  <h3 className="font-cinzel text-white text-2xl font-medium mb-3">
                    Enquiry Received!
                  </h3>
                  <p className="font-josefin text-text-muted text-sm max-w-sm leading-relaxed mb-8">
                    Thank you, <span className="text-white">{form.name}</span>. Our team will call
                    you at <span className="text-gold">{form.phone}</span> within 2 hours.
                    <br className="hidden sm:block" /> For immediate assistance:
                  </p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-[#25D366] text-white font-josefin text-sm tracking-[0.1em] uppercase hover:bg-[#22c55e] transition-colors"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Us Now
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="p-8 bg-surface-elevated border border-border-dark space-y-5"
                >
                  <h3 className="font-cinzel text-white text-xl font-medium mb-6">
                    Property Enquiry Form
                  </h3>

                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Your full name"
                        className={`w-full bg-surface border text-text-secondary font-josefin text-sm px-4 py-3 focus:outline-none transition-colors placeholder:text-text-muted ${
                          errors.name ? "border-red-500/60" : "border-border-dark focus:border-gold/50"
                        }`}
                      />
                      {errors.name && (
                        <p className="font-josefin text-xs text-red-400 mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={set("phone")}
                        placeholder="10-digit mobile number"
                        className={`w-full bg-surface border text-text-secondary font-josefin text-sm px-4 py-3 focus:outline-none transition-colors placeholder:text-text-muted ${
                          errors.phone ? "border-red-500/60" : "border-border-dark focus:border-gold/50"
                        }`}
                      />
                      {errors.phone && (
                        <p className="font-josefin text-xs text-red-400 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
                      Email Address{" "}
                      <span className="text-text-muted normal-case tracking-normal">(optional)</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@example.com"
                      className="w-full bg-surface border border-border-dark text-text-secondary font-josefin text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-muted"
                    />
                  </div>

                  {/* Property Type + Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
                        Property Type
                      </label>
                      <select
                        value={form.propertyType}
                        onChange={set("propertyType")}
                        className="w-full bg-surface border border-border-dark text-text-secondary font-josefin text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                      >
                        <option value="" disabled>
                          Select type…
                        </option>
                        {propertyTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
                        Budget Range
                      </label>
                      <select
                        value={form.budget}
                        onChange={set("budget")}
                        className="w-full bg-surface border border-border-dark text-text-secondary font-josefin text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                      >
                        <option value="" disabled>
                          Select budget…
                        </option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
                      Preferred Location
                    </label>
                    <input
                      type="text"
                      value={form.location}
                      onChange={set("location")}
                      placeholder="e.g. Sector 16 Faridabad, Gurugram, Noida…"
                      className="w-full bg-surface border border-border-dark text-text-secondary font-josefin text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-muted"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
                      Additional Requirements{" "}
                      <span className="text-text-muted normal-case tracking-normal">(optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="BHK preference, floor, amenities, timeline…"
                      className="w-full bg-surface border border-border-dark text-text-secondary font-josefin text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-muted resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gold text-bg font-josefin text-sm font-500 tracking-[0.15em] uppercase hover:bg-gold-accent transition-colors"
                  >
                    <Send size={15} />
                    Get Free Consultation
                  </button>

                  <p className="font-josefin text-xs text-text-muted text-center leading-relaxed">
                    Our team will contact you within 2 hours · Mon–Sat 10 AM–7 PM
                  </p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
