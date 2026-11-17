"use client";
import { motion } from "framer-motion";

type WelcomeProps = {
  onStart: () => void;
};

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="min-h-screen w-full max-w-[100vw] flex flex-col items-center justify-center px-4 py-12 text-center overflow-hidden relative">
      <div className="max-w-3xl w-full flex flex-col items-center">
        
        {/* LOGO ROND AVEC BORDURE NÉON */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mb-6"
        >
          <img 
            src="/logo.png" 
            alt="Logo DevOps Quiz" 
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)] object-cover bg-slate-800"
          />
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
          DevOps Quiz
        </h1>
        
        <p className="text-xl text-cyan-300 font-medium mb-8">
          Apprends les bases du DevOps en jouant ✨
        </p>

        {/* COMMENT ÇA MARCHE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full text-left">
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4">
            <h3 className="text-cyan-300 font-bold mb-2">1. Choisis un module 📚</h3>
            <p className="text-sm text-slate-300">Réseau, Bash, Shell, Python ou Git. Commence par les bases.</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4">
            <h3 className="text-cyan-300 font-bold mb-2">2. Réponds aux questions 🎯</h3>
            <p className="text-sm text-slate-300">5 cœurs à protéger. Chaque erreur te fait perdre un cœur.</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4">
            <h3 className="text-cyan-300 font-bold mb-2">3. Débloque la suite 🔓</h3>
            <p className="text-sm text-slate-300">Valide tes leçons pour passer à la suivante. Petit à petit, l'oiseau fait son nid !</p>
          </div>
        </div>

        {/* DESCRIPTION ET SAUVEGARDE */}
        <div className="space-y-4 text-slate-300 text-left bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50 mb-8 w-full break-words">
          <p>
            🚀 <strong className="text-white">DevOps Quiz</strong> est une plateforme interactive pour tester tes connaissances.
            Au total, ce sont <strong>47 leçons</strong> et plus de <strong>470 questions</strong> qui t'attendent pour maîtriser les pré-requis DevOps.
          </p>
          <p className="text-sm text-slate-400 border-l-2 border-cyan-500 pl-4 mt-4">
            💾 <em>Note : Ta progression est sauvegardée automatiquement sur cet appareil (localStorage). Si tu changes de navigateur ou vides ton cache, tu devras recommencer.</em>
          </p>
        </div>

        {/* BOUTON COMMENCER */}
        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(34, 211, 238, 0.8), 0 0 60px rgba(34, 197, 94, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="w-full md:w-auto px-10 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-cyan-500 to-green-500 shadow-lg shadow-cyan-500/30 cursor-pointer"
        >
          Commençons ! 🚀
        </motion.button>
      </div>
    </div>
  );
}
