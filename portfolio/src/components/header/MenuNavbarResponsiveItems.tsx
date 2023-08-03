"use client";

import React, { useRef } from "react";

import MenuMobile from "./MenuMobile";
import { useNavMobileContext } from "@/contexts/NavMobileContext";
import useScrollPosition from "@/hooks/useScrollPosition";
import useOnClickOutside from "@/hooks/UseClickOutider";

const MenuNavbarResponsiveItems = () => {
  const { isVisible, setIsVisible } = useNavMobileContext();

  const ref = useRef(null);

  const handleClickOutside = () => {
    setIsVisible(false);
    return;
  };
  const scrollPosition = useScrollPosition();
  const topPositionMenuResponsive = scrollPosition > 80 ? "top-20" : "top-20";

  const growSize = isVisible ? "h-72" : "h-0";

  useOnClickOutside(ref, handleClickOutside);

  return (
    <ul
      ref={ref}
      className={`w-[calc(100%-40px)] flex flex-col items-center  justify-center bg-purple0   absolute ${topPositionMenuResponsive} left-[20px] rounded-lg  ${growSize} transition-all ease-in duration-300  overflow-hidden  `}
    >
      <MenuMobile />
    </ul>
  );
};

export default MenuNavbarResponsiveItems;
