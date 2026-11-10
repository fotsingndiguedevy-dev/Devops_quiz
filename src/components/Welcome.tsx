"use client";
import { motion } from "framer-motion";

type WelcomeProps = {
  onStart: () => void;
};

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="min-h-screen w-full max-w-[100vw] flex flex-col items-center justify-center px-4 py-12 text-center overflow-hidden relative z-10">
      <div className="max-w-2xl w-full flex flex-col items-center">
        <div className="text-6xl mb-4">🎮</div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
          DevOps Quiz
        </h1>
        
        <p className="text-xl text-cyan-300 font-medium mb-8">
          Apprends les bases du DevOps en jouant ✨
        </p>

        <div className="space-y-4 text-slate-300 text-left bg-slate-800/40 rounded-2xl p-4 md:p-6 border border-slate-700/50 mb-8 w-full break-words">
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

        {/* LE BOUTON MAGIQUE POUR SAFARI */}
        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          style={{ background: 'linear-gradient(to right, #06b6d4, #22c55e)' }}
          className="w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg shadow-cyan-500/30 cursor-pointer relative z-50"
        >
          Commençons ! 🚀
        </motion.button>
      </div>
    </div>
  );
}
