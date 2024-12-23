import { FileText, Users, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: BarChart,
    title: "Comprehensive Project Analysis",
    description:
      "Get accurate time and cost estimates, plus a detailed feature breakdown tailored to your domain and requirements.",
  },
  {
    icon: Users,
    title: "Team & Technology Insights",
    description:
      "Receive expert recommendations on team composition, tools, frameworks, and technologies best suited for your project.",
  },
  {
    icon: FileText,
    title: "Ready-to-Use Documentation",
    description:
      "Get a professional PDF report with all project details, perfect for sharing with stakeholders and team members.",
  },
];

export const Benefits = () => {
  const scrollToCalculator = () => {
    const element = document.getElementById("calculator");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-navy">
          What You'll Get?
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Get accurate cost estimates powered by AI analysis of thousands of
          successful projects. Make informed decisions with real-time insights
          tailored to your specific needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <benefit.icon className="w-12 h-12 text-pink mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-navy">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            onClick={scrollToCalculator}
            className="bg-pink hover:bg-pink-light text-white px-8 py-6 rounded-lg text-lg"
          >
            Calculate Your Project
          </Button>
        </div>
      </div>
    </div>
  );
};