"use client";

import Link from "next/link";
import { NavItem } from "./nav-item";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

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
        <Link 
          href="/"
          className="border border-purple-800 rounded p-1"
        >
          <FaCode  
            size={26}
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
