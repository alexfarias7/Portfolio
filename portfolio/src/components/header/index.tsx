"use client";

import React from "react";
import LogoNavbar from "./LogoNavbar";
import useScrollPosition from "@/hooks/useScrollPosition";
import Navbar from "./navbar";

const Header = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();
  return (
    <header
      className={classNames(
        scrollPosition > 0 ? "shadow  " : "shadow-none",
        "fixed top-0 z-20 h-max inset-0 bg-blue5 transition-shadow "
      )}
    >
      <div
        className={classNames(
          scrollPosition > 80 ? "py-0" : "py-[16px]",
          "container-max flex gap-5  justify-between items-center  flex-nowrap transition-all ease-out duration-700 font-montserrat "
        )}
      >
        <LogoNavbar />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
