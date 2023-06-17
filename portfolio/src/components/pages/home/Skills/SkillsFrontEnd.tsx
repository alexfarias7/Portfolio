import ProgressBar from "./ProgressBar";
import { homePageInfo } from "@/types/schemas/pages";

const SkillsFrontEnd = ({ homeInfo }: homePageInfo) => {
  return (
    <div className="flex flex-col gap-[40px] flex-1">
      {homeInfo.skillsFrontEnd.map((skill) => (
        <ProgressBar
          icon={skill.iconSvg}
          language={skill.language}
          percent={skill.percent}
          percentual={skill.percentual}
          width={skill.width}
          key={skill.id}
        />
      ))}
    </div>
  );
};

export default SkillsFrontEnd;
