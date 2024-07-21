import PhotosGallery from "@/components/gallery/photos";
import VideosGallery from "@/components/gallery/videos";
import { trpcServer } from "@/trpc/server";

export const dynamic = "force-static"; // force static rendering

export default async function Gallery() {
  const images = await trpcServer.images.list();
  return (
    <div className="w-full sm:w-[56%] sm:min-w-[500px] space-y-8">
      <PhotosGallery photos={images} />
      <VideosGallery />
    </div>
  );
}
