"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { parts, Lesson } from "@/data/parts";
import { isLessonUnlocked, getWrongQuestions, clearWrongQuestions } from "@/utils/storage";
import ThemeToggle from "./ThemeToggle";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelectLesson: (lesson: Lesson) => void;
  onStartRevision: () => void;
  selectedLessonId?: string;
  completedLessons: string[];
};

export default function Sidebar({ isOpen, onClose, onSelectLesson, onStartRevision, selectedLessonId, completedLessons }: SidebarProps) {
  const [openParts, setOpenParts] = useState<Record<string, boolean>>({});
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({});
  const [hoveredLesson, setHoveredLesson] = useState<string | null>(null);
  const [aProposOuvert, setAProposOuvert] = useState(false);
  const [wrongList, setWrongList] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setWrongList(getWrongQuestions());
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const togglePart = (id: string) => setOpenParts(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleModule = (id: string) => setOpenModules(prev => ({ ...prev, [id]: !prev[id] }));

  const handleClearErrors = () => {
    if(confirm("Voulez-vous vraiment effacer toutes les questions ratées ?")) {
      clearWrongQuestions();
      setWrongList([]);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/40 dark:bg-black/60 z-40 backdrop-blur-sm" />
          <motion.aside initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "spring", damping: 28, stiffness: 220 }} className="fixed top-0 left-0 h-[100dvh] w-[85%] md:w-1/3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-r border-slate-200 dark:border-slate-700 z-50 p-4 overflow-y-auto overscroll-contain flex flex-col shadow-2xl dark:shadow-none">
            
            <div className="flex justify-between items-center mb-6 shrink-0">
              <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-500 to-green-500 dark:from-cyan-400 dark:to-green-400 bg-clip-text text-transparent">
                DevOps Quiz
              </h1>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button onClick={onClose} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xl w-8 h-8 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800">✕</button>
              </div>
            </div>

            {wrongList.length > 0 && (
              <div className="mb-4 bg-red-50 dark:bg-slate-800/60 p-3 rounded-lg border border-red-200 dark:border-red-500/30">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2 font-bold">Mode Révision</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Questions ratées en mémoire : <span className="text-red-500 font-bold">{wrongList.length}</span></p>
                <div className="flex gap-2">
                  <button onClick={onStartRevision} className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white text-xs py-2 rounded font-bold">🔄 Réviser</button>
                  <button onClick={handleClearErrors} className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-white text-xs py-2 px-3 rounded">🗑️</button>
                </div>
              </div>
            )}

            <div className="flex-1">
              {parts.map(part => (
                <div key={part.id} className="mb-4">
                  <button onClick={() => togglePart(part.id)} className="w-full flex justify-between items-center px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-left text-sm font-semibold text-cyan-600 dark:text-cyan-300 hover:bg-slate-200 dark:hover:bg-slate-800 mb-2">
                    <span>📘 {part.title}</span>
                    <motion.span animate={{ rotate: openParts[part.id] ? 0 : -90 }}>▾</motion.span>
                  </button>

                  <AnimatePresence>
                    {openParts[part.id] && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden ml-2 space-y-1">
                        {part.modules.map(mod => (
                          <div key={mod.id} className="mb-2">
                            <button onClick={() => toggleModule(mod.id)} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80">
                              <span className="flex items-center gap-2">
                                <img src={mod.logo} alt={mod.name} className="w-4 h-4 object-contain" />
                                {mod.name}
                              </span>
                              <motion.span animate={{ rotate: openModules[mod.id] ? 0 : -90 }}>▾</motion.span>
                            </button>

                            <AnimatePresence>
                              {openModules[mod.id] && (
                                <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden ml-4 mt-1 space-y-1 border-l border-slate-300 dark:border-slate-700 pl-2">
                                  {mod.lessons.map(lesson => {
                                    const isCompleted = completedLessons.includes(lesson.id);
                                    const isUnlocked = isLessonUnlocked(lesson.id, completedLessons);
                                    
                                    return (
                                      <li key={lesson.id} className="relative">
                                        <button onClick={() => { if (!isUnlocked) { alert("🔒 Termine d'abord la leçon précédente !"); return; } onSelectLesson(lesson); }} onMouseEnter={() => setHoveredLesson(lesson.id)} onMouseLeave={() => setHoveredLesson(null)} className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex justify-between items-center ${ selectedLessonId === lesson.id ? "bg-gradient-to-r from-cyan-100 to-green-100 dark:from-cyan-500/30 dark:to-green-500/30 text-cyan-800 dark:text-white border-l-2 border-cyan-400" : isUnlocked ? "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer" : "text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-60" }`}>
                                          <span>{lesson.title}</span>
                                          <span>{isCompleted ? "✅" : isUnlocked ? "▶️" : "🔒"}</span>
                                        </button>
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

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 shrink-0">
              <button onClick={() => setAProposOuvert(!aProposOuvert)} className="w-full flex justify-between items-center px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-left text-sm font-semibold text-cyan-600 dark:text-cyan-300 hover:bg-slate-200 dark:hover:bg-slate-800 mb-2">
                <span>ℹ️ À propos</span>
                <motion.span animate={{ rotate: aProposOuvert ? 0 : -90 }}>▾</motion.span>
              </button>
              <AnimatePresence>
                {aProposOuvert && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="text-xs text-slate-600 dark:text-slate-400 space-y-3 px-3 py-3 bg-slate-50 dark:bg-slate-800/30 rounded-lg border border-slate-200 dark:border-slate-700/50">
                      <p className="text-slate-900 dark:text-slate-300 font-medium">🚀 Pourquoi DevOps Quiz ?</p>
                      <p>Né d'un constat simple : apprendre le DevOps peut être intimidant.</p>
                      <div className="pt-2 border-t border-slate-200 dark:border-slate-700/50">
                        <a href="mailto:fotsingndiguedevy@gmail.com?subject=Feedback%20DevOps%20Quiz" className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1.5 rounded transition-colors text-center w-full">💬 Envoyer un feedback</a>
                      </div>
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
