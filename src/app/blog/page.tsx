import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { PageCtas } from "@/components/PageCtas";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";
import { getHashnodePosts } from "../../../lib/getHashnodePosts";
import { HashnodeFeed } from "@/components/HashnodeFeed";

export const metadata: Metadata = {
  title: "Blogs | Basir Khan",
  description:
    "Read Basir Khan's latest Hashnode articles on Next.js, Node.js, cloud systems, product engineering, and scalable architecture.",
  keywords: [
    "Basir Khan blog",
    "Hashnode",
    "Next.js",
    "Node.js",
    "Razorpay integration",
    "Full-stack engineering",
    "Cloud architecture",
    "Software engineering blog",
  ],
  alternates: {
    canonical: "/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Blogs | Basir Khan",
    description:
      "Technical writing on product engineering, service platforms, and cloud-ready web systems.",
    type: "website",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Basir Khan",
    description:
      "Latest engineering articles from Basir Khan on full-stack, cloud, and scalable systems.",
  },
};

export default async function Blog() {
  const hashnodePosts = await getHashnodePosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Basir Khan Blog",
    description:
      "Engineering articles on full-stack development, cloud, and scalable systems.",
    blogPost: hashnodePosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.brief,
      datePublished: post.publishedAt,
      url: post.url,
      image: post.coverImage,
      keywords: post.tags?.join(", "),
      author: {
        "@type": "Person",
        name: "Basir Khan",
      },
    })),
  };

  return (
    <Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">I write about technology</Heading>
      <Paragraph className="pb-10">
        I share practical lessons from building{" "}
        <Highlight>scalable apps</Highlight>, cloud infrastructure, and
        AI-enabled products.
      </Paragraph>
      <PageCtas className="mb-10" />
      <HashnodeFeed posts={hashnodePosts} />
    </Container>
  );
}
