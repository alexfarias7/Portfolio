import SectionTitle from "@/components/TitleSection";
import CauroselProject from "./CauroselProjects";

import { EmblaOptionsType } from "embla-carousel-react";
import { TypesProject } from "@/types/schemas/projects";
const MyProjects = () => {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section>
      <div className="mt-[80px]  container-max flex flex-col items-center">
        <SectionTitle title="My Works" punctuation="." />

        <div className="flex   justify-between mt-[20px]   sm:justify-end w-[100%]">
          <h2 className="font-popins relative font-semibold text-[26px] text-blue0 inline-block   after:content-[''] after:block  after:h-[4px] after:bg-purple5 after:mt-1 after:absolute after:rounded-full after:w-full  sm:hidden">
            Latest Works
          </h2>
          <button className="btn-icons rounded-[2px] ">All works</button>
        </div>
        <CauroselProject slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  );
};

export default MyProjects;
