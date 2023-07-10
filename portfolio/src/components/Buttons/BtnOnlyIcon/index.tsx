import { TbArrowNarrowUp } from "react-icons/tb";

import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const BtnOnlyIcon = ({ className, icon, ...props }: Props) => {
  return (
    <div className="fixed right-4 bottom-4 z-20">
      <button className={cn("btn-icons", className)} {...props}>
        <span> {icon}</span>
      </button>
    </div>
  );
};

export default BtnOnlyIcon;
