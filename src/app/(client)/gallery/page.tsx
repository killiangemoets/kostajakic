import gallery1 from "@/assets/images/gallery/gallery_1.webp";
import gallery2 from "@/assets/images/gallery/gallery_2.webp";
import gallery3 from "@/assets/images/gallery/gallery_3.webp";
import gallery4 from "@/assets/images/gallery/gallery_4.webp";
import gallery5 from "@/assets/images/gallery/gallery_5.webp";
import gallery6 from "@/assets/images/gallery/gallery_6.webp";
import gallery7 from "@/assets/images/gallery/gallery_7.webp";
import gallery8 from "@/assets/images/gallery/gallery_8.webp";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import type { StaticImageData } from "next/image";
import Image from "next/image";

const Videos = () => {
  return (
    <div>
      <Typography.body className="border-b font-bold">Videos</Typography.body>
    </div>
  );
};

const Photo = ({ src, alt }: { src: StaticImageData; alt: string }) => {
  return (
    <div className="relative w-full pb-[100%]">
      <Image className="absolute top-0 left-0 w-full h-full object-cover object-center" src={src} alt={alt} priority />
    </div>
  );
};

const Photos = () => {
  return (
    <div className="space-y-4">
      <Typography.body className="border-b font-bold">Photos</Typography.body>
      <div className="grid grid-cols-4 w-full gap-4">
        <Photo src={gallery1} alt="project" />
        <Photo src={gallery2} alt="project" />
        <Photo src={gallery3} alt="project" />
        <Photo src={gallery4} alt="project" />
        <Photo src={gallery5} alt="project" />
        <Photo src={gallery6} alt="project" />
        <Photo src={gallery7} alt="project" />
        <Photo src={gallery8} alt="project" />
      </div>
      <Button variant="outline" className="ml-auto block">
        See more
      </Button>
    </div>
  );
};

export default async function Gallery() {
  return (
    <div className="w-full sm:w-[50%] sm:min-w-[500px] space-y-8">
      <Photos />
      <Videos />
    </div>
  );
}
