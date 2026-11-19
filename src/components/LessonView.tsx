"use client";
import { motion } from "framer-motion";
import { Lesson } from "@/data/parts";

type LessonViewProps = { lesson: Lesson; moduleLogo: string; onStart: () => void; onBack: () => void };

export default function LessonView({ lesson, moduleLogo, onStart, onBack }: LessonViewProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <button onClick={onBack} className="self-start mb-6 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm mt-12">🏠 Accueil</button>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl w-full text-center">
        <div className="mb-6 flex justify-center">
          <img src={moduleLogo} alt="Logo" className="w-24 h-24 object-contain" />
        </div>
        <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-green-500 dark:from-cyan-400 dark:to-green-400 bg-clip-text text-transparent">{lesson.title}</h1>
        <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 mb-8 text-left mt-6 shadow-sm dark:shadow-none">
          <p className="text-slate-600 dark:text-slate-300 mb-4">{lesson.description}</p>
          <h2 className="font-bold text-slate-900 dark:text-white mb-2">🎯 Ton objectif DevOps</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Maîtriser ces concepts te permettra de comprendre comment les serveurs communiquent entre eux.</p>
          <h2 className="font-bold text-slate-900 dark:text-white mb-2">📜 Règles du jeu</h2>
          <ul className="space-y-1 text-slate-600 dark:text-slate-300 text-sm">
            <li>❤️ Tu as 5 cœurs.</li>
            <li>💔 Mauvaise réponse = -1 cœur.</li>
            <li>🔁 Les questions ratées reviennent à la fin.</li>
          </ul>
        </div>
        <motion.button onClick={onStart} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-cyan-500 to-green-500 shadow-lg cursor-pointer">Allons-y ! 🚀</motion.button>
      </motion.div>
    </div>
  );
}
