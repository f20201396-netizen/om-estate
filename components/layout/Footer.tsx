import Link from "next/link";
import { Phone, Mail, MapPin, Share2, Globe, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-gold-gradient rounded-sm flex items-center justify-center">
                <span className="font-cinzel text-bg font-bold text-sm">OM</span>
              </div>
              <div>
                <span className="font-cinzel text-white font-semibold text-xl tracking-widest">
                  OM ESTATE
                </span>
                <p className="font-josefin text-[9px] tracking-[0.3em] text-gold uppercase">
                  Faridabad
                </p>
              </div>
            </div>
            <p className="font-josefin text-text-muted text-sm leading-relaxed max-w-sm mb-6">
              Faridabad&apos;s trusted real estate partner for over 12 years. Residential, commercial,
              and industrial properties — bought, sold, rented, and leased with expertise and care.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Share2, href: "#", label: "Instagram" },
                { Icon: Globe, href: "#", label: "Facebook" },
                { Icon: Users, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-border-dark flex items-center justify-center text-text-muted hover:text-gold hover:border-gold transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-white font-medium tracking-widest text-sm mb-6 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/properties", label: "Properties" },
                { href: "/properties?category=buy", label: "Buy Property" },
                { href: "/properties?category=rent", label: "Rent Property" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-josefin text-sm text-text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-white font-medium tracking-widest text-sm mb-6 uppercase">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="font-josefin text-sm text-text-muted leading-relaxed">
                  Sector 16 Market, Faridabad, Haryana — 121002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <a
                  href="tel:+919999999999"
                  className="font-josefin text-sm text-text-muted hover:text-gold transition-colors"
                >
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <a
                  href="mailto:info@omestate.in"
                  className="font-josefin text-sm text-text-muted hover:text-gold transition-colors"
                >
                  info@omestate.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-dark flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-josefin text-xs text-text-muted tracking-wide">
            &copy; {new Date().getFullYear()} OM Estate. All rights reserved. Faridabad, Haryana.
          </p>
          <p className="font-josefin text-xs text-text-muted">
            RERA Registered · Licensed Real Estate Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
