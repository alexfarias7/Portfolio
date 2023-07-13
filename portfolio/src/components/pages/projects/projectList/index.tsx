"use client";

import React from "react";
import Card from "./projectCard/card";
import Link from "next/link";
import { Project } from "@/types/schemas/projectsInfo";

type ProjectsListProps = {
  projectsPage: Project[];
};

const ProjectList = ({ projectsPage }: ProjectsListProps) => {
  return (
    /*     <section className="container-max flex flex-col gap-10">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section> */

    <section className="container-max flex flex-col gap-10">
      {/*   <Link href={"/projects/project01"}>
        <Card />
      </Link> */}

      {projectsPage.map((project) => (
        <Link key={project.title} href={`projects/${project.slug}`}>
          <Card project={project} />
        </Link>
      ))}
    </section>
  );
};

export default ProjectList;
