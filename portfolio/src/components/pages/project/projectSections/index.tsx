import { ProjectSection } from "@/types/schemas/projectsInfo";
import Image from "next/image";
import React from "react";

interface ProjectSectionsProps {
  sections: ProjectSection[];
}

const ProjectSections = ({ sections }: ProjectSectionsProps) => {
  return (
    <section className="container-max  my-32 flex flex-col gap-3">
      {sections.map(({ image, title }) => (
        <div key={title} className="flex flex-col items-center gap-12 sm:gap-6">
          <h2 className="text-3xl md:text-2xl font-medium text-gray-300">
            {title}
          </h2>

          <Image
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            alt={`Imagem da sessão ${title}`}
            src={image.url}
            unoptimized
          />
        </div>
      ))}
    </section>
  );
};

export default ProjectSections;
