import BtnIcon from "@/components/BtnIcon";
import Download from "@/components/Icons/Download";
import PortfolioIcon from "@/components/Icons/PortfolioIcon";

const HeroBtns = () => {
  return (
    <div className="flex gap-[32px] lg:flex-col md:items-center  ">
      <div className="group ">
        <BtnIcon
          classStyle=" btn-icons lg:w-[220px]  "
          icon={<Download />}
          text="Download CV"
        />
      </div>

      <div className="group">
        <BtnIcon
          classStyle="btn-icons lg:w-[220px] justify-center"
          icon={<PortfolioIcon />}
          text="My Projects"
        />
      </div>
    </div>
  );
};

export default HeroBtns;
