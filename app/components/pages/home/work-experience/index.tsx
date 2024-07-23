import { SectionTitle } from "@/app/components/section-title";
import { ExperienceItem } from "./experience-item";
import { WorkExperience as IWorkExperience } from "@/app/types/work-experience";

type WorkExperienceProps = {
    experiences: IWorkExperience[];
}

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
    return (
        <section className="container py-16 flex gap-16 md:gap-4 lg:gap-16 flex-col lg:flex-row">
            <div className="lg:max-w-[420px] max-w-[680px]">
                <SectionTitle subtitle="experiências" title="Experiência profissional" />
                <p className="mt-6 mb-6">
                    Todas as experiências profissionais são relevantes para o crescimento pessoal. Estou aberto a novas oportunidades que me proporcionem novos desafios.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                {experiences?.map(experience => (
                    <ExperienceItem 
                        key={experience.companyName}
                        experience={experience} 
                    />
                ))}
            </div>
        </section>
    )
}
