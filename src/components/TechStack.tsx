import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";
import { FaAws, FaCode, FaDatabase, FaNetworkWired, FaServer } from "react-icons/fa";

export const TechStack = () => {
  const logoStack = [
    {
      title: "Next.js",
      src: "/images/logos/next.png",
      className: "h-10 w-14",
    },
    {
      title: "AWS",
      src: "/images/logos/aws.webp",
      className: "h-10 w-10",
    },
    {
      title: "Framer Motion",
      src: "/images/logos/framer.webp",
      className: "h-10 w-10",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",
      className: "h-10 w-12",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",
      className: "h-10 w-24",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",
      className: "h-10 w-24",
    },
  ];

  const primaryStack = [
    "TypeScript",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Razorpay",
    "REST APIs",
    "Tailwind CSS",
  ];

  const capabilityGroups = [
    {
      title: "Languages",
      icon: <FaCode className="h-4 w-4" />,
      items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
    },
    {
      title: "Frontend and Backend",
      icon: <FaServer className="h-4 w-4" />,
      items: [
        "React",
        "Next.js",
        "MERN Stack",
        "Node.js",
        "Express",
        "Spring Boot",
        "GraphQL",
      ],
    },
    {
      title: "Cloud and DevOps",
      icon: <FaAws className="h-4 w-4" />,
      items: [
        "AWS (ECS, S3, RDS, CloudWatch)",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "Nginx",
        "CI/CD",
      ],
    },
    {
      title: "Data and Observability",
      icon: <FaDatabase className="h-4 w-4" />,
      items: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Kafka",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      title: "Core Engineering Concepts",
      icon: <FaNetworkWired className="h-4 w-4" />,
      items: [
        "Data Structures and Algorithms",
        "OOP",
        "DBMS",
        "Computer Networks",
        "Operating Systems",
      ],
    },
  ];

  const impactMetrics = [
    "3x Hackathon Winner",
    "500+ Developer Community",
    "40% Cloud Cost Reduction",
    "10K+ Concurrent Users",
  ];

  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-5"
      >
        Tech Stack
      </Heading>

      <div className="rounded-3xl border border-white/70 bg-white/75 backdrop-blur-sm p-6 md:p-8 shadow-sm">
        <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-neutral-200/70">
          {logoStack.map((item) => (
            <div
              key={item.src}
              className="rounded-xl border border-neutral-200 bg-white/90 px-3 py-2"
            >
              <Image
                src={item.src}
                width={200}
                height={200}
                alt={item.title}
                className={twMerge("object-contain", item.className)}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-5 mt-6">
          <div className="rounded-2xl border border-teal-100 bg-teal-50/70 p-5">
            <p className="text-sm font-semibold text-teal-800">Primary Stack</p>
            <div className="flex flex-wrap gap-2.5 mt-3">
              {primaryStack.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1.5 rounded-md border bg-white border-teal-100 text-teal-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-amber-100 bg-amber-50/80 p-5">
            <p className="text-sm font-semibold text-amber-800">Proven Impact</p>
            <div className="flex flex-wrap gap-2.5 mt-3">
              {impactMetrics.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1.5 rounded-md bg-white border border-amber-200 text-amber-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {capabilityGroups.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-white/70 bg-white/90 p-5"
            >
              <div className="flex items-center gap-2 mb-3 text-slate-800">
                {category.icon}
                <p className="text-sm font-semibold">{category.title}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={`${category.title}-${item}`}
                    className="text-xs px-2.5 py-1.5 rounded-md border bg-slate-50 border-slate-200 text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-neutral-200 bg-white/90 p-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            I design and ship business-ready systems with reliable cloud
            infrastructure, clean APIs, and measurable outcomes like lower
            operational cost, faster release cycles, and high uptime.
          </p>
        </div>
      </div>
    </div>
  );
};
