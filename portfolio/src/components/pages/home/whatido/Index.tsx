import SectionTitle from "@/components/TitleSection";
import CardsActivitIes from "./CardsActivitIes";

const WhatIDo = () => {
  return (
    <section>
      <div className="container-max mt-[80px] flex flex-col gap-[80px]">
        <SectionTitle title="What I do" punctuation=":" />
        <CardsActivitIes />
      </div>
    </section>
  );
};

export default WhatIDo;
