export interface CardType {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export type GameStatus = 'idle' | 'playing' | 'won';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface DifficultyConfig {
  level: DifficultyLevel;
  label: string;
  cols: number;
  rows: number;
  pairs: number;
  description: string;
}

export const DIFFICULTY_CONFIGS: Record<DifficultyLevel, DifficultyConfig> = {
  easy: {
    level: 'easy',
    label: 'Easy',
    cols: 3,
    rows: 4,
    pairs: 6,
    description: '3×4 grid · 6 pairs',
  },
  medium: {
    level: 'medium',
    label: 'Medium',
    cols: 4,
    rows: 4,
    pairs: 8,
    description: '4×4 grid · 8 pairs',
  },
  hard: {
    level: 'hard',
    label: 'Hard',
    cols: 5,
    rows: 6,
    pairs: 15,
    description: '5×6 grid · 15 pairs',
  },
};
