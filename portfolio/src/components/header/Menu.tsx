import { menu } from "@/utils/menu";
import Navbaritem from "./navbaritem";

const Menu = () => {
  return (
    <>
      {menu.map(({ href, label }, index) => {
        return <Navbaritem href={href} label={label} key={index} />;
      })}
    </>
  );
};

export default Menu;
