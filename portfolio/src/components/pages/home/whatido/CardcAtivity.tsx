import { ReactNode } from "react";

interface ICardActivity {
  activity: string;
  activityComplement: string;
  icon: ReactNode;
}

const CardcAtivity = ({
  activity,
  icon,
  activityComplement,
}: ICardActivity) => {
  return (
    <div className="border-solid border-[2px] rounded-lg text-blue0 border-blue9 flex flex-col gap-[8px] items-center justify-center py-[60px]  px-[20px] font-montserrat font-semibold text-[22px] shadowCard bg-blue6 group hover:bg-blue4/30  hover:border-purple5 hover:text-purple5 transition duration-500 ease-in-out ">
      {icon}
      <div className="flex flex-wrap justify-center gap-x-[8px]">
        <h5>{activity}</h5>
        <h5>{activityComplement}</h5>
      </div>
      <p className="text-center font-popins leading-[28px] font-normal text-[16px] text-blue3 group-hover:text-purple5  transition duration-500 ease-in-out">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default CardcAtivity;
