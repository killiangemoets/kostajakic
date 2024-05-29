import { Typography } from "@/components/typography";

export default function Home() {
  return (
    <div className="absolute top-36 right-64 flex flex-col gap-6 items-center">
      <div>
        <Typography.h1>Kosta</Typography.h1>
        <Typography.h1 className="pl-[84px]">Jakic</Typography.h1>
      </div>
      <Typography.h3>Pianist</Typography.h3>
    </div>
  );
}
