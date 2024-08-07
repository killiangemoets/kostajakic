import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";

const DownloadButtons = () => {
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 w-fit items-center gap-2">
      <Button
        href="/biography/kosta_jakic_bio_en.pdf"
        target="_blank"
        className="normal-case  h-8 px-4 text-base"
        variant="outline"
        size="sm"
      >
        <ArrowDownToLine className="h-3.5 w-3.5 mr-2" />
        PDF
        <span className="sr-only">Download PDF</span>
      </Button>
      {/* <Button
        className="normal-case w-[104px] h-8 px-0 text-base"
        variant="outline"
        size="sm"
      >
        <ArrowDownToLine className="h-3.5 w-3.5 mr-2" />
        PDF - en
        <span className="sr-only">Download PDF - en</span>
      </Button>
      <Button className="normal-case w-[104px] h-8 px-0  text-base" variant="outline" size="sm">
        <ArrowDownToLine className="h-3.5 w-3.5 mr-2" />
        PDF - fr
        <span className="sr-only">Download PDF - fr</span>
      </Button>
      <Button className="normal-case w-[104px] h-8 px-0 text-base" variant="outline" size="sm">
        <ArrowDownToLine className="h-3.5 w-3.5 mr-2" />
        PDF - nl
        <span className="sr-only">Download PDF - nl</span>
      </Button>
      <Button className="normal-case w-[104px] h-8 px-0 text-base" variant="outline" size="sm">
        <ArrowDownToLine className="h-3.5 w-3.5 mr-2" />
        PDF - sr
        <span className="sr-only">Download PDF - sr</span>
      </Button> */}
    </div>
  );
};

export default async function Concerts() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 w-full sm:w-[50%] sm:min-w-[500px]">
        <Typography.body>
          <span className="font-bold uppercase">Kosta Jakić</span> is a Belgian pianist and conductor of Yugoslav origin, who graduated with
          magna cum laude from the Royal Conservatory in Antwerp in classical piano. He builds his relationship to music and/to the world in
          a singular way, far from the usual music competitions and solo concerts. Investigating the place of classical and experimental
          music in today&apos;s world, he bases his research on the analysis of the role of music in conditions of detention, determinism
          and limitation. He performed in the largest Lithuanian prison, with the organisation &quot;Looking to the stars&quot;, and played
          in various Belgian concentration camps from the Second World War.
        </Typography.body>
        <Typography.body>
          Furthermore, his encounter with the renowned composer Frederic Rzewski led Kosta, to not only write two interviews, but shaped
          Kosta&apos;s repertoire and propose actively to play Rzewski&apos;s revolutionary new genre of Speaking Pianist during his
          recital. It is also around Rzewski&apos;s music that a sustaining collaboration and friendship was born between Kosta and one of
          the greatest young pianist talents of our time, Lukas Genusias, with a concert taking place in October 2024.
        </Typography.body>
        <Typography.body>
          His research on the role music played in the World War II camps, its essential and often hidden role, led him to Simon Gronowski,
          a surviving member of the Jewish community who, as a 10-year-old boy, escaped from the convoy that was taking him directly to
          Auschwitz. Simon Gronovski, doctor of law sciences and great fighter for peace and tolerance, is also a self-taught jazz pianist.
          Since they met, Kosta has collaborated with him through exchanges on this topic, through concerts and conversations. Ivan Put,
          former photo editor of the largest Flemish newspaper De Standard, is in the process of completing a film on the intergenerational
          meeting around music and radical peace, between Simon and Kosta.
        </Typography.body>
        <Typography.body>
          Kosta is currently the vice-president of the &quot;Belgian Doctoral Symphony Orchestra&quot; which he co- initiated.
        </Typography.body>
      </div>
      <DownloadButtons />
    </div>
  );
}
