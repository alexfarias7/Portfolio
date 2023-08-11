"use client";

import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import { homePageInfo } from "@/types/schemas/pages";

const SkillsFrontEnd = ({ homeInfo }: homePageInfo) => {
  return (
    <div className="flex flex-col gap-[40px] flex-1">
      {homeInfo.skillsFrontEnd.map((skill, i) => (
        <motion.div
          key={`skill-front-${skill.id}`}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.15, delay: i * 0.2 }}
        >
          <ProgressBar
            icon={skill.iconSvg}
            language={skill.language}
            percent={skill.percent}
            percentual={skill.percentual}
            width={skill.width}
            key={skill.id}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsFrontEnd;
