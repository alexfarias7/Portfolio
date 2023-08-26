"use client";

import { motion } from "framer-motion";

import BtnLink from "@/components/Buttons/BtnLinkProject/Index";
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
        <motion.div
          className=" text-blue0 hover:text-purple5 "
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectsIcons />
        </motion.div>

        <motion.div
          className="max-w-[600px] flex flex-col gap-[32px] 
         "
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="text-blue0  mt-4 font-montserrat font-medium text-[18px] sm:text-[16px] text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.2, delay: 0.3 }}
          >
            {projectsIntro.projectsInfoIntro}
          </motion.p>
          <motion.div
            className="self-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.2, delay: 0.6 }}
          >
            <BtnLink
              href="/"
              icon={<HiArrowLeft size={24} />}
              text="Voltar para home"
              className="rounded-none hover:translate-x-[-14px] hover:translate-y-0"
              target="_self"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsInto;
