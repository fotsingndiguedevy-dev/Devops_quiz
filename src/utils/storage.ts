import { parts, Lesson } from "@/data/parts";

const STORAGE_KEY = "devops-quiz-progress";

/** Récupère la liste des IDs de leçons validées */
export function getCompletedLessons(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

/** Sauvegarde un nouvel ID de leçon validée */
export function saveCompletedLesson(lessonId: string) {
  if (typeof window === "undefined") return;
  const completed = getCompletedLessons();
  if (!completed.includes(lessonId)) {
    completed.push(lessonId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  }
}

/** Renvoie la liste à plat de toutes les leçons dans l'ordre chronologique */
export function getAllLessonsFlat(): Lesson[] {
  const all: Lesson[] = [];
  for (const part of parts) {
    for (const mod of part.modules) {
      for (const lesson of mod.lessons) {
        all.push(lesson);
      }
    }
  }
  return all;
}

/** Vérifie si une leçon est débloquée */
export function isLessonUnlocked(lessonId: string, completedLessons: string[]): boolean {
  // Si elle est déjà validée, elle est forcément débloquée
  if (completedLessons.includes(lessonId)) return true;

  const all = getAllLessonsFlat();
  const index = all.findIndex((l) => l.id === lessonId);

  // La toute première leçon est toujours débloquée
  if (index === 0) return true;

  // Pour les autres, il faut que la leçon PRÉCÉDENTE soit validée
  const previousLesson = all[index - 1];
  return completedLessons.includes(previousLesson.id);
}
