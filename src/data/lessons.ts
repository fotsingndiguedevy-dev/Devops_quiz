import { questions, Question } from "./questions";

export type Lesson = {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  emoji: string;
  order: number;
};

// ============================================================
// LEÇONS — 1 seule par module pour le MVP (les pré-requis)
// ============================================================

export const lessons: Lesson[] = [
  {
    id: "reseau-lecon-1",
    moduleId: "reseau",
    title: "Leçon 1 — Les pré-requis",
    description:
      "Découvre les fondations du réseau : adresses IP, DNS, HTTP et le rôle d'un serveur.",
    emoji: "🌐",
    order: 1,
  },
  {
    id: "bash-lecon-1",
    moduleId: "bash",
    title: "Leçon 1 — Les pré-requis",
    description:
      "Maîtrise les commandes de base du terminal : naviguer, créer, gérer tes fichiers.",
    emoji: "💻",
    order: 1,
  },
  {
    id: "python-lecon-1",
    moduleId: "python",
    title: "Leçon 1 — Les pré-requis",
    description:
      "Pose les bases de Python : affichage, conditions, boucles et fonctions.",
    emoji: "🐍",
    order: 1,
  },
  {
    id: "git-lecon-1",
    moduleId: "git",
    title: "Leçon 1 — Les pré-requis",
    description:
      "Apprends à versionner ton code : init, commit, log, branches.",
    emoji: "🌿",
    order: 1,
  },
];

// ============================================================
// HELPERS
// ============================================================

/** Récupère toutes les leçons d'un module, triées par ordre */
export function getLessonsByModule(moduleId: string): Lesson[] {
  return lessons
    .filter((l) => l.moduleId === moduleId)
    .sort((a, b) => a.order - b.order);
}

/** Récupère les questions d'une leçon (filtrées par moduleId pour le MVP) */
export function getLessonQuestions(lessonId: string): Question[] {
  const lesson = lessons.find((l) => l.id === lessonId);
  if (!lesson) return [];
  return questions.filter((q) => q.moduleId === lesson.moduleId);
}
