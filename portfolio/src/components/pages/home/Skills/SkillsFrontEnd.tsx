import { infoFront } from "@/utils/skillsFrontend";
import ProgressBar from "./ProgressBar";

const SkillsFrontEnd = () => {
  return (
    <div className="flex flex-col gap-[40px] flex-1">
      {infoFront.map(({ icon, id, language, percent, width }) => {
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

export default SkillsFrontEnd;
