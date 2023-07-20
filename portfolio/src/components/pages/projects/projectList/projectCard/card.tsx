import TechBadge from "@/components/tachbadges";
import { Project } from "@/types/schemas/projectsInfo";
import Image from "next/image";
import React from "react";

type ProjectProps = {
  project: Project;
};

const Card = ({ project }: ProjectProps) => {
  return (
    <div
      className=" h-[240px]  border-solid border-[2px] rounded-lg text-blue0 border-blue9 flex items-center overflow-hidden group transition-all hover:border-purple5 opacity-70 hover:opacity-100   shadowCard bg-blue6 gap-[40px] 

      sm:h-[480px] sm:w-[300px] sm:flex-col sm:gap-[8px] 

    "
    >
      <div className="h-full  sm:h-[240px]   w-[360px]  overflow-hidden  lg:hidden sm:block">
        <Image
          width={360}
          height={240}
          src={project.thumbnail.url}
          alt="Thumbnail do projeto de um  salão de beleza"
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

export default Card;
