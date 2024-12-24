import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { DomainSelection } from "./calculator/DomainSelection";
import { FeatureSelection } from "./calculator/FeatureSelection";
import { ContactForm } from "./calculator/ContactForm";
import { PlatformSelection } from "./calculator/PlatformSelection";

const features = {
  ecommerce: {
    core: [
      "Product Listing",
      "Shopping Cart",
      "User Authentication",
      "Product Search",
      "Product Categories",
      "Product Filters",
      "Product Reviews",
      "Wishlist",
      "Order Tracking",
      "Multiple Currency Support"
    ],
    catalog: [
      "Product Variants",
      "Bulk Product Upload",
      "Digital Products Support",
      "Product Comparison",
      "Product Tags",
      "Product Attributes",
      "Product Collections",
      "Product Bundles",
      "Product Videos",
      "360° Product View"
    ],
    payment: [
      "Multiple Payment Gateways",
      "Split Payments",
      "Subscription Payments",
      "Buy Now Pay Later",
      "Cryptocurrency Payments",
      "Mobile Wallet Integration",
      "Payment Status Tracking",
      "Refund Management",
      "Invoice Generation",
      "Tax Calculation"
    ],
    shipping: [
      "Multiple Shipping Methods",
      "Real-time Shipping Rates",
      "Address Validation",
      "Shipping Labels Generation",
      "Order Fulfillment",
      "Package Tracking",
      "International Shipping",
      "Local Pickup",
      "Free Shipping Rules",
      "Shipping Zones"
    ],
    marketing: [
      "Email Marketing Integration",
      "Abandoned Cart Recovery",
      "Discount Codes",
      "Loyalty Program",
      "Affiliate Marketing",
      "Social Media Integration",
      "SEO Tools",
      "Google Analytics Integration",
      "Facebook Pixel Integration",
      "Marketing Automation"
    ]
  },
  healthcare: {
    patient: [
      "Patient Records Management",
      "Appointment Scheduling",
      "Medical History Tracking",
      "Prescription Management",
      "Lab Results Management",
      "Vital Signs Monitoring",
      "Patient Portal",
      "Insurance Verification",
      "Patient Reminders",
      "Emergency Contact Management"
    ],
    clinical: [
      "Electronic Health Records (EHR)",
      "Clinical Documentation",
      "Drug Interaction Checking",
      "Clinical Decision Support",
      "Medical Imaging Integration",
      "Lab Order Management",
      "Treatment Plans",
      "Disease Management",
      "Care Coordination",
      "Clinical Workflow Management"
    ],
    administrative: [
      "Billing Management",
      "Insurance Claims Processing",
      "Staff Scheduling",
      "Inventory Management",
      "Document Management",
      "Reporting & Analytics",
      "Compliance Management",
      "Audit Trail",
      "Resource Management",
      "Facility Management"
    ],
    telemedicine: [
      "Video Consultations",
      "Secure Messaging",
      "Remote Patient Monitoring",
      "Virtual Waiting Room",
      "E-Prescriptions",
      "Telehealth Integration",
      "Mobile Health Apps",
      "Remote Device Integration",
      "Store-and-Forward Telemedicine",
      "Emergency Telemedicine"
    ],
    analytics: [
      "Population Health Analytics",
      "Clinical Analytics",
      "Financial Analytics",
      "Operational Analytics",
      "Quality Metrics",
      "Patient Satisfaction Tracking",
      "Outcome Analysis",
      "Risk Assessment",
      "Predictive Analytics",
      "Performance Dashboards"
    ]
  },
  education: {
    learning: [
      "Course Management",
      "Content Library",
      "Assignment Management",
      "Quiz & Assessment",
      "Progress Tracking",
      "Learning Paths",
      "Interactive Content",
      "Video Lectures",
      "Discussion Forums",
      "Study Groups"
    ],
    administrative: [
      "Student Registration",
      "Attendance Tracking",
      "Grade Management",
      "Schedule Management",
      "Document Management",
      "Parent Portal",
      "Staff Management",
      "Resource Allocation",
      "Report Cards",
      "Transcript Generation"
    ],
    communication: [
      "Messaging System",
      "Announcement Board",
      "Parent Communication",
      "Email Integration",
      "Video Conferencing",
      "Chat Support",
      "Event Calendar",
      "Notification System",
      "Feedback System",
      "Community Forums"
    ],
    assessment: [
      "Online Exams",
      "Automated Grading",
      "Question Bank",
      "Performance Analytics",
      "Progress Reports",
      "Peer Assessment",
      "Plagiarism Detection",
      "Certification Management",
      "Skills Assessment",
      "Learning Analytics"
    ],
    content: [
      "Digital Library",
      "Resource Repository",
      "Content Creation Tools",
      "Multimedia Support",
      "Document Sharing",
      "Content Version Control",
      "Learning Materials",
      "Interactive Exercises",
      "Educational Games",
      "Language Support"
    ]
  },
  finance: {
    banking: [
      "Account Management",
      "Transaction History",
      "Fund Transfer",
      "Bill Payment",
      "Mobile Banking",
      "Card Management",
      "Statement Generation",
      "Beneficiary Management",
      "Standing Orders",
      "Direct Debits"
    ],
    investment: [
      "Portfolio Management",
      "Stock Trading",
      "Investment Analytics",
      "Market Research",
      "Risk Assessment",
      "Asset Allocation",
      "Performance Tracking",
      "Investment Reports",
      "Dividend Tracking",
      "Tax Reporting"
    ],
    payment: [
      "Payment Processing",
      "Recurring Payments",
      "International Transfers",
      "Payment Gateway Integration",
      "Mobile Payments",
      "QR Code Payments",
      "Split Payments",
      "Payment Analytics",
      "Refund Management",
      "Payment Security"
    ],
    security: [
      "Two-Factor Authentication",
      "Biometric Authentication",
      "Fraud Detection",
      "Transaction Monitoring",
      "Device Management",
      "Security Alerts",
      "Access Control",
      "Audit Logs",
      "Encryption",
      "Compliance Management"
    ],
    reporting: [
      "Financial Reports",
      "Tax Reports",
      "Expense Tracking",
      "Budget Management",
      "Cash Flow Analysis",
      "Revenue Analytics",
      "Custom Reports",
      "Data Visualization",
      "Export Capabilities",
      "Scheduled Reports"
    ]
  },
  realestate: {
    listing: [
      "Property Listings",
      "Property Search",
      "Virtual Tours",
      "Photo Gallery",
      "Property Details",
      "Price History",
      "Neighborhood Info",
      "School Info",
      "Market Analysis",
      "Similar Properties"
    ],
    agent: [
      "Agent Profiles",
      "Lead Management",
      "Client Management",
      "Showing Schedule",
      "Commission Tracking",
      "Document Management",
      "Task Management",
      "Performance Analytics",
      "Marketing Tools",
      "Communication Tools"
    ],
    property: [
      "Property Management",
      "Maintenance Requests",
      "Tenant Screening",
      "Lease Management",
      "Rent Collection",
      "Inspection Management",
      "Utility Tracking",
      "Insurance Management",
      "Property Analytics",
      "Vendor Management"
    ],
    financial: [
      "Mortgage Calculator",
      "Investment Analysis",
      "ROI Calculator",
      "Payment Processing",
      "Expense Tracking",
      "Revenue Management",
      "Tax Management",
      "Financial Reports",
      "Budget Planning",
      "Cash Flow Analysis"
    ],
    marketing: [
      "Email Marketing",
      "Social Media Integration",
      "MLS Integration",
      "Landing Pages",
      "SEO Tools",
      "Content Management",
      "Lead Generation",
      "Campaign Analytics",
      "Automated Marketing",
      "CRM Integration"
    ]
  },
  travel: {
    booking: [
      "Flight Booking",
      "Hotel Reservation",
      "Car Rental",
      "Package Deals",
      "Activity Booking",
      "Travel Insurance",
      "Airport Transfers",
      "Cruise Booking",
      "Train Tickets",
      "Bus Tickets"
    ],
    planning: [
      "Trip Planner",
      "Itinerary Builder",
      "Weather Forecast",
      "Travel Routes",
      "Local Guides",
      "Travel Tips",
      "Currency Converter",
      "Language Translation",
      "Travel Calendar",
      "Budget Planner"
    ],
    content: [
      "Destination Guides",
      "Travel Blog",
      "Photo Gallery",
      "Video Content",
      "User Reviews",
      "Travel Stories",
      "Local Events",
      "Restaurant Guide",
      "Shopping Guide",
      "Cultural Information"
    ],
    service: [
      "Customer Support",
      "24/7 Assistance",
      "Visa Services",
      "Travel Insurance",
      "Airport Lounge Access",
      "Concierge Service",
      "Lost Baggage Assistance",
      "Emergency Support",
      "Travel Documents",
      "Medical Assistance"
    ],
    analytics: [
      "Booking Analytics",
      "Price Tracking",
      "Customer Behavior",
      "Market Trends",
      "Revenue Analysis",
      "Performance Metrics",
      "Competitor Analysis",
      "Seasonal Trends",
      "Customer Feedback",
      "ROI Analysis"
    ]
  },
  media: {
    content: [
      "Content Management",
      "Media Library",
      "Video Streaming",
      "Audio Streaming",
      "Live Streaming",
      "Content Scheduling",
      "Content Categories",
      "Playlist Management",
      "Content Search",
      "Content Analytics"
    ],
    user: [
      "User Profiles",
      "Subscriptions",
      "Watch History",
      "Favorites",
      "Recommendations",
      "Social Sharing",
      "Comments",
      "Ratings",
      "User Analytics",
      "Parental Controls"
    ],
    monetization: [
      "Subscription Plans",
      "Pay-Per-View",
      "Advertising",
      "Sponsorship",
      "Digital Rights",
      "Revenue Analytics",
      "Payment Processing",
      "Pricing Management",
      "Promotional Codes",
      "Affiliate Program"
    ],
    production: [
      "Content Creation",
      "Video Editing",
      "Audio Editing",
      "Image Editing",
      "File Conversion",
      "Quality Control",
      "Metadata Management",
      "Asset Management",
      "Workflow Management",
      "Version Control"
    ],
    distribution: [
      "Multi-platform Distribution",
      "Content Delivery",
      "Geographic Distribution",
      "Channel Management",
      "Syndication",
      "Analytics",
      "Performance Monitoring",
      "Quality Metrics",
      "Distribution Rights",
      "Partner Management"
    ]
  },
  gaming: {
    core: [
      "Game Engine",
      "Physics Engine",
      "Graphics Engine",
      "Sound Engine",
      "Input Management",
      "Game Logic",
      "AI System",
      "Network Engine",
      "Save System",
      "Level Management"
    ],
    multiplayer: [
      "Matchmaking",
      "Real-time Gameplay",
      "Chat System",
      "Team Management",
      "Leaderboards",
      "Tournament System",
      "Player Stats",
      "Social Features",
      "Guild System",
      "Friend System"
    ],
    monetization: [
      "In-game Store",
      "Virtual Currency",
      "Premium Items",
      "Subscription System",
      "Battle Pass",
      "Advertising",
      "Loot Boxes",
      "Trading System",
      "Auction House",
      "Microtransactions"
    ],
    social: [
      "Player Profiles",
      "Achievement System",
      "Social Feed",
      "Friend Lists",
      "Clan System",
      "Chat Rooms",
      "Event System",
      "Community Features",
      "Player Rankings",
      "Social Sharing"
    ],
    analytics: [
      "Player Analytics",
      "Game Performance",
      "Monetization Metrics",
      "Player Behavior",
      "Game Balance",
      "Server Analytics",
      "Feature Usage",
      "Player Retention",
      "Revenue Analysis",
      "Cheat Detection"
    ]
  },
  logistics: {
    tracking: [
      "Shipment Tracking",
      "Real-time GPS",
      "Route Optimization",
      "Delivery Status",
      "Package Location",
      "ETA Calculation",
      "Proof of Delivery",
      "Track and Trace",
      "Last Mile Tracking",
      "Fleet Tracking"
    ],
    inventory: [
      "Inventory Management",
      "Stock Control",
      "Warehouse Management",
      "Order Fulfillment",
      "Batch Tracking",
      "Inventory Analytics",
      "Reorder Points",
      "Stock Alerts",
      "Inventory Forecasting",
      "Supply Chain Visibility"
    ],
    operations: [
      "Order Management",
      "Route Planning",
      "Fleet Management",
      "Driver Management",
      "Maintenance Scheduling",
      "Resource Allocation",
      "Cost Management",
      "Performance Metrics",
      "Quality Control",
      "Compliance Management"
    ],
    documentation: [
      "Shipping Documents",
      "Customs Documentation",
      "Bill of Lading",
      "Invoice Generation",
      "Packing Lists",
      "Certificate Management",
      "Document Tracking",
      "Digital Signatures",
      "Document Storage",
      "Audit Trail"
    ],
    analytics: [
      "Performance Analytics",
      "Cost Analysis",
      "Route Analytics",
      "Delivery Analytics",
      "Fleet Analytics",
      "Driver Performance",
      "Customer Analytics",
      "Operational Metrics",
      "Financial Analytics",
      "Predictive Analytics"
    ]
  },
  social: {
    core: [
      "User Profiles",
      "News Feed",
      "Post Creation",
      "Friend System",
      "Following System",
      "Privacy Settings",
      "Notifications",
      "Search Function",
      "Trending Topics",
      "Activity Log"
    ],
    content: [
      "Photo Sharing",
      "Video Sharing",
      "Story Feature",
      "Live Streaming",
      "Content Discovery",
      "Content Moderation",
      "Content Analytics",
      "Hashtag System",
      "Content Categories",
      "Content Archive"
    ],
    engagement: [
      "Likes/Reactions",
      "Comments",
      "Sharing",
      "Polls",
      "Events",
      "Groups",
      "Messaging",
      "Video Calls",
      "Voice Calls",
      "Emoji Support"
    ],
    monetization: [
      "Advertising Platform",
      "Sponsored Content",
      "Creator Tools",
      "Marketplace",
      "Premium Features",
      "Virtual Gifts",
      "Subscription Model",
      "Payment Processing",
      "Revenue Analytics",
      "Affiliate Program"
    ],
    analytics: [
      "User Analytics",
      "Content Performance",
      "Engagement Metrics",
      "Audience Insights",
      "Behavior Analysis",
      "Growth Metrics",
      "Conversion Tracking",
      "ROI Analysis",
      "Trend Analysis",
      "Reporting Tools"
    ]
  }
};

interface CalculatorProps {
  onDomainSelect?: (domain: string) => void;
}

export const Calculator = ({ onDomainSelect }: CalculatorProps) => {
  const { domain } = useParams();
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedDomain, setSelectedDomain] = useState(domain || "");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    linkedin: "",
    termsAccepted: false,
    newsletter: false,
  });
  const [validationErrors, setValidationErrors] = useState({
    platform: false,
    domain: false,
    features: false,
  });
  const { toast } = useToast();
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (domain && domain !== selectedDomain) {
      setSelectedDomain(domain);
      setSelectedFeatures([]);
    }
  }, [domain]);

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
    setValidationErrors(prev => ({ ...prev, platform: false }));
  };

  const handleDomainSelect = (domainId: string) => {
    setSelectedDomain(domainId);
    setValidationErrors(prev => ({ ...prev, domain: false }));
    setSelectedFeatures([]);
    onDomainSelect?.(domainId);
    
    // Auto-scroll to features section after domain selection
    setTimeout(() => {
      featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleFeatureToggle = (feature: string) => {
    const newFeatures = selectedFeatures.includes(feature)
      ? selectedFeatures.filter((f) => f !== feature)
      : [...selectedFeatures, feature];
    setSelectedFeatures(newFeatures);
    setValidationErrors(prev => ({ ...prev, features: false }));
  };

  const handleFormChange = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetAllSelections = () => {
    setSelectedPlatform("");
    setSelectedDomain("");
    setSelectedFeatures([]);
    setFormData({
      name: "",
      phone: "",
      email: "",
      linkedin: "",
      termsAccepted: false,
      newsletter: false,
    });
    setValidationErrors({
      platform: false,
      domain: false,
      features: false,
    });
  };

  const validateSelections = () => {
    const errors = {
      platform: !selectedPlatform,
      domain: !selectedDomain,
      features: selectedFeatures.length === 0,
    };

    setValidationErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // First validate platform, domain, and features
    if (!validateSelections()) {
      toast({
        title: "Required Fields Missing",
        description: "Please select a platform, domain, and at least one feature before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Then validate form data
    if (!formData.name || !formData.email || !formData.termsAccepted) {
      toast({
        title: "Error",
        description: "Please fill in all required fields and accept the Terms and Conditions.",
        variant: "destructive",
      });
      return;
    }

    // If all validations pass, show success message
    toast({
      title: "Success!",
      description:
        "Thank you for filling out this form. Your project plan will arrive in your inbox within 10-15 minutes.",
    });
    
    resetAllSelections();
  };

  return (
    <div id="calculator" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-navy">
          Calculate Your Project Cost
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-[70%]">
            <DomainSelection
              selectedDomain={selectedDomain}
              onDomainSelect={handleDomainSelect}
              error={validationErrors.domain}
            />
            <PlatformSelection
              selectedPlatform={selectedPlatform}
              onPlatformSelect={handlePlatformSelect}
              error={validationErrors.platform}
            />
            <div ref={featuresRef}>
              {selectedDomain && features[selectedDomain as keyof typeof features] && (
                <FeatureSelection
                  features={features[selectedDomain as keyof typeof features]}
                  selectedFeatures={selectedFeatures}
                  onFeatureToggle={handleFeatureToggle}
                  error={validationErrors.features}
                />
              )}
            </div>
          </div>
          <div className="lg:w-[30%]">
            <ContactForm
              formData={formData}
              onFormChange={handleFormChange}
              onSubmit={handleSubmit}
              onSuccess={resetAllSelections}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
