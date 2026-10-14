"use client";
import { motion } from "framer-motion";
import { Module } from "@/data/modules";

type QuizEndProps = {
  module: Module;
  finalProgress: number;
  starsEarned: number;
  totalQuestions: number;
  onReplay: () => void;
  onBackHome: () => void;
};

export default function QuizEnd({
  module,
  finalProgress,
  totalQuestions,
  onReplay,
  onBackHome,
}: QuizEndProps) {
  const getTitle = () => {
    if (finalProgress >= 90) return "🏆 Champion du DevOps !";
    if (finalProgress >= 70) return "🔥 Tu gères grave !";
    if (finalProgress >= 50) return "💪 Bien joué !";
    if (finalProgress >= 30) return "😅 Pas mal, continue !";
    return "🐢 Doucement mais sûrement !";
  };

  const getMessage = () => {
    if (finalProgress >= 90)
      return "Tu es chaud comme le piment grillé 🌶️🔥 Le Cameroun est fier de toi !";
    if (finalProgress >= 70)
      return "Tu maîtrises déjà bien. Encore un petit effort et tu deviens un boss 💼";
    if (finalProgress >= 50)
      return "C'est ça le flow ! Tu progresses bien, mola mola 😎";
    if (finalProgress >= 30)
      return "Tu es sur la bonne voie. Rejoue pour consolider tes acquis 💡";
    return "Pas de panique ! Même les grands ont commencé quelque part. Réessaie 🌱";
  };

  const getStars = () => {
    if (finalProgress >= 90) return 5;
    if (finalProgress >= 70) return 4;
    if (finalProgress >= 50) return 3;
    if (finalProgress >= 30) return 2;
    return 1;
  };

  const earnedStars = getStars();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Logo du module */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="mb-4"
      >
        <img
          src={module.logo}
          alt={module.name}
          className="w-24 h-24 object-contain mx-auto"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-green-400 to-emerald-400 bg-clip-text text-transparent"
      >
        {getTitle()}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-slate-300 max-w-md mb-8"
      >
        {getMessage()}
      </motion.p>

      {/* Étoiles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex gap-2 mb-8"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.8 + i * 0.15,
              type: "spring",
              stiffness: 300,
            }}
            className={`text-4xl ${
              i < earnedStars ? "" : "opacity-20 grayscale"
            }`}
          >
            ⭐
          </motion.span>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="grid grid-cols-2 gap-4 mb-10 w-full max-w-md"
      >
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
          <p className="text-slate-400 text-xs mb-1">Énergie finale</p>
          <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            {Math.round(finalProgress)}%
          </p>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
          <p className="text-slate-400 text-xs mb-1">Questions</p>
          <p className="text-2xl font-bold text-white">{totalQuestions}</p>
        </div>
      </motion.div>

      {/* Boutons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
      >
        <motion.button
          onClick={onReplay}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 25px rgba(34, 211, 238, 0.7)",
          }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-green-500 shadow-lg shadow-cyan-500/30 cursor-pointer"
        >
          🔁 Rejouer
        </motion.button>

        <motion.button
          onClick={onBackHome}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 25px rgba(34, 211, 238, 0.5)",
          }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 py-3 rounded-xl font-bold text-slate-300 bg-slate-800 border border-slate-700 hover:border-cyan-500/50 cursor-pointer"
        >
          🏠 Accueil
        </motion.button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="text-slate-500 text-xs mt-8 italic"
      >
        « Petit à petit, l'oiseau fait son nid » 🐦
      </motion.p>
    </div>
  );
}
