"use client";

import React, { ReactNode, useState } from "react";

import ArrowButton from "./ArrowButton";
import ArrowDown from "@/components/Icons/ArrowDown";

interface ISkillsHabiliy {
  IconHability: ReactNode;
  titleHability: string;
  skilss: ReactNode;
  IconSkill: ReactNode;
}

const HabilitySkilss = ({
  IconHability,
  titleHability,
  skilss,
  IconSkill,
}: ISkillsHabiliy) => {
  const [showSkill, setShowSkill] = useState(false);

  return (
    <div className="mt-[80px] ">
      <div className="flex gap-[8px] items-center mb-[40px] group text-blue0 relative">
        <div className="w-[80px] flex">{IconHability}</div>
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
        <div className="flex gap-[36px] items-center">
          {IconSkill}
          {skilss}
        </div>
      )}
    </div>
  );
};

export default HabilitySkilss;
