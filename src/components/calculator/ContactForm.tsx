import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

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
}

export const ContactForm = ({
  formData,
  onFormChange,
  onSubmit,
}: ContactFormProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 relative">
      <div className="sticky top-0 bg-white pt-4 pb-6 -mt-4 rounded-t-xl z-10">
        <h3 className="text-2xl font-bold text-navy mb-2">Your document is almost ready!</h3>
        <p className="text-gray-600 mb-6">
          Just fill in your contact details, and we'll send it within 10-15 mins:
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => onFormChange({ name: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => onFormChange({ phone: e.target.value })}
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
          />
        </div>

        <div>
          <Label htmlFor="linkedin">LinkedIn Profile</Label>
          <Input
            id="linkedin"
            value={formData.linkedin}
            onChange={(e) => onFormChange({ linkedin: e.target.value })}
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
            />
            <Label htmlFor="terms" className="text-sm">
              I agree to the Terms and Conditions *
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) =>
                onFormChange({ newsletter: checked as boolean })
              }
            />
            <Label htmlFor="newsletter" className="text-sm">
              Subscribe to our newsletter with latest blog articles and industry trends
            </Label>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-pink hover:bg-pink-light text-white"
        >
          Get Your Project Plan
        </Button>
      </form>
    </div>
  );
};