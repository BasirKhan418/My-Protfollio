import { StaticImageData } from "next/image";

export type Product = {
  title: string;
  description: string;
  thumbnail: StaticImageData;
  images: StaticImageData[] | string[];
  liveUrl?: string;
  githubUrl?: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
};
