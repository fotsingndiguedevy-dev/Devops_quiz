"use client";
import { motion } from "framer-motion";

type WelcomeProps = { onStart: () => void };

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="min-h-screen w-full max-w-[100vw] flex flex-col items-center justify-center px-4 py-12 text-center overflow-hidden relative">
      <div className="max-w-3xl w-full flex flex-col items-center">
        <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 200, damping: 15 }} className="mb-6">
          <img src="/logo.png" alt="Logo DevOps Quiz" className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)] object-cover bg-slate-200 dark:bg-slate-800" />
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-green-500 to-emerald-500 dark:from-cyan-400 dark:via-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
          DevOps Quiz
        </h1>
        
        <p className="text-xl text-cyan-600 dark:text-cyan-300 font-medium mb-8">
          Apprends les bases du DevOps en jouant ✨
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full text-left">
          <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-xl p-4 shadow-sm dark:shadow-none">
            <h3 className="text-cyan-600 dark:text-cyan-300 font-bold mb-2">1. Choisis un module 📚</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Réseau, Bash, Shell, Python ou Git. Commence par les bases.</p>
          </div>
          <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-xl p-4 shadow-sm dark:shadow-none">
            <h3 className="text-cyan-600 dark:text-cyan-300 font-bold mb-2">2. Réponds aux questions 🎯</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">5 cœurs à protéger. Chaque erreur te fait perdre un cœur.</p>
          </div>
          <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-xl p-4 shadow-sm dark:shadow-none">
            <h3 className="text-cyan-600 dark:text-cyan-300 font-bold mb-2">3. Débloque la suite 🔓</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Valide tes leçons pour passer à la suivante. Petit à petit, l'oiseau fait son nid !</p>
          </div>
        </div>

        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-left bg-white dark:bg-slate-800/40 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 mb-8 w-full break-words shadow-sm dark:shadow-none">
          <p>🚀 <strong className="text-slate-900 dark:text-white">DevOps Quiz</strong> est une plateforme interactive pour tester tes connaissances. Au total, ce sont <strong>47 leçons</strong> et plus de <strong>470 questions</strong>.</p>
          <p className="text-sm text-slate-500 dark:text-slate-400 border-l-2 border-cyan-500 pl-4 mt-4">
            💾 <em>Note : Ta progression est sauvegardée automatiquement sur cet appareil (localStorage).</em>
          </p>
        </div>

        <motion.button onClick={onStart} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="w-full md:w-auto px-10 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-cyan-500 to-green-500 shadow-lg shadow-cyan-500/30 cursor-pointer">
          Commençons ! 🚀
        </motion.button>
      </div>
    </div>
  );
}
