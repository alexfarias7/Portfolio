import React from "react";
import { cn } from "@/lib/utils";
interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const CardDivAbsolute = ({ className }: Props) => {
  return (
    <div
      className={cn(
        " bg-blue6 border-solid border-[1px]  border-blue9   h-full w-full rounded-sm left-2 absolute top-2 transition duration-500 -z-10  group-hover:border-purple5",
        className
      )}
    ></div>
  );
};

export default CardDivAbsolute;
