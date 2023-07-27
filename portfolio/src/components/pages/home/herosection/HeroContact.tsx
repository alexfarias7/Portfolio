import { HiArrowDown, HiArrowRight } from "react-icons/hi";
import { homePageInfo } from "@/types/schemas/pages";
import CmsIcon from "@/components/cmsIcon/Index";
import BtnIcon from "@/components/Buttons/BtnIcon";

const HeroContact = ({ homeInfo }: homePageInfo) => {
  return (
    <div className={" flex items-center gap-8 lg:flex-col lg:gap-2"}>
      <div>
        <BtnIcon
          className="rounded-[2px] hover:translate-x-[14px] hover:translate-y-0 lg:hidden"
          text="redes sociais"
          icon={<HiArrowRight />}
        />
        <BtnIcon
          className="rounded-[2px]  hidden lg:flex sm:text-sm sm:w-[180px] sm:px-2 :gap-2 "
          text="redes sociais"
          icon={<HiArrowDown size={20} />}
        />
      </div>

      <div className="text-2xl sm:text-lg  text-purple0 flex items-center  lg:h-10 gap-3  sm:gap-1">
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
