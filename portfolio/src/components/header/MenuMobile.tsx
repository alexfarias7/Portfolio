import { menu } from "@/utils/menu";
import Navmobiletem from "./navmobiletem";

const MenuMobile = () => {
  return (
    <>
      {menu.map(({ href, label }, index) => {
        return <Navmobiletem href={href} label={label} key={index} />;
      })}
    </>
  );
};

export default MenuMobile;
