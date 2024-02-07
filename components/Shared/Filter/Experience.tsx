import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookOpenIcon } from "lucide-react";

export function Experience() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] focus:!ring-0">
        <SelectValue
          placeholder={
            <div className="flex items-center">
              <BookOpenIcon size={12} className="mr-2" /> Experience
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="noexperience">No Experience</SelectItem>
        <SelectItem value="one">1 year</SelectItem>
        <SelectItem value="two">2 years</SelectItem>
        <SelectItem value="three">3 years</SelectItem>
        <SelectItem value="four">4 years</SelectItem>
        <SelectItem value="five">5 years</SelectItem>
        <SelectItem value="six">6 years</SelectItem>
        <SelectItem value="seven">7+ years</SelectItem>
      </SelectContent>
    </Select>
  );
}
