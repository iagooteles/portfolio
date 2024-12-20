"use client";

import { Button } from "@/app/components/button";
import { Link } from "@/app/components/link";
import { SectionTitle } from "@/app/components/section-title";
import { TechBadge } from "@/app/components/tech-badge";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animation";
import { Project } from "@/app/types/projects";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { FaArrowRight } from "react-icons/fa";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";

type ProjectDetailsProps = {
  project: Project;
};

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-hero-image bg-cover bg-center bg-no-repeat opacity-20 z-[-1]"
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <SectionTitle
        subtitle="projetos"
        title={project.title}
        className="text-center items-center sm:[&>h3]:text-4xl"
      />

      <motion.div
        className="text-gray-200 text-center max-w-[1040px] my-4 sm:my-6 text-base sm:text-lg leading-relaxed sm:leading-loose"
        {...fadeUpAnimation}
      >
        <RichText content={project.description.raw} />
      </motion.div>

      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        {project.technologies.map((tech, i) => (
          <TechBadge
            key={tech.name}
            name={tech.name}
            {...techBadgeAnimation}
            transition={{ duration: 0.3, delay: 0.1 * i }}
          />
        ))}
      </div>

      <motion.div
        className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
        {...fadeUpAnimation}
      >
        {project?.githubUrl && (
          <a href={project.githubUrl} target="_blank">
            <Button className="min-w-[180px]">
              <TbBrandGithub size={20} />
              Repositório
            </Button>
          </a>
        )}

        {project?.liveProjectUrl && (
          <a href={project.liveProjectUrl} target="_blank">
            <Button className="min-w-[180px]">
              <FaArrowRight size={20} />
              Site do projeto
            </Button>
          </a>
        )}
      </motion.div>

      <Link href="/projects">
        <HiArrowNarrowLeft size={30} />
        Voltar para Projetos
      </Link>
    </section>
  );
};
