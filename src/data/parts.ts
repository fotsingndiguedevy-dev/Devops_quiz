import { reseauLecon1, LessonQuestion } from "./lessons/reseau-lecon-1";
import { reseauLecon2 } from "./lessons/reseau-lecon-2";
import { reseauLecon3 } from "./lessons/reseau-lecon-3";
import { reseauLecon4 } from "./lessons/reseau-lecon-4";

export type Lesson = {
  id: string;
  title: string;
  description: string;
  questions: LessonQuestion[];
};

export type Module = {
  id: string;
  name: string;
  logo: string;
  color: string;
  tagline: string;
  lessons: Lesson[];
};

export type Part = {
  id: string;
  title: string;
  modules: Module[];
};

export const parts: Part[] = [
  {
    id: "partie-1",
    title: "PARTIE 1 — Bases",
    modules: [
      {
        id: "reseau",
        name: "Réseau",
        logo: "https://cdn.simpleicons.org/cisco",
        color: "from-cyan-400 to-teal-400",
        tagline: "Comprendre comment Internet parle",
        lessons: [
          {
            id: "reseau-lecon-1",
            title: "Leçon 1 — Introduction aux réseaux",
            description: "Découvre ce qu'est un réseau, les types (LAN, WAN) et les topologies.",
            questions: reseauLecon1,
          },
          {
            id: "reseau-lecon-2",
            title: "Leçon 2 — Modèle OSI et TCP/IP",
            description: "Apprends les 7 couches du modèle OSI et les 4 couches de TCP/IP.",
            questions: reseauLecon2,
          },
          {
            id: "reseau-lecon-3",
            title: "Leçon 3 — Équipements réseau",
            description: "Switch, routeur, firewall, load balancer : comprends leur rôle.",
            questions: reseauLecon3,
          },
          {
            id: "reseau-lecon-4",
            title: "Leçon 4 — MAC et Ethernet",
            description: "Découvre l'adresse physique (MAC) et le protocole ARP.",
            questions: reseauLecon4,
          }
          // Les prochaines leçons viendront ici
        ],
      },
      // Les autres modules viendront ici
    ],
  },
];

export function getLessonById(lessonId: string): Lesson | undefined {
  for (const part of parts) {
    for (const module of part.modules) {
      const lesson = module.lessons.find((l) => l.id === lessonId);
      if (lesson) return lesson;
    }
  }
  return undefined;
}
