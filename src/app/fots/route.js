import fs from "fs";
import path from "path";
import * as exifr from "exifr";

export async function GET() {
  const dir = path.join(process.cwd(), "public", "fots");
  const files = fs.readdirSync(dir).filter(f => /\.jpe?g$/i.test(f));

  // Para cada archivo JPG, leemos también sus metadatos EXIF
  const images = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);

      let metadata = {};
      try {
        metadata = await exifr.parse(filePath, ["DateTimeOriginal"]);
      } catch (e) {
        metadata = {};
      }

      return {
        src: `/fots/${file}`,                // ruta pública
        DateTimeOriginal: metadata?.DateTimeOriginal || null, // fecha/hora original
      };
    })
  );

  return Response.json({ images });
}
