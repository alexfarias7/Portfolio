import { IHero } from "@/interfaces/heroInterface";
import HeroImg from "./HeroImg";
import HeroInfo from "./HeroInfo";
import { HomePageInfo } from "@/types/schemas/pageinfo";
import { homePageInfo } from "@/types/schemas/homepage";

type pageData = {
  homeInfo: HomePageInfo;
};

const Hero = ({ homeInfo }: homePageInfo) => {
  return (
    <section>
      <div className="mt-[90px]  h-[calc(100vh-90px)] container-max text-purple0 flex items-center justify-between   lg:mt-[20px] lg:h-screen md:justify-center ">
        <HeroInfo homeInfo={homeInfo} />
        <HeroImg homeInfo={homeInfo} />
      </div>
    </section>
  );
};

export default Hero;
