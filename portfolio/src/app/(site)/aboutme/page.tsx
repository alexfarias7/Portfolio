import IntroAbout from "@/components/pages/aboutme/IntroAbout";
import KnowTechs from "@/components/pages/aboutme/knowtechs/Index";
import { getPageAboutInfoQuery } from "@/queries/AboutPageInfoQuery";
import React from "react";

export const metadata = {
  title: "Sobre",
};

const PageAboutMe = async () => {
  const { aboutpage } = await getPageAboutInfoQuery();

  return (
    <main>
      <IntroAbout />
      <KnowTechs techs={aboutpage.knowTetchs} />
    </main>
  );
};

export default PageAboutMe;
