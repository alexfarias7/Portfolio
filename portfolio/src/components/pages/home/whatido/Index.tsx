import SectionTitle from "@/components/TitleSection";
import CardsActivitIes from "./CardsActivitIes";
import { homePageInfo } from "@/types/schemas/pages";

const WhatIDo = ({ homeInfo }: homePageInfo) => (
  <section>
    <div className="container-max mt-[80px] sm:mt-[20px] flex flex-col gap-[80px] sm:gap-[40px] sm:justify-center items-center">
      <SectionTitle title="O que eu faço" punctuation=":" />
      <CardsActivitIes homeInfo={homeInfo} />
    </div>
  </section>
);

export default WhatIDo;
