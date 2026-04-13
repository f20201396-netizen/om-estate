import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Maximize2, BedDouble, Car, ChevronLeft, Layers, CheckCircle } from "lucide-react";
import PropertyGallery from "@/components/property-detail/PropertyGallery";
import EnquiryForm from "@/components/property-detail/EnquiryForm";
import PropertyCard from "@/components/properties/PropertyCard";
import { getPropertyById, getSimilarProperties } from "@/lib/data";

interface PageProps {
  params: { id: string };
}

const categoryLabel: Record<string, string> = {
  buy: "For Sale",
  sell: "On Sell",
  rent: "For Rent",
  lease: "For Lease",
};

export default function PropertyDetailPage({ params }: PageProps) {
  const property = getPropertyById(params.id);
  if (!property) notFound();

  const similar = getSimilarProperties(property, 3);

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-surface border-b border-border-dark px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 font-josefin text-xs text-text-muted">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/properties" className="hover:text-gold transition-colors">Properties</Link>
          <span>/</span>
          <span className="text-text-secondary">{property.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Gallery */}
            <PropertyGallery images={property.images} title={property.title} />

            {/* Title + Price */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-josefin text-xs tracking-[0.2em] uppercase px-3 py-1.5 bg-gold/10 text-gold border border-gold/20">
                  {categoryLabel[property.category]}
                </span>
                <span className="font-josefin text-xs tracking-[0.2em] uppercase px-3 py-1.5 bg-surface-elevated text-text-muted border border-border-dark">
                  {property.type}
                </span>
              </div>

              <h1
                className="font-cinzel font-semibold text-white mb-4 leading-tight"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
              >
                {property.title}
              </h1>

              <div className="flex items-center gap-2 mb-5">
                <MapPin size={15} className="text-gold shrink-0" />
                <span className="font-josefin text-text-secondary">{property.location}</span>
              </div>

              <p className="font-cinzel text-3xl font-bold text-gold">{property.priceLabel}</p>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { Icon: Maximize2, label: "Area", value: `${property.area} sqft` },
                ...(property.bhk ? [{ Icon: BedDouble, label: "BHK", value: `${property.bhk} BHK` }] : []),
                ...(property.floor !== undefined ? [{ Icon: Layers, label: "Floor", value: `${property.floor}${property.totalFloors ? ` of ${property.totalFloors}` : ""}` }] : []),
                ...(property.parking ? [{ Icon: Car, label: "Parking", value: "Available" }] : []),
              ].map(({ Icon, label, value }) => (
                <div key={label} className="bg-surface-elevated border border-border-dark p-4 text-center">
                  <Icon size={18} className="text-gold mx-auto mb-2" />
                  <p className="font-josefin text-xs text-text-muted uppercase tracking-wide mb-1">{label}</p>
                  <p className="font-josefin text-sm text-white font-500">{value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="font-cinzel text-xl text-white font-medium mb-4">About This Property</h2>
              <p className="font-josefin text-text-secondary text-sm leading-relaxed">{property.description}</p>
              {property.furnishing && (
                <p className="mt-3 font-josefin text-sm text-text-muted">
                  Furnishing:{" "}
                  <span className="text-gold capitalize">{property.furnishing}</span>
                </p>
              )}
              {property.facing && (
                <p className="mt-1 font-josefin text-sm text-text-muted">
                  Facing: <span className="text-gold">{property.facing}</span>
                </p>
              )}
            </div>

            {/* Amenities */}
            {property.amenities.length > 0 && (
              <div>
                <h2 className="font-cinzel text-xl text-white font-medium mb-5">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2.5 font-josefin text-sm text-text-secondary">
                      <CheckCircle size={14} className="text-gold shrink-0" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <EnquiryForm propertyTitle={property.title} />

            <Link
              href="/properties"
              className="flex items-center gap-2 font-josefin text-sm text-text-muted hover:text-gold transition-colors"
            >
              <ChevronLeft size={14} />
              Back to Listings
            </Link>
          </div>
        </div>

        {/* Similar Properties */}
        {similar.length > 0 && (
          <div className="mt-20 pt-16 border-t border-border-dark">
            <h2 className="font-cinzel text-2xl font-medium text-white mb-8">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
