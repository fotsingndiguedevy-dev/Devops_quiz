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
          {/* Overlay cliquable pour fermer */}
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
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-screen w-1/2 bg-slate-900/80 backdrop-blur-xl border-r border-slate-700 z-50 p-4 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                DevOps Quiz
              </h1>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            <button
              onClick={() => setPartieOuverte(!partieOuverte)}
              className="w-full flex justify-between items-center px-3 py-2 rounded-lg bg-slate-800/60 text-left text-sm font-semibold text-cyan-300 hover:bg-slate-800 mb-2"
            >
              <span>📘 PARTIE 1 — Bases</span>
              <span>{partieOuverte ? "▾" : "▸"}</span>
            </button>

            {partieOuverte && (
              <ul className="space-y-1 ml-2">
                {modules.map((m) => (
                  <li key={m.id}>
                    <button
                      onClick={() => onSelectModule(m)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                        selectedModuleId === m.id
                          ? "bg-gradient-to-r from-cyan-500/30 to-green-500/30 text-white"
                          : "text-slate-300 hover:bg-slate-800/60"
                      }`}
                    >
                      <span className="mr-2">{m.emoji}</span>
                      {m.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-500">
              🚧 D'autres parties arrivent bientôt…
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
