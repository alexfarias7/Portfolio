import SectionTitle from "@/components/TitleSection";
import React from "react";
import KnowTechItem from "./KnowTechItem";
import { TbBrandNextjs } from "react-icons/tb";
import { KnownTech } from "@/types/schemas/projectsInfo";
import { aboutpageInfo } from "@/types/schemas/pages";

type KnowTechsProps = {
  techs: KnownTech[];
};

const KnowTechs = ({ techs }: KnowTechsProps) => {
  return (
    <section className="mt-[80px]">
      <div className="container-max">
        <SectionTitle title="Conhecimentos" punctuation=":" />

        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
          {techs?.map((tech) => (
            <KnowTechItem key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowTechs;
