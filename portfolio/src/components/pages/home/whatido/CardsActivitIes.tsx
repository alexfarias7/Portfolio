import React from "react";

import CardcAtivity from "./CardcAtivity";
import WebDevelopment from "@/components/Icons/WebDevelopment";
import SoftwareDevelopment from "@/components/Icons/SoftwareDevelopment";
import Design from "@/components/Icons/Design";

const CardsActivitIes = () => {
  return (
    <div className="flex gap-[40px] lg:flex-col">
      <CardcAtivity
        activity="WEB"
        activityComplement="DEVELOPMENT "
        icon={<WebDevelopment />}
      />
      <CardcAtivity
        activity="SOFTWARE "
        activityComplement="DEVELOPMENT"
        icon={<SoftwareDevelopment />}
      />
      <CardcAtivity
        activity="UI & WEB"
        activityComplement="DESIGN"
        icon={<Design />}
      />
    </div>
  );
};

export default CardsActivitIes;
