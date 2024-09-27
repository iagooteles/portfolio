import { CMSIcon } from "@/app/components/cms-icon";
import type { KnownTech as IKnownTech } from "@/app/types/projects";
import { getRelativeTimeString } from "@/app/utils/get-relative-time";

type KnownTechProps = {
  tech: IKnownTech;
};

export const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    "pt-BR"
  ).replace("há", "");

  return (
    <div className="p-2.5 md:p-6 rounded-lg bg-gray-600/20 flex gap-2 hover:bg-violet-800 transition-all justify-between">
      <div className="flex flex-col gap-1 md:gap-2 justify-between">
        <p className="font-medium text-sm md:text-base">{tech.name}</p>
        <span className="text-xs md:text-sm">{relativeTime} de experiência</span>
      </div>
      <CMSIcon icon={tech.iconSvg} style={{ width: "40px", height: "40px" }} />
    </div>
  );
};