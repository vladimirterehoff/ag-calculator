import { ShoppingCart, Heart, GraduationCap, DollarSign, Home, Plane, Video, Gamepad, Truck, Users, Car, Hotel, ShoppingBag, Briefcase, Building, Wheat, Signal, Plug, Globe } from "lucide-react";

const domains = [
  { id: "ecommerce", name: "E-commerce", icon: ShoppingCart },
  { id: "healthcare", name: "Healthcare", icon: Heart },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "finance", name: "Finance", icon: DollarSign },
  { id: "realestate", name: "Real Estate", icon: Home },
  { id: "travel", name: "Travel", icon: Plane },
  { id: "media", name: "Media", icon: Video },
  { id: "gaming", name: "Gaming", icon: Gamepad },
  { id: "logistics", name: "Logistics", icon: Truck },
  { id: "social", name: "Social Media", icon: Users },
  { id: "automotive", name: "Automotive", icon: Car },
  { id: "hospitality", name: "Hospitality", icon: Hotel },
  { id: "retail", name: "Retail", icon: ShoppingBag },
  { id: "consulting", name: "Consulting", icon: Briefcase },
  { id: "construction", name: "Construction", icon: Building },
  { id: "agriculture", name: "Agriculture", icon: Wheat },
  { id: "telecom", name: "Telecommunications", icon: Signal },
  { id: "energy", name: "Energy", icon: Plug },
  { id: "other", name: "Other", icon: Globe },
];

interface DomainSelectionProps {
  selectedDomain: string;
  onDomainSelect: (domain: string) => void;
}

export const DomainSelection = ({ selectedDomain, onDomainSelect }: DomainSelectionProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4 text-navy">Select Your Domain</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {domains.map((domain) => (
          <button
            key={domain.id}
            onClick={() => onDomainSelect(domain.id)}
            className={`p-4 rounded-lg border ${
              selectedDomain === domain.id
                ? "border-pink bg-pink/10"
                : "border-gray-200 hover:border-pink/50"
            } transition-colors flex flex-col items-center gap-2`}
          >
            <domain.icon
              className={`w-8 h-8 ${
                selectedDomain === domain.id ? "text-pink" : "text-gray-600"
              }`}
            />
            <span
              className={`text-sm ${
                selectedDomain === domain.id ? "text-pink" : "text-gray-600"
              }`}
            >
              {domain.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};