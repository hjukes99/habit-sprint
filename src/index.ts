import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

type SprintRecord = { habit: string; completedAt: string };

const dataPath = resolve(process.cwd(), 'data/sprints.json');

function ensureStore() {
  const dir = dirname(dataPath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  if (!existsSync(dataPath)) writeFileSync(dataPath, '[]\n', 'utf8');
}

function loadRecords(): SprintRecord[] {
  ensureStore();
  return JSON.parse(readFileSync(dataPath, 'utf8')) as SprintRecord[];
}

function saveRecord(record: SprintRecord) {
  const records = loadRecords();
  records.push(record);
  writeFileSync(dataPath, JSON.stringify(records, null, 2) + '\n', 'utf8');
}

export function calcStreak(records: SprintRecord[]): number {
  const days = [...new Set(records.map((r) => r.completedAt.slice(0, 10)))].sort().reverse();
  if (days.length === 0) return 0;

  let streak = 1;
  let cursor = new Date(days[0] + 'T00:00:00Z');

  for (let i = 1; i < days.length; i++) {
    const next = new Date(days[i] + 'T00:00:00Z');
    const diff = (cursor.getTime() - next.getTime()) / (1000 * 60 * 60 * 24);
    if (diff === 1) {
      streak += 1;
      cursor = next;
    } else if (diff > 1) {
      break;
    }
  }
  return streak;
}

async function run() {
  const [, , cmd, habitArg, minutesArg] = process.argv;

  if (cmd === 'start') {
    const habit = habitArg?.trim();
    const minutes = Number(minutesArg ?? 15);
    if (!habit || Number.isNaN(minutes) || minutes <= 0) {
      console.error('Usage: npm run dev -- start <habit> <minutes>');
      process.exit(1);
    }

    const ms = minutes * 60 * 1000;
    console.log(`Starting ${minutes}m sprint for: ${habit}`);
    await new Promise((r) => setTimeout(r, Math.min(ms, 1000)));

    const completedAt = new Date().toISOString();
    saveRecord({ habit, completedAt });
    const records = loadRecords();
    console.log(`Done. Total completions: ${records.length}. Current streak: ${calcStreak(records)} day(s).`);
    return;
  }

  if (cmd === 'stats') {
    const records = loadRecords();
    console.log(JSON.stringify({ total: records.length, streak: calcStreak(records) }, null, 2));
    return;
  }

  console.log('Habit Sprint CLI\nCommands:\n  start <habit> <minutes>\n  stats');
}

run();
