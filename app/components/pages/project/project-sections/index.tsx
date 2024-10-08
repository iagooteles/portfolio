'use client'

import { ProjectSection } from "@/app/types/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/app/lib/animation";

type ProjectsectionsProps = {
  projectSection: ProjectSection[];
};

export const ProjectSections = ({ projectSection }: ProjectsectionsProps) => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {projectSection.map((section, i) => (
        <motion.div
          key={`${section.title} - ${i}`}
          className="flex flex-col items-center gap-6 md:gap-12"
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            {section.title}
          </h2>

          <Image
            src={section.image.url}
            width={1080}
            height={672}
            className="w-full max-w-screen-md max-h-92 aspect-auto rounded-lg object-contain"
            alt={`Imagem da sessão ${section.title}`}
          />
        </motion.div>
      ))}
    </section>
  );
};
