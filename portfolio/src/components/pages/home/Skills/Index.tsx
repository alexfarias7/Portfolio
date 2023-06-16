import SectionTitle from "@/components/TitleSection";
import HabilitySkilss from "./HabilitySkills";
import SkillsBackEnd from "./SkillsBackEnd";
import SkillsFrontEnd from "./SkillsFrontEnd";

import { homePageInfo } from "@/types/schemas/pages";

const MySkills = ({ homeInfo }: homePageInfo) => {
  return (
    <section>
      <div className="container-max mt-[80px]">
        <SectionTitle title="Minhas Habilidades" punctuation="." />
        <HabilitySkilss
          IconHability={homeInfo.frontEndNav.iconSvg}
          skilss={<SkillsFrontEnd homeInfo={homeInfo} />}
          IconSkill={homeInfo.skillInfoFrontEnd.iconSvg}
          titleHability={homeInfo.frontEndNav.language}
        />
        <HabilitySkilss
          IconHability={homeInfo.backEndNav.iconSvg}
          skilss={<SkillsBackEnd homeInfo={homeInfo} />}
          IconSkill={homeInfo.skillInfoBackend.iconSvg}
          titleHability={homeInfo.backEndNav.language}
        />
      </div>
    </section>
  );
};

export default MySkills;
