import { spawnSync } from "node:child_process";

const result = spawnSync("node", ["--import", "tsx", "src/index.ts", "help"], {
  encoding: "utf8"
});

if (result.status !== 0) {
  console.error("Smoke test failed: CLI exited non-zero");
  process.exit(1);
}

if (!result.stdout.includes("Habit Sprint CLI")) {
  console.error("Smoke test failed: expected help banner not found");
  process.exit(1);
}

console.log("smoke-test:ok");
