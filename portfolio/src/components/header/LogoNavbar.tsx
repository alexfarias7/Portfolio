import Link from "next/link";

const LogoNavbar = () => {
  return (
    <Link
      href={"/"}
      className="sm:text-[20px] text-[28px] font-semibold leading-[42px] text-center text-purple0 p-[8px] inline-block"
    >
      Alex
      <span className="text-purple5 px-4 py-0  after:content-['']  after:h-2 after:w-2 after:bg-purple5 after:inline-block after:rounded-full after:ml-1">
        Farias
      </span>
    </Link>
  );
};

export default LogoNavbar;
