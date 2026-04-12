# Habit Sprint

A tiny daily habit tracker for fast streak accountability.

## Features
- Add habits
- List today’s status
- Check off habits for today
- View current streak per habit

## Stack
- Node.js
- TypeScript
- tsx (runtime)

## Setup
```bash
npm install
```

## Run
```bash
npm run dev -- list
npm run dev -- add "Deep Work"
npm run dev -- check "Deep Work"
npm run dev -- streak "Deep Work"
```

## Test
```bash
npm test
```

## Docker
```bash
docker build -t habit-sprint .
docker run --rm -it habit-sprint
```
