import fs from "fs";
import path from "path";
import * as exifr from "exifr";

// Carpeta con tus fotos dentro de /public
const dir = path.join(process.cwd(), "public", "fots");
const outPath = path.join(process.cwd(), "public", "fots.json");

if (!fs.existsSync(dir)) {
  console.error("❌ No existe la carpeta public/fots");
  fs.writeFileSync(outPath, JSON.stringify({ images: [] }, null, 2), "utf-8");
  process.exit(0);
}

const files = fs.readdirSync(dir).filter((f) => /\.jpe?g$/i.test(f));

const images = await Promise.all(
  files.map(async (file) => {
    const filePath = path.join(dir, file);

    // 1) Intentar leer EXIF
    let dto = null;
    try {
      const meta = await exifr.parse(filePath, ["DateTimeOriginal"]);
      dto = meta?.DateTimeOriginal ?? null;
    } catch {
      // ignorar: sin EXIF o corrupto
    }

    // 2) Fallback: si no hay EXIF, usar mtime del archivo
    if (!dto) {
      try {
        const stat = fs.statSync(filePath);
        dto = stat.mtime; // Date
      } catch {
        dto = null;
      }
    }

    // 3) Serializar a ISO string (o null)
    const iso = dto instanceof Date ? dto.toISOString() : null;

    return {
      src: `/fots/${file}`,
      DateTimeOriginal: iso, // p.ej. "2023-10-02T16:45:12.000Z"
    };
  })
);

// Guardar manifest
fs.writeFileSync(outPath, JSON.stringify({ images }, null, 2), "utf-8");
console.log(`✅ fots.json generado (${images.length} elementos) -> ${outPath}`);
