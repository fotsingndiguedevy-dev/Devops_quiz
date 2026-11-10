"use client";

type FloatingMenuProps = {
  onClick: () => void;
};

export default function FloatingMenu({ onClick }: FloatingMenuProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Ouvrir le menu"
      className="fixed top-4 left-4 z-50 w-12 h-12 rounded-full bg-slate-800 border-2 border-cyan-500/50 text-white text-xl flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95"
    >
      ☰
    </button>
  );
}
