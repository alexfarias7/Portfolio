import HeroImage from "../heroImage/Index";
import HeroInfo from "../heroInfo/Index";
import { homePageInfo } from "@/types/schemas/pages";

const HeroIntro = ({ homeInfo }: homePageInfo) => {
  return (
    <section>
      <div
        className="mt-[90px]  h-[calc(100vh-90px)] container-max text-purple0 flex items-center justify-between  lg:flex-col-reverse  lg:justify-center  lg:mt-[120px] sm:mt-[90px]  
      "
      >
        <HeroInfo homeInfo={homeInfo} />
        <HeroImage homeInfo={homeInfo} />
      </div>
    </section>
  );
};

export default HeroIntro;
