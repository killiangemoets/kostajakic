import { Typography } from "@/components/typography";
import { FULL_NAME } from "@/constants/contact";
import { getFistName, getLastName } from "@/utils/format";

export default function Home() {
  return (
    <div className="absolute bottom-0 md:top-0 right-[0%] md:right-[2%] lg:right-[5%] xl:right-[10%] flex flex-col gap-6 items-center">
      <div>
        <Typography.h1 className="drop-shadow-md md:drop-shadow-none">{getFistName(FULL_NAME)}</Typography.h1>
        <Typography.h1 className="pl-[98px] drop-shadow-md md:drop-shadow-none">{getLastName(FULL_NAME)}</Typography.h1>
      </div>
      <Typography.h3 className="drop-shadow-md md:drop-shadow-none">Pianist</Typography.h3>
    </div>
  );
}
