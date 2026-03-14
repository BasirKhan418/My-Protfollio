import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { PageCtas } from "@/components/PageCtas";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Basir Khan",
  description:
    "Contact Basir Khan for freelance engineering, product collaboration, and full-stack/cloud consulting.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Basir Khan",
    description:
      "Book a call or send a project inquiry to Basir Khan for full-stack and cloud engineering services.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Reach out for freelance builds, cloud architecture, or product
        collaboration. You can book a session on Cal.com, email directly, or
        drop details through the form below.
      </Paragraph>
      <PageCtas className="mb-10" />
      <Contact />
    </Container>
  );
}
