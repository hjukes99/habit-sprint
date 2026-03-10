import { calcStreak } from './index.js';

const streak = calcStreak([
  { habit: 'mobility', completedAt: '2026-03-10T08:00:00.000Z' },
  { habit: 'mobility', completedAt: '2026-03-09T08:00:00.000Z' }
]);

if (streak !== 2) {
  throw new Error(`Expected streak 2, got ${streak}`);
}

console.log('smoke-test passed');
