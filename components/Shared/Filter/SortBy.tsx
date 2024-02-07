import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterIcon } from "lucide-react";

export function SortBy() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] focus:!ring-0">
        <SelectValue
          placeholder={
            <div className="flex items-center">
              <FilterIcon size={12} className="mr-2" /> Job Type
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Employment Contract</SelectLabel>
          <SelectItem value="attachment">Attachment</SelectItem>
          <SelectItem value="casual">Casual</SelectItem>
          <SelectItem value="fixedtermcontract">Fixed Term Contract</SelectItem>
          <SelectItem value="freelance">Freelance</SelectItem>
          <SelectItem value="internship">Internship</SelectItem>
          <SelectItem value="permanent">Permanent</SelectItem>
          <SelectItem value="probationary">Probationary</SelectItem>
          <SelectItem value="temporary">Temporary</SelectItem>
          <SelectItem value="volunteering">Volunteering</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
