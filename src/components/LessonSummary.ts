"use client";
import { motion } from "framer-motion";
import { Lesson } from "@/data/parts";

type LessonSummaryProps = {
  lesson: Lesson;
  moduleLogo: string;
  onReplay: () => void;
  onNext: () => void;
  onBackToMenu: () => void;
};

export default function LessonSummary({ lesson, moduleLogo, onReplay, onNext, onBackToMenu }: LessonSummaryProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-4">🎉</motion.div>
      
      <img src={moduleLogo} alt="Logo" className="w-16 h-16 object-contain mb-4 opacity-50" />

      <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
        Leçon validée !
      </h1>
      <p className="text-slate-300 mb-8">{lesson.title}</p>

      <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 mb-8 text-left max-w-lg w-full">
        <h2 className="font-bold text-white mb-3">🧠 Ce qu'il faut retenir :</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {lesson.description}
        </p>
        <p className="text-slate-400 text-sm mt-2">
          Tu as maintenant les bases nécessaires pour aborder la suite. Un vrai DevOps doit maîtriser ces concepts pour diagnostiquer et sécuriser ses infrastructures.
        </p>
      </div>

      <div className="flex flex-col gap-3 w-full max-w-lg">
        <button onClick={onNext} className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-green-500 hover:scale-105 transition-transform cursor-pointer">
          Passer à la suite ▶️
        </button>
        <div className="flex gap-3">
          <button onClick={onReplay} className="flex-1 py-3 rounded-xl font-bold text-slate-300 bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-colors cursor-pointer">
            🔁 Rejouer
          </button>
          <button onClick={onBackToMenu} className="flex-1 py-3 rounded-xl font-bold text-slate-300 bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-colors cursor-pointer">
            🏠 Menu
          </button>
        </div>
      </div>
    </div>
  );
}
