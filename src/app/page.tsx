"use client";
import { useState, useEffect } from "react";
import Welcome from "@/components/Welcome";
import Sidebar from "@/components/Sidebar";
import LessonView from "@/components/LessonView";
import Quiz from "@/components/Quiz";
import LessonSummary from "@/components/LessonSummary";
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
    // Trouver le logo du module
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
    
    // ⚠️ LA CORRECTION EST ICI : Si la leçon est déjà validée, on affiche le résumé directement
    if (completedLessons.includes(lesson.id)) {
      setQuizFinished(true);
      setQuizStarted(false);
    } else {
      setQuizFinished(false);
      setQuizStarted(false);
    }
  }

  function handleFinishQuiz(nextAction: "replay" | "next" | "menu" | "success") {
    if (!selectedLesson) return;

    if (nextAction === "menu") {
      setQuizFinished(false);
      setQuizStarted(false);
      setSelectedLesson(null);
    } 
    else if (nextAction === "replay") {
      setQuizFinished(false);
      setQuizStarted(true);
    } 
    else if (nextAction === "success") {
      // L'utilisateur a fini le quiz avec succès !
      saveCompletedLesson(selectedLesson.id);
      setCompletedLessons(getCompletedLessons());
      setQuizStarted(false);
      setQuizFinished(true); // Affiche le LessonSummary
    } 
    else if (nextAction === "next") {
      // Passer à la leçon suivante depuis le LessonSummary
      const allLessons = parts.flatMap(p => p.modules.flatMap(m => m.lessons));
      const currentIndex = allLessons.findIndex(l => l.id === selectedLesson.id);
      
      if (currentIndex !== -1 && currentIndex < allLessons.length - 1) {
        handleSelectLesson(allLessons[currentIndex + 1]);
      } else {
        handleFinishQuiz("menu"); // Si c'était la dernière leçon
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
          onFinish={handleFinishQuiz}
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
