"use client";

import { DifficultyConfig, DifficultyLevel, DIFFICULTY_CONFIGS } from "../lib/types";

interface DifficultySelectorProps {
  onSelect: (config: DifficultyConfig) => void;
}

const BUTTON_STYLES: Record<DifficultyLevel, {
  base: string;
  icon: string;
  grid: string;
}> = {
  easy: {
    base: "bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 border-emerald-700 shadow-emerald-200 focus-visible:ring-emerald-400",
    icon: "🌿",
    grid: "3×4",
  },
  medium: {
    base: "bg-amber-500 hover:bg-amber-400 active:bg-amber-600 border-amber-600 shadow-amber-200 focus-visible:ring-amber-400",
    icon: "⚡",
    grid: "4×4",
  },
  hard: {
    base: "bg-rose-600 hover:bg-rose-500 active:bg-rose-700 border-rose-700 shadow-rose-200 focus-visible:ring-rose-400",
    icon: "🔥",
    grid: "5×6",
  },
};

export default function DifficultySelector({ onSelect }: DifficultySelectorProps) {
  const difficulties = Object.values(DIFFICULTY_CONFIGS);

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md px-4 screen-enter">
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-bold text-indigo-700">Choose Difficulty</h2>
        <p className="text-gray-500 text-sm">Select a grid size to start the game</p>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4 w-full">
        {difficulties.map((config, i) => {
          const style = BUTTON_STYLES[config.level];
          return (
            <button
              key={config.level}
              onClick={() => onSelect(config)}
              className={
                "w-full flex items-center justify-between px-5 py-4 rounded-2xl border-2 text-white font-semibold shadow-md " +
                "transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
                "screen-enter " +
                style.base
              }
              style={{ animationDelay: `${i * 60}ms` }}
              aria-label={config.label + " difficulty: " + config.description}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">{style.icon}</span>
                <div className="flex flex-col items-start gap-0.5">
                  <span className="text-lg sm:text-xl font-bold">{config.label}</span>
                  <span className="text-sm font-normal opacity-90">
                    {config.description}
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1.5 rounded-xl bg-white/20 border border-white/30 whitespace-nowrap">
                {style.grid}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
