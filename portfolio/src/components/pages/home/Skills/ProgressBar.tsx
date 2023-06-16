import CmsIcon from "@/components/cmsIcon/Index";
import { cn } from "@/lib/utils";
import classNames from "classnames";

interface IProgressBar {
  language: string;
  percent: number;
  width: string;
  icon: string;
  percentual: string;
}

const ProgressBar = ({
  language,
  percent,
  width,
  icon,
  percentual,
}: IProgressBar) => {
  // eslint-disable-next-line prefer-const
  //let [value, setValue] = useState(0);

  /* 	useEffect(() => {
		const timer = setInterval(() => {
			if (value === percent) clearInterval(timer);
			if (value >= percent) value = percent;

			setValue(value);
			setTimeout(() => {
				value++;
			}, 10);
		}, 10);
	}, []); */

  console.log(percent);

  return (
    <div className="flex gap-[40px] items-center justify-center group text-blue0">
      <div className="group-hover:text-purple5 transition duration-500 ease-in-out sm:hidden">
        <CmsIcon icon={icon} />
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-[12px] ">
          <h5 className="font-popins  text-[18px] text-blue0 font-semibold group-hover:text-purple5 transition duration-500 ease-in-out ">
            {language}
          </h5>
          <span className=" text-blue0 font-bold font-popins text-[18px] group-hover:text-purple5 transition duration-500 ease-in-out ">{`${percent}%`}</span>
        </div>

        <div
          className={`h-[10px] bg-blue3 rounded-full w-full  flex after:content-['']  after:inline-block 
		 after:h-[30px] after:w-[10px]   after:bg-blue5  after:border-solid after:border-[2px] after:border-blue0 after:rounded-[2px] after:relative after:top-[-10px]`}
        >
          <div
            className={cn(
              "h-full rounded-l-full bg-blue0 rounded group-hover:bg-purple5 transition duration-500 ease-in-out ",
              { width } && `w-[${percent}%]`
            )}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
