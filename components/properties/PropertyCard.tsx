import Link from "next/link";
import Image from "next/image";
import { MapPin, Maximize2, BedDouble, ArrowRight } from "lucide-react";
import { Property } from "@/lib/types";

interface PropertyCardProps {
  property: Property;
  animate?: boolean;
}

const categoryColors: Record<string, string> = {
  buy: "bg-blue-900/80 text-blue-200",
  sell: "bg-amber-900/80 text-amber-200",
  rent: "bg-green-900/80 text-green-200",
  lease: "bg-purple-900/80 text-purple-200",
};

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <div className="bg-surface-elevated border border-border-dark overflow-hidden transition-all duration-400 hover:border-gold/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/5">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`font-josefin text-xs tracking-[0.15em] uppercase px-3 py-1.5 ${
                categoryColors[property.category]
              }`}
            >
              {property.category}
            </span>
          </div>
          {/* Type badge */}
          <div className="absolute top-4 right-4">
            <span className="font-josefin text-xs tracking-[0.1em] uppercase px-3 py-1.5 bg-bg/80 text-text-muted">
              {property.type}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-cinzel text-white font-medium text-lg mb-2 group-hover:text-gold transition-colors line-clamp-1">
            {property.title}
          </h3>

          <div className="flex items-center gap-1.5 mb-4">
            <MapPin size={13} className="text-gold shrink-0" />
            <span className="font-josefin text-text-muted text-sm">{property.location}</span>
          </div>

          {/* Specs */}
          <div className="flex items-center gap-4 mb-5 pb-5 border-b border-border-dark">
            <div className="flex items-center gap-1.5">
              <Maximize2 size={13} className="text-gold" />
              <span className="font-josefin text-sm text-text-secondary">{property.area} sqft</span>
            </div>
            {property.bhk && (
              <div className="flex items-center gap-1.5">
                <BedDouble size={13} className="text-gold" />
                <span className="font-josefin text-sm text-text-secondary">{property.bhk} BHK</span>
              </div>
            )}
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-josefin text-xs text-text-muted tracking-wide uppercase mb-0.5">
                Price
              </p>
              <p className="font-cinzel text-gold font-semibold text-lg">{property.priceLabel}</p>
            </div>
            <span className="flex items-center gap-1 font-josefin text-xs tracking-widest uppercase text-text-muted group-hover:text-gold transition-colors">
              View <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
