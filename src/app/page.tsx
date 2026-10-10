"use client";
import { useState } from "react";
import Welcome from "@/components/Welcome";
import Sidebar from "@/components/Sidebar";
import ModuleView from "@/components/ModuleView";
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

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onSelectModule={handleSelectModule}
        selectedModuleId={selectedModule?.id}
      />

      {selectedModule ? (
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

      {quizStarted && (
        <div className="fixed bottom-4 right-4 bg-slate-800 border border-cyan-500/50 text-sm px-4 py-2 rounded-lg shadow-lg">
          🚧 Quiz en construction — prochaine étape !
        </div>
      )}
    </main>
  );
}
