import Hero from "@/components/pages/home/herosection/Index";
import WhatIDo from "@/components/pages/home/whatido/Index";
import { getHomePage } from "@/sanity/utils/sanity_homepage.utils";

export default async function Home() {
  const homepage = await getHomePage();

  return (
    <>
      <Hero hero={homepage} />
      <WhatIDo />
    </>
  );
}
