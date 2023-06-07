import Link from "next/link";
import { useRouter } from "next/navigation";

import classNames from "classnames";

import { usePathname } from "next/navigation";
import { useNavMobileContext } from "@/contexts/NavMobileContext";

interface Props {
  label: string;
  href: string;
}

const Navmobiletem = ({ label, href }: Props) => {
  const { setIsVisible } = useNavMobileContext();
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === href;

  const handleButtonClick = (to: string) => {
    setIsVisible(false);
    router.push(`${to}`);
  };
  return (
    <li>
      <Link
        href={href}
        onClick={() => handleButtonClick(href)}
        className={classNames(
          "w-full py-4 flex items-start hover:text-purple5  justify-center text-3xl text-gray-500 hover:duration-700 cursor-pointer ",
          isActive && "text-blue5"
        )}
      >
        {label}
      </Link>
    </li>
  );
};

export default Navmobiletem;
