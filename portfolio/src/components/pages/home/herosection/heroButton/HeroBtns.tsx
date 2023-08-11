"use client";

import BtnIcon from "@/components/Buttons/BtnIcon";
import Download from "@/components/Icons/Download";
import PortfolioIcon from "@/components/Icons/PortfolioIcon";

import { motion } from "framer-motion";

const HeroBtns = () => {
  return (
    <div className=" self-end lg:self-auto flex gap-8 lg:flex-col lg:gap-4 ">
      <motion.div
        className="group "
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.5 }}
      >
        <BtnIcon icon={<Download />} text="Download CV" className=" " />
      </motion.div>

      <motion.div
        className="group"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <BtnIcon className=" " icon={<PortfolioIcon />} text="Meus Projetos" />
      </motion.div>
    </div>
  );
};

export default HeroBtns;
