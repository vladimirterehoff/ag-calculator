import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Industry = {
  id: string;
  name: string;
  subIndustries: {
    id: string;
    name: string;
  }[];
};

const industries: Industry[] = [
  {
    id: "technology",
    name: "Technology",
    subIndustries: [
      { id: "ecommerce", name: "E-commerce" },
      { id: "healthcare", name: "Healthcare Technology" },
      { id: "education", name: "Education Technology" },
      { id: "finance", name: "Financial Technology" },
      { id: "realestate", name: "Real Estate Technology" },
      { id: "travel", name: "Travel Technology" },
      { id: "media", name: "Media Technology" },
      { id: "gaming", name: "Gaming" },
      { id: "logistics", name: "Logistics Technology" },
      { id: "social", name: "Social Media" }
    ]
  }
];

export function IndustrySelect() {
  const [open, setOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const navigate = useNavigate();

  const handleSelect = (industryId: string) => {
    if (!industryId) return;
    setSelectedIndustry(industryId);
    setOpen(false);
  };

  const handleCalculateClick = () => {
    if (selectedIndustry) {
      navigate(`/${selectedIndustry}`);
      const element = document.getElementById("calculator");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const selectedIndustryName = industries
    .flatMap(industry => industry.subIndustries)
    .find(subIndustry => subIndustry.id === selectedIndustry)?.name || "Select industry...";

  return (
    <div className="flex items-center gap-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[300px] justify-between bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
          >
            {selectedIndustryName}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput placeholder="Search industry..." />
            <CommandEmpty>No industry found.</CommandEmpty>
            {industries.map((industry) => (
              <CommandGroup key={industry.id} heading={industry.name}>
                {industry.subIndustries.map((subIndustry) => (
                  <CommandItem
                    key={subIndustry.id}
                    value={subIndustry.id}
                    onSelect={() => handleSelect(subIndustry.id)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedIndustry === subIndustry.id
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {subIndustry.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </Command>
        </PopoverContent>
      </Popover>

      <Button
        onClick={handleCalculateClick}
        className="bg-pink hover:bg-pink-dark text-white px-10 py-8 rounded-xl text-xl flex items-center gap-3 transition-colors"
        disabled={!selectedIndustry}
      >
        Start Calculating
      </Button>
    </div>
  );
}