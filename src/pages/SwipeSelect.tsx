
import { useState } from 'react';
import { SwipeCards } from '@/components/swipe/SwipeCards';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { IndustryCard } from '@/components/swipe/IndustryCard';
import { FeatureCard } from '@/components/swipe/FeatureCard';
import { PlatformCard } from '@/components/swipe/PlatformCard';
import { useSwipeSelection } from '@/hooks/useSwipeSelection';
import { ResultsSummary } from '@/components/swipe/ResultsSummary';

const SwipeSelect = () => {
  const {
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
  } = useSwipeSelection();

  const navigate = useNavigate();

  const renderStep = () => {
    switch (currentStep) {
      case 'industry':
        return (
          <SwipeCards
            title="Select Your Industry"
            subtitle="Swipe right on the industry that best matches your project"
            onSelect={handleIndustrySelect}
            cardComponent={IndustryCard}
          />
        );
      case 'subIndustry':
        return (
          <SwipeCards
            title="Select Your Sub-Industry"
            subtitle="Swipe right on the sub-industry that best fits your needs"
            onSelect={handleSubIndustrySelect}
            cardComponent={IndustryCard}
            parentId={selectedIndustry}
          />
        );
      case 'platform':
        return (
          <SwipeCards
            title="Select Your Platform"
            subtitle="Swipe right on the platform you want to build for"
            onSelect={handlePlatformSelect}
            cardComponent={PlatformCard}
          />
        );
      case 'features':
        return (
          <SwipeCards
            title="Select Your Features"
            subtitle="Swipe right on features you want to include"
            onSelect={handleFeatureSelect}
            cardComponent={FeatureCard}
            parentId={selectedSubIndustry}
            multiSelect
            selectedItems={selectedFeatures}
            onFinish={finishSelection}
          />
        );
      case 'results':
        return (
          <ResultsSummary
            selectedIndustry={selectedIndustry}
            selectedSubIndustry={selectedSubIndustry}
            selectedPlatform={selectedPlatform}
            selectedFeatures={selectedFeatures}
            onReset={resetSelections}
            onContinue={() => navigate('/')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-navy-light py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-white mb-6">Project Matchmaker</h1>
          <div className="w-full max-w-md">
            {renderStep()}
            
            {currentStep !== 'results' && (
              <div className="mt-8 flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/')}
                  className="bg-white text-navy hover:bg-gray-100"
                >
                  Go Back to Calculator
                </Button>
                
                {currentStep === 'features' && (
                  <Button 
                    onClick={finishSelection}
                    className="bg-pink hover:bg-pink-dark text-white"
                  >
                    Finish Selection
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwipeSelect;
