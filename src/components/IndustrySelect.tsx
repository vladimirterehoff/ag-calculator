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
import { industries } from "@/utils/industriesData";

export function IndustrySelect() {
  const [open, setOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const navigate = useNavigate();

  const handleSelect = (industryId: string) => {
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

  // Ensure we have valid data to render
  const validIndustries = Array.isArray(industries) ? industries : [];

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
            {selectedIndustry
              ? validIndustries
                  .flatMap((i) => i.subIndustries)
                  .find((i) => i.id === selectedIndustry)?.name || "Select industry..."
              : "Select industry..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput placeholder="Search industry..." />
            <CommandEmpty>No industry found.</CommandEmpty>
            {validIndustries.map((industry) => (
              <CommandGroup key={industry.id} heading={industry.name}>
                {Array.isArray(industry.subIndustries) && 
                  industry.subIndustries.map((subIndustry) => (
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