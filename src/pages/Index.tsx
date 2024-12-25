import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Calculator } from "@/components/Calculator";
import { FAQ } from "@/components/FAQ";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const { domain } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (domain) {
      // Scroll to calculator when domain is selected
      const element = document.getElementById("calculator");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [domain]);

  return (
    <div className="min-h-screen">
      <Hero />
      <Calculator onDomainSelect={(domain) => navigate(`/${domain}`)} />
      <FAQ />
      <Benefits />
    </div>
  );
};

export default Index;