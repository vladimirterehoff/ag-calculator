import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Calculator } from "@/components/Calculator";
import { FAQ } from "@/components/FAQ";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

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
      <Calculator />
      <FAQ />
      <Benefits />
    </div>
  );
};

export default Index;