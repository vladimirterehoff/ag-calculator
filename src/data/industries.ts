export type SubIndustry = {
  id: string;
  name: string;
  features: string[];
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
      {
        id: "software",
        name: "Software Development",
        features: ["Cloud Infrastructure", "API Integration", "DevOps Tools"]
      },
      {
        id: "hardware",
        name: "Hardware Manufacturing",
        features: ["Quality Control", "Supply Chain Management", "Inventory Tracking"]
      },
      {
        id: "cybersecurity",
        name: "Cybersecurity",
        features: ["Threat Detection", "Security Monitoring", "Incident Response"]
      }
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    subIndustries: [
      {
        id: "hospitals",
        name: "Hospitals & Clinics",
        features: ["Patient Management", "Medical Records", "Appointment Scheduling"]
      },
      {
        id: "telemedicine",
        name: "Telemedicine",
        features: ["Video Consultations", "Remote Monitoring", "Digital Prescriptions"]
      },
      {
        id: "medical-devices",
        name: "Medical Devices",
        features: ["Device Tracking", "Maintenance Scheduling", "Compliance Management"]
      }
    ]
  },
  // ... Add more industries with their sub-industries
];