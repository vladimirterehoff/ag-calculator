interface Feature {
  name: string;
  category: string;
}

interface FeatureSelectionProps {
  features: Record<string, string[]>;
  selectedFeatures: string[];
  onFeatureToggle: (feature: string) => void;
}

export const FeatureSelection = ({
  features,
  selectedFeatures,
  onFeatureToggle,
}: FeatureSelectionProps) => {
  if (!features || Object.keys(features).length === 0) return null;

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-navy">Select Features</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(features).map(([category, categoryFeatures]) => (
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
                    onChange={() => onFeatureToggle(feature)}
                    className="w-4 h-4 text-pink"
                  />
                  <span className="text-gray-700">{feature}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};