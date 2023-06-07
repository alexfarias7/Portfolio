import { IHero } from "@/interfaces/heroInterface";
import HeroImg from "./HeroImg";
import HeroInfo from "./HeroInfo";

const Hero = ({ hero }: IHero) => {
  return (
    <section>
      <div className="mt-[80px]  h-[calc(100vh-120px)] container-max text-purple0 flex items-center justify-between   lg:mt-[20px] lg:h-screen md:justify-center ">
        <HeroInfo hero={hero} />
        <HeroImg hero={hero} />
      </div>
    </section>
  );
};

export default Hero;
