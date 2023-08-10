"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import React, { Component } from "react";
import ProjectCard from "./highlightProjects/ProjectCard";
import HorizontalDivider from "@/components/divider/Horizontal";
import { Project } from "@/types/schemas/projectsInfo";
import { getPageHomeInfoQuery } from "@/queries/HomePageInfoQuery";

type HighlightProjectsProps = {
  projects: Project[];
};

export const CauroselProjectsTeste = async ({
  projects,
}: HighlightProjectsProps) => {
  const { pagehome: homePageData } = await getPageHomeInfoQuery();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-[1000px] ">
      {projects?.map((project) => (
        <Slider key={project.slug} {...settings}>
          <div>
            {/*   <ProjectCard project={project} /> */}
            <HorizontalDivider className="my-16" />
            <p>
              testel Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus repellendus, laudantium nisi dolor eveniet nemo ut
              doloremque pariatur unde cum, aliquid quis, quia praesentium
              distinctio laboriosam debitis impedit est quibusdam.
            </p>
          </div>
        </Slider>
      ))}
    </div>
  );
};
