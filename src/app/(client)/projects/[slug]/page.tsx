import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/content/projects";
import { ArrowBigLeft } from "lucide-react";
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
    <div className="w-full sm:w-[66%] sm:min-w-[500px] space-y-0 flex flex-col sm:flex-row gap-4">
      <Button href="/projects" variant="outline" size="icon" className="h-fit w-fit rounded-full border-[1.5px] px-1 py-1">
        <ArrowBigLeft className="h-6 w-6 stroke-[1.5px]" />
        <span className="sr-only">Back</span>
      </Button>
      <div className="space-y-8">
        <Typography.h2 className="font-bold border-b normal-case">{project.title}</Typography.h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[68%_32%] lg:gap-1 w-full">
          <Typography.body className="font-medium lg:mr-4">
            {project.description?.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Typography.body>
          <div className="row-start-1 lg:row-auto w-full flex justify-center">
            <Image
              className="max-h-[400px] lg:max-h-none w-fit h-fit object-cover object-center"
              src={project.image}
              alt={project.title}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
