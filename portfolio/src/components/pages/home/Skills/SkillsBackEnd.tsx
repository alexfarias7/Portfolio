import ProgressBar from "./ProgressBar";
import { homePageInfo } from "@/types/schemas/homepage";

const SkillsBackEnd = ({ homeInfo }: homePageInfo) => {
  return (
    <div className="flex flex-col flex-1 gap-[40px]">
      {homeInfo.skillsBackEnd.map(
        ({ iconSvg, language, percent, width }, index) => {
          return (
            <ProgressBar
              icon={iconSvg}
              language={language}
              percent={percent}
              width={width}
              key={index}
            />
          );
        }
      )}
    </div>
  );
};

export default SkillsBackEnd;
