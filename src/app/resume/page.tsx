import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { PageCtas } from "@/components/PageCtas";
import { WorkHistory } from "@/components/WorkHistory";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Basir Khan's resume, experience, achievements, and technical background in full-stack and cloud engineering.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Resume | Basir Khan",
    description:
      "Experience and achievements across cloud-native systems, full-stack development, and DevOps automation.",
    url: "/resume",
    type: "profile",
  },
};

export default function ResumePage() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack engineer who enjoys{" "}
        <Highlight>building scalable platforms</Highlight> with clean
        architecture, strong uptime, and measurable business impact.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Highlights: 3x hackathon winner, 500+ developer community builder,
        10K+ concurrent-user systems, and cloud cost optimization up to 40%.
      </Paragraph>
      <PageCtas className="mt-6" />
      <div className="mt-6 mb-2 flex flex-wrap gap-3">
        <Link
          href="mailto:khanbasir5555@gmail.com"
          className="text-sm px-3 py-1.5 rounded-full bg-teal-700 text-white"
        >
          khanbasir5555@gmail.com
        </Link>
        <Link
          href="https://linkedin.com/in/basirkhan418"
          target="_blank"
          className="text-sm px-3 py-1.5 rounded-full bg-white border border-neutral-200"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/BasirKhan418"
          target="_blank"
          className="text-sm px-3 py-1.5 rounded-full bg-white border border-neutral-200"
        >
          GitHub
        </Link>
        <Link
          href="/Basir_Khan_Resume.pdf"
          target="_blank"
          className="text-sm px-3 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200"
        >
          Download Resume
        </Link>
      </div>
      <WorkHistory />
    </Container>
  );
}
