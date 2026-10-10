"use client";
import { useState } from "react";
import Welcome from "@/components/Welcome";
import Sidebar from "@/components/Sidebar";
import ModuleView from "@/components/ModuleView";
import Quiz from "@/components/Quiz";
import QuizEnd from "@/components/QuizEnd";
import { Module } from "@/data/modules";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [finalProgress, setFinalProgress] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  function handleSelectModule(m: Module) {
    setSelectedModule(m);
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

  function handleReplay() {
    setQuizFinished(false);
    setQuizStarted(true);
  }

  function handleBackHome() {
    setQuizFinished(false);
    setQuizStarted(false);
    setSelectedModule(null);
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onSelectModule={handleSelectModule}
        selectedModuleId={selectedModule?.id}
      />

      {quizFinished && selectedModule ? (
        <QuizEnd
          module={selectedModule}
          finalProgress={finalProgress}
          starsEarned={0}
          totalQuestions={totalQuestions}
          onReplay={handleReplay}
          onBackHome={handleBackHome}
        />
      ) : quizStarted && selectedModule ? (
        <Quiz module={selectedModule} onFinish={handleFinishQuiz} />
      ) : selectedModule ? (
        <ModuleView
          module={selectedModule}
          onStart={() => setQuizStarted(true)}
          onBack={() => {
            setSelectedModule(null);
            setQuizStarted(false);
          }}
        />
      ) : (
        <Welcome onStart={() => setSidebarOpen(true)} />
      )}
    </main>
  );
}
