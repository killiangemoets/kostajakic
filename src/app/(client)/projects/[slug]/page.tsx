import { Typography } from "@/components/typography";
import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import React from "react";

const project = PROJECTS[1];

export default async function Projects() {
  return (
    <div className="w-full sm:w-[50%] sm:min-w-[500px] space-y-8">
      <Typography.h3 className="border-b font-bold normal-case">Project</Typography.h3>
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
