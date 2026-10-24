"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { parts, Lesson } from "@/data/parts";
import { isLessonUnlocked } from "@/utils/storage";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelectLesson: (lesson: Lesson) => void;
  selectedLessonId?: string;
  completedLessons: string[]; // NOUVEAU : Liste des leçons validées
};

export default function Sidebar({ 
  isOpen, 
  onClose, 
  onSelectLesson, 
  selectedLessonId, 
  completedLessons 
}: SidebarProps) {
  const [openParts, setOpenParts] = useState<Record<string, boolean>>({});
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({});
  const [hoveredLesson, setHoveredLesson] = useState<string | null>(null);
  const [aProposOuvert, setAProposOuvert] = useState(false);

  const togglePart = (id: string) => setOpenParts(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleModule = (id: string) => setOpenModules(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} className="fixed inset-0 bg-black/50 z-40"
          />
          <motion.aside
            initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed top-0 left-0 h-screen w-1/2 md:w-1/3 bg-slate-900/95 backdrop-blur-xl border-r border-slate-700 z-50 p-4 overflow-y-auto flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                DevOps Quiz
              </h1>
              <button onClick={onClose} className="text-slate-400 hover:text-white text-xl w-8 h-8 rounded-full hover:bg-slate-800">✕</button>
            </div>

            <div className="flex-1">
              {parts.map(part => (
                <div key={part.id} className="mb-4">
                  <button
                    onClick={() => togglePart(part.id)}
                    className="w-full flex justify-between items-center px-3 py-2 rounded-lg bg-slate-800/60 text-left text-sm font-semibold text-cyan-300 hover:bg-slate-800 mb-2"
                  >
                    <span>📘 {part.title}</span>
                    <motion.span animate={{ rotate: openParts[part.id] ? 0 : -90 }}>▾</motion.span>
                  </button>

                  <AnimatePresence>
                    {openParts[part.id] && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden ml-2 space-y-1">
                        {part.modules.map(mod => (
                          <div key={mod.id} className="mb-2">
                            <button
                              onClick={() => toggleModule(mod.id)}
                              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800/80"
                            >
                              <span className="flex items-center gap-2">
                                <img src={mod.logo} alt={mod.name} className="w-4 h-4 object-contain" />
                                {mod.name}
                              </span>
                              <motion.span animate={{ rotate: openModules[mod.id] ? 0 : -90 }}>▾</motion.span>
                            </button>

                            <AnimatePresence>
                              {openModules[mod.id] && (
                                <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden ml-4 mt-1 space-y-1 border-l border-slate-700 pl-2">
                                  {mod.lessons.map(lesson => {
                                    const isCompleted = completedLessons.includes(lesson.id);
                                    const isUnlocked = isLessonUnlocked(lesson.id, completedLessons);
                                    
                                    return (
                                      <li key={lesson.id} className="relative">
                                        <button
                                          onClick={() => isUnlocked && onSelectLesson(lesson)}
                                          onMouseEnter={() => setHoveredLesson(lesson.id)}
                                          onMouseLeave={() => setHoveredLesson(null)}
                                          disabled={!isUnlocked}
                                          className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex justify-between items-center ${
                                            selectedLessonId === lesson.id
                                              ? "bg-gradient-to-r from-cyan-500/30 to-green-500/30 text-white border-l-2 border-cyan-400"
                                              : isUnlocked
                                                ? "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200 cursor-pointer"
                                                : "text-slate-600 cursor-not-allowed opacity-60"
                                          }`}
                                        >
                                          <span>{lesson.title}</span>
                                          <span>{isCompleted ? "✅" : isUnlocked ? "▶️" : "🔒"}</span>
                                        </button>
                                        
                                        {hoveredLesson === lesson.id && isUnlocked && !isCompleted && (
                                          <motion.div 
                                            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                                            className="absolute left-full top-0 ml-2 w-48 p-2 bg-slate-800 text-xs text-slate-200 rounded shadow-lg z-50 border border-slate-600 pointer-events-none"
                                          >
                                            {lesson.description}
                                          </motion.div>
                                        )}
                                      </li>
                                    );
                                  })}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Section À propos */}
            <div className="mt-8 pt-4 border-t border-slate-800">
              <button
                onClick={() => setAProposOuvert(!aProposOuvert)}
                className="w-full flex justify-between items-center px-3 py-2 rounded-lg bg-slate-800/60 text-left text-sm font-semibold text-cyan-300 hover:bg-slate-800 mb-2"
              >
                <span>ℹ️ À propos</span>
                <motion.span animate={{ rotate: aProposOuvert ? 0 : -90 }}>▾</motion.span>
              </button>
              <AnimatePresence>
                {aProposOuvert && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="text-xs text-slate-400 space-y-2 px-3 py-2 bg-slate-800/30 rounded-lg border border-slate-700/50">
                      <p className="text-slate-300 font-medium">🚀 Pourquoi DevOps Quiz ?</p>
                      <p>Né d'un constat simple : apprendre le DevOps peut être intimidant. Ce jeu rend l'apprentissage accessible et sans pression.</p>
                      <a href="https://portfolio-fotsingndiguedevy-dev.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 block pt-2">🌐 Mon portfolio</a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
