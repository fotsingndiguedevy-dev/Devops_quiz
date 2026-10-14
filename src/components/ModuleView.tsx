"use client";
import { motion } from "framer-motion";
import { Module } from "@/data/modules";

type ModuleViewProps = {
  module: Module;
  onStart: () => void;
  onBack: () => void;
};

export default function ModuleView({
  module,
  onStart,
  onBack,
}: ModuleViewProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <motion.button
        onClick={onBack}
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.95 }}
        className="self-start mb-6 text-slate-400 hover:text-white text-sm cursor-pointer"
      >
        ← Retour
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          className="mb-6 flex justify-center"
        >
          <img
            src={module.logo}
            alt={module.name}
            className="w-32 h-32 object-contain"
          />
        </motion.div>

        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
          {module.name}
        </h1>
        <p className="text-cyan-300 mb-8">{module.tagline}</p>

        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 mb-6 text-left">
          <p className="text-slate-300 mb-6">{module.description}</p>

          <h2 className="font-bold text-white mb-2">📜 Règles du jeu</h2>
          <ul className="space-y-1 text-slate-300 text-sm mb-6">
            {module.rules.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>

          <h2 className="font-bold text-white mb-2">🎯 Objectifs</h2>
          <ul className="space-y-1 text-slate-300 text-sm">
            {module.objectives.map((o, i) => (
              <li key={i}>• {o}</li>
            ))}
          </ul>
        </div>

        <motion.button
          onClick={onStart}
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 0 35px rgba(34, 211, 238, 0.8), 0 0 60px rgba(34, 197, 94, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="px-8 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-cyan-500 to-green-500 shadow-lg shadow-cyan-500/30 cursor-pointer"
        >
          Démarrer le jeu ▶️
        </motion.button>
      </motion.div>
    </div>
  );
}
