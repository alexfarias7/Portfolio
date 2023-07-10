"use client";

import React from "react";
import ProjectCard from "./projectCard";
import Card from "./projectCard/card";
import Image from "next/image";
import TechBadge from "@/components/tachbadges";
import Link from "next/link";

const ProjectList = () => {
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
      <Link href={"/projects/project01"}>
        <Card />
      </Link>
    </section>
  );
};

export default ProjectList;
