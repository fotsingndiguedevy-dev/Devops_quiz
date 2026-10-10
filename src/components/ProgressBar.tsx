type ProgressBarProps = {
  value: number; // entre 0 et 100
};

export default function ProgressBar({ value }: ProgressBarProps) {
  const safeValue = Math.max(0, Math.min(100, value));

  // Couleur dynamique : vert quand ça va bien, orange puis rouge quand ça baisse
  const getBarColor = () => {
    if (safeValue >= 60) return "from-cyan-400 via-green-400 to-emerald-500";
    if (safeValue >= 30) return "from-yellow-400 to-orange-400";
    return "from-orange-500 to-red-500";
  };

  const getEmoji = () => {
    if (safeValue >= 80) return "🔥";
    if (safeValue >= 60) return "💪";
    if (safeValue >= 40) return "😊";
    if (safeValue >= 20) return "😅";
    return "🆘";
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-300">
          Énergie {getEmoji()}
        </span>
        <span className="text-sm font-bold text-white">
          {Math.round(safeValue)}%
        </span>
      </div>

      <div className="relative w-full h-5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
        <div
          className={`h-full bg-gradient-to-r ${getBarColor()} transition-all duration-700 ease-out rounded-full`}
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
}
