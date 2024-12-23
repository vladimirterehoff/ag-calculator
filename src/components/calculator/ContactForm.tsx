import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";

interface ContactFormProps {
  formData: {
    name: string;
    phone: string;
    email: string;
    linkedin: string;
    termsAccepted: boolean;
    newsletter: boolean;
  };
  onFormChange: (data: Partial<ContactFormProps["formData"]>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onSuccess: () => void;
}

export const ContactForm = ({
  formData,
  onFormChange,
  onSubmit,
  onSuccess,
}: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // Call the original onSubmit handler
    onSubmit(e);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    onSuccess(); // Reset all selections
  };

  if (isSuccess) {
    return (
      <div className="sticky top-4">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-center space-y-4 animate-fade-up">
            <div className="text-pink text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-navy">Thank you!</h3>
            <p className="text-gray-600">
              Your project plan is being prepared and will arrive in your inbox within 10-15 minutes.
            </p>
            <p className="text-sm text-gray-500">
              Please check your email (including spam folder) for further instructions.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-4">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="bg-white pt-4 pb-6 -mt-4 rounded-t-xl">
          <h3 className="text-2xl font-bold text-navy mb-2">Your document is almost ready!</h3>
          <p className="text-gray-600 mb-6">
            Just fill in your contact details, and we'll send it within 10-15 mins:
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => onFormChange({ name: e.target.value })}
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => onFormChange({ phone: e.target.value })}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => onFormChange({ email: e.target.value })}
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Label htmlFor="linkedin">LinkedIn Profile</Label>
            <Input
              id="linkedin"
              value={formData.linkedin}
              onChange={(e) => onFormChange({ linkedin: e.target.value })}
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.termsAccepted}
                onCheckedChange={(checked) =>
                  onFormChange({ termsAccepted: checked as boolean })
                }
                required
                disabled={isSubmitting}
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <a 
                  href="https://attractgroup.com/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-pink hover:text-pink-dark underline"
                >
                  Terms and Conditions
                </a>{" "}
                *
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) =>
                  onFormChange({ newsletter: checked as boolean })
                }
                disabled={isSubmitting}
              />
              <Label htmlFor="newsletter" className="text-sm">
                Subscribe to our newsletter with latest blog articles and industry trends
              </Label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-pink hover:bg-pink-dark text-white relative"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </span>
            ) : (
              "Get Your Project Plan"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};