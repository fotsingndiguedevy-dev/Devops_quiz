"use client";
import { useState } from "react";
import Welcome from "@/components/Welcome";
import Sidebar from "@/components/Sidebar";
import LessonView from "@/components/LessonView";
import Quiz from "@/components/Quiz";
import QuizEnd from "@/components/QuizEnd";
import FloatingMenu from "@/components/FloatingMenu";
import { Lesson, parts } from "@/data/parts";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedModuleLogo, setSelectedModuleLogo] = useState<string>("");
  
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [finalProgress, setFinalProgress] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  // Trouver le logo du module parent pour l'afficher dans la leçon
  function handleSelectLesson(lesson: Lesson) {
    // On cherche le module qui contient cette leçon pour récupérer son logo
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

  function handleFinishQuiz(progress: number, total: number) {
    setFinalProgress(progress);
    setTotalQuestions(total);
    setQuizStarted(false);
    setQuizFinished(true);
  }

  function handleBackHome() {
    setQuizFinished(false);
    setQuizStarted(false);
    setSelectedLesson(null);
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {!sidebarOpen && <FloatingMenu onClick={() => setSidebarOpen(true)} />}

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onSelectLesson={handleSelectLesson}
        selectedLessonId={selectedLesson?.id}
      />

      {quizFinished && selectedLesson ? (
        <QuizEnd
          module={{ name: selectedLesson.title, logo: selectedModuleLogo } as any}
          finalProgress={finalProgress}
          starsEarned={0}
          totalQuestions={totalQuestions}
          onReplay={() => { setQuizFinished(false); setQuizStarted(true); }}
          onBackHome={handleBackHome}
        />
      ) : quizStarted && selectedLesson ? (
        <Quiz
          key={`${selectedLesson.id}-${Date.now()}`}
          lesson={selectedLesson}
          onFinish={handleFinishQuiz}
          onBackToMenu={handleBackHome}
        />
      ) : selectedLesson ? (
        <LessonView
          lesson={selectedLesson}
          moduleLogo={selectedModuleLogo}
          onStart={() => setQuizStarted(true)}
          onBack={handleBackHome}
        />
      ) : (
        <Welcome onStart={() => setSidebarOpen(true)} />
      )}
    </main>
  );
}
