import BtnIcon from "@/components/Buttons/BtnIcon";
import Download from "@/components/Icons/Download";
import PortfolioIcon from "@/components/Icons/PortfolioIcon";

const HeroBtns = () => {
  return (
    <div className=" self-end lg:self-auto flex gap-8 lg:flex-col lg:gap-4 ">
      <div className="group ">
        <BtnIcon icon={<Download />} text="Download CV" className=" " />
      </div>

      <div className="group">
        <BtnIcon className=" " icon={<PortfolioIcon />} text="Meus Projetos" />
      </div>
    </div>
  );
};

export default HeroBtns;
