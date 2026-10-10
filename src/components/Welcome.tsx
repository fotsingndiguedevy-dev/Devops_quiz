"use client";
import { motion } from "framer-motion";

type WelcomeProps = {
  onStart: () => void;
};

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
      <div className="max-w-2xl">
        <div className="text-6xl mb-4">🎮</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
          DevOps Quiz
        </h1>
        <p className="text-xl text-cyan-300 font-medium mb-8">
          Apprends les bases du DevOps en jouant ✨
        </p>

        <div className="space-y-4 text-slate-300 text-left bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50 mb-8">
          <p>
            🚀 <strong className="text-white">DevOps Quiz</strong> est un jeu
            interactif qui te fait découvrir le monde du DevOps,{" "}
            <em>sans prise de tête et avec le sourire</em>.
          </p>
          <p>
            🎯 Tu vas apprendre le{" "}
            <strong className="text-white">Réseau</strong>,{" "}
            <strong className="text-white">Bash</strong>,{" "}
            <strong className="text-white">Python</strong> et{" "}
            <strong className="text-white">Git</strong> à travers des questions
            à choix multiples, des corrections de code et des définitions.
          </p>
          <p>
            💚 Chaque bonne réponse remplit ta barre d'énergie. Chaque erreur
            te fait apprendre. Et comme dit le proverbe :{" "}
            <em className="text-cyan-300">
              « petit à petit, l'oiseau fait son nid »
            </em>{" "}
            🐦
          </p>
          <p className="text-slate-400 text-sm">
            🏆 Pas de note, pas de pression. Juste toi, ton cerveau, et le
            plaisir d'apprendre.
          </p>
        </div>

        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="px-8 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-cyan-500 to-green-500 shadow-lg shadow-cyan-500/30 cursor-pointer"
        >
          Commençons ! 🚀
        </motion.button>
      </div>
    </div>
  );
}
