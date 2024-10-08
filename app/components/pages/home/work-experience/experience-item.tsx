"use client";

import Image from "next/image";
import { TechBadge } from "@/app/components/tech-badge";
import { WorkExperience as IWorkExperience } from "@/app/types/work-experience";
import { RichText } from "@/app/components/rich-text";
import { ptBR } from "date-fns/locale";
import { differenceInMonths, differenceInYears, format } from "date-fns";
import { formattedDuration } from "@/app/utils/formatDate";
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animation";

type WorkExperienceProps = {
  experience: IWorkExperience;
};

export const ExperienceItem = ({ experience }: WorkExperienceProps) => {
  const {
    endDate,
    companyLogo,
    companyName,
    companyUrl,
    role,
    technologies,
    description,
  } = experience;

  const startDate = new Date(experience.startDate);
  const formattedStartDate = format(startDate, "MMM yyyy", { locale: ptBR });
  const formattedEndDate = endDate
    ? format(new Date(endDate), "MMM yyyy", { locale: ptBR })
    : "o momento";

  const end = endDate ? new Date(endDate) : new Date();

  const months = differenceInMonths(end, startDate);
  const years = differenceInYears(end, startDate);
  const monthsRemaining = months % 12;

  const dateDuration = formattedDuration({ years, months, monthsRemaining });

  return (
    <motion.div 
        className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
        {...fadeUpAnimation}
        transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-lg border border-gray-500 p-0.2">
          <Image
            src={companyLogo.url}
            width={40}
            height={40}
            className="bg-white rounded-lg"
            alt={`Logo da empresa ${companyName}`}
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <p className="text-gray-500 hover:text-violet-500 transition-colors">
            {companyName}
          </p>
          <h4>{role}</h4>
          <span className="text-gray-500">
            {formattedStartDate} → {formattedEndDate} • ({dateDuration})
          </span>
          <div>
            <RichText content={description.raw} />
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {technologies.map((tech, i) => (
            <TechBadge
              key={`experience-${companyName}-tech-${tech.name}`}
              name={tech.name}
              {...techBadgeAnimation}
              transition={{duration: 0.2, delay: i * 0.1}}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
