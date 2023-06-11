import { infoBackend } from "@/utils/skillsBackend";
import ProgressBar from "./ProgressBar";

const SkillsBackEnd = () => {
  return (
    <div className="flex flex-col flex-1 gap-[40px]">
      {infoBackend.map(({ icon, id, language, percent, width }) => {
        return (
          <ProgressBar
            icon={icon}
            language={language}
            percent={percent}
            width={width}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default SkillsBackEnd;
