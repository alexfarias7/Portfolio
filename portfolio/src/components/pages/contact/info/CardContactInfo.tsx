import PhoneIcon from "@/components/Icons/PhoneIcon";
import CardDivAbsolute from "@/components/cardDivAbsolute";
import CmsIcon from "@/components/cmsIcon/Index";

interface Props {
  href: string;
  icon: string;
  text: string;
  title: string;
}

const CardContactInfo = ({ href, icon, text, title }: Props) => {
  return (
    <div className="relative group w-[280px]">
      <CardDivAbsolute className="h-[100px]" />

      <a
        href={href}
        className=" flex gap-5 items-center p-3 card-style h-[100px]"
      >
        <div
          className="w-[56px] h-[56px] bg-purple3/80 text-purple7 group-hover:bg-purple7 group-hover:text-purple0 transition-all 
        duration-500    rounded-xl flex justify-center items-center"
        >
          <CmsIcon icon={icon} />
        </div>
        <div>
          <p className="text-purple5 text-xl font-medium  font-tinos">
            {title}
          </p>
          <span className="text-blue0  font-firamono font-normal text-sm">
            {text}
          </span>
        </div>
      </a>
    </div>
  );
};

export default CardContactInfo;
