import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToCalculator = () => {
    const element = document.getElementById("calculator");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[60vh] bg-navy text-white flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-pink/20 text-pink mb-6 text-sm">
              AI-Powered Cost Calculator
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Calculate Your{" "}
              <span className="text-pink">Project Cost</span> in Minutes
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Get accurate estimates powered by AI analysis of thousands of successful
              projects. Make informed decisions with real-time insights.
            </p>
            <Button
              onClick={scrollToCalculator}
              className="bg-pink hover:bg-pink-light text-white px-8 py-6 rounded-lg text-lg flex items-center gap-2 transition-colors"
            >
              Start Calculating
              <ArrowDown className="w-5 h-5" />
            </Button>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/lovable-uploads/dc0aaeb1-ff6c-4639-b663-0af009767835.png"
              alt="Analytics Dashboard"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-[-1]" />
    </div>
  );
};