import { IHeroInfo } from "@/interfaces/heroInterface";
import HeroBtns from "./HeroBtn";

const HeroInfo = async ({ hero }: IHeroInfo) => {
  const { greetingHero, nameHero, lastName, occupationHero, apresetationHero } =
    hero;
  return (
    <div className="flex flex-col gap-[32px] lg:gap-[20px]">
      <h1 className="text-[96px] font-bold lg:text-[60px]  md:self-center sm:mb-[20px]">
        {greetingHero}
        <span className="text-purple5">.</span>
      </h1>
      <h3 className="text-[48px] lg:text-[24px]   font-semibold  infoSection   ">
        {nameHero}
        <span className="text-purple5"> {lastName}</span>
      </h3>
      <p className="font-montserrat font-medium text-[18px] sm:text-[16px]">
        {apresetationHero}
        <span className="text-purple5 ">{occupationHero}</span>
      </p>
      <HeroBtns />
    </div>
  );
};

export default HeroInfo;
