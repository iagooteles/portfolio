"use client";

import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HomePageInfo } from "@/app/types/page-info";
import { RichText } from "@/app/components/rich-text";
import { CMSIcon } from "@/app/components/cms-icon";
import { motion } from "framer-motion";

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {
  const handleContact = () => {
    const contactSession = document.querySelector("#contact");
    if (contactSession) {
      contactSession.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full lg:h-[755px]">
      <div className="absolute inset-0 bg-hero-image bg-cover bg-center bg-no-repeat opacity-20" />
      <div className="relative container flex justify-between pb-10 flex-col-reverse sm:pb-32 py-32 gap-10 lg:flex-row lg:pb-[110px]">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono">Muito prazer, sou</p>
          <h2 className="text-4xl mt-2 font-medium">Iago Teles</h2>
          <div className="my-6 text-sm sm:text-base">
            {<RichText content={homeInfo.introduction.raw} />}
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[380px]">
            {homeInfo.technologies.map((tech, i) => (
              <TechBadge
                key={`tech-${tech.name}`}
                name={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: i * 0.2 }}
              />
            ))}
          </div>

          <div className="w-max mt-6 lg:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            <Button onClick={handleContact}>Envie uma mensagem</Button>

            <div className="text-gray-300 text-4xl flex items-center h-14 gap-3 mt-4 sm:mt-0">
              {homeInfo.socials.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact.${index}`}
                  target="_blank"
                  className="hover:text-gray-100 hover:scale-110 transition-all" 
                  rel="noreferrer"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-full m-auto object-cover 
                        border-2 border-violet-800 hover:border-violet-500 hover:scale-110 transition-all"
            width={420}
            height={404}
            src={homeInfo.profilePicture.url}
            alt="Foto de perfil Iago Teles"
          />
        </motion.div>
      </div>
    </section>
  );
};
