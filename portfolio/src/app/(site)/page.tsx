import MySkills from "@/components/pages/home/Skills/Index";
import Hero from "@/components/pages/home/herosection/Index";
import HeroIntro from "@/components/pages/home/herosection/heroIntro/Index";
import MyProjects from "@/components/pages/home/projects/Index";
import WhatIDo from "@/components/pages/home/whatido/Index";
import { getPageHomeInfoQuery } from "@/queries/HomePageInfoQuery";

export const metadata = {
  title: "Portifolio",
};

export default async function Home() {
  const { pagehome: homePageData } = await getPageHomeInfoQuery();

  return (
    <main>
      <HeroIntro homeInfo={homePageData} />
      <WhatIDo homeInfo={homePageData} />
      <MySkills homeInfo={homePageData} />

      <MyProjects projects={homePageData.highlightProjects} />
    </main>
  );
}
