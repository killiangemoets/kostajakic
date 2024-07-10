import { Typography } from "@/components/typography";
import { PROJECTS } from "@/constants/projects";
import type { Project } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link className="space-y-2" href={`/projects/${project.slug}`}>
      <div className="relative w-full pb-[100%]">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          src={project.image}
          alt={project.title}
          priority
        />
      </div>
      <Typography.note className="border-b">{project.title}</Typography.note>
    </Link>
  );
};

export default async function Projects() {
  return (
    <div className="w-full sm:w-[50%] sm:min-w-[500px] space-y-8">
      <Typography.h3 className="border-b font-bold normal-case">Projects</Typography.h3>
      <div className="grid grid-cols-3 w-full gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
