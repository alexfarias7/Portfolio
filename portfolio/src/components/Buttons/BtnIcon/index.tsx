import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: ReactNode;
}

const BtnIcon = ({ className, text, icon, ...props }: Props) => {
  return (
    <div className="relative">
      <div className="bg-blue5 border-solid border-purple7 border-[1px] h-[50px] w-[220px]  rounded-sm left-2 absolute top-2 transition-all -z-10 " />
      <button
        className={cn("btn-icons w-[220px]  h-[50px]", className)}
        {...props}
      >
        <span>{text}</span>
        <span> {icon}</span>
      </button>
    </div>
  );
};
export default BtnIcon;
