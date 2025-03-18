
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Calculator } from "@/components/Calculator";
import { FAQ } from "@/components/FAQ";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const { industry } = useParams();

  useEffect(() => {
    if (industry) {
      const element = document.getElementById("calculator");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [industry]);

  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="bg-gray-100 py-8 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md mb-6 w-full">
              <div className="flex items-center justify-center mb-4">
                <ThumbsUp className="text-pink w-8 h-8 mr-3" />
                <h3 className="text-xl font-bold text-navy">New! Try Our Interactive Project Matchmaker</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Swipe right on the perfect features for your project with our Tinder-like selection process.
              </p>
              <Link to="/swipe">
                <Button className="bg-pink hover:bg-pink-dark text-white w-full">
                  Try Swipe Selection
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Calculator />
      <FAQ />
      <Benefits />
    </div>
  );
};

export default Index;
