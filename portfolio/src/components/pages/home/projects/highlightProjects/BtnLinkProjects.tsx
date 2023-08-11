"use client";

import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

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
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.2, delay: 0.8 }}
    >
      <NextLink
        href={href}
        className={cn("btn-icons w-max", className)}
        target={target}
      >
        <span>{text}</span>
        <span> {icon}</span>
      </NextLink>
    </motion.button>
  );
};
