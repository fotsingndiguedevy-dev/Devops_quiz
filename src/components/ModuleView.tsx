"use client";
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
      <button
        onClick={onBack}
        className="self-start mb-6 text-slate-400 hover:text-white text-sm"
      >
        ← Retour
      </button>

      <div className="max-w-2xl w-full text-center">
        <div className="text-8xl mb-6">{module.emoji}</div>
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

        <button
          onClick={onStart}
          className="px-8 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-400 hover:to-green-400 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
        >
          Démarrer le jeu ▶️
        </button>
      </div>
    </div>
  );
}
