import React from "react";
import MenuHam from "../Icons/MenuHam";
import MenuClose from "../Icons/MenuClose";
import MenuNavbarResponsiveItems from "./MenuNavbarResponsiveItems";
import { useNavMobileContext } from "@/contexts/NavMobileContext";

const MenuNavbarResponsive = () => {
  const { isVisible, setIsVisible } = useNavMobileContext();

  return (
    <div className="">
      <div className="lg:flex hidden relative">
        <button
          className="p-2"
          type="button"
          aria-label="menu mobile"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          {isVisible ? <MenuClose /> : <MenuHam />}
        </button>
      </div>
      <MenuNavbarResponsiveItems />
    </div>
  );
};

export default MenuNavbarResponsive;
