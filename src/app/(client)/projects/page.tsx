import { Typography } from "@/components/typography";
import { PROJECTS } from "@/content/projects";
import type { Project } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link className="space-y-2 group" href={`/projects/${project.slug}`}>
      <div className="relative w-full pb-[100%]">
        <figure className="absolute top-0 left-0 overflow-hidden w-full h-full">
          <Image
            className="w-full h-full object-cover object-center group-hover:scale-110 duration-300"
            src={project.image}
            alt={project.title}
            priority
          />
        </figure>
      </div>

      <Typography.note className="border-b">{project.title}</Typography.note>
    </Link>
  );
};

export default async function Projects() {
  return (
    <div className="w-full sm:w-[50%] sm:min-w-[500px] space-y-8">
      <Typography.h3 className="border-b font-bold normal-case">Projects</Typography.h3>
      <div className="grid grid-cols-2 xs:grid-cols-3 w-full gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
