import { readdir, stat, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : file;
  }));
  return files.flat();
}

const imageFiles = (await walk("public")).filter((file) => /\.(png|jpe?g|webp|avif)$/i.test(file));
const images = [];

for (const file of imageFiles) {
  const [metadata, info] = await Promise.all([sharp(file).metadata(), stat(file)]);
  images.push({
    file,
    bytes: info.size,
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    oversized: info.size > 250_000 || (metadata.width ?? 0) > 1600,
  });
}

await mkdir("reports", { recursive: true });
await writeFile("reports/images.json", JSON.stringify(images, null, 2));
console.log(`${images.length} imagens auditadas; ${images.filter((image) => image.oversized).length} sinalizadas.`);
