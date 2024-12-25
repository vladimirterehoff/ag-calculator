import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ContactForm } from "./calculator/ContactForm";
import { PlatformSelection } from "./calculator/PlatformSelection";
import { FeatureSelection } from "./calculator/FeatureSelection";
import { features } from "@/utils/features";

interface CalculatorProps {
  onDomainSelect?: (domain: string) => void;
}

export const Calculator = ({ onDomainSelect }: CalculatorProps) => {
  const { domain } = useParams();
  const [selectedPlatform, setSelectedPlatform] = useState("");
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
    features: false,
  });
  const { toast } = useToast();
  const featuresRef = useRef<HTMLDivElement>(null);

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
    setValidationErrors(prev => ({ ...prev, platform: false }));
    
    // Auto-scroll to features section after platform selection
    setTimeout(() => {
      featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
    setValidationErrors(prev => ({ ...prev, features: false }));
  };

  const handleFormChange = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const resetAllSelections = () => {
    setSelectedPlatform("");
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
      features: false,
    });
  };

  const validateSelections = () => {
    const errors = {
      platform: !selectedPlatform,
      features: selectedFeatures.length === 0,
    };

    setValidationErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateSelections()) {
      toast({
        title: "Required Fields Missing",
        description: "Please select a platform and at least one feature before submitting.",
        variant: "destructive",
      });
      return;
    }

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
      description: "Thank you for filling out this form. Your project plan will arrive in your inbox within 10-15 minutes.",
    });
    
    resetAllSelections();
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
            <div ref={featuresRef}>
              {domain && features[domain as keyof typeof features] && (
                <FeatureSelection
                  features={features[domain as keyof typeof features]}
                  selectedFeatures={selectedFeatures}
                  onFeatureToggle={handleFeatureToggle}
                  error={validationErrors.features}
                />
              )}
            </div>
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