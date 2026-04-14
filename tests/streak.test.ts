import { describe, expect, it } from 'vitest';
import { calcStreak } from '../src/index.js';

describe('calcStreak', () => {
  it('returns 0 for empty list', () => {
    expect(calcStreak([])).toBe(0);
  });

  it('counts consecutive unique days', () => {
    expect(
      calcStreak([
        { habit: 'x', completedAt: '2026-03-10T01:00:00.000Z' },
        { habit: 'x', completedAt: '2026-03-09T01:00:00.000Z' },
        { habit: 'x', completedAt: '2026-03-08T01:00:00.000Z' }
      ])
    ).toBe(3);
  });
});
