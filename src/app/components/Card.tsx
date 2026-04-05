"use client";

import { CardType } from '../lib/types';

interface CardProps {
  card: CardType;
  onClick: (id: number) => void;
  disabled: boolean;
  compact?: boolean;
  mismatch?: boolean;
}

export default function Card({ card, onClick, disabled, compact = false, mismatch = false }: CardProps) {
  const { id, emoji, isFlipped, isMatched } = card;
  const faceUp = isFlipped || isMatched;
  const isClickable = !disabled && !faceUp;

  // Build scene class list
  const sceneClasses = [
    'card-scene',
    compact ? 'card-scene-compact' : '',
    faceUp ? 'card-scene--revealed' : '',
    !isClickable ? 'card-scene--disabled' : '',
    mismatch && isFlipped ? 'card-scene--mismatch' : '',
  ].filter(Boolean).join(' ');

  const emojiSizeBack = compact ? 'text-lg sm:text-xl' : 'text-2xl sm:text-3xl';
  const emojiSizeFront = compact ? 'text-xl sm:text-2xl' : 'text-3xl sm:text-4xl';

  return (
    <div
      className={sceneClasses}
      onClick={() => isClickable && onClick(id)}
      role="button"
      aria-label={faceUp ? `Card showing ${emoji}` : 'Hidden card, click to flip'}
      aria-pressed={faceUp}
      aria-disabled={!isClickable}
      tabIndex={isClickable ? 0 : -1}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && isClickable) {
          e.preventDefault();
          onClick(id);
        }
      }}
    >
      <div className={"card-inner" + (faceUp ? ' flipped' : '')}>
        {/* Back face — patterned */}
        <div className="card-face card-back" aria-hidden="true">
          <span className={emojiSizeBack + " select-none opacity-80"}>🂠</span>
        </div>
        {/* Front face — revealed */}
        <div
          className={
            'card-face card-front' +
            (isMatched ? ' card-matched' : '')
          }
          aria-hidden="true"
        >
          <span className={emojiSizeFront + " select-none"}>{emoji}</span>
        </div>
      </div>
    </div>
  );
}
