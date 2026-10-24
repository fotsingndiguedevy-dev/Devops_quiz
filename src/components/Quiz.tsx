"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lesson, LessonQuestion } from "@/data/parts";
import { shuffle } from "@/utils/shuffle";
import { getMessageCorrect, getMessageFaux } from "@/data/encouragements";

type QuizProps = {
  lesson: Lesson;
  moduleLogo: string;
  onFinish: (nextAction: "replay" | "next" | "menu") => void;
};

export default function Quiz({ lesson, moduleLogo, onFinish }: QuizProps) {
  // Mélange les questions au démarrage
  const [allQuestions] = useState<LessonQuestion[]>(() => {
    return shuffle(lesson.questions).map((q) => {
      return { ...q, options: shuffle(q.options) };
    });
  });

  const [queue, setQueue] = useState<LessonQuestion[]>(allQuestions);
  const [current, setCurrent] = useState<LessonQuestion | null>(allQuestions[0] || null);
  
  const [hearts, setHearts] = useState(5);
  const [wrongQuestions, setWrongQuestions] = useState<LessonQuestion[]>([]);
  const [feedback, setFeedback] = useState<null | { correct: boolean; explanation: string; encouragement: string }>(null);
  const [selectedOption, setSelectedOption] = useState("");
  
  const [status, setStatus] = useState<"playing" | "gameover" | "success">("playing");
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  const totalQuestions = allQuestions.length;
  const progress = Math.round(((totalQuestions - queue.length + (feedback ? 1 : 0)) / totalQuestions) * 100);

  function handleValidate() {
    if (!current || feedback) return;
    const correct = selectedOption === current.answer;

    setFeedback({
      correct,
      explanation: current.explanation,
      encouragement: correct ? getMessageCorrect() : getMessageFaux(),
    });

    if (!correct) {
      setHearts((h) => h - 1);
      // On sauvegarde la question ratée en mélangeant à nouveau les options
      const retryQ = { ...current, options: shuffle(current.options) };
      setWrongQuestions((prev) => [...prev, retryQ]);
    }
  }

  function handleNext() {
    setFeedback(null);
    setSelectedOption("");

    if (hearts <= 0) {
      setStatus("gameover");
      return;
    }

    const rest = queue.filter((q) => q.id !== current?.id);

    if (rest.length > 0) {
      setQueue(rest);
      setCurrent(rest[0]);
      if (rest.length === 1 && wrongQuestions.length === 0) setIsLastQuestion(true);
      return;
    }

    // Si la file est vide mais qu'il y a des questions ratées
    if (wrongQuestions.length > 0) {
      setQueue(wrongQuestions);
      setCurrent(wrongQuestions[0]);
      setWrongQuestions([]);
      return;
    }

    // Si tout est fini et qu'on a encore des cœurs
    setStatus("success");
  }

  if (status === "gameover") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="text-6xl mb-4">💔</div>
        <h2 className="text-2xl font-bold text-red-400 mb-2">Oups, tu as perdu tous tes cœurs !</h2>
        <p className="text-slate-400 mb-8">Reprends ton souffle et réessaie.</p>
        <button onClick={() => onFinish("menu")} className="px-6 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-green-500 cursor-pointer">
          Retour au menu
        </button>
      </div>
    );
  }

  if (status === "success") {
    // Ici on devrait afficher le LessonSummary, mais on le gère dans page.tsx
    return null; 
  }

  if (!current) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8">
      <div className="max-w-2xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => onFinish("menu")} className="text-slate-400 hover:text-white text-xl">🏠</button>
          <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-green-500 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex gap-1 text-xl">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < hearts ? "opacity-100" : "opacity-20 grayscale"}>❤️</span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mb-6 text-xs text-slate-500">
          <span>{lesson.title}</span>
          <span>{totalQuestions - queue.length + 1} / {totalQuestions}</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={current.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            
            {current.definition && (
              <div className="mb-6 p-4 rounded-lg bg-cyan-500/10 border border-cyan-400/40">
                <p className="text-cyan-300 text-xs uppercase font-bold mb-2">📖 Définition</p>
                <p className="text-white text-lg italic">« {current.definition} »</p>
              </div>
            )}
            {current.question && <h2 className="text-xl font-bold text-white mb-4">{current.question}</h2>}
            {current.codeSnippet && (
              <pre className="bg-slate-950 border border-red-500/50 text-red-300 p-3 rounded-lg text-sm mb-4">{current.codeSnippet}</pre>
            )}

            <div className="space-y-3">
              {current.options.map((opt) => {
                const isSelected = selectedOption === opt;
                const showCorrect = feedback && opt === current.answer && feedback.correct;
                const showWrong = feedback && isSelected && !feedback.correct;

                return (
                  <button
                    key={opt} disabled={!!feedback} onClick={() => setSelectedOption(opt)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      showCorrect ? "bg-green-500/20 border-green-400 text-white"
                      : showWrong ? "bg-red-500/20 border-red-400 text-white"
                      : isSelected ? "bg-cyan-500/20 border-cyan-400 text-white"
                      : "bg-slate-800/40 border-slate-700 text-slate-300 hover:border-cyan-500/50"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {feedback && (
              <div className={`mt-6 p-4 rounded-lg border ${feedback.correct ? "bg-green-500/10 border-green-400/50" : "bg-red-500/10 border-red-400/50"}`}>
                <p className="font-bold mb-2">{feedback.correct ? "✅ Bravo !" : "❌ Raté !"}</p>
                <p className="text-slate-300 text-sm mb-2">{feedback.explanation}</p>
                <p className="text-cyan-300 text-sm italic">{feedback.encouragement}</p>
              </div>
            )}

            {!feedback ? (
              <button onClick={handleValidate} disabled={!selectedOption} className={`mt-6 w-full py-3 rounded-lg font-bold transition-all ${selectedOption ? "bg-cyan-600 hover:bg-cyan-500 text-white" : "bg-slate-800 text-slate-500 cursor-not-allowed"}`}>
                Valider
              </button>
            ) : (
              <button onClick={handleNext} className="mt-6 w-full py-3 rounded-lg font-bold bg-green-600 hover:bg-green-500 text-white">
                {isLastQuestion ? "Terminer" : "Suivant →"}
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
