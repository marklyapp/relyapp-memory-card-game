import { CardType } from './types';

const EMOJIS = [
  '🐶', '🐱', '🐭', '🐹', '🦊', '🐻', '🐼', '🐨', '🦁', '🐯', '🐮', '🐷', '🐸', '🐙', '🦋', '🌺',
];

export function createShuffledDeck(pairs: number = 8): CardType[] {
  if (pairs > EMOJIS.length) {
    throw new Error(`Cannot create deck with ${pairs} pairs; only ${EMOJIS.length} emojis available.`);
  }
  const selected = EMOJIS.slice(0, pairs);
  const deck = [...selected, ...selected];
  const shuffled = deck.sort(() => Math.random() - 0.5);
  return shuffled.map((emoji, index) => ({
    id: index,
    emoji,
    isFlipped: false,
    isMatched: false,
  }));
}
