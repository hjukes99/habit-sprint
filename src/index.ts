const [command = "help", ...rest] = process.argv.slice(2);

switch (command) {
  case "help":
    console.log("Habit Sprint CLI");
    console.log("Commands: add <name>, list, check <name>, streak <name>");
    break;
  case "list":
    console.log("No habits yet. Use: add <name>");
    break;
  case "add":
  case "check":
  case "streak":
    console.log(`${command} not implemented yet for: ${rest.join(" ") || "<missing-name>"}`);
    break;
  default:
    console.error(`Unknown command: ${command}`);
    process.exitCode = 1;
}
