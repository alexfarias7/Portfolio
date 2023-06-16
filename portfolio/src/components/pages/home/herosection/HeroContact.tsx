interface Props {
  hide: boolean;
}

import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbBrandInstagram,
} from "react-icons/tb";

import BtnIcon from "@/components/BtnIcon";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";
import classNames from "classnames";
import { homePageInfo } from "@/types/schemas/pages";
import CmsIcon from "@/components/cmsIcon/Index";

const MOCK_CONTACTS = [
  { url: "https://github.com/", icon: <TbBrandGithub /> },
  { url: "https://github.com/", icon: <TbBrandLinkedin /> },
  { url: "https://github.com/", icon: <TbBrandTwitter /> },
  { url: "https://github.com/", icon: <TbBrandInstagram /> },
];
const HeroContact = ({ homeInfo }: homePageInfo) => {
  return (
    <div className={" flex items-center gap-8 md:flex-col md:gap-2"}>
      <BtnIcon
        className="rounded-[2px] hover:translate-x-[14px] hover:translate-y-0 md:hidden"
        text="redes sociais"
        icon={<HiArrowRight />}
      />
      <BtnIcon
        className="rounded-[2px]  hidden md:flex "
        text="redes sociais"
        icon={<HiArrowDown />}
      />

      <div className="text-2xl text-purple0 flex items-center  md:h-10 gap-3 ">
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
