"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressBar from "./ProgressBar";
import { Module } from "@/data/modules";
import {
  Question,
  getQuestionsByModule,
  isAnswerCorrect,
} from "@/data/questions";

type QuizProps = {
  module: Module;
  onFinish: (finalProgress: number, totalQuestions: number) => void;
};

// Temps de blocage en secondes (30 min = 1800s ; 60s pour tester)
const BLOCK_DURATION = 60;

export default function Quiz({ module, onFinish }: QuizProps) {
  const allQuestions = getQuestionsByModule(module.id);
  const [queue, setQueue] = useState<Question[]>(allQuestions);
  const [current, setCurrent] = useState<Question | null>(
    allQuestions[0] || null
  );
  const [progress, setProgress] = useState(50);
  const [feedback, setFeedback] = useState<null | {
    correct: boolean;
    explanation: string;
    encouragement: string;
  }>(null);
  const [userInput, setUserInput] = useState("");
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([]);
  const [blockedUntil, setBlockedUntil] = useState<number | null>(null);
  const [blockTimer, setBlockTimer] = useState(0);

  // ------- GESTION DU BLOCAGE -------
  useEffect(() => {
    if (progress <= 0 && blockedUntil === null) {
      setBlockedUntil(Date.now() + BLOCK_DURATION * 1000);
    }
  }, [progress, blockedUntil]);

  useEffect(() => {
    if (blockedUntil === null) return;

    const interval = setInterval(() => {
      const remaining = blockedUntil - Date.now();
      if (remaining <= 0) {
        clearInterval(interval);
        setBlockedUntil(null);
        setBlockTimer(0);
        setProgress(10);
        setQueue(allQuestions);
        setCurrent(allQuestions[0] ?? null);
        setWrongQuestions([]);
        setFeedback(null);
        setUserInput("");
      } else {
        setBlockTimer(Math.ceil(remaining / 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockedUntil]);

  // ------- VALIDER -------
  function handleValidate() {
    if (!current || feedback) return;
    const correct = isAnswerCorrect(current, userInput);

    setProgress((p) => Math.max(0, Math.min(100, correct ? p + 10 : p - 5)));

    setFeedback({
      correct,
      explanation: current.explanation,
      encouragement: correct
        ? current.encouragement
        : "Presque ! Recommence, tu es proche 💪",
    });

    if (!correct) {
      setWrongQuestions((prev) => [...prev, current]);
    }
  }

  // ------- SUIVANT -------
  function handleNext() {
    setFeedback(null);
    setUserInput("");

    const rest = queue.filter((q) => q.id !== current?.id);

    if (rest.length > 0) {
      setQueue(rest);
      setCurrent(rest[0]);
      return;
    }

    if (wrongQuestions.length > 0) {
      setQueue(wrongQuestions);
      setCurrent(wrongQuestions[0]);
      setWrongQuestions([]);
      return;
    }

    onFinish(progress, allQuestions.length);
  }

  // ------- AFFICHAGE -------
  if (!current) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-300 text-xl">Aucune question disponible 😅</p>
      </div>
    );
  }

  if (blockedUntil) {
    const min = Math.floor(blockTimer / 60);
    const sec = blockTimer % 60;
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="text-6xl mb-4">😴</div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Oups, ta barre est à zéro !
        </h2>
        <p className="text-slate-400 mb-6">
          Repose-toi un peu, ton cerveau doit digérer 🧠
        </p>
        <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
          {min}:{sec.toString().padStart(2, "0")}
        </div>
        <p className="text-slate-500 text-sm mt-4">
          Tu pourras rejouer automatiquement à 10% d'énergie ⚡
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8">
      <div className="max-w-2xl w-full">
        <ProgressBar value={progress} />

        <div className="flex justify-between items-center mt-4 mb-6 text-xs text-slate-500">
          <span>
            {module.emoji} {module.name}
          </span>
          <span>
            {allQuestions.length - queue.length + 1} / {allQuestions.length}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* --- QCM --- */}
            {current.type === "qcm" && (
              <>
                <h2 className="text-xl font-bold text-white mb-6">
                  {current.question}
                </h2>
                <div className="space-y-3">
                  {current.options.map((opt) => {
                    const isSelected = userInput === opt;
                    const showCorrect =
                      feedback && opt === current.answer && feedback.correct;
                    const showWrong =
                      feedback && isSelected && !feedback.correct;

                    return (
                      <motion.button
                        key={opt}
                        whileHover={!feedback ? { scale: 1.02 } : {}}
                        whileTap={!feedback ? { scale: 0.98 } : {}}
                        disabled={!!feedback}
                        onClick={() => setUserInput(opt)}
                        className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer ${
                          showCorrect
                            ? "bg-green-500/20 border-green-400 text-white"
                            : showWrong
                            ? "bg-red-500/20 border-red-400 text-white"
                            : isSelected
                            ? "bg-cyan-500/20 border-cyan-400 text-white"
                            : "bg-slate-800/40 border-slate-700 text-slate-300 hover:border-cyan-500/50"
                        }`}
                      >
                        {opt}
                      </motion.button>
                    );
                  })}
                </div>
              </>
            )}

            {/* --- CORRECTION --- */}
            {current.type === "correction" && (
              <>
                <h2 className="text-xl font-bold text-white mb-2">
                  {current.instruction}
                </h2>
                <pre className="bg-slate-950 border border-red-500/50 text-red-300 p-3 rounded-lg text-sm mb-4 overflow-x-auto">
                  {current.wrongCode}
                </pre>
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  disabled={!!feedback}
                  placeholder="Tape la version corrigée ici…"
                  className="w-full p-3 rounded-lg bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 outline-none font-mono"
                />
              </>
            )}

            {/* --- DÉFINITION --- */}
            {current.type === "definition" && (
              <>
                <p className="text-slate-400 text-sm mb-2">
                  ✏️ Quelle est la réponse à cette définition ?
                </p>
                <h2 className="text-xl font-bold text-white mb-6">
                  « {current.definition} »
                </h2>
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  disabled={!!feedback}
                  placeholder="Tape ta réponse…"
                  className="w-full p-3 rounded-lg bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 outline-none"
                />
              </>
            )}

            {/* --- FEEDBACK --- */}
            <AnimatePresence>
              {feedback && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 p-4 rounded-lg border ${
                    feedback.correct
                      ? "bg-green-500/10 border-green-400/50"
                      : "bg-red-500/10 border-red-400/50"
                  }`}
                >
                  <p className="font-bold mb-2">
                    {feedback.correct ? "✅ Bravo !" : "❌ Raté !"}
                  </p>
                  <p className="text-slate-300 text-sm mb-3">
                    {feedback.explanation}
                  </p>
                  <p className="text-cyan-300 text-sm italic">
                    {feedback.encouragement}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* --- BOUTONS --- */}
            {!feedback ? (
              <motion.button
                onClick={handleValidate}
                disabled={!userInput.trim()}
                whileHover={
                  userInput.trim()
                    ? {
                        scale: 1.03,
                        boxShadow: "0 0 25px rgba(34, 211, 238, 0.7)",
                      }
                    : {}
                }
                whileTap={userInput.trim() ? { scale: 0.97 } : {}}
                className={`mt-6 w-full py-3 rounded-lg font-bold transition-all cursor-pointer ${
                  userInput.trim()
                    ? "bg-gradient-to-r from-cyan-500 to-green-500 text-white"
                    : "bg-slate-800 text-slate-500 cursor-not-allowed"
                }`}
              >
                Valider
              </motion.button>
            ) : (
              <motion.button
                onClick={handleNext}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 25px rgba(34, 211, 238, 0.7)",
                }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 w-full py-3 rounded-lg font-bold bg-gradient-to-r from-cyan-500 to-green-500 text-white cursor-pointer"
              >
                Suivant →
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
