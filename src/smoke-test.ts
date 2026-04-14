import { main } from './index';

function assertEqual(actual: string, expected: string, message: string): void {
  if (actual !== expected) {
    throw new Error(`${message}: expected "${expected}", got "${actual}"`);
  }
}

(function run() {
  const result = main();
  assertEqual(result, 'Habit Sprint scaffold ready', 'main output mismatch');
  console.log('smoke-test: ok');
})();
