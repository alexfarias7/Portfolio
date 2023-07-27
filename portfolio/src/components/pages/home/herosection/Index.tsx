import { IHero } from "@/interfaces/heroInterface";
import HeroImg from "./HeroImg";
import HeroInfo from "./HeroInfo";

import { homePageInfo } from "@/types/schemas/pages";

const Hero = ({ homeInfo }: homePageInfo) => {
  return (
    <section>
      <div className="mt-[90px]  h-[calc(100vh-90px)] container-max text-purple0 flex items-center justify-between ">
        <HeroInfo homeInfo={homeInfo} />
        <HeroImg homeInfo={homeInfo} />
      </div>
    </section>
  );
};

export default Hero;
