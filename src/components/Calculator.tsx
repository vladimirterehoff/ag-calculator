import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  ShoppingCart,
  Heart,
  GraduationCap,
  DollarSign,
  Home,
  Plane,
  Video,
  Gamepad,
  Truck,
  Users,
  Car,
  Hotel,
  ShoppingBag,
  Briefcase,
  Building,
  Wheat,
  Signal,
  Plug,
  Globe,
} from "lucide-react";

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

const features = {
  ecommerce: {
    core: ["Product Listing", "Shopping Cart", "User Authentication"],
    integration: ["Payment Gateway", "CRM Integration"],
    advanced: ["Recommendation Engine", "Inventory Management"],
    other: ["SEO Optimization"],
  },
  healthcare: {
    core: ["Patient Records", "Appointment Scheduling"],
    integration: ["Billing System", "EHR Integration"],
    advanced: ["Telemedicine", "AI Diagnostics"],
    other: ["Data Security"],
  },
  // Add more domain features as needed
};

export const Calculator = () => {
  const [selectedDomain, setSelectedDomain] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    linkedin: "",
  });
  const { toast } = useToast();

  const handleDomainSelect = (domainId: string) => {
    setSelectedDomain(domainId);
    setSelectedFeatures([]);
  };

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Success!",
      description:
        "Thank you for filling out this form. Your project plan will arrive in your inbox within 10-15 minutes.",
    });
  };

  return (
    <div id="calculator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-navy">
          Calculate Your Project Cost
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-navy">
                Select Your Domain
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {domains.map((domain) => (
                  <button
                    key={domain.id}
                    onClick={() => handleDomainSelect(domain.id)}
                    className={`p-4 rounded-lg border ${
                      selectedDomain === domain.id
                        ? "border-pink bg-pink/10"
                        : "border-gray-200 hover:border-pink/50"
                    } transition-colors flex flex-col items-center gap-2`}
                  >
                    <domain.icon
                      className={`w-8 h-8 ${
                        selectedDomain === domain.id
                          ? "text-pink"
                          : "text-gray-600"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        selectedDomain === domain.id
                          ? "text-pink"
                          : "text-gray-600"
                      }`}
                    >
                      {domain.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {selectedDomain && features[selectedDomain as keyof typeof features] && (
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-navy">
                  Select Features
                </h3>
                {Object.entries(
                  features[selectedDomain as keyof typeof features]
                ).map(([category, categoryFeatures]) => (
                  <div key={category} className="mb-6">
                    <h4 className="text-lg font-medium mb-3 capitalize text-navy">
                      {category} Features
                    </h4>
                    <div className="space-y-2">
                      {categoryFeatures.map((feature) => (
                        <label
                          key={feature}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedFeatures.includes(feature)}
                            onChange={() => handleFeatureToggle(feature)}
                            className="w-4 h-4 text-pink"
                          />
                          <span className="text-gray-700">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-navy">
              Where do we send the document?
            </h3>
            <p className="text-gray-600 mb-6">
              Our AI is already working on crafting the project roadmap, plan and
              estimate for you. Just leave your details so you can receive the
              result. Normally you should get it within 10-15 mins.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number (optional)</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="linkedin">LinkedIn Profile URL (optional)</Label>
                <Input
                  id="linkedin"
                  value={formData.linkedin}
                  onChange={(e) =>
                    setFormData({ ...formData, linkedin: e.target.value })
                  }
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-pink hover:bg-pink-light text-white py-6 text-lg"
              >
                Get Your Project Plan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};