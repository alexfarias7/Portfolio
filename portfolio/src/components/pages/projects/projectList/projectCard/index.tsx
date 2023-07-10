import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  return (
    <div className=" h-[450] w-[380px] border-solid border-[2px] rounded-lg text-blue0 border-blue9 flex flex-col gap-[8px] overflow-hidden group transition-all hover:border-purple5 opacity-70 hover:opacity-100   shadowCard bg-blue6">
      <div className="w-full h-full overflow-hidden">
        <Image
          width={380}
          height={200}
          src={"/project01.jpg"}
          alt="Thumbnail do projeto de um  salão de beleza"
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-purple5 transition-all">
          Projeto 01
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odit
          asperiores non similique sed in quia explicabo alias iste
          exercitationem eius, eveniet dicta totam velit et? Deleniti laboriosam
          deserunt sit.
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          Nextjs, javascript, java next auth, radix, typescript, spring, jquery
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
