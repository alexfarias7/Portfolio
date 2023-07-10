import Image from "next/image";
import React from "react";

const sections = [
  { title: "Login", image: "/page_login.jpg" },
  { title: "Home", image: "/page_home.jpg" },
];

const ProjectSections = () => {
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
            src={image}
            unoptimized
          />
        </div>
      ))}
    </section>
  );
};

export default ProjectSections;
