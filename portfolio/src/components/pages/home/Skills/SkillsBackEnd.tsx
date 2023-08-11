"use client";

import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import { homePageInfo } from "@/types/schemas/pages";

const SkillsBackEnd = ({ homeInfo }: homePageInfo) => {
  return (
    <div className="flex flex-col flex-1 gap-[40px]">
      {homeInfo.skillsBackEnd?.map((skill, i) => (
        <motion.div
          key={`skill-${skill.id}`}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.15, delay: i * 0.2 }}
        >
          <ProgressBar
            icon={skill.iconSvg}
            language={skill.language}
            percentual={skill.percentual}
            percent={skill.percent}
            width={skill.width}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsBackEnd;
