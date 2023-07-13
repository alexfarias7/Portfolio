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
      className=" h-[240px]  border-solid border-[2px] rounded-lg text-blue0 border-blue9 flex  justify-between items-center overflow-hidden group transition-all hover:border-purple5 opacity-70 hover:opacity-100   shadowCard bg-blue6 
   gap-[40px] 
    
    "
    >
      <div className="h-full  w-[380px]  overflow-hidden">
        <Image
          width={380}
          height={240}
          src={project.thumbnail.url}
          alt="Thumbnail do projeto de um  salão de beleza"
          className="h-full w-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col gap-3 pr-[40px]">
        <strong className="font-montserrat font-semibold text-[22px] group-hover:text-purple5 transition-all">
          {project.title}
        </strong>
        <p className="  line-clamp-3  font-popins leading-[28px] font-normal text-[16px] text-blue3 group-hover:text-purple0  transition duration-500 ease-in-out">
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
