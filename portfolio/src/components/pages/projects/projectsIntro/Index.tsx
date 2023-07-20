import BtnLink from "@/components/Buttons/BtnLink/Index";
import ProjectsIcons from "@/components/Icons/ProjectsIcons";
import SectionTitle from "@/components/TitleSection";
import CmsIcon from "@/components/cmsIcon/Index";
import { ProjectsPageInfo } from "@/types/schemas/projects";
import React from "react";
import { HiArrowLeft } from "react-icons/hi";

interface ProjectIntroProps {
  projectsIntro: ProjectsPageInfo;
}

const ProjectsInto = ({ projectsIntro }: ProjectIntroProps) => {
  return (
    <section className="mt-[100px] container-max h-[calc(100vh-90px)] flex flex-col justify-center gap-[80px]  lg:gap-0">
      <SectionTitle title="Meus Projetos" punctuation=":" />

      <div className="flex justify-between items-center lg:justify-center lg:flex-col lg:flex-1 ">
        <div className=" text-blue0 hover:text-purple5 ">
          {/*           <>
              {width > breakpoint ? (
              <CmsIcon icon={projectsIntro.projectsIntroIcon} />
            ) : (
              <ProjectsIcons />
            )} 
          </> */}

          <ProjectsIcons />
        </div>

        <div className="max-w-[600px] flex flex-col gap-[32px]  ">
          <p className="text-blue0  mt-4 font-montserrat font-medium text-[18px] sm:text-[16px] text-justify">
            {projectsIntro.projectsInfoIntro}
          </p>
          <div className="self-center">
            <BtnLink
              href="/"
              icon={<HiArrowLeft size={24} />}
              text="Voltar para home"
              className="rounded-none hover:translate-x-[-14px] hover:translate-y-0"
              target="_self"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsInto;
