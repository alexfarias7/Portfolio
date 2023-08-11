"use client";

import React from "react";
import HeroBadge from "./HeroBadge";
import { homePageInfo } from "@/types/schemas/pages";
import { MotionConfig, motion } from "framer-motion";

const HeroPresetation = ({ homeInfo }: homePageInfo) => {
  const { greetingHero, nameHero, lastName, occupationHero, apresetationHero } =
    homeInfo;
  return (
    <motion.div
      className="flex  flex-col sm:mt-3    sm:max-w-[250px]"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="">
        <motion.h1
          className=" self-start  text-8xl lg:text-6xl leading-none font-bold font-tinos sm:text-3xl "
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        >
          {greetingHero}
          <span className="text-purple5">.</span>
        </motion.h1>

        <motion.h3
          className=" text-5xl lg:text-3xl sm:text-2xl  font-tinos font-semibold  infoSection "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {nameHero}
          <span className="text-purple5"> {lastName}</span>
        </motion.h3>
      </div>

      <div className="flex flex-col gap-2  mt-4 sm:items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.2, delay: 0.6 }}
        >
          Apaixonado por criação e tecnologia.
          {apresetationHero}
          <span className="text-purple5 ">{occupationHero}</span>
        </motion.p>

        <HeroBadge homeInfo={homeInfo} />
      </div>
    </motion.div>
  );
};

export default HeroPresetation;
