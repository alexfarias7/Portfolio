import React from "react";
import InstragamIcon from "../Icons/InstragamIcon";
import TwiterIcon from "../Icons/TwiterIcon";
import LinjkendinIcon from "../Icons/LinkendinIcon";
import GithubIcon from "../Icons/GithubIcon";

const IconsFooter = () => {
  return (
    <div className="flex gap-[8px] mr-[40px] sm:mr-0">
      <InstragamIcon /> <TwiterIcon /> <LinjkendinIcon /> <GithubIcon />
    </div>
  );
};

export default IconsFooter;
