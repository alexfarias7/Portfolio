import ProgressBar from "./ProgressBar";
import { homePageInfo } from "@/types/schemas/homepage";

const SkillsFrontEnd = ({ homeInfo }: homePageInfo) => {
  return (
    <div className="flex flex-col gap-[40px] flex-1">
      {homeInfo.skillsFrontEnd.map(
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

export default SkillsFrontEnd;
