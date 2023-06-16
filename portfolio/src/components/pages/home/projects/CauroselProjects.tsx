"use client";

import React, { useState, useEffect, useCallback } from "react";

import { DotButtonCaurosel } from "./DotButtonCarousel";
import { NextButton } from "./NextButtonCaurosel";
import { PrevButton } from "./PrevButtonCaurosel";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { projectsHome } from "@/utils/projectsHome";
import BtnIcon from "@/components/BtnIcon";
import WebIcon from "@/components/Icons/WebIcon";
import { getProjects } from "@/sanity/utils/sanity_projects.utils";
import CardProject from "./CardProject";
import { TypesProject } from "@/types/schemas/projects";
import { Project } from "@/types/schemas/projectsInfo";
import { HomePageData } from "@/types/schemas/pageinfo";
import { homePageInfo } from "@/types/schemas/pages";

type HighlightProjectsProps = {
  projects: Project[];
};

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  projects: Project[];
};

const CauroselProject: React.FC<PropType> = (props) => {
  const { options, projects } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="p-[1.6rem] relative mt-[40px]">
        <div className="overflow-hidden" ref={emblaRef}>
          <CardProject projects={projects} />
        </div>

        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButtonCaurosel
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export default CauroselProject;
