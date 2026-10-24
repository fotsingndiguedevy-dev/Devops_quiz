import { reseauLecon1, LessonQuestion } from "./lessons/reseau-lecon-1";

// ============================================================
// TYPES DE DONNÉES POUR LA NOUVELLE ARCHITECTURE
// ============================================================

export type Lesson = {
  id: string;
  title: string;
  description: string; // S'affiche au survol dans la sidebar
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

// ============================================================
// STRUCTURE GLOBALE DU PROJET
// ============================================================

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
          // Les autres leçons du réseau viendront ici plus tard
        ],
      },
      // Les autres modules (Bash, Shell, Python, Git) viendront ici plus tard
    ],
  },
  // Les autres parties (Docker, CI/CD...) viendront ici plus tard
];

// ============================================================
// FONCTIONS UTILITAIRES
// ============================================================

/** Récupère une leçon spécifique par son ID */
export function getLessonById(lessonId: string): Lesson | undefined {
  for (const part of parts) {
    for (const module of part.modules) {
      const lesson = module.lessons.find((l) => l.id === lessonId);
      if (lesson) return lesson;
    }
  }
  return undefined;
}
