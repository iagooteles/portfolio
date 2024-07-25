"use client";

import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
];

export const Header = () => {
  return (
    <motion.header 
        className="absolute top-0 w-full z-10 h-24 flex items-center justify-center"
        initial={{opacity: 0, y:-100}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.5}}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={58}
            height={49}
            src="/images/logo4.svg"
            alt="Logo Iago"
          />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </motion.header>
  );
};