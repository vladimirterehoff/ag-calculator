import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { DomainSelection } from "./calculator/DomainSelection";
import { FeatureSelection } from "./calculator/FeatureSelection";
import { ContactForm } from "./calculator/ContactForm";
import { PlatformSelection } from "./calculator/PlatformSelection";

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
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    linkedin: "",
    termsAccepted: false,
    newsletter: false,
  });
  const { toast } = useToast();

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
  };

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

  const handleFormChange = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.termsAccepted) {
      toast({
        title: "Error",
        description: "Please fill in all required fields and accept the Terms and Conditions.",
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
    <div id="calculator" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-navy">
          Calculate Your Project Cost
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-[70%]">
            <PlatformSelection
              selectedPlatform={selectedPlatform}
              onPlatformSelect={handlePlatformSelect}
            />
            <DomainSelection
              selectedDomain={selectedDomain}
              onDomainSelect={handleDomainSelect}
            />
            {selectedDomain && features[selectedDomain as keyof typeof features] && (
              <FeatureSelection
                features={features[selectedDomain as keyof typeof features]}
                selectedFeatures={selectedFeatures}
                onFeatureToggle={handleFeatureToggle}
              />
            )}
          </div>
          <div className="lg:w-[30%]">
            <ContactForm
              formData={formData}
              onFormChange={handleFormChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};