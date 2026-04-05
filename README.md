# Memory Card Game

A memory card matching game built with Next.js 14, TypeScript, and Tailwind CSS.

🎮 **Live demo:** [https://relyapp-memory-card-game.vercel.app](https://relyapp-memory-card-game.vercel.app)

---

## Features

- **Card grid & flip mechanic** — flip cards to reveal emoji pairs; matched pairs stay face-up
- **Multiple difficulty levels** — choose from three grid sizes at the start of each game:
  - Easy: 3×4 grid (6 pairs)
  - Medium: 4×4 grid (8 pairs)
  - Hard: 5×6 grid (15 pairs)
- **Game timer** — tracks elapsed time from first flip to completing the board
- **Best times leaderboard** — top 10 times per difficulty, persisted in `localStorage` and shown at the end of each game

---

## Tech Stack

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Run Locally

```bash
# Clone the repo
git clone https://github.com/marklyapp/relyapp-memory-card-game.git
cd relyapp-memory-card-game

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run Tests

```bash
npm test
```

Tests cover the leaderboard library (add/rank, sort, top-10 cap, per-difficulty filtering, and clear operations).

---

## Project Structure

```
relyapp-memory-card-game/
├── public/
│   └── favicon.svg
├── src/
│   ├── __tests__/
│   │   └── leaderboard.test.ts   # Unit tests for leaderboard logic
│   └── app/
│       ├── components/
│       │   ├── Card.tsx           # Single card (flip animation)
│       │   ├── DifficultySelector.tsx  # Difficulty picker screen
│       │   ├── GameBoard.tsx      # Main game grid and game loop
│       │   ├── Leaderboard.tsx    # Top-times display
│       │   └── WinForm.tsx        # Post-game name entry / leaderboard
│       ├── lib/
│       │   ├── deck.ts            # Card deck generation & shuffle
│       │   ├── leaderboard.ts     # localStorage leaderboard helpers
│       │   ├── timer.ts           # Timer logic
│       │   └── types.ts           # Shared TypeScript types & difficulty configs
│       ├── globals.css            # Global styles (Tailwind directives)
│       ├── layout.tsx             # Root layout
│       └── page.tsx               # Entry page
├── jest.config.js
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

---

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic production deploy.
