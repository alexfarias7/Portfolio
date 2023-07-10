import React from "react";
import ProjectCard from "./projectCard";

const listaHorzontal = () => {
  return (
    <section className="container-max py-[80px] grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-x-4 gap-y-6 sm:grid-cols-1 flex-1">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  );
};

export default listaHorzontal;
