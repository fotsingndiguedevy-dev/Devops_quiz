"use client";
import { useState } from "react";
import Welcome from "@/components/Welcome";
import Sidebar from "@/components/Sidebar";
import ModuleView from "@/components/ModuleView";
import Quiz from "@/components/Quiz";
import { Module } from "@/data/modules";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);

  function handleSelectModule(m: Module) {
    setSelectedModule(m);
    setSidebarOpen(false);
    setQuizStarted(false);
  }

  function handleFinishQuiz() {
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

      {quizStarted && selectedModule ? (
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
