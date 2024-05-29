import { Typography } from "@/components/typography";
import type { Concert } from "@/prisma/generated/client";

const upcomingConcert: Concert[] = [
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

export const ConcertsSection = ({ title, concerts }: { title: string; concerts: Concert[] }) => {
  return (
    <div className="flex flex-col gap-6">
      <Typography.h2>{title}</Typography.h2>
      <div className="flex flex-col gap-4">
        {concerts.map((concert) => (
          <div key={concert.id}>
            <Typography.h3>{concert.title}</Typography.h3>
            <Typography.body>{concert.description}</Typography.body>
          </div>
        ))}
      </div>
    </div>
  );
};

export default async function Concerts() {
  return (
    <div className="flex flex-col gap-12">
      <ConcertsSection title="Upcoming Concerts" concerts={upcomingConcert} />
      <ConcertsSection title="Past Concerts" concerts={pastConcert} />
    </div>
  );
}
