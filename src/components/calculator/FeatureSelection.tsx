import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Feature {
  name: string;
  category: string;
}

interface FeatureSelectionProps {
  features: Record<string, string[]>;
  selectedFeatures: string[];
  onFeatureToggle: (feature: string) => void;
  error?: boolean;
}

// Define tooltips for features that need additional explanation
const featureTooltips: Record<string, string> = {
  "360° Product View": "Interactive product visualization that allows customers to rotate and view products from all angles",
  "Split Payments": "Ability to divide a payment among multiple payment methods or between multiple parties",
  "Store-and-Forward Telemedicine": "Technology that allows medical data to be stored and sent to healthcare providers for evaluation at a convenient time",
  "Population Health Analytics": "Analysis of health outcomes, patterns, and determinants in defined groups of individuals",
  "Clinical Decision Support": "System that provides clinicians with knowledge and patient-specific information to enhance healthcare decisions",
  "Plagiarism Detection": "Advanced algorithms to identify copied content and ensure academic integrity",
  "Content Version Control": "System to track and manage different versions of educational content",
  "Asset Allocation": "Strategic distribution of investments across different asset classes to balance risk and reward",
  "Buy Now Pay Later": "Payment option allowing customers to purchase items and pay for them in installments",
  "Geographic Distribution": "System for managing content delivery across different geographical locations",
  "Loot Boxes": "Virtual items that can be redeemed to receive a random selection of additional virtual items",
  "Route Optimization": "Algorithm-based system to determine the most efficient delivery routes",
  "Content Moderation": "Automated and manual systems to review and filter user-generated content",
};

export const FeatureSelection = ({
  features,
  selectedFeatures,
  onFeatureToggle,
  error,
}: FeatureSelectionProps) => {
  if (!features || Object.keys(features).length === 0) return null;

  return (
    <TooltipProvider>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-navy">Select Features</h3>
          {error && (
            <span className="text-red-500 text-sm">Please select at least one feature</span>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(features).map(([category, categoryFeatures]) => (
            <div key={category} className="mb-6">
              <h4 className="text-lg font-medium mb-3 capitalize text-navy">
                {category} Features
              </h4>
              <div className={`space-y-2 ${error ? 'border-red-300 border rounded-lg p-4' : ''}`}>
                {categoryFeatures.map((feature) => (
                  <label
                    key={feature}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFeatures.includes(feature)}
                      onChange={() => onFeatureToggle(feature)}
                      className={`w-4 h-4 ${error ? 'border-red-300' : ''} text-pink`}
                    />
                    <span className="text-gray-700">{feature}</span>
                    {featureTooltips[feature] && (
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">{featureTooltips[feature]}</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};