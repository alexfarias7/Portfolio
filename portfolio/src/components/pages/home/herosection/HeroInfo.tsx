import { IHeroInfo } from "@/interfaces/heroInterface";

import HeroBtns from "./HeroBtn";
import TechBadge from "@/components/tachbadges";
import HeroContact from "./HeroContact";
import HeroBadge from "./HeroBadge";
import { HomePageInfo } from "@/types/schemas/pageinfo";
import { homePageInfo } from "@/types/schemas/pages";

const HeroInfo = async ({ homeInfo }: homePageInfo) => {
  const { greetingHero, nameHero, lastName, occupationHero, apresetationHero } =
    homeInfo;
  return (
    <div className="flex flex-wrap   h-[500px] items-center max-w-[505px] md:justify-center">
      <div className=" lg:gap-6 flex  flex-col  ">
        <div className="self-center ">
          <div className="">
            <h1 className=" self-start text-8xl leading-none font-bold lg:text-6xl  md:self-center ">
              {greetingHero}
              <span className="text-purple5">.</span>
            </h1>
            <h3 className="text-[48px] lg:text-[24px]   font-semibold  infoSection  sm:flex-wrap">
              {nameHero}
              <span className="text-purple5"> {lastName}</span>
            </h3>
          </div>

          <div className="flex flex-col gap-2  mt-4">
            <p className="font-montserrat font-medium text-[18px] sm:text-[16px]">
              {apresetationHero}
              <span className="text-purple5 ">{occupationHero}</span>
            </p>
            <HeroBadge homeInfo={homeInfo} />
          </div>
        </div>
      </div>
      <div className=" self-end md:self-start  flex flex-col gap-4">
        <HeroBtns />
        <div className="hidden md:flex">
          <HeroContact homeInfo={homeInfo} />
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
