import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  label: string;
  href: string;
}

const Navbaritem = ({ href, label }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li>
      <Link
        href={href}
        className={classNames(
          `menu-hover  py-[8px]`,
          isActive && "text-purple5"
        )}
      >
        {label}
      </Link>
    </li>
  );
};

export default Navbaritem;
