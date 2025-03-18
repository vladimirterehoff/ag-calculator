
import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Heart } from 'lucide-react';
import { industries } from '@/data/industries';

type SwipeDirection = 'left' | 'right' | null;

interface SwipeCardsProps {
  title: string;
  subtitle: string;
  onSelect: (id: string) => void;
  cardComponent: React.ComponentType<any>;
  parentId?: string;
  multiSelect?: boolean;
  selectedItems?: string[];
  onFinish?: () => void;
}

export const SwipeCards = ({
  title,
  subtitle,
  onSelect,
  cardComponent: CardComponent,
  parentId,
  multiSelect = false,
  selectedItems = [],
  onFinish,
}: SwipeCardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<SwipeDirection>(null);

  const getItems = () => {
    if (!parentId) {
      // If no parentId, we're showing industries or platforms
      if (title.includes('Platform')) {
        return [
          { id: 'web', name: 'Web Application', description: 'Build a responsive web app accessible from any browser' },
          { id: 'mobile', name: 'Mobile Application', description: 'Create a native app experience for iOS and Android' },
          { id: 'both', name: 'Web & Mobile Applications', description: 'The complete package: web and mobile apps combined' },
        ];
      }
      return industries;
    } else if (title.includes('Sub-Industry')) {
      // We're showing sub-industries based on the selected industry
      const industry = industries.find(i => i.id === parentId);
      return industry?.subIndustries || [];
    } else if (title.includes('Features')) {
      // Find the industry first
      const industry = industries.find(ind => {
        return ind.subIndustries.some(sub => sub.id === parentId);
      });
      
      // Then find the subIndustry
      const subIndustry = industry?.subIndustries.find(sub => sub.id === parentId);
      
      // Return features as objects
      return (subIndustry?.features || []).map(feature => ({
        id: feature,
        name: feature,
        description: getFeatureDescription(feature),
      }));
    }
    
    return [];
  };
  
  const items = getItems();
  
  const getFeatureDescription = (feature: string) => {
    const descriptions: Record<string, string> = {
      "Cloud Infrastructure": "Scalable hosting and data storage solutions",
      "API Integration": "Connect with third-party services and platforms",
      "DevOps Tools": "Automated development and deployment pipeline tools",
      "Quality Control": "Systems to ensure product standards are maintained",
      "Supply Chain Management": "Track and optimize your supply chain",
      "Inventory Tracking": "Real-time monitoring of stock levels",
      "Threat Detection": "Identify potential security threats early",
      "Security Monitoring": "Continuous oversight of system security",
      "Incident Response": "Rapid reaction protocols for security breaches",
      "Patient Management": "Tools to track and manage patient information",
      "Medical Records": "Secure storage of sensitive medical data",
      "Appointment Scheduling": "Easy booking and management of appointments",
      "Video Consultations": "Remote doctor-patient interaction",
      "Remote Monitoring": "Track patient vitals from a distance",
      "Digital Prescriptions": "Electronic prescription management",
      "Device Tracking": "Monitor the location and status of medical devices",
      "Maintenance Scheduling": "Plan and track device maintenance",
      "Compliance Management": "Ensure adherence to industry regulations",
    };
    
    return descriptions[feature] || "Add this feature to your project";
  };

  const handleSwipe = (direction: SwipeDirection, id: string) => {
    setDirection(direction);
    
    if (direction === 'right') {
      onSelect(id);
      
      if (!multiSelect) {
        // Auto advance to next card only if not in multi-select mode
        setTimeout(() => {
          setCurrentIndex(prevIndex => prevIndex + 1);
          setDirection(null);
        }, 300);
      } else {
        // In multi-select, just reset the animation
        setTimeout(() => {
          setDirection(null);
        }, 300);
      }
    } else {
      // For left swipe, just move to next card
      setTimeout(() => {
        setCurrentIndex(prevIndex => prevIndex + 1);
        setDirection(null);
      }, 300);
    }
    
    // If we've reached the end and this is the features step
    if (currentIndex === items.length - 1 && multiSelect && onFinish) {
      setTimeout(() => {
        onFinish();
      }, 300);
    }
  };

  const handleManualSwipe = (dir: SwipeDirection) => {
    if (items.length === 0 || currentIndex >= items.length) return;
    
    const id = items[currentIndex]?.id || '';
    handleSwipe(dir, id);
  };

  const resetIndex = () => {
    setCurrentIndex(0);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-gray-300 mt-2">{subtitle}</p>
      </div>

      <div className="relative w-full h-[60vh] max-h-[500px] overflow-hidden bg-white rounded-xl shadow-xl">
        <AnimatePresence>
          {items.length > 0 && currentIndex < items.length ? (
            <motion.div
              key={items[currentIndex].id}
              className="absolute w-full h-full"
              initial={{ x: 0 }}
              animate={{ 
                x: direction === 'left' ? -300 : direction === 'right' ? 300 : 0,
                opacity: direction ? 0.5 : 1,
                rotate: direction === 'left' ? -10 : direction === 'right' ? 10 : 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardComponent 
                {...items[currentIndex]} 
                isSelected={multiSelect && selectedItems?.includes(items[currentIndex].id)}
              />
            </motion.div>
          ) : multiSelect ? (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-700">No more features to show</h3>
              <p className="text-gray-500 mt-2">
                You've selected {selectedItems?.length || 0} features
              </p>
              <button
                onClick={resetIndex}
                className="mt-4 px-4 py-2 bg-navy text-white rounded-md hover:bg-navy-light transition-colors"
              >
                View All Features Again
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-700">No items available</h3>
            </div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-between w-full mt-8">
        <button
          onClick={() => handleManualSwipe('left')}
          className="p-4 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          disabled={items.length === 0 || currentIndex >= items.length}
        >
          <X className="text-red-500 w-8 h-8" />
        </button>
        
        <button
          onClick={() => handleManualSwipe('right')}
          className="p-4 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          disabled={items.length === 0 || currentIndex >= items.length}
        >
          <Heart className="text-pink w-8 h-8" />
        </button>
      </div>
      
      {multiSelect && (
        <div className="mt-6 text-center">
          <p className="text-white mb-2">Selected Features: {selectedItems?.length || 0}</p>
          {selectedItems?.length ? (
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {selectedItems.map(feature => (
                <span 
                  key={feature}
                  className="bg-pink bg-opacity-90 text-white px-3 py-1 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};
