
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { industries } from '@/data/industries';
import { CheckCircle, Award, ChevronRight } from 'lucide-react';

interface ResultsSummaryProps {
  selectedIndustry: string;
  selectedSubIndustry: string;
  selectedPlatform: string;
  selectedFeatures: string[];
  onReset: () => void;
  onContinue: () => void;
}

export const ResultsSummary = ({
  selectedIndustry,
  selectedSubIndustry,
  selectedPlatform,
  selectedFeatures,
  onReset,
  onContinue,
}: ResultsSummaryProps) => {
  const [showConfetti, setShowConfetti] = useState(true);

  // Find industry and subIndustry names
  const industry = industries.find(i => i.id === selectedIndustry);
  const subIndustry = industry?.subIndustries.find(s => s.id === selectedSubIndustry);
  
  // Get platform name
  const getPlatformName = () => {
    switch (selectedPlatform) {
      case 'web': return 'Web Application';
      case 'mobile': return 'Mobile Application';
      case 'both': return 'Web & Mobile Applications';
      default: return 'Unknown Platform';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 animate-fade-up">
      <div className="flex justify-center mb-6">
        <Award className="w-16 h-16 text-pink" />
      </div>
      
      <h2 className="text-2xl font-bold text-center text-navy mb-6">
        Your Perfect Project Match
      </h2>
      
      <div className="space-y-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-navy">Industry</h3>
          <p className="text-gray-700 flex items-center">
            <CheckCircle className="w-4 h-4 text-pink mr-2" />
            {industry?.name || 'Unknown Industry'}
          </p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-navy">Sub-Industry</h3>
          <p className="text-gray-700 flex items-center">
            <CheckCircle className="w-4 h-4 text-pink mr-2" />
            {subIndustry?.name || 'Unknown Sub-Industry'}
          </p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-navy">Platform</h3>
          <p className="text-gray-700 flex items-center">
            <CheckCircle className="w-4 h-4 text-pink mr-2" />
            {getPlatformName()}
          </p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-navy">Selected Features ({selectedFeatures.length})</h3>
          <div className="mt-2 space-y-1">
            {selectedFeatures.map(feature => (
              <p key={feature} className="text-gray-700 flex items-center">
                <CheckCircle className="w-4 h-4 text-pink mr-2" />
                {feature}
              </p>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex flex-col space-y-3">
        <Button 
          onClick={onContinue}
          className="bg-pink hover:bg-pink-dark text-white flex items-center justify-center"
        >
          Continue to Calculator
          <ChevronRight className="ml-2 w-4 h-4" />
        </Button>
        
        <Button 
          variant="outline" 
          onClick={onReset}
          className="border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Start Over
        </Button>
      </div>
    </div>
  );
};
