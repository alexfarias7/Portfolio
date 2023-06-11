import SectionTitle from "@/components/TitleSection";
import React from "react";
import KnowTechItem from "./KnowTechItem";
import { TbBrandNextjs } from "react-icons/tb";

const KnowTechs = () => {
  return (
    <section>
      <div className="container-max">
        <SectionTitle title="Conhecimentos" punctuation=":" />

        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
          {Array.from({ length: 8 }).map((_, index) => (
            <KnowTechItem
              key={index}
              tech={{
                icon: <TbBrandNextjs />,
                name: "Nextjs",
                startDate: "2022-01-01",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowTechs;
