import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToCalculator = () => {
    const element = document.getElementById("calculator");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[80vh] bg-navy text-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-pink/20 text-pink mb-6">
            AI-Powered Cost Calculator
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Calculate Your{" "}
            <span className="text-pink">Project Cost</span> in Minutes
          </h1>
          <p className="text-xl mb-8 text-gray-300">
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
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-[-1]" />
    </div>
  );
};