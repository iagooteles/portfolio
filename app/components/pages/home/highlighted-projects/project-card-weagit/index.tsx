import Image from "next/image";
import weagit_thumbnail from "@/public/images/thumbnail/weagit_thumbnail.png";
import { AiOutlineStar } from "react-icons/ai";
import { TechBadge } from "@/app/components/tech-badge";
import { Link } from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export const ProjectCardWeaGit = () => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image
                    width={420}
                    height={304}
                    src={weagit_thumbnail}
                    alt="Thumbnail do projeto de automação"
                    className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg opacity-80 brightness-120"
                />
            </div>

            <div className="w-full">
                <h3 className="flex items-center gap-3 font-medium text-lg">
                    <AiOutlineStar 
                        size={20}
                    />
                    Utilização de Api's
                </h3>
                <p className="my-6">
                    Projeto de consumo/utilização de Api's, desenvolvido com React, onde mostro a utilização de duas API's: Github e Weatherapi. Sistema com layout responsivo, utilização de rotas com React e com a possibilidade de colocar seu input para receber os dados diretamente da api.
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="Tailwind" />
                    <TechBadge name="React" />
                    <TechBadge name="Api's" />
                    <TechBadge name="JavaScript" />
                </div>

                <Link href="https://github.com/iagooteles/weaGit" >
                    Ver projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>

        </div>
    )
}