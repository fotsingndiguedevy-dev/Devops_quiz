"use client";
import { motion } from "framer-motion";

type FloatingMenuProps = {
  onClick: () => void;
};

export default function FloatingMenu({ onClick }: FloatingMenuProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 25px rgba(34, 211, 238, 0.7)",
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Ouvrir le menu"
      className="fixed top-4 left-4 z-30 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-md border border-cyan-500/40 text-white text-xl flex items-center justify-center cursor-pointer shadow-lg"
    >
      ☰
    </motion.button>
  );
}
