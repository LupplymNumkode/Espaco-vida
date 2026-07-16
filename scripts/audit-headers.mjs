import { readFile, mkdir, writeFile } from "node:fs/promises";

const required = [
  "Content-Security-Policy",
  "Strict-Transport-Security",
  "X-Content-Type-Options",
  "Referrer-Policy",
  "Permissions-Policy",
  "X-Frame-Options",
];

const source = await readFile("public/_headers", "utf8");
const missing = required.filter((header) => !source.includes(header));
const result = { passed: missing.length === 0, required, missing };
await mkdir("reports", { recursive: true });
await writeFile("reports/headers.json", JSON.stringify(result, null, 2));

if (missing.length) {
  console.error(`Headers ausentes: ${missing.join(", ")}`);
  process.exitCode = 1;
} else {
  console.log("Headers de segurança declarados.");
}
