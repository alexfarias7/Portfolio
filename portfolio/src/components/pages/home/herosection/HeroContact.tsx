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

const MOCK_CONTACTS = [
  { url: "https://github.com/", icon: <TbBrandGithub /> },
  { url: "https://github.com/", icon: <TbBrandLinkedin /> },
  { url: "https://github.com/", icon: <TbBrandTwitter /> },
  { url: "https://github.com/", icon: <TbBrandInstagram /> },
];
const HeroContact = () => {
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
        {MOCK_CONTACTS.map((contact, index) => (
          <a
            className="hover:text-purple5  transition-colors sm:p-3"
            href={contact.url}
            key={`contact-${index}`}
            target="_blank"
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeroContact;
