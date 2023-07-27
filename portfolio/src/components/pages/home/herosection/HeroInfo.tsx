import { IHeroInfo } from "@/interfaces/heroInterface";

import HeroBtns from "./HeroBtn";
import HeroContact from "./HeroContact";
import HeroBadge from "./HeroBadge";
import { homePageInfo } from "@/types/schemas/pages";

const HeroInfo = async ({ homeInfo }: homePageInfo) => {
  const { greetingHero, nameHero, lastName, occupationHero, apresetationHero } =
    homeInfo;
  return (
    <div className="flex flex-wrap   h-[500px] items-center max-w-[505px] ">
      <div className="flex  flex-col  ">
        <div className="self-center ">
          <div className="">
            <h1 className=" self-start text-8xl leading-none font-bold  ">
              {greetingHero}
              <span className="text-purple5">.</span>
            </h1>
            <h3 className="text-[48px]    font-semibold  infoSection ">
              {nameHero}
              <span className="text-purple5"> {lastName}</span>
            </h3>
          </div>

          <div className="flex flex-col gap-2  mt-4">
            <p className="font-montserrat font-medium text-[18px] ">
              {apresetationHero}
              <span className="text-purple5 ">{occupationHero}</span>
            </p>
            <HeroBadge homeInfo={homeInfo} />
          </div>
        </div>
      </div>
      <div className=" self-end   flex flex-col gap-10">
        <HeroBtns />
        <div className="hidden ">
          <HeroContact homeInfo={homeInfo} />
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
