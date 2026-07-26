export default function SeoContent() {
  return (
    <section className="bg-bg px-6 py-16 border-t border-border-dark">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-cinzel text-white text-xl font-medium mb-4">
              Property Dealer in Faridabad & Delhi NCR
            </h2>
            <p className="font-josefin text-text-muted text-sm leading-relaxed mb-4">
              OM Estate is Faridabad&apos;s most trusted <strong className="text-text-secondary">property dealer</strong>, offering expert guidance on buying, selling, renting and leasing <strong className="text-text-secondary">residential property in Faridabad</strong>, commercial spaces, industrial plots and more across the entire Delhi NCR region.
            </p>
            <p className="font-josefin text-text-muted text-sm leading-relaxed">
              Whether you&apos;re searching for a <strong className="text-text-secondary">2BHK or 3BHK flat in Faridabad</strong>, a builder floor in Sector 46, a commercial shop on NH-48, or an <strong className="text-text-secondary">industrial plot in IMT Faridabad</strong> — our team of expert real estate consultants will find the perfect match within your budget.
            </p>
          </div>
          <div>
            <h2 className="font-cinzel text-white text-xl font-medium mb-4">
              Real Estate Services Across All NCR
            </h2>
            <p className="font-josefin text-text-muted text-sm leading-relaxed mb-4">
              From affordable <strong className="text-text-secondary">plots in Neharpar Greater Faridabad</strong> to premium residences in Gurugram and Noida — OM Estate covers every pocket of the NCR. We deal in <strong className="text-text-secondary">property for sale in Faridabad</strong>, property for rent, commercial lease, and investment advisory.
            </p>
            <p className="font-josefin text-text-muted text-sm leading-relaxed">
              Looking for <strong className="text-text-secondary">office space in Faridabad</strong>, a showroom on NH-48, or a warehouse in Sector 58? Our commercial real estate team has you covered with 1000+ active listings and 12+ years of deep local market knowledge.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border-dark grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Residential Properties Faridabad", href: "/properties?type=residential&category=buy" },
            { label: "Commercial Property Faridabad", href: "/properties?type=commercial" },
            { label: "Industrial Plots IMT Faridabad", href: "/properties?type=industrial" },
            { label: "Flats for Rent Faridabad", href: "/properties?type=residential&category=rent" },
            { label: "Property in Neharpar", href: "/properties?location=Neharpar" },
            { label: "Plots for Sale Faridabad", href: "/properties?type=residential&category=buy" },
            { label: "Office Space Faridabad", href: "/properties?type=commercial&category=rent" },
            { label: "Property Agent Near Me", href: "/contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-josefin text-xs text-text-muted hover:text-gold transition-colors"
            >
              {link.label} →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
