import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: ReactNode;
  href: string;
  target: "_blank" | "_self";
}

const BtnLinkProject = ({
  className,
  text,
  icon,
  href,
  target,
  ...props
}: Props) => {
  return (
    <div className="relative">
      <div className="bg-blue5 border-solid border-purple7 border-[1px] h-[50px] w-[300px] sm:w-[200px] rounded-sm left-2 absolute top-2 transition-all -z-10  " />
      <button {...props}>
        <Link
          href={href}
          className={cn(
            "btn-icons w-[300px] sm:w-[200px] h-[50px] px-1",
            className
          )}
          target={target}
        >
          <span> {icon}</span>
          <span>{text}</span>
        </Link>
      </button>
    </div>
  );
};

export default BtnLinkProject;
