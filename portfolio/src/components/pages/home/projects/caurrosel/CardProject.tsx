import BtnIcon from "@/components/Buttons/BtnIcon";
import WebIcon from "@/components/Icons/WebIcon";

import { Project } from "@/types/schemas/projectsInfo";
import Image from "next/image";

type HighlightProjectsProps = {
  projects: Project[];
};

import { register } from "swiper/element/bundle";

const CardProject = ({ projects }: HighlightProjectsProps) => {
  register();
  return (
    <div className="flex  flex-row h-auto   ml-[calc(1rem*-1)]   md:w-[80vw]">
      {projects?.map((project) => (
        <div
          className="flex-[0_0_100%] min-w-0 pl-[1rem] flex gap-[40px] xl:gap-[20px] justify-center items-center   "
          key={project.slug}
        >
          <Image
            height={240}
            width={360}
            className="h-[240px] w-[360px] ml-[10px] rounded-lg lg:hidden"
            src={project.thumbnail.url}
            alt={`Thumbnail do ${project.title}`}
          />

          <div className="flex flex-col gap-[12px]  justify-center items-center  ">
            <div className="flex flex-col gap-[12px]  justify-center items-center max-w-lg xl:self-center  self-start ">
              <h3 className="textTitle">{project.title}</h3>
              <p className="textDescription text-justify">
                {project.shortDescription}
              </p>

              <BtnIcon className="btn-icons " icon={<WebIcon />} text="Visit" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProject;
