import ProgressBar from "./ProgressBar";
import { homePageInfo } from "@/types/schemas/pages";

const SkillsFrontEnd = ({ homeInfo }: homePageInfo) => {
  return (
    <div className="flex flex-col gap-[40px] flex-1">
      {homeInfo.skillsFrontEnd.map(
        ({ iconSvg, language, percent, width, percentual, id }) => {
          console.log(percentual);

          return (
            <ProgressBar
              icon={iconSvg}
              language={language}
              percent={percent}
              percentual={percentual}
              width={width}
              key={id}
            />
          );
        }
      )}
    </div>
  );
};

export default SkillsFrontEnd;
