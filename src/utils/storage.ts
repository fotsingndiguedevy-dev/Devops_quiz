import { parts, Lesson } from "@/data/parts";

const STORAGE_KEY = "devops-quiz-progress";
const WRONG_QUESTIONS_KEY = "devops-quiz-wrong-questions";

// --- LECONS COMPLETEES ---
export function getCompletedLessons(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveCompletedLesson(lessonId: string) {
  if (typeof window === "undefined") return;
  const completed = getCompletedLessons();
  if (!completed.includes(lessonId)) {
    completed.push(lessonId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  }
}

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

export function isLessonUnlocked(lessonId: string, completedLessons: string[]): boolean {
  if (completedLessons.includes(lessonId)) return true;
  const all = getAllLessonsFlat();
  const index = all.findIndex((l) => l.id === lessonId);
  if (index === 0) return true;
  const previousLesson = all[index - 1];
  return completedLessons.includes(previousLesson.id);
}

// --- QUESTIONS RATEES ---
export function getWrongQuestions(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(WRONG_QUESTIONS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveWrongQuestion(questionId: string) {
  if (typeof window === "undefined") return;
  const wrong = getWrongQuestions();
  if (!wrong.includes(questionId)) {
    wrong.push(questionId);
    localStorage.setItem(WRONG_QUESTIONS_KEY, JSON.stringify(wrong));
  }
}

export function removeWrongQuestion(questionId: string) {
  if (typeof window === "undefined") return;
  const wrong = getWrongQuestions();
  const newWrong = wrong.filter(id => id !== questionId);
  localStorage.setItem(WRONG_QUESTIONS_KEY, JSON.stringify(newWrong));
}

export function clearWrongQuestions() {
  if (typeof window === "undefined") return;
  localStorage.setItem(WRONG_QUESTIONS_KEY, JSON.stringify([]));
}
