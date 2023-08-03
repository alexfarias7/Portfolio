import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { ReactNode } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: ReactNode;
  href: string;
  target: "_blank" | "_self";
}

export const BtnLinkProjects = ({
  className,
  text,
  icon,
  href,
  target,
}: Props) => {
  return (
    <button>
      <NextLink
        href={href}
        className={cn("btn-icons w-max", className)}
        target={target}
      >
        <span>{text}</span>
        <span> {icon}</span>
      </NextLink>
    </button>
  );
};
