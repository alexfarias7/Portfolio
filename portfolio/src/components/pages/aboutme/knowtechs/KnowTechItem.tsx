import CmsIcon from "@/components/cmsIcon/Index";
import { KnownTech } from "@/types/schemas/projectsInfo";
import { getRelativeTimeString } from "@/utils/getRelativeTime";
import { ReactNode } from "react";

type KnowTechItemProps = {
  tech: KnownTech;
};

const KnowTechItem = ({ tech }: KnowTechItemProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    "pt-BR"
  ).replace("há", "");
  return (
    <div
      className="p-6   flex flex-col gap-2 hover:bg-blue4/30 transition-all
    text-blue0 border-blue9  border-[1px] rounded-lg  group
    bg-blue6 group hover:border-purple5 hover:text-purple5
    "
    >
      <div className="flex items-center justify-between">
        <p className="font-montserrat  group-hover:text-purple5 uppercase ">
          {tech.name}
        </p>

        <CmsIcon icon={tech.iconSvg} />
      </div>
      <span>{relativeTime} de experiência</span>
    </div>
  );
};

export default KnowTechItem;
