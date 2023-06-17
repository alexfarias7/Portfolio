import classNames from "classnames";
import React, { ReactNode } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: ReactNode;
}

const BtnIcon = ({ className, text, icon }: Props) => {
  return (
    <button className={classNames("btn-icons lg:w-[220px] ", className)}>
      <span>{text}</span>
      <span> {icon}</span>
    </button>
  );
};
export default BtnIcon;
