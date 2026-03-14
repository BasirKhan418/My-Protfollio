"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";

export const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1  gap-10">
        {products.map((product: Product, idx: number) => {
          const primaryLink = product.slug
            ? `/projects/${product.slug}`
            : product.liveUrl || "#";

          return (
            <motion.div
              key={product.slug ?? product.title}
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            >
            <div className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 rounded-2xl transition duration-200 p-4 md:p-5 border border-transparent hover:border-teal-100 hover:bg-white/80 hover:shadow">
              <Link href={primaryLink}>
                <Image
                  src={product.thumbnail}
                  alt="thumbnail"
                  height="200"
                  width="200"
                  className="rounded-xl"
                />
              </Link>
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <Link href={primaryLink}>
                    <Heading
                      as="h4"
                      className="font-black text-lg md:text-lg lg:text-lg"
                    >
                      {product.title}
                    </Heading>
                  </Link>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    {product.description}
                  </Paragraph>
                </div>
                <div className="flex flex-wrap gap-2 md:mb-1 mt-3 md:mt-4">
                  {product.stack?.map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs  md:text-xs lg:text-xs bg-teal-50 px-2 py-1 rounded-md text-teal-700"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  {product.liveUrl && (
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold px-3 py-1.5 rounded-full border border-sky-200 text-sky-800 bg-sky-50 hover:bg-sky-100 transition inline-flex items-center gap-1.5"
                    >
                      <IconWorld className="h-3.5 w-3.5" />
                      Live
                    </a>
                  )}
                  {product.githubUrl && (
                    <a
                      href={product.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold px-3 py-1.5 rounded-full border border-neutral-300 text-neutral-800 bg-white hover:bg-neutral-100 transition inline-flex items-center gap-1.5"
                    >
                      <IconBrandGithub className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
