"use client";
import { useState, useEffect } from "react";
import Welcome from "@/components/Welcome";
import Sidebar from "@/components/Sidebar";
import LessonView from "@/components/LessonView";
import Quiz from "@/components/Quiz";
import LessonSummary from "@/components/LessonSummary"; // NOUVEAU
import FloatingMenu from "@/components/FloatingMenu";
import { Lesson, parts } from "@/data/parts";
import { getCompletedLessons, saveCompletedLesson } from "@/utils/storage";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedModuleLogo, setSelectedModuleLogo] = useState<string>("");
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    setCompletedLessons(getCompletedLessons());
  }, []);

  function handleSelectLesson(lesson: Lesson) {
    for (const part of parts) {
      for (const mod of part.modules) {
        if (mod.lessons.find(l => l.id === lesson.id)) {
          setSelectedModuleLogo(mod.logo);
          break;
        }
      }
    }
    setSelectedLesson(lesson);
    setSidebarOpen(false);
    setQuizStarted(false);
    setQuizFinished(false);
  }

  function handleFinishQuiz(nextAction: "replay" | "next" | "menu") {
    if (nextAction === "menu") {
      setQuizFinished(false);
      setQuizStarted(false);
      setSelectedLesson(null);
      return;
    }
    
    if (nextAction === "replay") {
      setQuizFinished(false);
      setQuizStarted(true);
      return;
    }

    if (nextAction === "next" && selectedLesson) {
      // Sauvegarde la leçon validée
      saveCompletedLesson(selectedLesson.id);
      setCompletedLessons(getCompletedLessons());
      
      // Cherche la prochaine leçon
      const all = parts.flatMap(p => p.modules.flatMap(m => m.lessons));
      const idx = all.findIndex(l => l.id === selectedLesson.id);
      if (idx !== -1 && idx < all.length - 1) {
        handleSelectLesson(all[idx + 1]);
      } else {
        // Si c'était la dernière leçon du module
        setQuizFinished(false);
        setSelectedLesson(null);
      }
    }
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {!sidebarOpen && <FloatingMenu onClick={() => setSidebarOpen(true)} />}

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onSelectLesson={handleSelectLesson}
        selectedLessonId={selectedLesson?.id}
        completedLessons={completedLessons}
      />

      {quizFinished && selectedLesson ? (
        <LessonSummary
          lesson={selectedLesson}
          moduleLogo={selectedModuleLogo}
          onReplay={() => handleFinishQuiz("replay")}
          onNext={() => handleFinishQuiz("next")}
          onBackToMenu={() => handleFinishQuiz("menu")}
        />
      ) : quizStarted && selectedLesson ? (
        <Quiz
          key={`${selectedLesson.id}-${Date.now()}`}
          lesson={selectedLesson}
          moduleLogo={selectedModuleLogo}
          onFinish={(action) => {
            if (action === "menu") handleFinishQuiz("menu");
            else if (action === "replay") handleFinishQuiz("replay");
            else setQuizFinished(true); // Si le Quiz est réussi, on affiche le Bilan
          }}
        />
      ) : selectedLesson ? (
        <LessonView
          lesson={selectedLesson}
          moduleLogo={selectedModuleLogo}
          onStart={() => setQuizStarted(true)}
          onBack={() => handleFinishQuiz("menu")}
        />
      ) : (
        <Welcome onStart={() => setSidebarOpen(true)} />
      )}
    </main>
  );
}
