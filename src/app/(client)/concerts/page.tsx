import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import type { Concert } from "@/prisma/generated/client";
import { formatDateTime } from "@/utils/datetime";

const upcomingConcert: Concert[] = [
  {
    title: "Solo Recital",
    description: "Kosta Jakic performs a solo recital at salle Henri Le Boeuf",
    id: "1",
    date: "2024-05-10",
    time: "19:00",
    updatedAt: new Date(),
    createdAt: new Date(),
    location: "Bozar, salle Henri Le Boeuf",
  },
  {
    title: "Chamber musical recital",
    description: "Kosta Jakic performs a chamber musical recital at the Royal Albert Hall.",
    id: "1",
    date: "2024-05-17",
    time: "20:00",
    updatedAt: new Date(),
    createdAt: new Date(),
    location: "De Singel, Antwerp",
  },
  {
    title: "Solo Recital",
    description: "Kosta Jakic performs a solo recital at the Royal Albert Hall.",
    id: "1",
    date: "2024-06-22",
    time: "20:00",
    updatedAt: new Date(),
    createdAt: new Date(),
    location: "Carnegie Hall, New York",
  },
];

const pastConcert: Concert[] = [
  {
    title: "Solo Recital",
    description: "Kosta Jakic performs a solo recital at salle Henri Le Boeuf",
    id: "1",
    date: "2022-05-10",
    time: "19:00",
    updatedAt: new Date(),
    createdAt: new Date(),
    location: "Bozar, salle Henri Le Boeuf",
  },
  {
    title: "Chamber musical recital",
    description: "Kosta Jakic performs a chamber musical recital at the Royal Albert Hall.",
    id: "1",
    date: "2022-05-17",
    time: "20:00",
    updatedAt: new Date(),
    createdAt: new Date(),
    location: "De Singel, Antwerp",
  },
  {
    title: "Solo Recital",
    description: "Kosta Jakic performs a solo recital at the Royal Albert Hall.",
    id: "1",
    date: "2022-06-22",
    time: "20:00",
    updatedAt: new Date(),
    createdAt: new Date(),
    location: "Carnegie Hall, New York",
  },
];

export const ConcertCard = ({ concert }: { concert: Concert }) => {
  return (
    <div className="flex gap-8 items-center">
      <div className="border-t border-b flex flex-col gap-2 w-full">
        <div className="flex justify-between border-b">
          <Typography.body>{formatDateTime(concert.date, concert.time)}</Typography.body>
          <Typography.body>{concert.location}</Typography.body>
        </div>
        <div>
          <Typography.h4>{concert.title}</Typography.h4>
          <Typography.body>{concert.description}</Typography.body>
        </div>
      </div>
      <Button variant="outline" size="lg" className="">
        More info
      </Button>
    </div>
  );
};

export const ConcertsSection = ({ title, concerts }: { title: string; concerts: Concert[] }) => {
  return (
    <div className="flex flex-col gap-6">
      <Typography.h2>{title}</Typography.h2>
      <div className="flex flex-col gap-8">
        {concerts.map((concert) => (
          <ConcertCard key={concert.id} concert={concert} />
        ))}
      </div>
    </div>
  );
};

export default async function Concerts() {
  return (
    <div className="flex flex-col gap-8 items-center w-[56%]">
      <ConcertsSection title="Upcoming Concerts" concerts={upcomingConcert} />
      <p className="text-heading-1 font-light pr-[124px]">ф</p>
      <ConcertsSection title="Past Concerts" concerts={pastConcert} />
    </div>
  );
}
