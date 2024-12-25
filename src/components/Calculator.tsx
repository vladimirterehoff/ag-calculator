import { PlatformSelection } from "./calculator/PlatformSelection";
import { ContactForm } from "./calculator/ContactForm";
import { FeatureSelection } from "./calculator/FeatureSelection";
import { useCalculator } from "@/hooks/useCalculator";

export const Calculator = () => {
  const {
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
  } = useCalculator();

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
              {selectedSubIndustryData && (
                <FeatureSelection
                  features={selectedSubIndustryData.features}
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