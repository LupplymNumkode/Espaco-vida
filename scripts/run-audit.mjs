import { spawnSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";

const tasks = [
  ["build", "npm", ["run", "build"]],
  ["html", "npm", ["run", "audit:html"]],
  ["headers", "npm", ["run", "audit:headers"]],
  ["images", "npm", ["run", "audit:images"]],
  ["links", "npm", ["run", "audit:links"]],
  ["e2e", "npm", ["run", "test:e2e"]],
  ["lighthouse", "npm", ["run", "audit:lighthouse"]],
];

const results = [];
for (const [name, command, args] of tasks) {
  const result = spawnSync(command, args, { stdio: "inherit", shell: process.platform === "win32" });
  results.push({ name, exitCode: result.status ?? 1 });
}

await mkdir("reports", { recursive: true });
await writeFile("reports/audit-tasks.json", JSON.stringify(results, null, 2));
spawnSync("npm", ["run", "audit:report"], { stdio: "inherit", shell: process.platform === "win32" });
process.exitCode = results.some((result) => result.exitCode !== 0) ? 1 : 0;
