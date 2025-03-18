
import { Check } from 'lucide-react';

interface IndustryCardProps {
  id: string;
  name: string;
  description?: string;
  isSelected?: boolean;
}

export const IndustryCard = ({ id, name, description, isSelected }: IndustryCardProps) => {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white overflow-hidden">
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-navy">{name}</h3>
          {isSelected && (
            <div className="bg-pink rounded-full p-1">
              <Check className="text-white w-5 h-5" />
            </div>
          )}
        </div>
        
        {description && (
          <p className="text-gray-600 mb-6">{description}</p>
        )}
        
        <div className="mt-auto">
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex justify-between">
              <div className="text-red-500 text-lg font-medium">
                Swipe Left to Skip
              </div>
              <div className="text-pink text-lg font-medium">
                Swipe Right to Select
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
