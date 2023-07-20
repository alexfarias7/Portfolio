"use client";

import React from "react";
import Card from "./projectCard/card";
import Link from "next/link";
import { Project } from "@/types/schemas/projectsInfo";
import ProjectCard from "./projectCard";

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
      {projectsPage.map((project) => (
        <Link
          key={project.title}
          href={`projects/${project.slug}`}
          className="sm:w-[300px]"
        >
          <Card project={project} />
        </Link>
      ))}
    </section>
  );
};

export default ProjectList;
