import SectionTitle from "@/components/TitleSection";

import { EmblaOptionsType } from "embla-carousel-react";
import { Project } from "@/types/schemas/projectsInfo";
import { homePageInfo } from "@/types/schemas/pages";
import Link from "next/link";
import HorizontalDivider from "@/components/divider/Horizontal";
import ProjectCard from "./highlightProjects/ProjectCard";

type HighlightProjectsProps = {
  projects: Project[];
};

const MyProjects = ({ projects }: HighlightProjectsProps) => {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section>
      <div className="mt-[80px]  container-max flex flex-col items-center">
        <SectionTitle title="Meus Projetos" punctuation=":" />
        <div className="flex   justify-between mt-[20px]   sm:justify-end w-[100%]">
          <h2 className="font-firamono relative font-semibold text-2xl text-blue0 inline-block   after:content-[''] after:block  after:h-[4px] after:bg-purple5 after:mt-1 after:absolute after:rounded-full after:w-full  sm:hidden">
            Ultimos projetos
          </h2>
          <Link href={"/projects"}>
            <button className="btn-icons rounded-[2px] ">Todos projetos</button>
          </Link>
        </div>
        {/*      <CauroselProject
          slides={SLIDES}
          options={OPTIONS}
          projects={projects}
        /> */}
        {/*     <SimpleSlider /> */}
        <HorizontalDivider className="mb-16" />

        <div className="">
          {projects?.map((project) => (
            <div key={project.slug}>
              <ProjectCard project={project} />
              <HorizontalDivider className="my-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
