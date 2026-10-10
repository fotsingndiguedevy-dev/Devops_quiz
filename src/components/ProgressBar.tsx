"use client";

import { motion } from "framer-motion";

type ProgressBarProps = {
  value: number; // 0 à 100
};

export default function ProgressBar({ value }: ProgressBarProps) {
  const safe = Math.max(0, Math.min(100, value));

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-cyan-200 mb-1">
        <span>Énergie</span>
        <span>{Math.round(safe)}%</span>
      </div>

      <div className="w-full h-5 bg-slate-800/70 rounded-full overflow-hidden border border-cyan-400/20">
        <motion.div
          className={`h-full bg-gradient-to-r ${
            safe > 60
              ? "from-cyan-400 to-green-400"
              : safe > 30
              ? "from-yellow-400 to-orange-400"
              : "from-red-500 to-orange-500"
          }`}
          animate={{ width: `${safe}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
