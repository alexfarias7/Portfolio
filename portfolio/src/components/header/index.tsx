"use client";

import React from "react";
import LogoNavbar from "./LogoNavbar";
import useScrollPosition from "@/hooks/useScrollPosition";
import Navbar from "./navbar";
import { motion } from "framer-motion";

const Header = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();
  return (
    <motion.header
      className={classNames(
        scrollPosition > 0 ? "shadow  " : "shadow-none",
        "fixed top-0 z-20 h-max inset-0 bg-blue5 transition-shadow "
      )}
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={classNames(
          scrollPosition > 80 ? "py-0" : "py-[16px]",
          "container-max flex gap-5  justify-between items-center  flex-nowrap transition-all ease-out duration-700 font-firamono "
        )}
      >
        <LogoNavbar />
        <Navbar />
      </div>
    </motion.header>
  );
};

export default Header;
