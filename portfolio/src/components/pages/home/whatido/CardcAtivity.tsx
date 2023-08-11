import CardDivAbsolute from "@/components/cardDivAbsolute";
import CmsIcon from "@/components/cmsIcon/Index";
import { ReactNode } from "react";

interface ICardActivity {
  activity: string;
  activityComplement: string;
  description: string;
  iconSvg: string;
}

const CardcAtivity = ({
  activity,
  iconSvg,
  activityComplement,
  description,
}: ICardActivity) => {
  return (
    <div className="relative group">
      <CardDivAbsolute />

      <div className="card-style flex flex-col gap-[8px] items-center justify-center py-[40px]  px-[8px] shadowCard ">
        <CmsIcon icon={iconSvg} />
        <div className="flex flex-wrap justify-center gap-x-[8px]">
          <h5>{activity}</h5>
          <h5>{activityComplement}</h5>
        </div>
        <p className="text-center font-firamono  text-blue3 group-hover:text-purple5  transition duration-500 ease-in-out">
          {description}
        </p>
        cC
      </div>
    </div>
  );
};

export default CardcAtivity;
