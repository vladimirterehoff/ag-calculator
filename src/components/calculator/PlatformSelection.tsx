import { Monitor, Smartphone, Layers } from "lucide-react";

interface PlatformSelectionProps {
  selectedPlatform: string;
  onPlatformSelect: (platform: string) => void;
  error?: boolean;
}

export const PlatformSelection = ({
  selectedPlatform,
  onPlatformSelect,
  error,
}: PlatformSelectionProps) => {
  const platforms = [
    { id: "web", name: "Web Application", icon: Monitor },
    { id: "mobile", name: "Mobile Application", icon: Smartphone },
    { id: "both", name: "Web & Mobile Applications", icon: Layers },
  ];

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold text-navy">Select Your Platform</h3>
        {error && (
          <span className="text-red-500 text-sm">Please select a platform</span>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <button
              key={platform.id}
              onClick={() => onPlatformSelect(platform.id)}
              className={`p-6 rounded-lg border ${
                selectedPlatform === platform.id
                  ? "border-pink bg-pink/10"
                  : error
                  ? "border-red-300 hover:border-pink/50"
                  : "border-gray-200 hover:border-pink/50"
              } transition-colors flex flex-col items-center gap-3`}
            >
              <Icon
                className={`w-8 h-8 ${
                  selectedPlatform === platform.id ? "text-pink" : "text-gray-600"
                }`}
              />
              <span
                className={`text-sm text-center ${
                  selectedPlatform === platform.id ? "text-pink" : "text-gray-600"
                }`}
              >
                {platform.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};