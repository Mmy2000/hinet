// components/ui/Spinner.tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = "md", className }) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-7 h-7 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div role="status" className="flex items-center justify-center">
      <div
        className={cn(
          "rounded-full animate-spin",
          "border-t-transparent dark:border-t-zinc-800 border-solid",
          "border-gray-200 ", // background ring
          "border-t-primary border-r-primary", // active gradient edge
          "shadow-sm", // subtle shadow
          sizeClasses[size],
          className
        )}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
