import TechBadge from "@/components/tachbadges";
import { homePageInfo } from "@/types/schemas/homepage";
import React from "react";

const HeroBadge = ({ homeInfo }: homePageInfo) => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-3 ">
      {homeInfo.technologies.map((tech, index) => (
        <TechBadge name={tech.name} key={index} />
      ))}
    </div>
  );
};

export default HeroBadge;
