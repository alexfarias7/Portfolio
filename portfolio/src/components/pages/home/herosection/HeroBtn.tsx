import BtnIcon from "@/components/Buttons/BtnIcon";
import Download from "@/components/Icons/Download";
import PortfolioIcon from "@/components/Icons/PortfolioIcon";

const HeroBtns = () => {
  return (
    <div className="flex gap-[32px] lg:gap-4 lg:flex-col md:items-center">
      <div className="group ">
        <BtnIcon icon={<Download />} text="Download CV" />
      </div>

      <div className="group">
        <BtnIcon
          className=" justify-center"
          icon={<PortfolioIcon />}
          text="My Projects"
        />
      </div>
    </div>
  );
};

export default HeroBtns;
