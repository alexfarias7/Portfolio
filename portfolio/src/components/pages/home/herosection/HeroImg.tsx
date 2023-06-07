import { IHeroImg } from "@/interfaces/heroInterface";
import { getHomePage } from "@/sanity/utils/sanity_homepage.utils";
import Image from "next/image";

const HeroImg = async ({ hero }: IHeroImg) => {
  const { image } = hero;

  return (
    <div className=" rounded-full border-[16px] border-solid border-blue3/20 md:hidden">
      {image && (
        <Image
          src={image}
          alt={"Image Profile Personal"}
          unoptimized={true}
          height={400}
          width={400}
          priority
          className="rounded-full grayscale lg:w-[300px] lg:h-[300px]"
        />
      )}
    </div>
  );
};

export default HeroImg;
