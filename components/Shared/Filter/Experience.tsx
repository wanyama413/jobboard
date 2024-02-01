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

export function Experience() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Experience" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Employment Contract</SelectLabel>
          <SelectItem value="pineapple">Attachment</SelectItem>
          <SelectItem value="grapes">Casual</SelectItem>
          <SelectItem value="blueberry">Fixed Term Contract</SelectItem>
          <SelectItem value="blueberry">Freelance</SelectItem>
          <SelectItem value="pineapple">Internship</SelectItem>
          <SelectItem value="apple">Permanent</SelectItem>
          <SelectItem value="pineapple">Probationary</SelectItem>
          <SelectItem value="banana">Temporary</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
