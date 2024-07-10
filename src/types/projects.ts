import type { StaticImageData } from "next/image";

export type Project = {
  title: string;
  slug: string;
  image: StaticImageData;
  description: string;
};
