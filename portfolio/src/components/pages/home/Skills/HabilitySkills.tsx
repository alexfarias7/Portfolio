"use client";

import React, { ReactNode, useState } from "react";

import ArrowButton from "./ArrowButton";
import ArrowDown from "@/components/Icons/ArrowDown";

import CmsIcon from "@/components/cmsIcon/Index";

interface ISkillsHabiliy {
  IconHability: string;
  titleHability: string;
  skilss: ReactNode;
  IconSkill: string;
}

const HabilitySkilss = ({
  IconHability,
  IconSkill,
  skilss,
  titleHability,
}: ISkillsHabiliy) => {
  const [showSkill, setShowSkill] = useState(false);

  return (
    <div className="mt-[80px] ">
      <div className="flex gap-[8px] items-center mb-[40px] group text-blue0 relative">
        <div className="w-[80px] flex text-blue0  hover:text-purple5 ">
          <div className="w-max self-start group-hover:text-purple5 transition duration-500 ease-in-out">
            <CmsIcon icon={IconHability} />
          </div>
        </div>
        <h3 className="font-montserrat text-[52px] font-semibold text-blue0 group-hover:text-purple5  transition duration-500 ease-in-out md:text-[36px] ">
          {titleHability}
        </h3>

        <ArrowButton
          icon={<ArrowDown />}
          showSkill={showSkill}
          setShowSkill={setShowSkill}
        />
      </div>
      {showSkill && (
        <div className="flex gap-[36px] items-center ">
          <div className=" text-blue0  hover:text-purple5  lg:hidden w-2/5 h-2/5">
            <CmsIcon icon={IconSkill} />
          </div>
          {skilss}
        </div>
      )}
    </div>
  );
};

export default HabilitySkilss;
