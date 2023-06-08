import { IHeroImg } from "@/interfaces/heroInterface";
import { getHomePage } from "@/sanity/utils/sanity_homepage.utils";
import Image from "next/image";
import HeroInfo from "./HeroInfo";
import HeroContact from "./HeroContact";

const HeroImg = async ({ hero }: IHeroImg) => {
  const { image } = hero;

  return (
    <div className=" flex flex-col gap-4 justify-between md:hidden w-max items-center h-[500px]">
      <div className=" rounded-full border-[16px] border-solid border-blue3/20 w-max">
        {image && (
          <Image
            src={image}
            alt={"Image Profile Personal"}
            unoptimized={true}
            height={400}
            width={400}
            priority
            className="rounded-full w-[400px] h-[400px] grayscale lg:w-[300px] lg:h-[300px]"
          />
        )}
      </div>
      <HeroContact />
    </div>
  );
};

export default HeroImg;
