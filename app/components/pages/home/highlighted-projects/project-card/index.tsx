import Image from "next/image";
import automationThumbnail from "@/public/images/thumbnail/automation-thumbnail.png";
import { AiOutlineStar } from "react-icons/ai";
import { TechBadge } from "@/app/components/tech-badge";
import { Link } from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Project } from "@/app/types/projects";

type ProjectCardProps = {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full">
                <Image
                    width={420}
                    height={304}
                    src={project.thumbnail.url}
                    alt={`Thumbnail do projeto ${project.title}`}
                    className="w-full h-full object-cover rounded-lg opacity-80 brightness-120"
                />
            </div>

            <div className="w-full flex-1 lg:py-[18px]">
                <h3 className="flex items-center gap-3 font-medium text-lg">
                    <AiOutlineStar 
                        size={20}
                    />
                    {project.title}
                </h3>
                <p className="my-6">
                    {project.shortDescription}
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    {project.technologies.map(tech => (
                        <TechBadge key={`${project.title}-tech-${tech.name}`} name={tech.name} />
                    ))}
                </div>

                <Link href={`/projects/${project.slug}`} >
                    Ver projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>

        </div>
    )
}