export type PropertyCategory = "buy" | "sell" | "rent" | "lease";
export type PropertyType = "residential" | "commercial" | "industrial";

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  category: PropertyCategory;
  price: number;
  priceLabel: string;
  area: number;
  bhk?: number;
  location: string;
  sector: string;
  description: string;
  images: string[];
  amenities: string[];
  floor?: number;
  totalFloors?: number;
  parking?: boolean;
  facing?: string;
  furnishing?: "unfurnished" | "semi-furnished" | "furnished";
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  propertyType: string;
  quote: string;
  rating: number;
}
