import { useState } from 'react';
import { industries } from '@/data/industries';

type Step = 'industry' | 'subIndustry' | 'platform' | 'features' | 'results';

export const useSwipeSelection = () => {
  const [currentStep, setCurrentStep] = useState<Step>('industry');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [selectedSubIndustry, setSelectedSubIndustry] = useState<string>('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const handleIndustrySelect = (industryId: string) => {
    setSelectedIndustry(industryId);
    setCurrentStep('subIndustry');
  };

  const handleSubIndustrySelect = (subIndustryId: string) => {
    setSelectedSubIndustry(subIndustryId);
    setCurrentStep('platform');
  };

  const handlePlatformSelect = (platformId: string) => {
    setSelectedPlatform(platformId);
    setCurrentStep('features');
  };

  const handleFeatureSelect = (featureId: string) => {
    setSelectedFeatures(prev => {
      // If already selected, remove it
      if (prev.includes(featureId)) {
        return prev.filter(id => id !== featureId);
      }
      // Otherwise add it
      return [...prev, featureId];
    });
  };

  const finishSelection = () => {
    if (selectedFeatures.length > 0) {
      setCurrentStep('results');
    }
  };

  const goToNextStep = () => {
    switch (currentStep) {
      case 'industry':
        setCurrentStep('subIndustry');
        break;
      case 'subIndustry':
        setCurrentStep('platform');
        break;
      case 'platform':
        setCurrentStep('features');
        break;
      case 'features':
        setCurrentStep('results');
        break;
      default:
        break;
    }
  };

  const resetSelections = () => {
    setSelectedIndustry('');
    setSelectedSubIndustry('');
    setSelectedPlatform('');
    setSelectedFeatures([]);
    setCurrentStep('industry');
  };

  return {
    currentStep,
    selectedIndustry,
    selectedSubIndustry,
    selectedPlatform,
    selectedFeatures,
    handleIndustrySelect,
    handleSubIndustrySelect,
    handlePlatformSelect,
    handleFeatureSelect,
    finishSelection,
    goToNextStep,
    resetSelections,
  };
};
