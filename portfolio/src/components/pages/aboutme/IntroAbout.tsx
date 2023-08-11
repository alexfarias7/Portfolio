"use client";

import SectionTitle from "@/components/TitleSection";
import React from "react";

import { motion } from "framer-motion";

type Props = {
  description: string;
};

const IntroAbout = ({ description }: Props) => {
  return (
    <section className="mt-[120px]">
      <div className="container-max ">
        <SectionTitle title="Sobre mim" punctuation=":" />
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default IntroAbout;
