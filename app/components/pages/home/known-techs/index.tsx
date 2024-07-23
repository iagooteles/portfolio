import { SectionTitle } from "@/app/components/section-title";
import { KnownTech } from "./known-tech";
import { KnownTech as IKnownTech } from "@/app/types/projects";

type KnownTechsProps = {
    techs: IKnownTech[]
}

export const KnownTechs = ({ techs }: KnownTechsProps) => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos" />

            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 mt-6">
                {techs?.map((tech) => (
                    <KnownTech 
                        key = {tech.name}
                        tech = {tech}
                    />
                ))}
            </div>
        </section>
    )
}
