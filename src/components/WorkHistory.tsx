"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import { motion } from "framer-motion";
import {
  IconCircleCheckFilled,
} from "@tabler/icons-react";

export const WorkHistory = () => {
  return (
    <div>
      {timeline.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: index * 0.07 }}
          className="flex md:flex-row flex-col space-y-6 md:space-y-0 md:space-x-10 my-8 relative rounded-2xl border border-neutral-200/80 bg-white/75 p-5 md:p-6 shadow-sm"
          key={`timeline-${index}`}
        >
          <Paragraph className="w-40 font-medium text-neutral-500">
            {item.date}
          </Paragraph>
          <div>
            <Heading
              as="h5"
              className="text-lg md:text-lg lg:text-lg text-teal-700"
            >
              {item.company}
            </Heading>
            <Paragraph className="text-base md:text-base lg:text-base font-semibold">
              {item.title}
            </Paragraph>
            <Paragraph className="text-sm md:text-sm lg:text-sm mb-4">
              {item.description}
            </Paragraph>

            {item.responsibilities.map((responsibility, index) => (
              <Step key={responsibility}>{responsibility}</Step>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-1 items-start my-2">
      <IconCircleCheckFilled className="h-3 w-4 mt-1 text-neutral-300" />
      <Paragraph className="text-sm md:text-sm lg:text-sm">
        {children}
      </Paragraph>
    </div>
  );
};
