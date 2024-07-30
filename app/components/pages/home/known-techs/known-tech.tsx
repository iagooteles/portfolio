import { CMSIcon } from "@/app/components/cms-icon";
import { KnownTech as IKnownTech } from "@/app/types/projects";
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
    <div className="p-6 rounded-lg bg-gray-600/20 flex gap-2 hover:bg-violet-800 transition-all justify-between">
      <div className="flex flex-col gap-2 justify-between">
        <p className="font-medium">{tech.name}</p>
        <span>{relativeTime} de experiência</span>
      </div>
      <CMSIcon icon={tech.iconSvg} style={{ width: "50px", height: "50px" }} />
    </div>
  );
};
