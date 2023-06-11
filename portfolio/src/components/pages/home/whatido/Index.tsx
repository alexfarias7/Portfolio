import SectionTitle from "@/components/TitleSection";
import CardsActivitIes from "./CardsActivitIes";

const WhatIDo = () => {
  return (
    <section>
      <div className="container-max mt-[80px] flex flex-col gap-[80px] sm:gap-[40px]">
        <SectionTitle title="O que eu faço" punctuation=":" />
        <CardsActivitIes />
      </div>
    </section>
  );
};

export default WhatIDo;
