import { footerSocialsInfo } from "@/app/types/page-info";
import { CMSIcon } from "../cms-icon";

type FooterSectionSocialsProps = {
  footerSocials: footerSocialsInfo;
};

export const Footer = ({ footerSocials }: FooterSectionSocialsProps) => {
  const getDate = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gray-950 flex flex-col py-16 gap-4">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
        Iago Teles - {getDate()}
      </span>

      <div className="text-gray-300 text-4xl flex items-center h-20 gap-3">
        {footerSocials.socials.map((contact, index) => (
          <a
            href={contact.url}
            key={`contact.${index}`}
            target="_blank"
            className="hover:text-gray-100 hover:scale-110 transition-all"
          >
            <CMSIcon icon={contact.iconSvg} />
          </a>
        ))}
      </div>
    </footer>
  );
};
