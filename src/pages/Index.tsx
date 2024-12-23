import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Calculator } from "@/components/Calculator";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Calculator />
      <FAQ />
    </div>
  );
};

export default Index;