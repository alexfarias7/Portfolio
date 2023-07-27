import { homePageInfo } from "@/types/schemas/pages";
import Image from "next/image";
import React from "react";
import HeroContact from "./HeroContact";

const HeroImage = ({ homeInfo }: homePageInfo) => {
  const { imageHero } = homeInfo;

  return (
    <div className=" flex flex-col gap-4 lg:gap-8 justify-between lg:justify-center lg:h-max w-max items-center h-[500px]  ">
      <div className="relative">
        <div className=" bg-blue3/20 h-[300px] w-[200px] sm:h-[200px] sm:w-[150px] rounded-sm left-5 absolute top-5 transition-all -z-10 "></div>
        {imageHero && (
          <Image
            src={imageHero.url}
            alt={"Image Profile Personal"}
            unoptimized={true}
            height={200}
            width={300}
            priority
            className="rounded-sm object-cover object-top grayscale h-[300px] w-[200px] sm:h-[200px] sm:w-[150px] bg-red-500  hover:translate-y-[10px] hover:translate-x-[10px] transition-all duration-500"
          />
        )}
      </div>
      <HeroContact homeInfo={homeInfo} />
    </div>
  );
};

export default HeroImage;
