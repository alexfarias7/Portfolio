"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
};

const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      className="text-purple0 bg-purple5/80 text-sm py-1 px-3 rounded-lg font-firamono lowercase "
      {...props}
    >
      {name}
    </motion.span>
  );
};

export default TechBadge;
