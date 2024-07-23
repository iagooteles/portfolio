import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "../../../link";
import { SectionTitle } from "../../../section-title";
import { FaHeart } from "react-icons/fa";

export const PageIntroduction = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center px-2 relative h-[450px] lg:h-[630px]">
        <div className="absolute inset-0 bg-hero-image bg-cover bg-center bg-no-repeat opacity-20 z-[-1]" />
        <SectionTitle
          subtitle="projetos"
          title="Meus projetos"
          className="text-center items-center [&>h3]:text-4xl"
        />

        <div className="flex flex-col items-center">
          <p className="flex text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
            Veja alguns dos projetos que já criei &nbsp;&nbsp; <FaHeart />{" "}
            &nbsp; .
          </p>

          <Link href="/">
            <HiArrowNarrowLeft size={30} />
            Voltar para Home
          </Link>
        </div>

        
      </section>
    </>
  );
};
