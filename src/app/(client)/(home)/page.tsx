import { Typography } from "@/components/typography";

export default function Home() {
  return (
    <div className="absolute top-0 right-[4%] lg:right-[5%] xl:right-[10%] flex flex-col gap-6 items-center">
      <div>
        <Typography.h1 className="">Kosta</Typography.h1>
        <Typography.h1 className=" pl-[98px]">Jakic</Typography.h1>
      </div>
      <Typography.h3 className="">Pianist</Typography.h3>
    </div>
  );
}
