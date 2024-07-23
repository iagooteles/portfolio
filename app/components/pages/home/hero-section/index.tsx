'use client'

import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HomePageInfo } from "@/app/types/page-info";
import { RichText } from "@/app/components/rich-text";
import { CMSIcon } from "@/app/components/cms-icon";

type HomeSectionProps = {
    homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {
    const handleContact = () => {
        const contactSession = document.querySelector("#contact");
        if (contactSession) {
            contactSession.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <section className="relative w-full lg:h-[755px]">
            <div className="absolute inset-0 bg-hero-image bg-cover bg-center bg-no-repeat opacity-20" />
            <div className="relative container flex justify-between pb-10 flex-col-reverse sm:pb-32 py-32 gap-10 lg:flex-row lg:pb-[110px]">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono">Muito prazer, sou</p>
                    <h2 className="text-4xl mt-2 font-medium">Iago Teles</h2>
                    <div className="my-6 text-sm sm:text-base">
                        {<RichText content={homeInfo.introduction.raw} />}
                    </div>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[380px]" >
                        {homeInfo.technologies.map((tech) => (
                            <TechBadge name={tech.name} />
                        ))}
                    </div>

                    <div className="w-max mt-6 lg:mt-10 flex sm:items-center gap-4 sm:gap-5 sm:flex-row">
                        <Button
                            onClick={handleContact}
                        >
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className="text-gray-300 text-4xl flex items-center h-14 gap-3">
                            {homeInfo.socials.map((contact, index) => (
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
                    </div>
                </div>
                
                <Image 
                    className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-full m-auto object-cover 
                    border-2 border-violet-800 hover:border-violet-500 hover:scale-110 transition-all"
                    width={420}
                    height={404}
                    src={homeInfo.profilePicture.url}
                    alt="Foto de perfil Iago Teles"
                />
            </div>
        </section>
    )
}