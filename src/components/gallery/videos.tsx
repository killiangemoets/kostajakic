"use client";

import { Button } from "../ui/button";
import { Typography } from "@/components/typography";
import { GALLERY_VIDEOS } from "@/content/gallery";
import { useState } from "react";

const Video = ({ src, title }: { src: string; title: string }) => {
  return (
    <iframe
      className="w-full h-[220px] sm:h-[180px] md:h-[180px] lg:h-[200px] xl:h-[220px] 2xl:h-[300px]"
      src={src}
      title={title}
      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

const VideosGallery = () => {
  const [videos, setVideos] = useState(GALLERY_VIDEOS.slice(0, 4));
  return (
    <div className="space-y-4">
      <Typography.h3 className="border-b font-bold normal-case">Videos</Typography.h3>
      <div className="grid grid-col-1 sm:grid-cols-2 w-full gap-4">
        {videos.map((video, i) => (
          <Video key={i} src={video.src} title={video.title} />
        ))}
      </div>
      {videos.length !== GALLERY_VIDEOS.length && (
        <Button variant="outline" className="ml-auto block" onClick={() => setVideos(GALLERY_VIDEOS)}>
          See more
        </Button>
      )}
    </div>
  );
};

export default VideosGallery;
