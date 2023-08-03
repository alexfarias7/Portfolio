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
      <div className=" bg-blue6 border-solid border-[2px]  border-blue9   h-full w-full rounded-sm left-2 absolute top-2 transition duration-500 -z-10  group-hover:border-purple5"></div>
      <div className="border-solid border-[2px] rounded-sm text-blue0 border-blue9 flex flex-col gap-[8px] items-center justify-center py-[40px]  px-[8px] font-montserrat font-semibold text-[22px] shadowCard bg-blue6  group-hover:border-purple5 transition duration-500 ease-in-out">
        <CmsIcon icon={iconSvg} />
        <div className="flex flex-wrap justify-center gap-x-[8px]">
          <h5>{activity}</h5>
          <h5>{activityComplement}</h5>
        </div>
        <p className="text-center font-popins leading-[28px] font-normal text-[16px] text-blue3 group-hover:text-purple5  transition duration-500 ease-in-out">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardcAtivity;
