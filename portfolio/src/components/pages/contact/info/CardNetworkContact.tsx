import MyContactsIcon from "@/components/Icons/MyContactsIcon";
import CardDivAbsolute from "@/components/cardDivAbsolute";
import CmsIcon from "@/components/cmsIcon/Index";
import { ContacttPagedata, networkType } from "@/types/schemas/contactPageInfo";
import { KnownTech } from "@/types/schemas/projectsInfo";
import React from "react";

type Props = {
  networks: networkType[];
};
const CardNetworkContact = ({ contactPage }: ContacttPagedata) => {
  return (
    <div className="relative group w-[280px]">
      <CardDivAbsolute className="h-[100px]" />

      <div className=" flex gap-5 items-center p-3 card-style h-[100px]">
        <div
          className="w-[56px] h-[56px] bg-purple3/80 text-purple7 group-hover:bg-purple7 group-hover:text-purple0 transition-all 
    duration-500    rounded-xl flex justify-center items-center"
        >
          <MyContactsIcon />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-purple5 text-xl font-medium  font-tinos">
            Minhas redes sociais
          </p>
          <div className=" text-purple0 flex items-center  self-center gap-3  sm:gap-1">
            {contactPage.networks.map(({ iconSvg, url }, index) => (
              <a
                className="hover:text-purple5  transition-colors sm:p-1"
                href={url}
                key={`contact-${index}`}
                target="_blank"
              >
                <CmsIcon icon={iconSvg} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNetworkContact;
