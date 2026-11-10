"use client";
import { useState } from "react";
import { parts, Lesson } from "@/data/parts";
import { isLessonUnlocked } from "@/utils/storage";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelectLesson: (lesson: Lesson) => void;
  selectedLessonId?: string;
  completedLessons: string[];
};

export default function Sidebar({ isOpen, onClose, onSelectLesson, selectedLessonId, completedLessons }: SidebarProps) {
  const [openParts, setOpenParts] = useState<Record<string, boolean>>({});
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({});

  const togglePart = (id: string) => setOpenParts(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleModule = (id: string) => setOpenModules(prev => ({ ...prev, [id]: !prev[id] }));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      {/* Menu */}
      <div className="relative w-1/2 h-full bg-slate-900 p-4 overflow-y-auto border-r border-slate-700">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg font-bold text-cyan-400">DevOps Quiz</h1>
          <button onClick={onClose} className="text-slate-400 text-xl">✕</button>
        </div>

        {parts.map(part => (
          <div key={part.id} className="mb-4">
            <button onClick={() => togglePart(part.id)} className="w-full text-left px-3 py-2 bg-slate-800 rounded text-cyan-300 mb-2">
              📘 {part.title}
            </button>
            {openParts[part.id] && (
              <div className="ml-2 space-y-1">
                {part.modules.map(mod => (
                  <div key={mod.id} className="mb-2">
                    <button onClick={() => toggleModule(mod.id)} className="w-full text-left px-3 py-2 text-slate-300 flex items-center gap-2">
                       <img src={mod.logo} alt={mod.name} className="w-4 h-4" /> {mod.name}
                    </button>
                    {openModules[mod.id] && (
                      <ul className="ml-4 border-l border-slate-700 pl-2 space-y-1">
                        {mod.lessons.map(lesson => {
                          const isCompleted = completedLessons.includes(lesson.id);
                          const isUnlocked = isLessonUnlocked(lesson.id, completedLessons);
                          return (
                            <li key={lesson.id}>
                              <button
                                onClick={() => isUnlocked && onSelectLesson(lesson)}
                                disabled={!isUnlocked}
                                className={`w-full text-left px-3 py-2 text-xs ${isUnlocked ? 'text-slate-400 hover:text-white' : 'text-slate-600'}`}
                              >
                                {lesson.title} {isCompleted ? "✅" : isUnlocked ? "▶️" : "🔒"}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
