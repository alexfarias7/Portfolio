import { IHeroImg } from "@/interfaces/heroInterface";
import { getHomePage } from "@/sanity/utils/sanity_homepage.utils";
import Image from "next/image";
import HeroInfo from "./HeroInfo";
import HeroContact from "./HeroContact";
import { HomePageInfo } from "@/types/schemas/pageinfo";
import { homePageInfo } from "@/types/schemas/homepage";

type heroImage = {
  hero: HomePageInfo;
};

const HeroImg = async ({ homeInfo }: homePageInfo) => {
  const { imageHero } = homeInfo;

  return (
    <div className=" flex flex-col gap-4 justify-between md:hidden w-max items-center h-[500px]">
      <div className=" rounded-full border-[16px] border-solid border-blue3/20 w-max">
        {imageHero && (
          <Image
            src={imageHero.url}
            alt={"Image Profile Personal"}
            unoptimized={true}
            height={360}
            width={360}
            priority
            className="rounded-full w-[360px] h-[360px] grayscale lg:w-[300px] lg:h-[300px]"
          />
        )}
      </div>
      <HeroContact homeInfo={homeInfo} />
    </div>
  );
};

export default HeroImg;
