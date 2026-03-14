import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    title: "Jogaad India",
    description:
      "Production website for Jogaad India with conversion-focused pages, service flows, and a modern front-end experience.",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    slug: "jogaad-india",
    liveUrl: "https://jogaadindia.com/",
    content: (
      <div>
        <p>
          Jogaad India was built to showcase services clearly and drive user
          inquiries through focused content blocks and a smooth browsing
          experience across mobile and desktop.
        </p>
        <p>
          The implementation emphasizes fast loading, clean information
          hierarchy, and reusable UI sections that make future content updates
          simple for the business team.
        </p>
      </div>
    ),
  },
  {
    title: "Urbun Club - SME Service Marketplace",
    description:
      "Urban Company style service marketplace for SMEs with booking workflows, payments, and service management.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Next.js", "Node.js", "Razorpay", "PostgreSQL", "Redis"],
    slug: "urbun-club-sme-marketplace",
    content: (
      <div>
        <p>
          This platform connects users with service providers through category
          discovery, scheduling, and order tracking. It is structured for
          multi-service businesses and fast onboarding.
        </p>
        <p>
          Razorpay integration powers secure payment collection, while a Node.js
          backend handles provider operations, booking state transitions, and
          dashboard reporting.
        </p>
      </div>
    ),
  },
  {
    githubUrl: "https://github.com/BasirKhan418",
    title: "Scalable URL Shortener & Analytics",
    description:
      "Distributed link-shortening platform handling high-volume traffic with event-driven architecture and real-time analytics.",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["Kafka", "PostgreSQL", "Redis", "AWS", "CloudFront"],
    slug: "scalable-url-shortener-analytics",
    content: (
      <div>
        <p>
          The platform processes over 100K daily requests with Kafka-backed
          event flows for tracking and analytics. Redis caching ensures fast
          lookup performance for short links under heavy load.
        </p>
        <p>
          Multi-region deployment on AWS ECS, S3, and CloudFront helped achieve
          sub-50ms global latency and fault-tolerant operation with proactive
          uptime monitoring.
        </p>
      </div>
    ),
  },
  {
    githubUrl: "https://github.com/BasirKhan418",
    title: "Proctored Testing Platform",
    description:
      "Secure online assessment system with fraud detection and operational visibility, built for scale and reliability.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Node.js", "AWS Fargate", "Redis", "SQL", "Docker"],
    slug: "proctored-testing-platform",
    content: (
      <div>
        <p>
          Built for operational integrity, this platform includes secure test
          sessions, behavior tracking, and analytics-powered fraud signals. It
          was designed for smooth use by thousands of learners and educators.
        </p>
        <p>
          The infrastructure combines autoscaling and observable deployments so
          teams can release quickly, analyze platform behavior, and maintain
          consistent uptime under peak traffic.
        </p>
      </div>
    ),
  },
];
