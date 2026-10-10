"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { modules, Module } from "@/data/modules";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelectModule: (module: Module) => void;
  selectedModuleId?: string;
};

export default function Sidebar({
  isOpen,
  onClose,
  onSelectModule,
  selectedModuleId,
}: SidebarProps) {
  const [partieOuverte, setPartieOuverte] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay sombre cliquable */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Sidebar glissante */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed top-0 left-0 h-screen w-1/2 bg-slate-900/85 backdrop-blur-xl border-r border-slate-700 z-50 p-4 overflow-y-auto"
          >
            {/* En-tête */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                DevOps Quiz
              </h1>
              <motion.button
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
                onClick={onClose}
                className="text-slate-400 hover:text-white text-xl cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-800"
              >
                ✕
              </motion.button>
            </div>

            {/* Bouton PARTIE 1 */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setPartieOuverte(!partieOuverte)}
              className="w-full flex justify-between items-center px-3 py-2 rounded-lg bg-slate-800/60 text-left text-sm font-semibold text-cyan-300 hover:bg-slate-800 mb-2 cursor-pointer"
            >
              <span>📘 PARTIE 1 — Bases</span>
              <motion.span
                animate={{ rotate: partieOuverte ? 0 : -90 }}
                transition={{ duration: 0.2 }}
              >
                ▾
              </motion.span>
            </motion.button>

            {/* Liste des modules */}
            <AnimatePresence initial={false}>
              {partieOuverte && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-1 ml-2 overflow-hidden"
                >
                  {modules.map((m, index) => {
                    const isSelected = selectedModuleId === m.id;
                    return (
                      <motion.li
                        key={m.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.06 }}
                      >
                        <motion.button
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => onSelectModule(m)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? "bg-gradient-to-r from-cyan-500/30 to-green-500/30 text-white border-l-4 border-cyan-400 pl-2"
                              : "text-slate-300 hover:bg-slate-800/60 border-l-4 border-transparent"
                          }`}
                        >
                          <span>
                            <span className="mr-2">{m.emoji}</span>
                            {m.name}
                          </span>
                          {isSelected && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="text-cyan-400 text-xs"
                            >
                              ●
                            </motion.span>
                          )}
                        </motion.button>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>

            {/* Pied */}
            <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-500">
              🚧 D'autres parties arrivent bientôt…
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
