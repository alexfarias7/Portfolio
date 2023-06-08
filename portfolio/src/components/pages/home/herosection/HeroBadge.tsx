import TechBadge from "@/components/tachbadges";
import React from "react";

const HeroBadge = () => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-3 ">
      {Array.from({ length: 5 }).map((_, index) => (
        <TechBadge key={index} name="nextjs" />
      ))}
    </div>
  );
};

export default HeroBadge;
