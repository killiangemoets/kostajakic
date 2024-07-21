import { Typography } from "@/components/typography";

export default function Home() {
  return (
    <div className="absolute bottom-0 md:top-0 right-[0%] md:right-[2%] lg:right-[5%] xl:right-[10%] flex flex-col gap-6 items-center">
      <div>
        <Typography.h1 className="drop-shadow-md md:drop-shadow-none">Kosta</Typography.h1>
        <Typography.h1 className="pl-[98px] drop-shadow-md md:drop-shadow-none">Jakic</Typography.h1>
      </div>
      <Typography.h3 className="drop-shadow-md md:drop-shadow-none">Pianist</Typography.h3>
    </div>
  );
}
