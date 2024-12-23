import { ArrowDown, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToCalculator = () => {
    const element = document.getElementById("calculator");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[80vh] bg-navy text-white flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink/20 text-pink mb-8">
              <Code2 className="w-6 h-6" />
              <span className="text-lg font-medium">AI-Powered Cost Calculator</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Calculate Your{" "}
              <span className="text-pink">Project Cost</span>{" "}
              in Minutes
            </h1>
            
            <p className="text-xl mb-10 text-gray-300 leading-relaxed max-w-2xl">
              Get accurate estimates powered by AI analysis of thousands of successful
              projects. Make informed decisions with real-time insights.
            </p>
            
            <Button
              onClick={scrollToCalculator}
              className="bg-pink hover:bg-pink-light text-white px-8 py-7 rounded-xl text-lg flex items-center gap-3 transition-all hover:translate-y-[-2px]"
            >
              Start Calculating
              <ArrowDown className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="lg:w-1/2 relative">
            {/* Gradient background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy/20 to-pink/20 rounded-3xl transform rotate-3" />
            
            {/* Image container with effects */}
            <div className="relative transform hover:scale-[1.02] transition-transform duration-300">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink/20 via-transparent to-pink/20 blur-lg opacity-50" />
              
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink/10 via-transparent to-pink/10 rounded-2xl" />
              
              <img
                src="/lovable-uploads/d4570f2d-b030-4b7f-8c2a-8ffa1d835897.png"
                alt="Analytics Dashboard"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-[-1]" />
    </div>
  );
};