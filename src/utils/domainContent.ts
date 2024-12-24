export type DomainContent = {
  title: string[];
  description: string;
};

export const domainContent: Record<string, DomainContent> = {
  ecommerce: {
    title: ["Calculate Your", "E-commerce Project", "Cost in Minutes"],
    description: "Get accurate estimates for your online store development, powered by AI analysis of thousands of successful e-commerce projects. Make informed decisions with real-time insights for your digital storefront.",
  },
  healthcare: {
    title: ["Calculate Your", "Healthcare Project", "Cost in Minutes"],
    description: "Get precise cost estimates for your healthcare solution, based on AI analysis of successful medical software projects. Make informed decisions with real-time insights for your healthcare platform.",
  },
  education: {
    title: ["Calculate Your", "Education Project", "Cost in Minutes"],
    description: "Get accurate estimates for your e-learning platform, powered by AI analysis of successful educational technology projects. Make informed decisions with real-time insights for your learning solution.",
  },
  finance: {
    title: ["Calculate Your", "Finance Project", "Cost in Minutes"],
    description: "Get precise cost estimates for your fintech solution, based on AI analysis of successful financial software projects. Make informed decisions with real-time insights for your financial platform.",
  },
  realestate: {
    title: ["Calculate Your", "Real Estate Project", "Cost in Minutes"],
    description: "Get accurate estimates for your real estate platform, powered by AI analysis of successful property tech projects. Make informed decisions with real-time insights for your real estate solution.",
  },
  travel: {
    title: ["Calculate Your", "Travel Project", "Cost in Minutes"],
    description: "Get precise cost estimates for your travel platform, based on AI analysis of successful travel tech projects. Make informed decisions with real-time insights for your booking solution.",
  },
  media: {
    title: ["Calculate Your", "Media Project", "Cost in Minutes"],
    description: "Get accurate estimates for your media platform, powered by AI analysis of successful media tech projects. Make informed decisions with real-time insights for your content delivery solution.",
  },
  gaming: {
    title: ["Calculate Your", "Gaming Project", "Cost in Minutes"],
    description: "Get precise cost estimates for your gaming platform, based on AI analysis of successful game development projects. Make informed decisions with real-time insights for your gaming solution.",
  },
  logistics: {
    title: ["Calculate Your", "Logistics Project", "Cost in Minutes"],
    description: "Get accurate estimates for your logistics solution, powered by AI analysis of successful supply chain projects. Make informed decisions with real-time insights for your logistics platform.",
  },
  social: {
    title: ["Calculate Your", "Social Media Project", "Cost in Minutes"],
    description: "Get precise cost estimates for your social platform, based on AI analysis of successful social media projects. Make informed decisions with real-time insights for your community solution.",
  },
};

export const defaultContent: DomainContent = {
  title: ["Calculate Your", "Project Cost", "in Minutes"],
  description: "Get accurate estimates powered by AI analysis of thousands of successful projects. Make informed decisions with real-time insights.",
};