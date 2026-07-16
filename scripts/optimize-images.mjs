import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDir = "public/assets/espaco-vida";
const optimizedDir = path.join(sourceDir, "optimized");
const thumbDir = path.join(sourceDir, "thumbs");
await Promise.all([mkdir(optimizedDir, { recursive: true }), mkdir(thumbDir, { recursive: true })]);

const files = (await readdir(sourceDir)).filter((file) => /^0-\d+\.jpg$/i.test(file));
for (const file of files) {
  const input = path.join(sourceDir, file);
  const name = file.replace(/\.jpg$/i, ".webp");
  await Promise.all([
    sharp(input).rotate().resize({ width: 1040, height: 1040, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 }).toFile(path.join(optimizedDir, name)),
    sharp(input).rotate().resize({ width: 420, height: 320, fit: "cover" })
      .webp({ quality: 72, effort: 5 }).toFile(path.join(thumbDir, name)),
  ]);
}

await sharp(path.join(sourceDir, "espaco-vida-logo-transparent.png"))
  .resize(192, 192, { fit: "contain" })
  .png({ compressionLevel: 9, palette: true })
  .toFile(path.join(sourceDir, "logo-192.png"));

await sharp(path.join(sourceDir, "ImagemHero.jpg"))
  .rotate()
  .resize({ width: 900, height: 1100, fit: "cover" })
  .webp({ quality: 78, effort: 5 })
  .toFile(path.join(sourceDir, "hero-optimized.webp"));

await sharp(path.join(sourceDir, "outrocard.jpg"))
  .rotate()
  .resize({ width: 900, height: 1100, fit: "cover" })
  .webp({ quality: 78, effort: 5 })
  .toFile(path.join(sourceDir, "about-optimized.webp"));

await sharp(path.join(sourceDir, "ImagemHero.jpg"))
  .resize(1200, 630, { fit: "cover", position: "center" })
  .composite([{
    input: Buffer.from(
      `<svg width="1200" height="630"><rect width="1200" height="630" fill="rgba(45,8,63,.28)"/></svg>`
    ),
  }])
  .jpeg({ quality: 84, progressive: true })
  .toFile(path.join(sourceDir, "og-image.jpg"));

await sharp(path.join(sourceDir, "espaco-vida-logo-transparent.png"))
  .resize(180, 180, { fit: "contain", background: "#ffffff" })
  .png({ compressionLevel: 9 })
  .toFile("public/apple-touch-icon.png");

console.log(`${files.length} fotos, logo, OG image e Apple icon otimizados.`);
