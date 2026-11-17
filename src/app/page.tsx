"use client";
import { useState, useEffect } from "react";
import Welcome from "@/components/Welcome";
import Sidebar from "@/components/Sidebar";
import LessonView from "@/components/LessonView";
import Quiz from "@/components/Quiz";
import LessonSummary from "@/components/LessonSummary";
import FloatingMenu from "@/components/FloatingMenu";
import { Lesson, parts, getQuestionById } from "@/data/parts";
import { getCompletedLessons, saveCompletedLesson, getWrongQuestions } from "@/utils/storage";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedModuleLogo, setSelectedModuleLogo] = useState<string>("");
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [isRevisionMode, setIsRevisionMode] = useState(false);

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
    setIsRevisionMode(false);
    
    if (completedLessons.includes(lesson.id)) {
      setQuizFinished(true);
      setQuizStarted(false);
    } else {
      setQuizFinished(false);
      setQuizStarted(false);
    }
  }

  function handleStartRevision() {
    const wrongIds = getWrongQuestions();
    if (wrongIds.length === 0) return;

    // On construit une fausse leçon avec les questions ratées
    const revisionQuestions = wrongIds
      .map(id => getQuestionById(id))
      .filter(item => item !== undefined)
      .map(item => item!.question);

    if (revisionQuestions.length > 0) {
      const revisionLesson: Lesson = {
        id: "revision",
        title: "Mode Révision",
        description: "Révise tes erreurs",
        questions: revisionQuestions
      };
      
      setSelectedLesson(revisionLesson);
      setSelectedModuleLogo("https://cdn.simpleicons.org/git/white"); // Un logo par défaut
      setIsRevisionMode(true);
      setSidebarOpen(false);
      setQuizStarted(true);
      setQuizFinished(false);
    }
  }

  function handleFinishQuiz(nextAction: "replay" | "next" | "menu" | "success") {
    if (!selectedLesson) return;

    if (nextAction === "menu") {
      setQuizFinished(false);
      setQuizStarted(false);
      setSelectedLesson(null);
      setIsRevisionMode(false);
    } 
    else if (nextAction === "replay") {
      setQuizFinished(false);
      setQuizStarted(true);
    } 
    else if (nextAction === "success") {
      if (!isRevisionMode) {
        saveCompletedLesson(selectedLesson.id);
        setCompletedLessons(getCompletedLessons());
      }
      setQuizStarted(false);
      setQuizFinished(true);
    } 
    else if (nextAction === "next") {
      const allLessons = parts.flatMap(p => p.modules.flatMap(m => m.lessons));
      const currentIndex = allLessons.findIndex(l => l.id === selectedLesson.id);
      
      if (currentIndex !== -1 && currentIndex < allLessons.length - 1) {
        handleSelectLesson(allLessons[currentIndex + 1]);
      } else {
        handleFinishQuiz("menu");
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
        onStartRevision={handleStartRevision}
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
