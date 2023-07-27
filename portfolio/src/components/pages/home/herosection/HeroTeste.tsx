import { homePageInfo } from "@/types/schemas/pages";
import Image from "next/image";
import React from "react";

const HeroTeste = ({ homeInfo }: homePageInfo) => {
  return (
    <section className="flex flex-col justify-end">
      <div className="container-max flex items-start justify-between flex-row  lg:flex-col-reverse">
        <div>
          <h1>{homeInfo.greetingHero}</h1>
          <h2>Alex Farias</h2>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            tenetur ut nihil aspernatur dolorem repellendus rem, quos distinctio
            enim minima dolore repudiandae beatae debitis nam perspiciatis vero
            ea? Accusamus, dicta.
          </p>
          <div>techs</div>
          <div>contatos</div>
        </div>

        <Image
          width={480}
          height={404}
          src={homeInfo.imageHero.url}
          alt={"foto perfil alex farias"}
        />
      </div>
    </section>
  );
};

export default HeroTeste;
