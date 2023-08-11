import TechBadge from "@/components/tachbadges";
import { techBadgeAnimation } from "@/lib/animations";
import { homePageInfo } from "@/types/schemas/pages";
import React from "react";

const HeroBadge = ({ homeInfo }: homePageInfo) => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-3 ">
      {homeInfo.technologies.map((tech, index) => (
        <TechBadge
          name={tech.name}
          key={`intro-tech-${tech.name}`}
          {...techBadgeAnimation}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        />
      ))}
    </div>
  );
};

export default HeroBadge;
