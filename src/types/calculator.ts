export interface FormData {
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  termsAccepted: boolean;
  newsletter: boolean;
}

export interface ValidationErrors {
  platform: boolean;
  features: boolean;
}