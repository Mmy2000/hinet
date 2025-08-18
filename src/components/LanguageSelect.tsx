"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

export function LanguageSelect() {
  return (
    <Select>
      <SelectTrigger className="w-auto border-none shadow-none bg-transparent px-2 focus:ring-0 focus:ring-offset-0">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Globe className="h-5 w-5" />
          <SelectValue placeholder="EN" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ar">العربية</SelectItem>

      </SelectContent>
    </Select>
  );
}
