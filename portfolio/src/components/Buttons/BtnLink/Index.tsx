import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: ReactNode;
  href: string;
  target: "_blank" | "_self";
}

const BtnLink = ({ className, text, icon, href, target }: Props) => {
  return (
    <button>
      <Link
        href={href}
        className={cn("btn-icons w-max", className)}
        target={target}
      >
        <span> {icon}</span>
        <span>{text}</span>
      </Link>
    </button>
  );
};

export default BtnLink;
