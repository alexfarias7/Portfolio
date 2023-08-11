"use client";

import React from "react";
import { motion } from "framer-motion";

interface ISectionTitle {
  title: string;
  punctuation: string;
}

const SectionTitle = ({ title, punctuation }: ISectionTitle) => {
  return (
    <motion.h1
      className="text-blue0 font-tinos font-semibold text-[40px] infoSection self-start w-max  lg:text-[24px]"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      {title} <span className="text-purple5">{punctuation}</span>
    </motion.h1>
  );
};

export default SectionTitle;
