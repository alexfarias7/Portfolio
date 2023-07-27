import { HiArrowDown, HiArrowRight } from "react-icons/hi";
import { homePageInfo } from "@/types/schemas/pages";
import CmsIcon from "@/components/cmsIcon/Index";
import BtnIcon from "@/components/Buttons/BtnIcon";

const HeroContact = ({ homeInfo }: homePageInfo) => {
  return (
    <div className={" flex items-center gap-8 lg:hidden "}>
      <>
        <BtnIcon
          className="lg:hidden"
          text="redes sociais"
          icon={<HiArrowRight />}
        />
        {/*       <BtnIcon
          className=" hidden lg:flex  "
          text="redes sociais"
          icon={<HiArrowDown />}
        /> */}
      </>

      <div className="text-2xl  text-purple0 flex items-center   gap-3  sm:gap-1">
        {homeInfo.socials.map(({ url, iconSvg }, index) => (
          <a
            className="hover:text-purple5  transition-colors sm:p-3"
            href={url}
            key={`contact-${index}`}
            target="_blank"
          >
            <CmsIcon icon={iconSvg} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeroContact;
