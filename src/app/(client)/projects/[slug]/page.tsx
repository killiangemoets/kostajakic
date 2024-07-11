import { Typography } from "@/components/typography";
import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import React from "react";

export const dynamicParams = false;

export async function generateMetadata({ params }: Readonly<{ params: { slug: string } }>) {
  const project = PROJECTS.find((project) => project.slug === params.slug);

  return {
    title: `${project?.title} | Kosta Jakic`,
    description: "Kosta Jakic's personal website.",
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

export default async function Projects({ params }: Readonly<{ params: { slug: string } }>) {
  const project = getProject(params.slug);
  if (!project) return <Typography.body>Project not found</Typography.body>;
  return (
    <div className="w-full sm:w-[50%] sm:min-w-[500px] space-y-8">
      <Typography.h3 className="border-b font-bold normal-case">{project.title}</Typography.h3>
      <div className="flex gap-4">
        <Typography.body className="font-medium">
          {project.description?.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Typography.body>
        <Image className="w-[25%] h-fit object-cover object-center" src={project.image} alt={project.title} priority />
      </div>
    </div>
  );
}
