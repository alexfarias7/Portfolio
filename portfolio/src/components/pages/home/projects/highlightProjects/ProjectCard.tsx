"use client";

import { motion } from "framer-motion";
import TechBadge from "@/components/tachbadges";
import Image from "next/image";
import React from "react";
import { BtnLinkProjects } from "./BtnLinkProjects";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Project } from "@/types/schemas/projectsInfo";
import { techBadgeAnimation } from "@/lib/animations";

type ProjectCardprops = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardprops) => {
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };
  return (
    <motion.div
      className="flex  gap-12 lg:gap-6 flex-row lg:flex-col items-center  sm:w-[300px] "
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="h-full    w-[420px] sm:w-[300px]  "
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Image
          src={project.thumbnail.url}
          height={304}
          width={420}
          alt={`thumbnail  do ${project.title}`}
          className="object- rounded-lg h-[304px]  w-full object-cover hover:scale-110 sm:h-[304px] sm:w-[320px] transition-all"
        />
      </motion.div>

      <div className="flex-1 sm:flex sm:flex-col sm:items-center ">
        <motion.h3
          className="flex items-center gap-3 font-medium text-lg text-gray-50   font-tinos"
          {...animationProps}
          transition={{ duration: 0.7 }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="text-gray-400 my-6 font-firamono"
          {...animationProps}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {project.shortDescription}
        </motion.p>
        <div className=" flex gap-x-2 gap-y-3 mb-8 flex-wrap max-w-[380px] sm:self-start">
          {project.technologies.map((tech, i) => (
            <TechBadge
              name={tech.name}
              key={`${project.title}-${tech.name}`}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: 0.5 + i * 0.1 }}
            />
          ))}
        </div>
        <BtnLinkProjects
          href={`/projects/${project.slug}`}
          text="Ver Projeto"
          icon={<HiArrowNarrowRight />}
          target="_self"
          className="rounded-none hover:translate-x-3 hover:translate-y-0"
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;

/* 
const ProjectCard = ({ project }: ProjectCardprops) => {
  return (
    <div
      className=" h-[304px] text-blue0  flex  gap-12 lg:gap-6 flex-row lg:flex-col items-center
    "
    >
      <div className="h-full w-[420px]  overflow-hidden  ">
        <Image
          height={304}
          width={420}
          alt={`thumbnail  do ${project.title}`}
          src={project.thumbnail.url}
          className="h-full sm:h-[240px] w-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col items-center gap-3 pr-[40px] sm:self-center  sm:p-8 sm:items-center">
        <strong className="font-montserrat font-semibold text-[22px] group-hover:text-purple5 transition-all">
          {project.title}
        </strong>
        <p
          className="  line-clamp-3  font-popins leading-[28px] font-normal text-[16px] text-blue3  lg:pl-6 sm:px-0
        group-hover:text-purple0  transition duration-500 ease-in-out"
        >
          {project.shortDescription}
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap max-w-[350px] ">
          {project.technologies.map(({ name }) => (
            <TechBadge name={name} key={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
 */
