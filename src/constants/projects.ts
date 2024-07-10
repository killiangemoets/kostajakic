import project1 from "@/assets/images/projects/project_1.webp";
import project2 from "@/assets/images/projects/project_2.webp";
import project3 from "@/assets/images/projects/project_3.webp";
import project4 from "@/assets/images/projects/project_4.webp";
import project5 from "@/assets/images/projects/project_5.webp";
import project6 from "@/assets/images/projects/project_6.webp";
import type { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
  {
    title: "Moris Rackmanovsky Project",
    slug: "moris-rackmanovsky",
    image: project1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur officiis provident maiores repellendus id iusto doloremque accusamus animi culpa est, quibusdam natus adipisci saepe rem amet perspiciatis fugit eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem ad numquam possimus quasi culpa sit non libero quo maiores eius qui, cumque harum fugit dolor labore voluptas repellat velit.",
  },
  {
    title: "Mozart l'Opera Rock Project",
    slug: "mozart-opera-rock",
    image: project2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur officiis provident maiores repellendus id iusto doloremque accusamus animi culpa est, quibusdam natus adipisci saepe rem amet perspiciatis fugit eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem ad numquam possimus quasi culpa sit non libero quo maiores eius qui, cumque harum fugit dolor labore voluptas repellat velit.",
  },
  {
    title: "Les Misérables Project",
    slug: "les-miserables",
    image: project3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur officiis provident maiores repellendus id iusto doloremque accusamus animi culpa est, quibusdam natus adipisci saepe rem amet perspiciatis fugit eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem ad numquam possimus quasi culpa sit non libero quo maiores eius qui, cumque harum fugit dolor labore voluptas repellat velit.",
  },
  {
    title: "The Phantom of the Opera",
    slug: "phantom-opera",
    image: project4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur officiis provident maiores repellendus id iusto doloremque accusamus animi culpa est, quibusdam natus adipisci saepe rem amet perspiciatis fugit eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem ad numquam possimus quasi culpa sit non libero quo maiores eius qui, cumque harum fugit dolor labore voluptas repellat velit.",
  },
  {
    title: "The Beatles Project",
    slug: "beatles",
    image: project5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur officiis provident maiores repellendus id iusto doloremque accusamus animi culpa est, quibusdam natus adipisci saepe rem amet perspiciatis fugit eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem ad numquam possimus quasi culpa sit non libero quo maiores eius qui, cumque harum fugit dolor labore voluptas repellat velit.",
  },
  {
    title: "The Rolling Stones Project",
    slug: "rolling-stones",
    image: project6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur officiis provident maiores repellendus id iusto doloremque accusamus animi culpa est, quibusdam natus adipisci saepe rem amet perspiciatis fugit eum. Lorem ipsum dolor sit amet consectetur adipisicing",
  },
] as const;
