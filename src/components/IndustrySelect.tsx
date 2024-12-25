import * as React from "react";
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
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { industries } from "@/data/industries";

interface IndustrySelectProps {
  onSelect: (industryId: string, subIndustryId: string) => void;
}

export function IndustrySelect({ onSelect }: IndustrySelectProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedIndustry, setSelectedIndustry] = React.useState<string>("");
  const [selectedSubIndustry, setSelectedSubIndustry] = React.useState<string>("");

  const handleSelect = (industryId: string, subIndustryId: string) => {
    setSelectedIndustry(industryId);
    setSelectedSubIndustry(subIndustryId);
    onSelect(industryId, subIndustryId);
    setOpen(false);
  };

  const getDisplayValue = () => {
    const industry = industries.find(i => i.id === selectedIndustry);
    const subIndustry = industry?.subIndustries.find(s => s.id === selectedSubIndustry);
    
    if (industry && subIndustry) {
      return `${industry.name} - ${subIndustry.name}`;
    }
    
    return "Select industry...";
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between bg-white/90 hover:bg-white"
        >
          {getDisplayValue()}
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
                  key={`${industry.id}-${subIndustry.id}`}
                  value={`${industry.name} ${subIndustry.name}`}
                  onSelect={() => handleSelect(industry.id, subIndustry.id)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedIndustry === industry.id && selectedSubIndustry === subIndustry.id
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
  );
}