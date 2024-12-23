import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate are the cost estimates?",
    answer:
      "Our AI-powered calculator analyzes thousands of successful projects to provide highly accurate estimates. The estimates typically have a margin of error of less than 15%.",
  },
  {
    question: "How long does it take to receive the project plan?",
    answer:
      "You'll receive your detailed project plan within 10-15 minutes of submitting your requirements. The plan includes cost estimates, timeline, and recommended team structure.",
  },
  {
    question: "What information is included in the project plan?",
    answer:
      "The project plan includes detailed cost breakdowns, timeline estimates, recommended team composition, technology stack suggestions, and a comprehensive feature analysis.",
  },
  {
    question: "Can I modify my requirements after submission?",
    answer:
      "Yes, you can submit a new request with modified requirements. Each submission generates a fresh analysis based on your updated needs.",
  },
];

export const FAQ = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-navy">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-navy">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};