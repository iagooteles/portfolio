"use client";

import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { TechBadge } from "@/app/components/tech-badge";
import { Link } from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Project } from "@/app/types/projects";
import { motion } from "framer-motion";
import { techBadgeAnimation } from "@/app/lib/animation";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const animProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };
  return (
    <motion.div 
        className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{opacity:0, y: 100}}
        transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{opacity:0, y: 100, scale: 0.5}}
        transition={{ duration: 0.3, delay: 0.3}}
      >
        <Image
          width={420}
          height={304}
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          className="w-full h-full object-cover rounded-lg opacity-80 brightness-120"
        />
      </motion.div>

      <div className="w-full flex-1 lg:py-[18px]">
        <motion.h3 
            className="flex items-center gap-3 font-medium text-lg"
            {...animProps}
            transition={{duration: 0.7}}
        >
          <AiOutlineStar size={20} />
          {project.title}
        </motion.h3>
        <p 
            className="my-6"
        >
            {project.shortDescription}
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {project.technologies.map((tech, i) => (
            <TechBadge
              key={`${project.title}-tech-${tech.name}`}
              name={tech.name}
              {...techBadgeAnimation}
              transition={{duration:0.3, delay: 0.3 + i * 0.1}}
            />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  );
};
