"use client";

import SectionTitle from "@/components/TitleSection";
import TechBadge from "@/components/tachbadges";
import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { HiArrowLeft } from "react-icons/hi";
import BtnLink from "@/components/Buttons/BtnLinkProject/Index";
import { Project } from "@/types/schemas/projectsInfo";
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "@/lib/animations";

type ProjectDetailsProps = {
  projectPage: Project;
};

const ProjectDetails = ({ projectPage }: ProjectDetailsProps) => {
  return (
    <section className=" container-max min-h-[750px] flex flex-col items-center justify-end relative pb-24  sm:pb-10 py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-[-15] bg-red-200"
        style={{
          background: `url(/hero-bg.png) no-repeat center/cover,url(${projectPage.thumbnail.url}) no-repeat center/cover`,
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="text-center items-center">
        <SectionTitle title={projectPage.title} punctuation=":" />
      </div>

      <motion.p
        className="text-gray-400 text-center max-w-[640px]  my-6 sm:my-4  text-base"
        {...fadeUpAnimation}
      >
        {projectPage.description}
      </motion.p>

      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        {projectPage.technologies.map(({ name }, i) => (
          <TechBadge
            name={name}
            key={name}
            {...techBadgeAnimation}
            transition={{ duration: 0.3, delay: i * 0.2 }}
          />
        ))}
      </div>

      <motion.div
        className="my-12 sm:my-6  flex sm:flex-col items-center  gap-8 sm:gap-6 "
        {...fadeUpAnimation}
      >
        {projectPage?.githubUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <BtnLink
              href={projectPage.githubUrl}
              text="repositorio"
              icon={<TbBrandGithub />}
              target="_blank"
              className=""
            />
          </motion.div>
        )}

        {projectPage?.liveProjectUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <BtnLink
              href={projectPage.liveProjectUrl}
              text="Projeto Online"
              icon={<FiGlobe />}
              target="_blank"
              className=""
            />
          </motion.div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <BtnLink
          href="/projects"
          icon={<HiArrowLeft size={20} />}
          target="_self"
          text="Ir para projetos"
          className=""
        />
      </motion.div>
    </section>
  );
};

export default ProjectDetails;
