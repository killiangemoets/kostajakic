import PhotosGallery from "@/components/gallery/photos";
import VideosGallery from "@/components/gallery/videos";

export default async function Gallery() {
  return (
    <div className="w-full sm:w-[50%] sm:min-w-[500px] space-y-8">
      <PhotosGallery />
      <VideosGallery />
    </div>
  );
}
