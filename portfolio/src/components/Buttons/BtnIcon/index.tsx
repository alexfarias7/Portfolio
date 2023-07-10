import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: ReactNode;
}

const BtnIcon = ({ className, text, icon }: Props) => {
  return (
    <button className={cn("btn-icons lg:min-w-[220px] ", className)}>
      <span>{text}</span>
      <span> {icon}</span>
    </button>
  );
};
export default BtnIcon;
