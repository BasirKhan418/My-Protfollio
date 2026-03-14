import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { PageCtas } from "@/components/PageCtas";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Basir Khan",
  description:
    "Projects by Basir Khan, including Jogaad India and service-marketplace products built with Next.js, Node.js, and Razorpay.",
  keywords: [
    "Jogaad India",
    "Next.js projects",
    "Node.js projects",
    "Razorpay integration",
    "Service marketplace",
    "Basir Khan portfolio",
  ],
  openGraph: {
    title: "Projects | Basir Khan",
    description:
      "Explore live products and case studies across web platforms, payments, and scalable backends.",
    url: "/projects",
    type: "website",
  },
  alternates: {
    canonical: "/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Basir Khan",
    description:
      "Live projects and engineering case studies by Basir Khan.",
  },
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        Projects I&apos;ve Built
      </Heading>
      <Paragraph className="max-w-2xl mb-10">
        A curated set of real products with clear outcomes. Each card now shows
        only the links that exist, so users see Live and GitHub actions
        conditionally with no empty placeholders.
      </Paragraph>
      <PageCtas className="mb-10" />

      <Products />
    </Container>
  );
}
