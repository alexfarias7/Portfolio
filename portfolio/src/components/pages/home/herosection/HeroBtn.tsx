import BtnIcon from "@/components/Buttons/BtnIcon";
import Download from "@/components/Icons/Download";
import PortfolioIcon from "@/components/Icons/PortfolioIcon";

const HeroBtns = () => {
  return (
    <div className="flex gap-[32px] lg:gap-4  lg:items-center">
      <div className="group ">
        <BtnIcon
          icon={<Download />}
          text="Download CV"
          className="sm:text-sm sm:w-[150px] sm:px-2 sm:gap-2"
        />
      </div>

      <div className="group">
        <BtnIcon
          className="sm:text-sm sm:w-[150px] sm:px-2 sm:gap-2"
          icon={<PortfolioIcon />}
          text="Meus Projetos"
        />
      </div>
    </div>
  );
};

export default HeroBtns;
