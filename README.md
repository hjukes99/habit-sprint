# Habit Sprint

A tiny TypeScript CLI to run focused habit sprints and track streaks.

## Features
- Start named habit sprints with minute durations
- Terminal countdown
- Local persistence of completions
- Streak + totals summary
- Lightweight smoke test

## Stack
- Node.js 20+
- TypeScript
- tsx (dev/runtime)
- Vitest

## Setup
```bash
npm install
```

## Run
```bash
npm run dev -- start "mobility" 15
npm run dev -- stats
```

## Test
```bash
npm test
```

## Docker
```bash
docker build -t habit-sprint .
docker run --rm habit-sprint npm test
```
