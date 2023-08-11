"use client";

import { HiArrowDown, HiArrowRight } from "react-icons/hi";
import { homePageInfo } from "@/types/schemas/pages";
import CmsIcon from "@/components/cmsIcon/Index";
import BtnIcon from "@/components/Buttons/BtnIcon";
import { motion } from "framer-motion";

const HeroContact = ({ homeInfo }: homePageInfo) => {
  return (
    <div className={" flex items-center gap-8 lg:hidden "}>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <BtnIcon
          className="lg:hidden"
          text="redes sociais"
          icon={<HiArrowRight />}
        />
      </motion.div>

      <motion.div
        className="text-2xl  text-purple0 flex items-center   gap-3  sm:gap-1"
        /*   initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5, delay: 0.4 }} */
      >
        {homeInfo.socials.map(({ url, iconSvg }, index) => (
          <motion.a
            className="hover:text-purple5  transition-colors sm:p-3"
            href={url}
            key={`contact-intro-${index}`}
            target="_blank"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <CmsIcon icon={iconSvg} />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroContact;
