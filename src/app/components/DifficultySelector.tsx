"use client";

import { DifficultyConfig, DifficultyLevel, DIFFICULTY_CONFIGS } from "../lib/types";

interface DifficultySelectorProps {
  onSelect: (config: DifficultyConfig) => void;
}

const BADGE_COLORS: Record<DifficultyLevel, string> = {
  easy: "bg-green-100 text-green-700 border-green-300",
  medium: "bg-yellow-100 text-yellow-700 border-yellow-300",
  hard: "bg-red-100 text-red-700 border-red-300",
};

const BUTTON_COLORS: Record<DifficultyLevel, string> = {
  easy:
    "bg-green-600 hover:bg-green-700 active:bg-green-800 border-green-700 shadow-green-200",
  medium:
    "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 border-yellow-600 shadow-yellow-200",
  hard:
    "bg-red-600 hover:bg-red-700 active:bg-red-800 border-red-700 shadow-red-200",
};

export default function DifficultySelector({ onSelect }: DifficultySelectorProps) {
  const difficulties = Object.values(DIFFICULTY_CONFIGS);

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md px-4">
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-bold text-indigo-700">Choose Difficulty</h2>
        <p className="text-gray-500 text-sm">Select a grid size to start the game</p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {difficulties.map((config) => (
          <button
            key={config.level}
            onClick={() => onSelect(config)}
            className={
              "w-full flex items-center justify-between px-6 py-4 rounded-2xl border-2 text-white font-semibold shadow-md transition-all duration-200 cursor-pointer " +
              BUTTON_COLORS[config.level]
            }
            aria-label={
              config.label + " difficulty: " + config.description
            }
          >
            <div className="flex flex-col items-start gap-0.5">
              <span className="text-xl font-bold">{config.label}</span>
              <span className="text-sm font-normal opacity-90">
                {config.description}
              </span>
            </div>
            <span
              className={
                "text-xs font-semibold px-2 py-1 rounded-full border bg-white/20 border-white/40"
              }
            >
              {config.cols}×{config.rows}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
