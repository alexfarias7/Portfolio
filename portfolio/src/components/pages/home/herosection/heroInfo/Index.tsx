import React from "react";
import HeroPresetation from "./HeroPresetation";
import { homePageInfo } from "@/types/schemas/pages";
import HeroBtns from "../heroButton/HeroBtns";

const HeroInfo = ({ homeInfo }: homePageInfo) => {
  return (
    <div className="flex flex-wrap   h-[500px] items-center max-w-[505px]  lg:justify-center ">
      <HeroPresetation homeInfo={homeInfo} />
      <HeroBtns />
    </div>
  );
};

export default HeroInfo;
