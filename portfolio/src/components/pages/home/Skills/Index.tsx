import SectionTitle from "@/components/TitleSection";
import HabilitySkilss from "./HabilitySkills";
import SkillsBackEnd from "./SkillsBackEnd";
import SkillsFrontEnd from "./SkillsFrontEnd";
import FrontEndNav from "@/components/Icons/FrontEndNav";
import FrontEndIcon from "@/components/Icons/FrontEndIcon";
import BackendNavIcom from "@/components/Icons/BackendNavIcom";
import BackEndIcon from "@/components/Icons/BackEndIcon";

const MySkills = () => {
  return (
    <section>
      <div className="container-max mt-[80px]">
        <SectionTitle title="Minhas Habilidades" punctuation="." />
        <HabilitySkilss
          IconHability={<FrontEndNav />}
          skilss={<SkillsFrontEnd />}
          IconSkill={<FrontEndIcon />}
          titleHability={"FrontEnd"}
        />
        <HabilitySkilss
          IconHability={<BackendNavIcom />}
          skilss={<SkillsBackEnd />}
          titleHability={"BackEnd"}
          IconSkill={<BackEndIcon />}
        />
      </div>
    </section>
  );
};

export default MySkills;
