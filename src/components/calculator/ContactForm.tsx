import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  phone: string;
  email: string;
  linkedin: string;
}

interface ContactFormProps {
  formData: FormData;
  onFormChange: (data: Partial<FormData>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ContactForm = ({ formData, onFormChange, onSubmit }: ContactFormProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h3 className="text-2xl font-semibold mb-6 text-navy">
        Where do we send the document?
      </h3>
      <p className="text-gray-600 mb-6">
        Our AI is already working on crafting the project roadmap, plan and
        estimate for you. Just leave your details so you can receive the result.
        Normally you should get it within 10-15 mins.
      </p>
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
          <Label htmlFor="phone">Phone Number (optional)</Label>
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
          <Label htmlFor="linkedin">LinkedIn Profile URL (optional)</Label>
          <Input
            id="linkedin"
            value={formData.linkedin}
            onChange={(e) => onFormChange({ linkedin: e.target.value })}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-pink hover:bg-pink-light text-white py-6 text-lg"
        >
          Get Your Project Plan
        </Button>
      </form>
    </div>
  );
};