"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -220, opacity: 0.8 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            exit={{ x: -220, opacity: 0.8 }}
            className="px-4 md:px-5 z-[100] py-8 bg-white/75 border-r border-white/60 shadow-xl shadow-slate-900/10 w-[16rem] fixed lg:relative h-screen left-0 flex flex-col justify-between backdrop-blur-md"
          >
            <div className="flex-1 overflow-auto">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <div onClick={() => isMobile() && setOpen(false)}>
              <Badge href="/resume" text="View Resume" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed lg:hidden bottom-4 right-4 h-10 w-10 border border-neutral-300 bg-white/90 rounded-full backdrop-blur-sm flex items-center justify-center z-50 shadow-md"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-4 w-4 text-secondary" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-8 relative z-[100]">
      <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500 px-2 pb-2">
        Navigation
      </p>
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2.5 px-2 rounded-xl text-sm hover:bg-white/80 border border-transparent",
            isActive(link.href) &&
              "bg-white shadow-sm border-teal-100 text-primary"
          )}
        >
          <span
            className={twMerge(
              "w-1.5 h-1.5 rounded-full bg-transparent",
              isActive(link.href) && "bg-teal-500"
            )}
          />
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-8 px-2">
        Socials
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-xl text-sm hover:bg-white/80"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/70 p-3 shadow-sm">
      <div className="flex space-x-3 items-center">
        <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-teal-100 flex-shrink-0">
          <Image
            src="/me/3p.jpeg"
            alt="Avatar"
            height={48}
            width={48}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex text-sm flex-col">
          <p className="font-bold text-primary leading-tight">Basir Khan</p>
          <p className="font-medium text-secondary/80">Full-Stack Engineer</p>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-[11px] font-medium px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
          Available for projects
        </span>
      </div>
    </div>
  );
};
