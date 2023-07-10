import SectionTitle from "@/components/TitleSection";
import TechBadge from "@/components/tachbadges";
import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { HiArrowLeft } from "react-icons/hi";
import BtnLink from "@/components/Buttons/BtnLink/Index";

const ProjectDetails = () => {
  return (
    <section className=" container-max min-h-[750px] flex flex-col items-center justify-end relative pb-24  sm:pb-10 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1] bg-red-200"
        style={{
          background:
            "url(/hero-bg.png) no-repeat center/cover,url(/project01.jpg) no-repeat center/cover",
        }}
      />
      <div className="text-center items-center">
        <SectionTitle title="Projeto 01" punctuation=":" />
      </div>

      <p className="text-gray-400 text-center max-w-[640px]  my-6 sm:my-4  text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore facilis
        repellat optio dolorum praesentium eligendi distinctio facere, in beatae
        quod quisquam porro ratione illum, molestias dolorem suscipit mollitia
        totam tenetur.
      </p>

      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="Nextjs" />
        <TechBadge name="Nextjs" />
        <TechBadge name="Nextjs" />
        <TechBadge name="Nextjs" />
        <TechBadge name="Nextjs" />
      </div>

      <div className="my-12 sm:my-6  flex items-center  gap-4 sm:gap-2 ">
        <BtnLink
          href="https://github.com/"
          text="repositorio"
          icon={<TbBrandGithub />}
          target="_blank"
        />
        <BtnLink
          href="https://github.com/"
          text="Projeto Online"
          icon={<FiGlobe />}
          target="_blank"
        />
      </div>

      <BtnLink
        href="/projects"
        icon={<HiArrowLeft size={20} />}
        target="_self"
        text="Voltar para projetos"
      />
    </section>
  );
};

export default ProjectDetails;
