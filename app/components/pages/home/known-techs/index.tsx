'use client'

import { SectionTitle } from "@/app/components/section-title";
import { KnownTech } from "./known-tech";
import type { KnownTech as IKnownTech } from "@/app/types/projects";
import { motion } from "framer-motion";

type KnownTechsProps = {
  techs: IKnownTech[];
};

export const KnownTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 mt-6">
        {techs?.map((tech, i) => (
            <motion.div
                key={tech.name}
                initial={{opacity:0, x: -100}}
                animate={{opacity:1, x:0}}
                transition={{duration:0.3, delay: i * 0.3}}
            >
                <KnownTech tech={tech} />
            </motion.div>
        ))}
      </div>
    </section>
  );
};
