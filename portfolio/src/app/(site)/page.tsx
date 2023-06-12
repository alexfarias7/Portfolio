import MySkills from "@/components/pages/home/Skills/Index";
import Hero from "@/components/pages/home/herosection/Index";
import MyProjects from "@/components/pages/home/projects/Index";
import WhatIDo from "@/components/pages/home/whatido/Index";
import { getPageHomeInfoQuery } from "@/queries/HomePageInfoQuery";
import { getHomePage } from "@/sanity/utils/sanity_homepage.utils";
import { getProjects } from "@/sanity/utils/sanity_projects.utils";

export default async function Home() {
  const { pagehome: homePageData } = await getPageHomeInfoQuery();

  console.log(
    homePageData.socials.map(({ name }) => {
      name;
    })
  );

  return (
    <>
      <Hero homeInfo={homePageData} />
      <WhatIDo />
      <MySkills />
      <MyProjects />
    </>
  );
}
