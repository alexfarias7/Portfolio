"use client";

import React from "react";
import Card from "./projectCard/card";
import Link from "next/link";
import { Project } from "@/types/schemas/projectsInfo";
import ProjectCard from "./projectCard";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/lib/animations";

type ProjectsListProps = {
  projectsPage: Project[];
};

const ProjectList = ({ projectsPage }: ProjectsListProps) => {
  return (
    <section
      className="container-max mt-[80px] lg:mt-0 flex flex-col gap-10  
     flex-1  sm:items-center
    "
    >
      {projectsPage.map((project, i) => (
        <motion.div
          key={`project-${project.title}`}
          {...fadeUpAnimation}
          transition={{ duration: 0.5, delay: i * 0.3 }}
        >
          <Link href={`projects/${project.slug}`} className="sm:w-[300px]">
            <Card project={project} />
          </Link>
        </motion.div>
      ))}
    </section>
  );
};

export default ProjectList;
