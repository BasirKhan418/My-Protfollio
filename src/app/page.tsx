import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Basir Khan | Full-Stack Engineer",
  description:
    "Basir Khan builds scalable, cost-effective software for businesses with modern full-stack architecture and cloud-native delivery.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Basir Khan | Full-Stack Engineer",
    description:
      "Scalable software and cloud systems built for high reliability, lower costs, and measurable business impact.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basir Khan | Full-Stack Engineer",
    description:
      "Full-stack and cloud engineering focused on scalable business outcomes.",
  },
};

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello, I&apos;m Basir Khan</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack engineer focused on{" "}
        <Highlight>AI-powered and cloud-native products</Highlight> that scale
        for real users.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I build end-to-end systems with Next.js, Node.js, AWS, Docker, and
        distributed services, with proven delivery for{" "}
        <Highlight>10K+ concurrent users</Highlight> and production reliability.
      </Paragraph>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold bg-teal-700 text-white hover:bg-teal-600 transition"
        >
          Hire Me
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold border border-teal-200 bg-teal-50 text-teal-800 hover:bg-teal-100 transition"
        >
          View Projects
        </Link>
        <Link
          href="/Basir_Khan_Resume.pdf"
          target="_blank"
          className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-100 transition"
        >
          Download Resume
        </Link>
      </div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Featured Projects
      </Heading>
      <Products />
      <TechStack />

      <div className="mt-16 rounded-2xl border border-white/70 bg-white/75 backdrop-blur-sm p-5 md:p-7 shadow-sm">
        <Heading as="h2" className="font-black text-lg mb-3">
          What I Build for Businesses
        </Heading>
        <Paragraph className="max-w-3xl">
          I build software systems that help businesses scale faster, reduce
          cloud costs, and run reliably in production. From product engineering
          to cloud delivery, I focus on cost-effective architecture with strong
          uptime and measurable outcomes.
        </Paragraph>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Cloud Cost Optimization",
            "Scalable System Design",
            "High Uptime Deployments",
            "10K+ Concurrent Users",
            "DevOps Automation",
          ].map((item) => (
            <span
              key={item}
              className="text-xs px-2 py-1 rounded-md bg-amber-50 border border-amber-100 text-amber-800"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold bg-teal-700 text-white hover:bg-teal-600 transition"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </Container>
  );
}
