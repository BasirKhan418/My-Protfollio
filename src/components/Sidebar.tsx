"use client";

import { navlinks } from "@/constants/navlinks";
import { socials } from "@/constants/socials";
import { isMobile } from "@/lib/utils";
import { Navlink } from "@/types/navlink";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Badge } from "./Badge";
import { Heading } from "./Heading";

export const Sidebar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(isMobile());
  const [open, setOpen] = useState(!isMobile());

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setOpen(!isSmallScreen);
  }, [isSmallScreen]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            {isSmallScreen && (
              <motion.button
                key="sidebar-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                aria-label="Close sidebar"
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black/25 z-[90]"
              />
            )}

            <motion.div
              key="sidebar-drawer"
              initial={{ x: -260, opacity: 0.9 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              exit={{ x: -260, opacity: 0.9 }}
              className="px-4 md:px-5 z-[100] py-7 bg-white/85 border-r border-white/60 shadow-xl shadow-slate-900/10 w-[82vw] max-w-[18rem] lg:w-[16rem] fixed lg:relative inset-y-0 left-0 flex flex-col justify-between backdrop-blur-md"
            >
              <div className="flex-1 overflow-y-auto overflow-x-hidden pr-1">
                <SidebarHeader />
                <Navigation setOpen={setOpen} isSmallScreen={isSmallScreen} />
              </div>

              <div onClick={() => isSmallScreen && setOpen(false)}>
                <Badge href="/resume" text="View Resume" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <button
        className="fixed lg:hidden bottom-4 right-4 h-10 w-10 border border-neutral-300 bg-white/90 rounded-full backdrop-blur-sm flex items-center justify-center z-[110] shadow-md"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close sidebar" : "Open sidebar"}
      >
        <IconLayoutSidebarRightCollapse className="h-4 w-4 text-secondary" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
  isSmallScreen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSmallScreen: boolean;
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
          onClick={() => isSmallScreen && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2.5 px-2 rounded-xl text-sm hover:bg-white/80 border border-transparent",
            isActive(link.href) && "bg-white shadow-sm border-teal-100 text-primary"
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
          className="text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-xl text-sm hover:bg-white/80"
        >
          <link.icon className="h-4 w-4 flex-shrink-0" />
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
