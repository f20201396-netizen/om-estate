"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

interface EnquiryFormProps {
  propertyTitle: string;
}

export default function EnquiryForm({ propertyTitle }: EnquiryFormProps) {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to your backend/CRM
    setSubmitted(true);
  };

  const waMessage = encodeURIComponent(
    `Hello, I'm interested in: ${propertyTitle}. Please share more details.`
  );

  if (submitted) {
    return (
      <div className="p-8 bg-surface-elevated border border-gold/20 text-center">
        <div className="w-14 h-14 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send size={20} className="text-gold" />
        </div>
        <p className="font-cinzel text-white text-lg mb-2">Enquiry Sent!</p>
        <p className="font-josefin text-text-muted text-sm">
          We&apos;ll contact you within 24 hours. Or reach us instantly on WhatsApp.
        </p>
        <a
          href={`https://wa.me/919999999999?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-josefin text-sm tracking-widest uppercase"
        >
          <MessageCircle size={16} />
          WhatsApp Us
        </a>
      </div>
    );
  }

  return (
    <div className="p-8 bg-surface-elevated border border-border-dark">
      <h3 className="font-cinzel text-xl text-white font-medium mb-2">Enquire About This Property</h3>
      <p className="font-josefin text-text-muted text-sm mb-6">
        Leave your details and our expert will get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
            Your Name
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Rajesh Kumar"
            className="w-full bg-surface border border-border-dark text-text-secondary font-josefin text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-muted"
          />
        </div>

        <div>
          <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
            Phone Number
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

        <div>
          <label className="font-josefin text-xs tracking-[0.2em] uppercase text-text-muted mb-2 block">
            Message
          </label>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            placeholder="I would like to schedule a site visit..."
            className="w-full bg-surface border border-border-dark text-text-secondary font-josefin text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-text-muted resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-gold text-bg font-josefin text-sm font-500 tracking-[0.15em] uppercase hover:bg-gold-accent transition-colors"
        >
          <Send size={15} />
          Send Enquiry
        </button>
      </form>

      <div className="mt-4 pt-4 border-t border-border-dark">
        <a
          href={`https://wa.me/919999999999?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-josefin text-sm tracking-[0.1em] uppercase hover:bg-[#25D366]/20 transition-colors"
        >
          <MessageCircle size={15} />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
