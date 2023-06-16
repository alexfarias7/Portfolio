import KnowTechs from "@/components/pages/aboutme/knowtechs/Index";
import { getPageAboutInfoQuery } from "@/queries/AboutPageInfoQuery";
import React from "react";

const PageAboutMe = async () => {
  const { aboutpage } = await getPageAboutInfoQuery();

  return (
    <>
      <h1 className="mt-[200px]">Pagina SOBRE</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
        quis mollitia consectetur dolorem consequuntur ipsum ea eos! Laboriosam
        at, amet voluptate error est dolorem porro quasi excepturi debitis eum
        tempora?
      </p>
      <KnowTechs techs={aboutpage.knowTetchs} />
    </>
  );
};

export default PageAboutMe;
