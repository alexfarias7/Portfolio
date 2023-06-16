import ProgressBar from "./ProgressBar";
import { homePageInfo } from "@/types/schemas/pages";

const SkillsBackEnd = ({ homeInfo }: homePageInfo) => {
  return (
    <div className="flex flex-col flex-1 gap-[40px]">
      {homeInfo.skillsBackEnd.map((skill) => {
        console.log(skill.id);

        return (
          <ProgressBar
            icon={skill.iconSvg}
            language={skill.language}
            percentual={skill.percentual}
            percent={skill.percent}
            width={skill.width}
            key={skill.id}
          />
        );
      })}
    </div>
  );
};

export default SkillsBackEnd;
