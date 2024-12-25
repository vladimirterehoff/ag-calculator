import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { FormData, ValidationErrors } from "@/types/calculator";
import { industries } from "@/data/industries";

export const useCalculator = () => {
  const { industry, subIndustry } = useParams();
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    linkedin: "",
    termsAccepted: false,
    newsletter: false,
  });
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    platform: false,
    features: false,
  });
  const { toast } = useToast();
  const featuresRef = useRef<HTMLDivElement>(null);

  const selectedIndustryData = industries.find(i => i.id === industry);
  const selectedSubIndustryData = selectedIndustryData?.subIndustries.find(s => s.id === subIndustry);

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
    setValidationErrors(prev => ({ ...prev, platform: false }));
    
    setTimeout(() => {
      featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
    setValidationErrors(prev => ({ ...prev, features: false }));
  };

  const handleFormChange = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
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

  return {
    selectedPlatform,
    selectedFeatures,
    formData,
    validationErrors,
    featuresRef,
    selectedSubIndustryData,
    handlePlatformSelect,
    handleFeatureToggle,
    handleFormChange,
    handleSubmit,
    resetAllSelections,
  };
};