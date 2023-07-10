import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof NextLink>;

const LinkEmphasis = ({ className, children, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(
        "flex items-center gap-2 text-blue0 text-[16px] hover:text-purple7 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default LinkEmphasis;
