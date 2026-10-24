"use client";
import { Lesson } from "@/data/parts";

type QuizProps = {
  lesson: Lesson;
  onFinish: (progress: number, totalQuestions: number) => void;
  onBackToMenu: () => void;
};

export default function Quiz({ lesson, onFinish, onBackToMenu }: QuizProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Moteur du quiz en construction 🚧</h2>
      <p className="text-slate-400 mb-8">Prêt à jouer à la leçon : {lesson.title}</p>
      
      <div className="flex gap-4">
        <button onClick={onBackToMenu} className="px-6 py-3 bg-slate-800 rounded-lg">Accueil</button>
        <button onClick={() => onFinish(100, 10)} className="px-6 py-3 bg-green-500 rounded-lg">Simuler Fin</button>
      </div>
    </div>
  );
}
