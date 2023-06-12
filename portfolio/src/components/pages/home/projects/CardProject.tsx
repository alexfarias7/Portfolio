import BtnIcon from "@/components/BtnIcon";
import WebIcon from "@/components/Icons/WebIcon";
import { TypesProject } from "@/types/schemas/projects";
import { projectsHome } from "@/utils/projectsHome";


import { register } from "swiper/element/bundle";
// register Swiper custom elements
const CardProject = () => {
  register();
  return (
    <div className="flex  flex-row h-auto   ml-[calc(1rem*-1)]   md:w-[80vw]">
      {projectsHome.map(({ description, id, image, title }) => (
        <div
          className="flex-[0_0_100%] min-w-0 pl-[1rem] flex gap-[40px] xl:gap-[20px] justify-center items-center   "
          key={id}
        >
          <img
            className="h-[240px] rounded-lg lg:hidden"
            src={image}
            alt={title}
          />

          <div className="flex flex-col gap-[12px]  justify-center items-center  ">
            <div className="flex flex-col gap-[12px]  justify-center items-center  w-[calc(100%-40px)]  xl:self-center  self-start ">
              <h3 className="textTitle">{title}</h3>
              <p className="textDescription text-justify">{description}</p>

              <BtnIcon className="btn-icons " icon={<WebIcon />} text="Visit" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProject;
