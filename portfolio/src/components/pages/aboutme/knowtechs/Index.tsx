"use client";

import SectionTitle from "@/components/TitleSection";
import React from "react";
import KnowTechItem from "./KnowTechItem";
import { TbBrandNextjs } from "react-icons/tb";
import { KnownTech } from "@/types/schemas/projectsInfo";
import { aboutpageInfo } from "@/types/schemas/pages";
import { motion } from "framer-motion";

type KnowTechsProps = {
  techs: KnownTech[];
};

const KnowTechs = ({ techs }: KnowTechsProps) => {
  return (
    <section className="mt-[40px] ">
      <div className="container-max">
        <SectionTitle title="Conhecimentos" punctuation=":" />

        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-8">
          {techs?.map((tech, i) => (
            <motion.div
              key={`know-tech-${tech.name}`}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.15, delay: i * 0.2 }}
            >
              <KnowTechItem tech={tech} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowTechs;
