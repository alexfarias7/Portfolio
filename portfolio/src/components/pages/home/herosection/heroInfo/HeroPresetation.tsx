import React from "react";
import HeroBadge from "./HeroBadge";
import { homePageInfo } from "@/types/schemas/pages";

const HeroPresetation = ({ homeInfo }: homePageInfo) => {
  const { greetingHero, nameHero, lastName, occupationHero, apresetationHero } =
    homeInfo;
  return (
    <div className="flex  flex-col sm:mt-3    sm:max-w-[250px]">
      <div className="">
        <h1 className=" self-start  text-8xl lg:text-6xl leading-none font-bold font-tinos sm:text-3xl ">
          {greetingHero}
          <span className="text-purple5">.</span>
        </h1>

        <h3 className=" text-5xl lg:text-3xl sm:text-2xl  font-tinos font-semibold  infoSection ">
          {nameHero}
          <span className="text-purple5"> {lastName}</span>
        </h3>
      </div>

      <div className="flex flex-col gap-2  mt-4 sm:items-center">
        <p className="">
          Apaixonado por criação e tecnologia.
          {apresetationHero}
          <span className="text-purple5 ">{occupationHero}</span>
        </p>{" "}
        <p></p>
        <HeroBadge homeInfo={homeInfo} />
      </div>
    </div>
  );
};

export default HeroPresetation;
