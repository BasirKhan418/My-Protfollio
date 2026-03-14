import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import About from "@/components/About";
import { PageCtas } from "@/components/PageCtas";

export const metadata: Metadata = {
  title: "About | Basir Khan",
  description:
    "About Basir Khan, full-stack engineer focused on cloud systems, DevOps automation, and AI-enabled applications.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Basir Khan",
    description:
      "Learn about Basir Khan's journey, engineering focus, and experience building scalable products.",
    url: "/about",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <PageCtas className="mt-5" />
      <About />
    </Container>
  );
}
