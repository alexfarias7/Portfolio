import React from "react";

import CardcAtivity from "./CardcAtivity";
import { homePageInfo } from "@/types/schemas/pages";

const CardsActivitIes = ({ homeInfo }: homePageInfo) => {
  return (
    <div className="flex gap-[40px] lg:flex-col">
      {homeInfo.functions.map(
        ({ activity, activityComplement, description, iconSvg }, index) => (
          <CardcAtivity
            activity={activity}
            activityComplement={activityComplement}
            description={description}
            iconSvg={iconSvg}
            key={index}
          />
        )
      )}
    </div>
  );
};

export default CardsActivitIes;
