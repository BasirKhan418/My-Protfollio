import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://basirkhan.dev"
  ),
  title: {
    default: "Basir Khan | Full-Stack Engineer",
    template: "%s | Basir Khan",
  },
  description:
    "Basir Khan is a full-stack engineer focused on cloud-native systems, AI-powered products, and high-scale web platforms.",
  keywords: [
    "Basir Khan",
    "Full-Stack Engineer",
    "Next.js Developer",
    "Node.js Developer",
    "Cloud Architect",
    "AWS",
    "DevOps",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Basir Khan | Full-Stack Engineer",
    description:
      "Portfolio of Basir Khan featuring scalable software systems, cloud-native apps, and business-focused engineering.",
    url: "/",
    siteName: "Basir Khan Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basir Khan | Full-Stack Engineer",
    description:
      "Scalable software systems, cloud architecture, and full-stack product engineering.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          spaceGrotesk.className,
          "app-shell flex antialiased h-screen overflow-hidden"
        )}
      >
        <Sidebar />
        <div className="lg:pl-3 lg:pt-3 bg-transparent flex-1 overflow-y-auto">
          <div className="content-surface flex-1 min-h-screen lg:rounded-tl-2xl overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
