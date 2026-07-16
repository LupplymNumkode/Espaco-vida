import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const html = await readFile("out/index.html", "utf8");
const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
const references = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
const failures = [];

for (const reference of references) {
  if (/^(https?:|mailto:|tel:|data:|blob:)/.test(reference)) continue;
  if (reference.startsWith("#")) {
    const id = decodeURIComponent(reference.slice(1));
    if (id && !ids.has(id)) failures.push({ reference, reason: "âncora inexistente" });
    continue;
  }
  const pathname = reference.split(/[?#]/)[0];
  if (!pathname || pathname === "/") continue;
  const file = path.join("out", pathname.replace(/^\//, ""));
  try {
    await access(file);
  } catch {
    failures.push({ reference, reason: "arquivo interno inexistente" });
  }
}

const result = { checked: references.length, failures };
await mkdir("reports", { recursive: true });
await writeFile("reports/links.json", JSON.stringify(result, null, 2));
console.log(`${references.length} referências verificadas; ${failures.length} falhas.`);
if (failures.length) process.exitCode = 1;
