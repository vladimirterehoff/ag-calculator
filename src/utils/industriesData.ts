export type SubIndustry = {
  id: string;
  name: string;
};

export type Industry = {
  id: string;
  name: string;
  subIndustries: SubIndustry[];
};

export const industries: Industry[] = [
  {
    id: "technology",
    name: "Technology",
    subIndustries: [
      { id: "software", name: "Software Development" },
      { id: "hardware", name: "Hardware Manufacturing" },
      { id: "cloud", name: "Cloud Services" },
      { id: "cybersecurity", name: "Cybersecurity" },
      { id: "ai-ml", name: "AI & Machine Learning" }
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    subIndustries: [
      { id: "hospitals", name: "Hospitals & Clinics" },
      { id: "telemedicine", name: "Telemedicine" },
      { id: "medical-devices", name: "Medical Devices" },
      { id: "pharmaceuticals", name: "Pharmaceuticals" },
      { id: "biotech", name: "Biotechnology" }
    ]
  },
  {
    id: "finance",
    name: "Financial Services",
    subIndustries: [
      { id: "banking", name: "Banking" },
      { id: "insurance", name: "Insurance" },
      { id: "investment", name: "Investment Services" },
      { id: "fintech", name: "Financial Technology" },
      { id: "wealth-management", name: "Wealth Management" }
    ]
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    subIndustries: [
      { id: "ecommerce", name: "E-commerce Platforms" },
      { id: "brick-mortar", name: "Brick & Mortar" },
      { id: "fashion", name: "Fashion & Apparel" },
      { id: "grocery", name: "Grocery & Supermarkets" },
      { id: "luxury", name: "Luxury Retail" }
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    subIndustries: [
      { id: "automotive", name: "Automotive" },
      { id: "electronics", name: "Electronics" },
      { id: "industrial", name: "Industrial Equipment" },
      { id: "food-beverage", name: "Food & Beverage" },
      { id: "textiles", name: "Textiles" }
    ]
  },
  {
    id: "education",
    name: "Education",
    subIndustries: [
      { id: "k12", name: "K-12 Education" },
      { id: "higher-ed", name: "Higher Education" },
      { id: "online-learning", name: "Online Learning" },
      { id: "professional-dev", name: "Professional Development" },
      { id: "edtech", name: "Educational Technology" }
    ]
  },
  {
    id: "real-estate",
    name: "Real Estate",
    subIndustries: [
      { id: "residential", name: "Residential" },
      { id: "commercial", name: "Commercial" },
      { id: "property-management", name: "Property Management" },
      { id: "construction", name: "Construction" },
      { id: "real-estate-tech", name: "Real Estate Technology" }
    ]
  },
  {
    id: "hospitality",
    name: "Hospitality & Tourism",
    subIndustries: [
      { id: "hotels", name: "Hotels & Resorts" },
      { id: "restaurants", name: "Restaurants" },
      { id: "travel", name: "Travel & Tourism" },
      { id: "events", name: "Events & Conferences" },
      { id: "entertainment", name: "Entertainment" }
    ]
  },
  {
    id: "professional-services",
    name: "Professional Services",
    subIndustries: [
      { id: "consulting", name: "Consulting" },
      { id: "legal", name: "Legal Services" },
      { id: "accounting", name: "Accounting" },
      { id: "hr", name: "Human Resources" },
      { id: "marketing", name: "Marketing & Advertising" }
    ]
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    subIndustries: [
      { id: "renewable", name: "Renewable Energy" },
      { id: "oil-gas", name: "Oil & Gas" },
      { id: "utilities", name: "Utilities" },
      { id: "smart-grid", name: "Smart Grid" },
      { id: "energy-storage", name: "Energy Storage" }
    ]
  }
];