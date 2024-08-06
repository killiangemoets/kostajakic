import project1 from "@/assets/images/projects/project_1.webp";
import project2 from "@/assets/images/projects/project_2.webp";
import type { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
  {
    title: "Collaboration with Simon Gronowski: Life without music is impossible",
    slug: "life-without-music-is-impossible",
    image: project1,
    description:
      'A creative indisciplinary and intergenerational project on the topic of memory, transmission and peace, to oppose the rise of the extreme right with jazz and classical music concerts, other forms of musical expression, exhibition, conferences, screening of 2 documentaries with still living participants of the Second World War and school sessions. The platform was conceived as a continuation of the inter-generational encounter between Simon Gronowski, doctor of law and jazz music lover (92), who jumped from the train at the persuasion of his mother to save himself from Auschwitz, unlike the rest of his family, and Kosta Jakić(27), a pianist of Yugoslav origin from Belgium who studies the role of music in extreme conditions (in prisons, camps, etc.). Ivan Put, a Belgian videographer and photographer, made a film in cooperation with the platform for aesthetic education of all PhDs In One Night, Laboratory of Radical Peace and Orangeries de Bierbais entitled "Life without music is impossible" according to a quote by Simon Gronowski, who is a lifelong memory of a sister , young pianist who died in Auschwitz, and in memory of her he continued to love and study jazz music as a piano amateur. Film englobe series of concerts that have already been held in the Dossin camp and Breendonk in Belgium by Simon (jazz) and Kosta ( classical music) and conversations between 2 pianists, amateur and professional one. The projection of an intergenerational film is planned for 2025 as a place of conversation with all interested participants on the topic of the transmission of memories and the role of music in our lives (music has been excluded from primary education for about 20 years from school programs in Europe).',
  },
  {
    title: "Belgian Doctor Symphonny Orchestra",
    slug: "belgian-doctor-symphonny-orchestra",
    image: project2,
    description:
      'The BDSO was born from the desire and initiative of Lina Berada and Kosta Jakic to combine two fields: classical music and medicine. One heals the body, and the other heals the soul. Theodor Billroth, one of the founding fathers of modern abdominal surgery and a close friend of Brahms, once said:\n "It is one of the superficialities of our time to see science and art as opposites; imagination is the mother of both."\n\nThis philosophy inspired us to organise our first concert at the prestigious Institut Bordet, an internationally renowned oncology centre, which welcomed us with open arms.\n This concert is a unique opportunity to raise public awareness of the importance of art and medicine as complementary fields.\n\nBy showcasing doctors and medical students who also cultivate their musical talents, this event helps break stereotypes and demonstrates that healthcare professionals are multifaceted individuals. It reinforces the idea that artistic creativity and medical compassion are two essential qualities that can be nurtured in parallel for overall well-being.',
  },
] as const;
