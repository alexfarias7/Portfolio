import SectionTitle from "@/components/TitleSection";
import React from "react";

type Props = {
  description: string;
};

const IntroAbout = ({ description }: Props) => {
  return (
    <section className="mt-[120px]">
      <div className="container-max ">
        <SectionTitle title="Sobre mim" punctuation=":" />
        <p>{description}</p>
      </div>
    </section>
  );
};

export default IntroAbout;
