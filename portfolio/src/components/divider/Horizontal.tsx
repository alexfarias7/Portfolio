import { cn } from "@/lib/utils";
import React from "react";

type HorizontalDividerProps = {
  className?: string;
};

const HorizontalDivider = ({ className }: HorizontalDividerProps) => {
  return (
    <div
      className={cn("w-full my-8 border-b-2 border-b-gray-800", className)}
    />
  );
};

export default HorizontalDivider;
