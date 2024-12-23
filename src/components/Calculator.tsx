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
  const [validationErrors, setValidationErrors] = useState({
    platform: false,
    domain: false,
    features: false,
  });
  const { toast } = useToast();

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
    setValidationErrors(prev => ({ ...prev, platform: false }));
  };

  const handleDomainSelect = (domainId: string) => {
    setSelectedDomain(domainId);
    setValidationErrors(prev => ({ ...prev, domain: false }));
    setSelectedFeatures([]);
  };

  const handleFeatureToggle = (feature: string) => {
    const newFeatures = selectedFeatures.includes(feature)
      ? selectedFeatures.filter((f) => f !== feature)
      : [...selectedFeatures, feature];
    setSelectedFeatures(newFeatures);
    setValidationErrors(prev => ({ ...prev, features: false }));
  };

  const handleFormChange = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetAllSelections = () => {
    setSelectedPlatform("");
    setSelectedDomain("");
    setSelectedFeatures([]);
    setFormData({
      name: "",
      phone: "",
      email: "",
      linkedin: "",
      termsAccepted: false,
      newsletter: false,
    });
    setValidationErrors({
      platform: false,
      domain: false,
      features: false,
    });
  };

  const validateSelections = () => {
    const errors = {
      platform: !selectedPlatform,
      domain: !selectedDomain,
      features: selectedFeatures.length === 0,
    };

    setValidationErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // First validate platform, domain, and features
    if (!validateSelections()) {
      toast({
        title: "Required Fields Missing",
        description: "Please select a platform, domain, and at least one feature before submitting.",
        variant: "destructive",
      });
      return false;
    }

    // Then validate form data
    if (!formData.name || !formData.email || !formData.termsAccepted) {
      toast({
        title: "Error",
        description: "Please fill in all required fields and accept the Terms and Conditions.",
        variant: "destructive",
      });
      return false;
    }

    // If all validations pass, show success message
    toast({
      title: "Success!",
      description:
        "Thank you for filling out this form. Your project plan will arrive in your inbox within 10-15 minutes.",
    });
    
    resetAllSelections();
    return true;
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
              error={validationErrors.platform}
            />
            <DomainSelection
              selectedDomain={selectedDomain}
              onDomainSelect={handleDomainSelect}
              error={validationErrors.domain}
            />
            {selectedDomain && features[selectedDomain as keyof typeof features] && (
              <FeatureSelection
                features={features[selectedDomain as keyof typeof features]}
                selectedFeatures={selectedFeatures}
                onFeatureToggle={handleFeatureToggle}
                error={validationErrors.features}
              />
            )}
          </div>
          <div className="lg:w-[30%]">
            <ContactForm
              formData={formData}
              onFormChange={handleFormChange}
              onSubmit={handleSubmit}
              onSuccess={resetAllSelections}
            />
          </div>
        </div>
      </div>
    </div>
  );
};