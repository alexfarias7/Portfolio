import MySkills from "@/components/pages/home/Skills/Index";
import Hero from "@/components/pages/home/herosection/Index";
import MyProjects from "@/components/pages/home/projects/Index";
import WhatIDo from "@/components/pages/home/whatido/Index";
import { getPageHomeInfoQuery } from "@/queries/HomePageInfoQuery";

export default async function Home() {
  const { pagehome: homePageData } = await getPageHomeInfoQuery();

  return (
    <>
      <Hero homeInfo={homePageData} />
      <WhatIDo homeInfo={homePageData} />
      <MySkills homeInfo={homePageData} />
      <MyProjects />
    </>
  );
}
