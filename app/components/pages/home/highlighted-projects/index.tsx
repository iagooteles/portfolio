import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"
import { Link } from "@/app/components/link"
import { HiArrowNarrowRight } from "react-icons/hi"
import { ProjectCardWeaGit } from "./project-card-weagit"
import { Project } from "@/app/types/projects"

type HighLightedProjectsProps = {
    projects: Project[];
}


export const HighlightedProjects = ({ projects }: HighLightedProjectsProps) => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="destaques" title="Projetos em destaque" />
            <HorizontalDivider className="mb-16" />

            <div>
                {projects?.map(project => (
                    <div key={project.slug}>
                        <ProjectCard project={project} />
                        <HorizontalDivider className="my-16" />
                    </div>
                ))}

                {/* <ProjectCardWeaGit />
                <HorizontalDivider className="my-16" /> */}

                {/* <p className="flex items-center gap-1.5">
                    <span>Se interessou?</span>
                    <Link className="inline-flex" href="/projects">
                        Ver todos
                        <HiArrowNarrowRight />
                    </Link>
                </p> */}
            </div>
        </section>
    )
}